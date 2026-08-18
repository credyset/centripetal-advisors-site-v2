(function () {
  function initTreasurySurfaceability() {
    if (!/\/guides\/treasury-hygiene\.html$/.test(window.location.pathname)) return;
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var node;
    while (node = walker.nextNode()) {
      node.nodeValue = node.nodeValue.replace('short-term Treasury yields cleared 5% in 2024 and remain in the 3.5–3.9% range through 2026.', 'Short-term rates change; compare current yields, liquidity, and risk before moving operating cash.');
    }
    var hero = document.querySelector('.hero');
    if (!hero || document.querySelector('.surfaceability-answer')) return;
    var answer = document.createElement('section');
    answer.className = 'surfaceability-answer';
    answer.innerHTML = '<div><p class="section-eyebrow">DIRECT ANSWER</p><p class="surfaceability-answer-copy"><strong>Treasury hygiene is the practice of making cash location, access, approvals, fraud controls, and cash deployment visible and reviewable. Use this guide as a directional operating checklist—not as banking, legal, tax, or investment advice.</strong></p></div>';
    hero.after(answer);
    var faq = document.createElement('section');
    faq.className = 'surfaceability-faq';
    faq.setAttribute('aria-labelledby', 'treasury-faq-heading');
    faq.innerHTML = '<h2 id="treasury-faq-heading">Frequently asked questions</h2><details><summary>What does treasury hygiene cover?</summary><p>It covers cash positioning, account access, wire and ACH approvals, authorized vendors, spending controls, and a recurring review cadence.</p></details><details><summary>Is the FDIC limit the same for every account?</summary><p>The standard limit is generally $250,000 per depositor, per FDIC-insured bank, per ownership category. Coverage depends on how the account is titled and what products are held, so verify the details with the FDIC or your bank.</p></details><details><summary>Should a founder move idle cash into a yield product?</summary><p>That depends on liquidity needs, counterparty risk, product structure, and the company\'s policies. Compare options with your bank and qualified advisors; do not treat a headline rate as a treasury policy.</p></details>';
    var footer = document.querySelector('footer');
    if (footer) footer.before(faq);
    var schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What does treasury hygiene cover?', acceptedAnswer: { '@type': 'Answer', text: 'Cash positioning, account access, wire and ACH approvals, authorized vendors, spending controls, and a recurring review cadence.' } },
        { '@type': 'Question', name: 'Is the FDIC limit the same for every account?', acceptedAnswer: { '@type': 'Answer', text: 'The standard limit is generally $250,000 per depositor, per FDIC-insured bank, per ownership category. Coverage depends on account title and product.' } },
        { '@type': 'Question', name: 'Should a founder move idle cash into a yield product?', acceptedAnswer: { '@type': 'Answer', text: 'That depends on liquidity needs, counterparty risk, product structure, and company policy; a headline rate is not a treasury policy.' } }
      ]
    });
    document.head.appendChild(schema);
  }

  function initNav() {
    initTreasurySurfaceability();
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
