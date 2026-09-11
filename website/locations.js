/* Who we are — accordions (02, 03) and the zooming locations map (03).
 *
 * Panels ship expanded in the markup so every address and the vision and
 * mission copy exist without JavaScript; this script collapses them on init.
 * Same principle as anim.js: if the script never runs, nothing is hidden.
 */
(function () {
  'use strict';

  var MAX_ZOOM = 4;     /* past this a state fills the frame and loses context */
  var PAD = 1.12;       /* breathing room around the state's bounding box */

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Accordions ─────────────────────────────────────────── */

  function panelOf(head) { return document.getElementById(head.getAttribute('aria-controls')); }

  function setOpen(head, open) {
    head.setAttribute('aria-expanded', String(open));
    if (open && window.__ebAnimRefresh) window.__ebAnimRefresh(panelOf(head));
  }

  var heads = [].slice.call(document.querySelectorAll('.acc-head'));
  heads.forEach(function (head) { setOpen(head, false); });

  heads.forEach(function (head) {
    head.addEventListener('click', function () {
      var open = head.getAttribute('aria-expanded') === 'true';
      var list = head.closest('.loclist');
      /* Branch rows are single-open: one row, one unambiguous map target. */
      if (list && !open) {
        list.querySelectorAll('.acc-head').forEach(function (other) {
          if (other !== head) setOpen(other, false);
        });
      }
      setOpen(head, !open);
      if (list) open ? clearMap() : showState(head.getAttribute('data-state'), head);
    });
  });

  /* ── Map ────────────────────────────────────────────────── */

  var field = document.querySelector('.mapfield');
  var svg = field && field.querySelector('.my-map');
  if (!field || !svg) return;

  var vb = (svg.getAttribute('viewBox') || '').split(/[\s,]+/).map(Number);
  var VX = vb[0] || 0;
  var VY = vb[1] || 0;
  var VW = vb[2] || 0;
  var VH = vb[3] || 0;

  function states() { return svg.querySelectorAll('.state, path[id]'); }

  function clearMap() {
    if (!field) return;
    field.style.setProperty('--zoom-svg', 'none');
    field.style.setProperty('--zoom-html', 'none');
    field.style.setProperty('--zoom-k', '1');
    states().forEach(function (el) { el.classList.remove('is-on'); });
    field.querySelectorAll('.pin').forEach(function (p) { p.classList.remove('is-on'); });
  }

  function showState(id, head) {
    if (!field || !svg) return;
    clearMap();

    var pin = field.querySelector('.pin[data-state="' + id + '"]');
    if (pin) pin.classList.add('is-on');

    /* The per-state vector may not be in place yet — the row still opens. */
    var path = id && svg.querySelector('#' + CSS.escape(id));
    if (!path || !VW || !VH || !path.getBBox) return;

    path.classList.add('is-on');

    var box = path.getBBox();
    if (!box.width || !box.height) return;

    var k = Math.min(MAX_ZOOM, Math.min(VW / (box.width * PAD), VH / (box.height * PAD)));

    /* Work in viewBox fractions so one pair of numbers drives both layers.
       The viewBox does not start at 0,0, so its origin has to come out of the
       maths — leaving it in shifts the map and throws the pins off-screen. */
    var fx = (box.x + box.width / 2 - VX) / VW;
    var fy = (box.y + box.height / 2 - VY) / VH;
    var px = (0.5 - k * fx) * 100;
    var py = (0.5 - k * fy) * 100;

    /* px on an SVG child is one user unit; the HTML pin layer takes the same
       shift as a percentage of its own box. */
    field.style.setProperty('--zoom-svg',
      'translate(' + ((px / 100) * VW - (k - 1) * VX) + 'px,' +
                     ((py / 100) * VH - (k - 1) * VY) + 'px) scale(' + k + ')');
    field.style.setProperty('--zoom-html', 'translate(' + px + '%,' + py + '%) scale(' + k + ')');
    field.style.setProperty('--zoom-k', String(k));

    if (head && window.innerWidth <= 1000) {
      field.scrollIntoView({ block: 'center', behavior: reduced ? 'auto' : 'smooth' });
    }
  }

  /* A pin is a shortcut to its branch row. */
  field.querySelectorAll('.pin').forEach(function (pin) {
    var slug = pin.getAttribute('data-loc');
    var head = document.querySelector('.loc[data-loc="' + slug + '"] .acc-head');
    if (head) pin.addEventListener('click', function () { head.click(); });
  });

  function reset() {
    document.querySelectorAll('.loclist .acc-head').forEach(function (h) { setOpen(h, false); });
    clearMap();
  }

  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') reset(); });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.loclist') && !e.target.closest('.mapfield')) reset();
  });

  clearMap();
}());
