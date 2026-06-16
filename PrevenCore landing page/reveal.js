(function () {
  if (window.__pcEnhance) return;
  window.__pcEnhance = true;

  var reduce = false;
  try { reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  // ---- Inject enhancement styles (transitions, hover lift, hero entrance) ----
  function injectCSS() {
    if (document.getElementById('pc-enhance-css')) return;
    var css = ''
      + 'a,button{transition:background-color .22s ease,color .22s ease,border-color .22s ease,box-shadow .24s ease,opacity .22s ease,gap .2s ease,transform .24s ease;}'
      + '[data-lift]{transition:transform .3s cubic-bezier(.22,.61,.36,1),box-shadow .3s ease,border-color .22s ease;will-change:transform;}'
      + '[data-lift]:hover{transform:translateY(-5px);box-shadow:0 18px 38px -16px rgba(11,31,51,0.26);}'
      + 'img{transition:transform .5s cubic-bezier(.22,.61,.36,1);}'
      + '[data-zoom]{overflow:hidden;}'
      + '[data-zoom]:hover img{transform:scale(1.045);}'
      + '@keyframes pcHeroIn{from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:none;}}'
      + '[data-hero]{animation:pcHeroIn .75s cubic-bezier(.22,.61,.36,1) both;}'
      + '@media(prefers-reduced-motion:reduce){[data-hero]{animation:none!important;}[data-reveal]{opacity:1!important;transform:none!important;}}';
    var s = document.createElement('style');
    s.id = 'pc-enhance-css';
    s.textContent = css;
    (document.head || document.documentElement).appendChild(s);
  }
  injectCSS();

  if (reduce) return; // respect reduced motion: no scroll-reveal, no hiding

  // ---- Scroll reveal ----
  var io = null;
  function obs() {
    if (io) return io;
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        el.style.opacity = '1';
        el.style.transform = 'none';
        io.unobserve(el);
        // hand control back to CSS so hover transitions stay snappy
        setTimeout(function () { el.style.transition = ''; el.style.willChange = ''; }, 720);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -7% 0px' });
    return io;
  }

  function hide(el, idx) {
    if (el.hasAttribute('data-reveal-done')) return;
    el.setAttribute('data-reveal-done', '');
    var delay = Math.min(idx, 6) * 70;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.willChange = 'opacity, transform';
    el.style.transition = 'opacity .65s cubic-bezier(.22,.61,.36,1) ' + delay + 'ms, transform .65s cubic-bezier(.22,.61,.36,1) ' + delay + 'ms';
    obs().observe(el);
  }

  function scan() {
    var groups = {};
    var nodes = document.querySelectorAll('[data-reveal]:not([data-reveal-done])');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      // stagger by position among data-reveal siblings sharing a parent
      var key = (el.parentNode && el.parentNode.__pcKey) || null;
      if (el.parentNode) {
        if (!el.parentNode.__pcKey) el.parentNode.__pcKey = ++scan._k;
        key = el.parentNode.__pcKey;
      }
      if (groups[key] == null) groups[key] = 0;
      hide(el, groups[key]);
      groups[key]++;
    }
  }
  scan._k = 0;

  // Start observing as nodes stream in (hide before they paint where possible)
  var mo = new MutationObserver(function () { scan(); });
  try { mo.observe(document.documentElement, { childList: true, subtree: true }); } catch (e) {}

  function ready() {
    scan();
    setTimeout(function () { scan(); if (mo) mo.disconnect(); }, 2500);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready);
  else ready();
})();
