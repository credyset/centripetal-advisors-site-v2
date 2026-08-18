(function () {
  function initNav() {
    document.querySelectorAll('section.how[style*="padding:48px"]').forEach(function (answer) {
      var hero = document.querySelector('.hero');
      if (hero && answer !== hero) hero.after(answer);
    });
    document.querySelectorAll('.site-nav').forEach(function (nav) {
      var toggle = nav.querySelector('.mobile-toggle, .nav-toggle');
      var links = nav.querySelector('.site-nav-links');
      if (!links) return;
      if (!toggle) {
        toggle = document.createElement('button');
        toggle.className = 'mobile-toggle';
        toggle.type = 'button';
        toggle.setAttribute('aria-label', 'Open navigation');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = '<span></span><span></span><span></span>';
        nav.querySelector('.site-nav-inner').insertBefore(toggle, links);
      }
      toggle.addEventListener('click', function () {
        var open = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initNav);
  else initNav();
}());
