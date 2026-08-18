from pathlib import Path
import re

root = Path(__file__).resolve().parents[1]
for page in sorted(root.rglob('*.html')):
    if page.name == 'homepage_current.html':
        continue
    text = page.read_text()
    # Normalize legacy mockup colors to the palette rendered by the current
    # Framer site. The old cream/gold treatment is no longer in the baseline.
    text = text.replace('#F5F0E8', '#F2F2F2').replace('#f5f0e8', '#f2f2f2')
    text = text.replace('#D4A843', '#4B6147').replace('#d4a843', '#4b6147')
    depth = len(page.relative_to(root).parents) - 1
    href = '../' * depth + 'assets/site-system.css'
    marker = f'<link rel="stylesheet" href="{href}" data-site-system>'
    if 'data-site-system' not in text:
        text = text.replace('</head>', marker + '\n</head>', 1)
    text = text.replace('style="height:28px;width:auto;"', '')
    prefix = '../' * depth
    nav = f'''<nav class="site-nav" aria-label="Primary navigation"><div class="site-nav-inner">
  <a href="{prefix}index.html" class="site-wordmark"><img src="{prefix}assets/logo-light.png" alt="Centripetal Advisors"></a>
  <button class="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false" onclick="const n=this.nextElementSibling;n.classList.toggle('open');this.setAttribute('aria-expanded',n.classList.contains('open'))"><span></span><span></span><span></span></button>
  <div class="site-nav-links">
    <a href="{prefix}index.html">Home</a>
    <a href="{prefix}services.html">Services</a>
    <a href="{prefix}contact.html">Contact</a>
    <a href="{prefix}blog/index.html">Blogs</a>
    <a href="https://calendly.com/charles-centripetaladvisors/30min" class="site-nav-cta" target="_blank" rel="noopener">Book a Free Call</a>
  </div>
</div></nav>'''
    text = re.sub(r'<nav\b.*?</nav>', nav, text, count=1, flags=re.S | re.I)
    if page.parent.name == 'blog' and page.name != 'index.html':
        article = re.search(r'<article\b[^>]*>(.*?)</article>', text, re.S | re.I)
        if article:
            plain = re.sub(r'<[^>]+>', ' ', article.group(1))
            word_count = len(re.findall(r"\b[\w’'-]+\b", plain))
            if word_count < 500 and 'data-editorial-depth' not in text:
                depth_block = '''\n<section data-editorial-depth>
<h2>Put this into practice</h2>
<p>Make the topic part of the operating cadence, not a one-time cleanup project. Assign one owner, identify the source system for every number, and decide how often the underlying schedule will be refreshed. The goal is a repeatable answer that does not change depending on who prepares the deck or which spreadsheet is open.</p>
<p>At each review, reconcile the operating view to the accounting view and document any difference. A useful review note states what changed, why it changed, whether the variance is timing or performance, and what decision follows. That discipline is what makes a metric or process usable in a board meeting, financing conversation, or diligence request.</p>
<h3>Questions to resolve before the next review</h3>
<ul>
  <li>Who owns the number or process, and what system is the source of truth?</li>
  <li>What definition is used consistently across the model, reporting package, and board deck?</li>
  <li>Which variance would trigger a decision rather than another round of analysis?</li>
  <li>What supporting schedule should a lender or investor be able to inspect?</li>
</ul>
</section>\n'''
                body = article.group(1)
                insert_at = len(body)
                for marker in ('<section class="faq', '<div class="cta-block', '<div class="related'):
                    pos = body.find(marker)
                    if pos >= 0:
                        insert_at = min(insert_at, pos)
                body = body[:insert_at] + depth_block + body[insert_at:]
                text = text[:article.start(1)] + body + text[article.end(1):]
    page.write_text(text)
