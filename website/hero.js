/* ─────────────────────────────────────────────────────────────
 * Home hero — pointer parallax
 *
 * The home page is a single screen, so there is no scroll to hang the depth
 * on. The two photographic planes drift against the pointer instead.
 *
 * This file owns exactly two custom properties on .hero-stage and nothing
 * else. It never writes `transform`: how far each plane travels is a design
 * value and lives in site.css, and the entrance animation owns transform on
 * the parent. Keeping them apart is what stops the two from fighting.
 *
 * If this never runs, --px/--py keep the 0 declared in CSS and the hero is
 * simply still. The entrance is pure CSS and is unaffected either way.
 * ───────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var stage = document.querySelector('.hero-stage');
  if (!stage || !window.matchMedia) return;

  // Nothing to follow without a real pointer, and reduced motion opts out
  // entirely rather than running a shortened version.
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var EASE = 0.08;                 // how fast the drift catches the pointer
  var tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;

  function frame() {
    cx += (tx - cx) * EASE;
    cy += (ty - cy) * EASE;
    stage.style.setProperty('--px', cx.toFixed(4));
    stage.style.setProperty('--py', cy.toFixed(4));
    // Stop once settled; a pointer move restarts it.
    raf = (Math.abs(tx - cx) > 0.0005 || Math.abs(ty - cy) > 0.0005)
      ? requestAnimationFrame(frame) : 0;
  }

  // -1..1 per axis, inverted, so the planes lean away from the pointer.
  function aim(x, y) {
    tx = 1 - 2 * x / window.innerWidth;
    ty = 1 - 2 * y / window.innerHeight;
    if (!raf) raf = requestAnimationFrame(frame);
  }
  function recentre() { aim(window.innerWidth / 2, window.innerHeight / 2); }

  window.addEventListener('pointermove', function (e) { aim(e.clientX, e.clientY); }, { passive: true });
  // pointerleave does not bubble, so it binds to the root element rather than
  // document; blur covers alt-tab, which pointerleave misses.
  document.documentElement.addEventListener('pointerleave', recentre);
  window.addEventListener('blur', recentre);

  stage.classList.add('is-live');
}());
