# Centripetal Framer Website — Live Snapshot

**Pulled:** 2026-08-13 via Framer Server API (read-only)
**Project:** Centripetal
**Production URL:** https://centripetaladvisors.com
**Staging URL:** https://basic-author-359473.framer.app
**Last deployed:** 2026-08-09 (deployment timestamp 1786390061351)
**Framer project ID:** aec2f957f6f3ebd9c59bdb9d23a8b85954aea7e5c1a3cc0e413d3a9efbbadc0e

---

## CMS Collections

| # | Collection | ID | Items | Purpose |
|---|------------|-----|------:|---------|
| 1 | duplicate of sheets | zNQb45_oy | 3 | Legacy mirror of Google Sheets CMS rows (33 string/formattedText fields) |
| 2 | Google Sheets - html | Z9ovhept3 | 8 | **Primary content collection** — guides/resources with full HTML body, SEO fields, FAQ blocks |
| 3 | template 1 | UMYHsA5mm | 1 | Scorecard tool template (interactive self-scored diagnostic) |
| 4 | Template 2 | ZP5bCU_KL | 2 | Long-form readiness guide template (2-section + deep-dive + document checklist) |
| 5 | Blogs | Q6ClU_6a1 | 2 | Blog listing collection (title, date, subtitle, guide link) |

---

## Collection 2: "Google Sheets - html" — Live Content (8 items)

This is the primary content collection driving the `/resources/` and guide pages.

| # | Slug | Title | Draft? | Status |
|---|------|-------|--------|--------|
| 1 | saas-finance-scorecard | The SaaS Finance Scorecards | No | Live |
| 2 | series-a-diligence-readiness | Series A Diligence Readiness | No | Live |
| 3 | venture-debt-readiness | Venture Debt Readiness | No | Live |
| 4 | treasury-hygiene | Treasury Hygiene in Under an Hour | No | Live |
| 5 | do-i-need-a-fractional-cfo | Do I Need a Fractional CFO? | No | Live |
| 6 | test-guide-alpha | TEST — Alpha Readiness Guide | No | **Test item** |
| 7 | test-guide-beta | TEST — Beta Decision Guide | No | **Test item** |
| 8 | first-90-days-after-raise | The First 90 Days After Your Raise | No | Live |

### Live guide pages (5 real + 1 pending)
1. **SaaS Finance Scorecard** — `/google-sheets---html/saas-finance-scorecard`
2. **Series A Diligence Readiness** — `/google-sheets---html/series-a-diligence-readiness`
3. **Venture Debt Readiness** — `/google-sheets---html/venture-debt-readiness`
4. **Treasury Hygiene** — `/google-sheets---html/treasury-hygiene`
5. **Do I Need a Fractional CFO?** — `/google-sheets---html/do-i-need-a-fractional-cfo`
6. **First 90 Days After Your Raise** — `/google-sheets---html/first-90-days-after-raise`

### Test items (2 — should be cleaned up or removed before next publish)
- test-guide-alpha
- test-guide-beta

---

## Collection 1: "duplicate of sheets" — Legacy Mirror (3 items)

Appears to be an earlier duplication of the Google Sheets CMS sync. Contains the same three Tier 1 guides:

| Slug | Title | Status |
|------|-------|--------|
| gd-001 | Series A Diligence Readiness Checklist | approved |
| gd-002 | Venture Debt Readiness Checklist for SaaS Founders | approved |
| gd-003 | The SaaS Finance Scorecard | approved |

These use the `page_id` / `slug` / `page_type` / `collection` schema from our [framer_pages_schema.md](/Users/christianwutz/Pentagon/Centripetal/content/framer_pages_schema.md).

---

## Collection 3: "template 1" — Scorecard Tool (1 item)

Interactive self-scored diagnostic page template. Contains the SaaS Finance Scorecard with:
- 8 categories (Legal, Cap Table, Team, Systems, Treasury, Accounting, Finance, Investor FAQ)
- 5-point scale per category
- Hero, How-To, and Category sections
- Only 1 category fully populated in this template item (Legal); others are empty placeholders

| Slug | Title |
|------|-------|
| scorecard-tool | The SaaS Finance Scorecard |

---

## Collection 4: "Template 2" — Long-Form Guide (2 items)

Two-section guide template with deep-dive callout and document checklist. Used for the full Series A Diligence Readiness guide.

| Slug | Title | Status |
|------|-------|--------|
| series-a-diligence-readiness | Series A Diligence Readiness | Live |
| new-ligence-readiness | test | **Test item — empty** |

Template structure:
- Hero (eyebrow + subtitle + intro)
- How-To section (5 body slots + footnote)
- Section 1 (eyebrow + title + lead + body)
- Deep Dive callout (eyebrow + title + body)
- Section 2 (eyebrow + title + lead + body)
- CTA (text + link)

---

## Collection 5: "Blogs" (2 items)

Minimal blog listing. Both items appear to be test/placeholder entries.

| Slug | Title | Date |
|------|-------|------|
| scoreboard-tool | the saas Finanance | 2026-07-26 |
| check | the saas Finanance | 2026-07-27 |

Fields: type, date, Title, Subtitle, Guide link

---

## Canvas Root

- Root node: `augiA20Il` (WebPageNode, path `/`)
- No collection binding on root

---

## Field Schema Summary

### "Google Sheets - html" (32 fields)
Key field types: enum (1), string (20), number (1), date (1), formattedText (5), link (1)

This collection maps to the schema documented in [framer_pages_schema.md](/Users/christianwutz/Pentagon/Centripetal/content/framer_pages_schema.md). The field IDs in the CMS items do not expose human-readable names through the API — they use internal Framer keys. The mapping is maintained in the local schema doc.

### "Template 2" (32 fields)
Key field types: string (21), number (2), formattedText (5), link (1)
Human-readable field names: slug, template_type, title, nav_label, nav_order, meta_title, meta_description, date_updated, hero_eyebrow, hero_subtitle, hero_intro, how_eyebrow, how_title, how_body 1-5, how_footnote, section_1_eyebrow/title/lead/body, deep_dive_eyebrow/title/body, section_2_eyebrow/title/lead/body, cta_text, cta_link

### "template 1" (52 fields)
Scorecard-specific: template_type, title, nav_label, nav_order, meta_title, meta_description, date_updated, hero fields, how fields, 4x category blocks (each: category no., title, content, labels 1-5), cta_text, cta_link

### "Blogs" (5 fields)
Simple: type, date, Title, Subtitle, Guide link

---

## Key Observations

1. **Two test items** in "Google Sheets - html" (test-guide-alpha, test-guide-beta) and one in "Template 2" (new-ligence-readiness) should be cleaned up before next publish.
2. **Blog collection** contains only placeholder entries — not yet used for real content.
3. **"duplicate of sheets"** appears to be a legacy sync artifact; the "Google Sheets - html" collection is the active one.
4. **Template 1** (scorecard) only has category 1 (Legal) fully populated in the CMS item — the other 7 categories are empty, suggesting the scorecard may render its full content from code/component logic rather than CMS fields.
5. **6 real guide pages** are live: Scorecard, Series A Readiness, Venture Debt, Treasury Hygiene, Fractional CFO, and First 90 Days.
