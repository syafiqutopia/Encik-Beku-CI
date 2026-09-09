#!/usr/bin/env node
/**
 * Writes brand-kit-manifest.json — path, byte count and sha256 for every
 * shipped file, so a recipient can prove they received the real artwork.
 *
 *   node tools/build-manifest.mjs
 *
 * Excluded: the manifest itself, _reference/, _source/page-renders/, .git/,
 * and macOS cruft.
 */
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, resolve, sep } from 'node:path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const SKIP_DIRS = new Set(['.git', 'node_modules', '_reference', 'page-renders']);
const SKIP_FILES = new Set(['brand-kit-manifest.json', '.DS_Store']);

function walk(dir, out = []) {
  for (const entry of readdirSync(dir).sort()) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      if (SKIP_DIRS.has(entry)) continue;
      walk(full, out);
    } else {
      if (SKIP_FILES.has(entry)) continue;
      out.push(full);
    }
  }
  return out;
}

const files = walk(ROOT);
const entries = files.map((f) => {
  const buf = readFileSync(f);
  return {
    path: relative(ROOT, f).split(sep).join('/'),
    bytes: buf.length,
    sha256: createHash('sha256').update(buf).digest('hex'),
  };
});

const manifest = {
  schemaVersion: 1,
  brand: 'Encik Beku',
  identity: 'encik-beku-tech-blue',
  version: '1.0.0',
  locked: '2026-08-19',
  owner: 'Encik Beku Aircond Sdn Bhd (1561739-D)',
  fileCount: entries.length,
  totalBytes: entries.reduce((n, e) => n + e.bytes, 0),
  entries,
};

writeFileSync(
  join(ROOT, 'brand-kit-manifest.json'),
  JSON.stringify(manifest, null, 2) + '\n',
);

console.log(
  `brand-kit-manifest.json — ${entries.length} files, ` +
    `${(manifest.totalBytes / 1024 / 1024).toFixed(1)} MB`,
);
