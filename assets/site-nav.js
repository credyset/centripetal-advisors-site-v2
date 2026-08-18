(function () {
  function initTreasurySurfaceability() {
    if (!/\/guides\/treasury-hygiene\.html$/.test(window.location.pathname)) return;
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var node;
    while (node = walker.nextNode()) {
      node.nodeValue = node.nodeValue.replace('short-term Treasury yields cleared 5% in 2024 and remain in the 3.5–3.9% range through 2026.', 'Short-term rates change; compare current yields, liquidity, and risk before moving operating cash.');
    }
    var staticAnswer = document.querySelector('.surfaceability-answer');
    if (staticAnswer) {
      var staticHero = document.querySelector('.hero');
      var staticFooter = document.querySelector('footer');
      if (staticHero) staticHero.after(staticAnswer);
      var staticFaq = document.querySelector('.surfaceability-faq');
      if (staticFaq && staticFooter) staticFooter.before(staticFaq);
      return;
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

  function initVentureDebtSurfaceability() {
    if (!/\/guides\/venture-debt-readiness\.html$/.test(window.location.pathname)) return;
    var hero = document.querySelector('.hero');
    if (!hero || document.querySelector('.surfaceability-answer')) return;
    var answer = document.createElement('section');
    answer.className = 'surfaceability-answer';
    answer.innerHTML = '<div><p class="section-eyebrow">DIRECT ANSWER</p><p class="surfaceability-answer-copy"><strong>Venture debt readiness is the work of testing whether a facility fits the company’s cash plan, reporting discipline, operating milestones, and downside capacity. Use this guide as a directional preparation framework—not as a financing recommendation or outcome promise.</strong></p></div>';
    hero.after(answer);
    var faq = document.createElement('section');
    faq.className = 'surfaceability-faq';
    faq.setAttribute('aria-labelledby', 'venture-debt-faq-heading');
    faq.innerHTML = '<h2 id="venture-debt-faq-heading">Frequently asked questions</h2><details><summary>What does venture debt readiness mean?</summary><p>It means the company has tested the facility against cash timing, recurring-revenue visibility, reporting ownership, covenant scenarios, and the operating milestone the capital is meant to support.</p></details><details><summary>Is venture debt right for every SaaS company?</summary><p>No. Fit depends on the company’s financing timing, cash visibility, contractual obligations, reporting quality, downside capacity, and whether debt solves a defined operating need.</p></details><details><summary>What should founders prepare before a lender conversation?</summary><p>Prepare a reconciled operating model, cash and collections view, current debt and ownership records, a clear use of proceeds, and an explicit plan for monitoring obligations after close.</p></details>';
    var footer = document.querySelector('footer');
    if (footer) footer.before(faq);
    var schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What does venture debt readiness mean?', acceptedAnswer: { '@type': 'Answer', text: 'Testing the facility against cash timing, recurring-revenue visibility, reporting ownership, covenant scenarios, and the operating milestone the capital is meant to support.' } },
        { '@type': 'Question', name: 'Is venture debt right for every SaaS company?', acceptedAnswer: { '@type': 'Answer', text: 'No. Fit depends on financing timing, cash visibility, contractual obligations, reporting quality, downside capacity, and whether debt solves a defined operating need.' } },
        { '@type': 'Question', name: 'What should founders prepare before a lender conversation?', acceptedAnswer: { '@type': 'Answer', text: 'A reconciled operating model, cash and collections view, current debt and ownership records, a clear use of proceeds, and a plan for monitoring obligations after close.' } }
      ]
    });
    document.head.appendChild(schema);
  }

  function initNav() {
    initTreasurySurfaceability();
    initVentureDebtSurfaceability();
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
