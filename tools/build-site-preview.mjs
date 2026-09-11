#!/usr/bin/env node
/**
 * Builds website/site-preview.html — a single self-contained file containing all
 * four pages as tab panels.
 *
 *   node tools/build-site-preview.mjs
 *
 * WHY THIS EXISTS
 * The real site is four pages (index / about / brand / catalog), which is the
 * right architecture: three audiences, three booklets, proper URLs for SEO.
 * But a hosted preview link can only serve ONE file, and relative links
 * between pages would 404 there. So this build folds the four <main> blocks
 * into one document with tabs.
 *
 * It is a BUILD OUTPUT. Never edit preview.html by hand — edit the four
 * pages and re-run this.
 *
 * Everything is inlined (fonts as base64, logos as data URIs, light-theme
 * tokens only) so the file has zero external requests.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => readFileSync(resolve(ROOT, p), 'utf8');
const b64 = (p) => readFileSync(resolve(ROOT, p)).toString('base64');


/* The artifact host supplies the <head>, so this file cannot carry its own
 * <meta charset>. A browser opening it directly then guesses Latin-1 and
 * renders em-dashes as "a€". Two defences: strip comments from the inlined
 * CSS (decorative box-drawing characters live there), and escape every
 * remaining non-ASCII character as a numeric HTML entity, which is
 * charset-independent. Entities are NOT parsed inside <style>/<script>, so
 * the CSS must be plain ASCII by then and the script already is. */
const stripCssComments = (css) => css.replace(/\/\*[\s\S]*?\*\//g, '');
const asciiOnly = (s) => s.replace(/[^\x00-\x7F]/g,
  (c) => '&#' + c.codePointAt(0) + ';');

// Nav labels follow the Website Structure brief §2: WHO WE ARE · OUR BRAND ·
// WHAT WE DO. The logo is the Home control, so 'home' has no nav entry.
const PAGES = [
  { id: 'home',     file: 'website/index.html',    label: null },
  { id: 'about',    file: 'website/about.html',    label: 'Who we are' },
  { id: 'brand',    file: 'website/brand.html',    label: 'Our brand' },
  { id: 'services', file: 'website/services.html', label: 'What we do' },
];

/* ── inlined assets ──────────────────────────────────────── */
const tokens = (() => {
  const t = read('tokens/tokens.css');
  // Light block + type classes only. The site is deliberately single-theme:
  // the header carries the navy-wordmark logo and would be unreadable if a
  // dark-mode viewer flipped the ground. CI.md §10 names light as primary.
  const light = t.match(/:root \{[\s\S]*?\n\}/)[0];
  const types = t.slice(t.indexOf('/* ── Semantic type classes'));
  return stripCssComments(light + '\n' + types);
})();

const fonts = [
  [500, 'Satoshi-Medium.otf'],
  [700, 'Satoshi-Bold.otf'],
  [900, 'Satoshi-Black.otf'],
].map(([w, f]) =>
  `@font-face{font-family:'Satoshi';font-style:normal;font-weight:${w};` +
  `font-display:swap;src:url(data:font/otf;base64,${b64('fonts/' + f)}) format('opentype')}`
).join('\n');

const LOGO = {
  '../svg/logo/encik-beku-secondary-light.svg': `data:image/svg+xml;base64,${b64('svg/logo/encik-beku-secondary-light.svg')}`,
  '../svg/logo/encik-beku-secondary-dark.svg':  `data:image/svg+xml;base64,${b64('svg/logo/encik-beku-secondary-dark.svg')}`,
  '../svg/logo/encik-beku-primary-light.svg':   `data:image/svg+xml;base64,${b64('svg/logo/encik-beku-primary-light.svg')}`,
  '../svg/logo/encik-beku-primary-dark.svg':    `data:image/svg+xml;base64,${b64('svg/logo/encik-beku-primary-dark.svg')}`,
  '../svg/logo/encik-beku-single-navy.svg':     `data:image/svg+xml;base64,${b64('svg/logo/encik-beku-single-navy.svg')}`,
  '../svg/mark/encik-beku-mark-light.svg':      `data:image/svg+xml;base64,${b64('svg/mark/encik-beku-mark-light.svg')}`,
  // The home hero's two parallax layers. Only the PNG fallback is inlined:
  // the builder strips every srcset, <source> included, so a single-file
  // preview always resolves the <img src> and never the AVIF.
  'img/hero-sky.jpg':                          `data:image/jpeg;base64,${b64('website/img/hero-sky.jpg')}`,
  'img/hero-crew.png':                         `data:image/png;base64,${b64('website/img/hero-crew.png')}`,
  'img/covers/company-profile.jpg':            `data:image/jpeg;base64,${b64('website/img/covers/company-profile.jpg')}`,
  'img/covers/brand-guidelines.jpg':           `data:image/jpeg;base64,${b64('website/img/covers/brand-guidelines.jpg')}`,
  'img/covers/service-catalogue.jpg':          `data:image/jpeg;base64,${b64('website/img/covers/service-catalogue.jpg')}`,
};

/* ── pull the pieces out of each page ────────────────────── */
const grab = (html, tag) => {
  const m = html.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*)</${tag}>`));
  return m ? m[1] : '';
};

const home = read(PAGES[0].file);
// One shared footer for all four panels. Harvested from about.html, not the
// home page: the home page is a single hero screen and carries no footer.
const footer = (() => {
  for (const p of PAGES) {
    const m = read(p.file).match(/<footer class="site">[\s\S]*?<\/footer>/);
    if (m) return m[0];
  }
  throw new Error('no <footer class="site"> found on any page');
})();
// The brand loader lives outside <main>, so lift it across explicitly.
let loader = (home.match(/<div class="loader"[\s\S]*?\n<\/div>/) || [''])[0];
// No floating contact button: brief §24 rules out repeated WhatsApp buttons
// and urgency devices on what is a corporate resource site.

// Icon sprites differ per page; collect every unique <defs> child once.
const sprite = new Map();
for (const p of PAGES) {
  const defs = read(p.file).match(/<defs>([\s\S]*?)<\/defs>/);
  if (!defs) continue;
  for (const m of defs[1].matchAll(/<(g|path)\s+id="([^"]+)"[\s\S]*?<\/\1>|<path\s+id="([^"]+)"[^>]*\/?>/g)) {
    const id = m[2] || m[3];
    if (id && !sprite.has(id)) sprite.set(id, m[0]);
  }
}

const panels = PAGES.map((p, i) => {
  const html = read(p.file);
  let main = grab(html, 'main');
  // internal page links become tab switches
  for (const q of PAGES) {
    const f = q.file.split('/').pop();
    main = main.replaceAll(`href="${f}"`, `href="#" data-go="${q.id}"`);
  }
  // drop the responsive srcset: the preview inlines a single resolution
  main = main.replace(/\s*srcset="[^"]*"/g, '').replace(/\s*sizes="[^"]*"/g, '');
  for (const [rel, uri] of Object.entries(LOGO)) main = main.replaceAll(rel, uri);
  return `<section class="panel" id="panel-${p.id}"${i ? ' hidden' : ''}>${main}</section>`;
}).join('\n');

const extraCss = ['website/brand.html', 'website/services.html']
  .map((f) => {
    const m = read(f).match(/<style>([\s\S]*?)<\/style>/);
    return m ? stripCssComments(m[1]) : '';
  }).join('\n');

let footerOut = footer;
for (const [rel, uri] of Object.entries(LOGO)) footerOut = footerOut.replaceAll(rel, uri);
for (const [rel, uri] of Object.entries(LOGO)) loader = loader.replaceAll(rel, uri);
for (const q of PAGES) {
  footerOut = footerOut.replaceAll(`href="${q.file.split('/').pop()}"`, `href="#" data-go="${q.id}"`);
}

const logoNav = LOGO['../svg/logo/encik-beku-secondary-light.svg'];

const out = `<title>Encik Beku</title>
<style>
${fonts}

${tokens}

${stripCssComments(read('website/site.css'))}

${extraCss}

/* ── preview shell ─────────────────────────────────────── */
:root { color-scheme: light; }
.panel[hidden] { display: none; }
.previewbar {
  background: var(--eb-french-blue); color: var(--eb-fg-on-brand);
  font-size: var(--eb-text-xs); text-align: center;
  padding: 8px var(--eb-space-4); line-height: 1.5;
}
.previewbar b { font-weight: var(--eb-fw-bold); }
.nav nav a { cursor: pointer; background: none; border: 0; font: inherit; }
</style>

${loader}

<div class="previewbar">
  Preview build — the four pages of the site shown as tabs.
  <b>Download buttons are inert here</b> because the preview sandbox blocks file downloads; they work on the deployed site.
</div>

<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
${[...sprite.values()].join('\n')}
</defs></svg>

<header class="site">
  <div class="wrap nav">
    <a href="#" data-go="home"><img class="logo" src="${logoNav}" alt="Encik Beku"></a>
    <nav>
${PAGES.filter((p) => p.label).map((p) => `      <a href="#" data-go="${p.id}">${p.label}</a>`).join('\n')}
    </nav>
  </div>
</header>

<main>
${panels}
</main>

${footerOut}

<script>
${read('website/anim.js')}
</script>

<script>
(function () {
  var links = document.querySelectorAll('[data-go]');
  function show(id) {
    document.querySelectorAll('.panel').forEach(function (p) {
      p.hidden = p.id !== 'panel-' + id;
    });
    document.querySelectorAll('.nav nav a').forEach(function (a) {
      if (a.dataset.go === id) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    window.scrollTo({ top: 0, behavior: 'instant' });
    // A panel that was [hidden] never intersected, so its reveals never
    // fired. Re-evaluate them now that it is visible.
    if (window.__ebAnimRefresh) window.__ebAnimRefresh(document.getElementById('panel-' + id));
  }
  links.forEach(function (a) {
    a.addEventListener('click', function (e) {
      // let in-page anchors (#aircond etc.) behave normally
      if (!a.dataset.go) return;
      e.preventDefault();
      show(a.dataset.go);
    });
  });
})();
</script>
`;

const cut = out.lastIndexOf('<script>');
const safe = asciiOnly(out.slice(0, cut)) + out.slice(cut);
const stray = safe.slice(cut).match(/[^\x00-\x7F]/);
if (stray) throw new Error('non-ASCII inside <script>: ' + stray[0]);
writeFileSync(resolve(ROOT, 'website/site-preview.html'), safe);
console.log(`website/site-preview.html - ${(safe.length / 1024).toFixed(0)} KB, ${PAGES.length} panels, ${sprite.size} icons`);
