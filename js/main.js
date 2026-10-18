/* Michael Falkner Fotografie – Seitenlogik (ohne Abhängigkeiten) */
(function () {
  'use strict';

  var GALLERY = window.GALLERY || {};
  var SITE = 'Michael Falkner Fotografie';
  var GATE_KEY = 'mf-age-confirmed';
  var root = document.documentElement;

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function images(cat) { return (GALLERY[cat] && GALLERY[cat].images) || []; }
  function full(img) { return 'img/full/' + img.file + '.webp'; }
  function thumb(img) { return 'img/thumb/' + img.file + '.webp'; }
  function altText(cat, img) {
    if (img.alt) return img.alt;
    var prefix = (GALLERY[cat] && GALLERY[cat].altPrefix) || 'Fotografie';
    return prefix + (img.name ? ' von ' + img.name : '') + ' – ' + SITE;
  }
  function srcset(img) {
    var long = Math.max(img.w, img.h);
    var tw = Math.round(img.w * Math.min(1, 800 / long));
    return thumb(img) + ' ' + tw + 'w, ' + full(img) + ' ' + img.w + 'w';
  }

  /* ---------- Gate-Status ---------- */
  function gateOk() {
    try { return sessionStorage.getItem(GATE_KEY) === '1'; } catch (e) { return !!window.__mfGate; }
  }
  function setGateOk() {
    try { sessionStorage.setItem(GATE_KEY, '1'); } catch (e) { window.__mfGate = true; }
  }
  function isGated(cat) { return !!(GALLERY[cat] && GALLERY[cat].gated) && !gateOk(); }

  /* ---------- Leere Kategorien ausblenden / gefüllte einblenden ---------- */
  Object.keys(GALLERY).forEach(function (cat) {
    var has = images(cat).length > 0;
    $$('[data-category="' + cat + '"]').forEach(function (el) { el.hidden = !has; });
  });
  // Teaser-Nummern fortlaufend (falls Kategorien ausgeblendet sind)
  $$('.teaser:not([hidden]) .teaser-num').forEach(function (el, i) {
    el.textContent = (i < 9 ? '0' : '') + (i + 1);
  });

  /* ---------- Teaser-Bilder ---------- */
  function setTeaser(cat) {
    var first = images(cat)[0];
    var section = $('.teaser[data-category="' + cat + '"]');
    if (!first || !section) return;
    var img = $('.teaser-img', section);
    if (isGated(cat)) return; // bleibt bei der weichgezeichneten Vorschau
    img.width = first.w; img.height = first.h;
    img.sizes = '100vw';
    img.srcset = srcset(first);
    img.src = full(first);
    img.alt = altText(cat, first);
    section.classList.remove('is-gated');
  }
  Object.keys(GALLERY).forEach(setTeaser);

  /* ---------- Masonry-Galerie ---------- */
  var galleries = {};

  function columnCount(el) {
    var w = el.clientWidth || window.innerWidth;
    if (w < 560) return 2;
    if (w < 980) return 3;
    return 4;
  }

  function buildGallery(cat) {
    var el = $('[data-gallery="' + cat + '"]');
    var list = images(cat);
    if (!el || !list.length) return;
    var items = list.map(function (img, i) {
      var a = document.createElement('a');
      a.className = 'g-item';
      a.href = full(img);
      a.setAttribute('data-index', i);
      a.setAttribute('aria-label', altText(cat, img) + ' – vergrößern');
      var im = document.createElement('img');
      im.width = img.w; im.height = img.h;
      im.loading = 'lazy'; im.decoding = 'async';
      im.alt = altText(cat, img);
      im.sizes = '(max-width: 560px) 50vw, (max-width: 980px) 33vw, min(25vw, 400px)';
      im.srcset = srcset(img);
      im.src = thumb(img);
      var done = function () { im.classList.add('is-loaded'); };
      if (im.complete && im.naturalWidth) done();
      else { im.addEventListener('load', done); im.addEventListener('error', done); }
      a.appendChild(im);
      a.addEventListener('click', function (e) {
        e.preventDefault();
        Lightbox.open(cat, i, a);
      });
      return { el: a, ratio: img.h / img.w };
    });
    galleries[cat] = { el: el, items: items, cols: 0 };
    layout(cat);
  }

  function layout(cat) {
    var g = galleries[cat];
    if (!g || g.el.hidden) return;
    var n = columnCount(g.el);
    if (n === g.cols) return;
    g.cols = n;
    var cols = [], heights = [];
    for (var i = 0; i < n; i++) {
      var c = document.createElement('div');
      c.className = 'gallery-col';
      cols.push(c); heights.push(0);
    }
    g.items.forEach(function (it) {
      var k = 0;
      for (var j = 1; j < n; j++) if (heights[j] < heights[k] - 0.01) k = j;
      cols[k].appendChild(it.el);
      heights[k] += it.ratio + 0.03; // + Abstand
    });
    g.el.textContent = '';
    cols.forEach(function (c) { g.el.appendChild(c); });
    g.el.classList.add('is-masonry');
  }

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () { Object.keys(galleries).forEach(layout); }, 150);
  });

  /* ---------- Altersabfrage ---------- */
  function unlock(cat) {
    var block = $('#portfolio-' + cat);
    if (!block) return;
    var gate = $('.age-gate', block);
    var el = $('[data-gallery="' + cat + '"]', block);
    if (gate) gate.hidden = true;
    if (el) el.hidden = false;
    if (!galleries[cat]) buildGallery(cat); else layout(cat);
    setTeaser(cat);
  }

  Object.keys(GALLERY).forEach(function (cat) {
    if (!images(cat).length) return;
    if (GALLERY[cat].gated) {
      if (gateOk()) unlock(cat);
    } else {
      buildGallery(cat);
    }
  });

  $$('[data-gate-accept]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setGateOk();
      Object.keys(GALLERY).forEach(function (cat) { if (GALLERY[cat].gated) unlock(cat); });
      var first = $('#portfolio-nude .g-item');
      if (first) first.focus({ preventScroll: true });
    });
  });

  /* ---------- Navigation ---------- */
  var header = $('.site-header');
  var toggle = $('.menu-toggle');
  var menu = $('#nav-menu');

  function onScroll() { header.classList.toggle('is-scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function setMenu(open) {
    root.classList.toggle('menu-open', open);
    document.body.classList.toggle('no-scroll', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  }
  toggle.addEventListener('click', function () { setMenu(!root.classList.contains('menu-open')); });
  $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && root.classList.contains('menu-open')) { setMenu(false); toggle.focus(); }
  });
  window.matchMedia('(min-width: 861px)').addEventListener('change', function (m) { if (m.matches) setMenu(false); });

  // Aktiven Navigationspunkt markieren
  var navLinks = $$('.nav-links a');
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        navLinks.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['home', 'portfolio', 'ueber-mich', 'kontakt', 'impressum', 'datenschutz'].forEach(function (id) {
      var s = document.getElementById(id); if (s) spy.observe(s);
    });
  }

  /* ---------- Scroll-Reveal ---------- */
  var reveals = $$('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Lightbox ---------- */
  var Lightbox = (function () {
    var box = $('#lightbox');
    var img = $('.lb-img', box);
    var counter = $('.lb-counter', box);
    var title = $('.lb-title', box);
    var btnClose = $('.lb-close', box);
    var btnPrev = $('.lb-prev', box);
    var btnNext = $('.lb-next', box);
    var cat = null, index = 0, list = [], opener = null, token = 0;
    var cache = {};

    function preload(i) {
      var it = list[(i + list.length) % list.length];
      if (!it || cache[it.file]) return;
      var p = new Image(); p.decoding = 'async'; p.src = full(it);
      cache[it.file] = p;
    }

    function show(i) {
      index = (i + list.length) % list.length;
      var it = list[index];
      var my = ++token;
      counter.textContent = (index + 1) + ' / ' + list.length;
      title.textContent = it.name || '';
      img.alt = altText(cat, it);
      box.classList.add('is-loading');
      img.classList.add('is-loading');
      var loader = cache[it.file] || new Image();
      cache[it.file] = loader;
      var finish = function () {
        if (my !== token) return;
        img.src = full(it);
        img.width = it.w; img.height = it.h;
        img.classList.remove('is-loading');
        box.classList.remove('is-loading');
      };
      if (loader.complete && loader.naturalWidth) finish();
      else {
        loader.onload = finish;
        loader.onerror = finish;
        if (!loader.src) loader.src = full(it);
      }
      preload(index + 1); preload(index - 1);
    }

    function open(c, i, from) {
      if (isGated(c)) return;
      cat = c; list = images(c); opener = from || null;
      box.hidden = false;
      document.body.classList.add('no-scroll');
      requestAnimationFrame(function () { box.classList.add('is-open'); });
      var single = list.length < 2;
      btnPrev.hidden = single; btnNext.hidden = single;
      show(i);
      btnClose.focus();
    }

    function close() {
      if (box.hidden) return;
      box.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
      setTimeout(function () { box.hidden = true; img.removeAttribute('src'); }, 300);
      if (opener) opener.focus({ preventScroll: true });
    }

    btnClose.addEventListener('click', close);
    btnPrev.addEventListener('click', function () { show(index - 1); });
    btnNext.addEventListener('click', function () { show(index + 1); });

    // Klick auf den Hintergrund (nicht aufs Bild / die Buttons) schließt
    box.addEventListener('click', function (e) {
      if (e.target === box || e.target.classList.contains('lb-stage')) close();
    });

    document.addEventListener('keydown', function (e) {
      if (box.hidden) return;
      if (e.key === 'Escape') { e.preventDefault(); close(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); show(index - 1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); show(index + 1); }
      else if (e.key === 'Tab') {
        // Fokus im Dialog halten
        var f = [btnClose, btnPrev, btnNext].filter(function (b) { return !b.hidden; });
        var pos = f.indexOf(document.activeElement);
        e.preventDefault();
        f[(pos + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
      }
    });

    // Wischen auf Touch-Geräten
    var sx = 0, sy = 0, tracking = false;
    box.addEventListener('touchstart', function (e) {
      if (e.touches.length !== 1) { tracking = false; return; }
      tracking = true; sx = e.touches[0].clientX; sy = e.touches[0].clientY;
    }, { passive: true });
    box.addEventListener('touchmove', function (e) {
      if (!tracking || e.touches.length !== 1) return;
      var dx = e.touches[0].clientX - sx;
      if (Math.abs(dx) > Math.abs(e.touches[0].clientY - sy)) img.style.transform = 'translateX(' + dx * 0.4 + 'px)';
    }, { passive: true });
    box.addEventListener('touchend', function (e) {
      if (!tracking) return;
      tracking = false;
      img.style.transform = '';
      var t = e.changedTouches[0];
      var dx = t.clientX - sx, dy = t.clientY - sy;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) show(index + (dx < 0 ? 1 : -1));
      else if (dy > 90 && Math.abs(dy) > Math.abs(dx) * 1.5) close(); // nach unten wischen schließt
    });

    return { open: open, close: close };
  })();
})();
