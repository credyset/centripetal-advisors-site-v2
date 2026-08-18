# Centripetal Website: Interactive Guide & Blog Improvement Brainstorm

**Date:** 2026-08-13
**Context:** SEO/AI surfaceability audit findings + 869-episode podcast corpus + Logic PAC quote-configurator reference for interactivity bar

---

## Part 1: Interactive Guide Concepts

These are modeled after the Logic PAC quote-configurator pattern: step-by-step input, live state updates, sticky output panel, structured data capture, and a natural CTA conversion moment. Each one maps to a specific SEO prompt cluster and founder trigger from the audit.

### 1. SaaS Finance Readiness Diagnostic (upgrade the existing Scorecard)

**Current state:** The SaaS Finance Scorecard exists but is flagged in the SEO audit as requiring "a dedicated Framer code component or static tool page" — it currently renders through CMS prose, not as an interactive tool.

**Upgrade concept:**
- 8-category self-assessment (Legal, Cap Table, Team, Systems, Treasury, Accounting, Finance, Investor FAQ)
- Each category: radio-button scale 1–5 with descriptive labels (Major Gaps → Diligence-Ready)
- Sticky right panel showing: running score out of 40, radar chart of category scores, tier interpretation (Red / Yellow / Green)
- Completion triggers a "Send Your Score" CTA that pre-fills a Calendly note or email with the score breakdown
- Structured data: the score itself becomes the lead-qualification signal in Pipedrive

**SEO prompt cluster served:** #8 (SaaS finance scorecards and operating metrics)
**Founder trigger:** "Are our finances ready?"
**Why this works:** It is the highest-volume entry point in the guide portfolio and the only one that naturally produces a lead-qualification artifact (the score) without asking the founder to fill out a contact form.

---

### 2. Fundraise Readiness Checklist (interactive document tracker)

**Concept:**
- 24-document checklist from the Series A Diligence Readiness guide, rendered as an interactive progress tracker
- Three tiers: Tier 1 (must-have before first partner meeting), Tier 2 (needed during diligence), Tier 3 (nice-to-have)
- Checkboxes with local storage persistence — founder can return and update progress
- Running counter: "14 of 24 documents ready — 58% readiness"
- Visual progress bar per tier
- "Share your readiness" CTA: generates a summary the founder can send to their team or advisor

**SEO prompt cluster served:** #3 (Series A financial and data-room readiness)
**Founder trigger:** "We may raise soon"
**Why this works:** The static checklist already exists in the guide. Making it interactive adds a return-visit reason and a natural sharing/CTA moment. It is the diagnostic version of the Logic PAC configurator — selections produce a personalized output.

---

### 3. Fractional CFO Fit Calculator

**Concept:**
- Step-by-step decision flow (not a form):
  - Step 1: Revenue stage (pre-revenue / $0-1M / $1-5M / $5-10M / $10M+)
  - Step 2: Finance complexity signals (checkboxes): multiple entities, covenant compliance, board reporting, fundraising planned, audit required, VP Finance on staff
  - Step 3: Current finance capacity (who does your finance work today?): founder / bookkeeper / controller / VP Finance / nobody
  - Step 4: Highest-priority financial need (radio): cash planning, board deck, fundraise prep, operational reporting, treasury, all of the above
- Output panel: recommended path (fractional CFO / VP Finance / both / not yet), cost comparison, and a 1-paragraph "here's why" rationale
- CTA: "Discuss your situation" linking to Calendly

**SEO prompt clusters served:** #1 (fractional CFO selection) and #2 (when to hire fractional CFO vs VP Finance)
**Founder trigger:** "Should I hire financial help?"
**Why this works:** These are Centripetal's two most commercially important SEO prompt clusters. The existing "Do I Need a Fractional CFO?" guide is prose-only. An interactive version turns a passive read into a personalized recommendation — and the selections themselves are lead-qualification data.

---

### 4. Cash Runway Scenario Modeler

**Concept:**
- Inputs: current cash, monthly burn, monthly revenue, planned hires (with cost), expected collections timing
- Three-scenario output (base / delayed-collections / slower-growth) displayed as a timeline chart
- Key outputs: months of runway per scenario, "decision trigger" point (when does the downside case force a capital or hiring decision?), covenant trigger dates if applicable
- No financial advice — positioned as "a directional tool for your own planning"
- CTA: "Pressure-test this model with a Centripetal diagnostic"

**SEO prompt cluster served:** #5 (SaaS runway, cash-flow forecasting, burn metrics)
**Founder trigger:** "Our runway feels wrong"
**Why this works:** This is the "Cash Flow Mistakes" guide angle that the SEO audit says needs sharpening. An interactive modeler sharpens it by making the abstract concrete. The Logic PAC configurator proves the pattern: inputs → live calculation → personalized output → CTA.

---

### 5. Board Deck Structure Builder

**Concept:**
- Step 1: Select your stage (Seed / Post-Seed / Series A / Growth)
- Step 2: Select your board composition (founder-only / 1 independent / 2+ independents / institutional lead)
- Step 3: Check the slides you already have (ARR summary, customer detail, cash/runway, forecast, hiring plan, product roadmap, competitive, cap table)
- Output: recommended deck outline with slide order, the 3-5 questions your board will ask based on your stage/composition, and the specific reconciliation points investors will test
- CTA: "Get your board deck reviewed"

**SEO prompt cluster served:** #6 (board and investor reporting)
**Founder trigger:** "Our board meeting is coming"
**Why this works:** The SEO audit flagged the Founder Board Deck Builder as concept/pending, blocked on "angle sharpening." This interactive version gives it a concrete entry point — the board composition determines the output, not a generic template.

---

## Part 2: Blog Improvements

### Current blog gaps (from SEO cross-reference)

The largest podcast topic cluster (ARR/Revenue Ops, 725 episodes) has **zero** published Centripetal content. The five current blog posts cover debt, investor diligence, fractional CFO, vertical SaaS, and capital structure — all important, but none address the most-discussed SaaS finance topic in the podcast corpus.

### Proposed additions (podcast-sourced)

These are blog posts that could be anchored by real founder language from the podcast transcripts once the ASR pilot completes:

| # | Blog Topic | SEO Target | Podcast Source Cluster | Estimated Episode Volume |
|---|-----------|-----------|----------------------|--------------------------|
| 1 | CARR vs ARR: When the Definition Matters | SaaS ARR definition | ARR / Revenue Ops | 725 episodes |
| 2 | Customer Concentration: The Board Question You Should Answer First | SaaS customer concentration | ARR / Revenue Ops | 725 episodes |
| 3 | The Series A Data Room: What Goes In and What Gets Opened | Series A data room checklist | Fundraising / Investor Readiness | 524 episodes |
| 4 | When to Hire a Fractional CFO | fractional CFO timing | Fractional CFO / Finance Leadership | 258 episodes |
| 5 | Bookkeeper, Controller, CFO: What Your Stage Actually Needs | finance hire ladder | Fractional CFO / Finance Leadership | 258 episodes |
| 6 | The 13-Week Cash Flow Forecast: What It Shows and What It Hides | SaaS cash flow forecast | Cash / Burn / Runway | 222 episodes |
| 7 | What AI Cannot Replace in Founder Finance | AI in SaaS finance | AI / Automation | 302 episodes |
| 8 | Why Investors Don't Trust Your Forecast | forecast credibility | Forecasting / Model Trust | (not yet quantified) |

### Blog structural improvements

1. **Add FAQPage + Article structured data to every post** — already done in the current 5 posts; maintain this standard.

2. **Add "Related Guides" cross-links** — every blog post should link to 1-2 relevant guides. This creates the internal-linking structure the SEO audit requires ("3-5 contextual internal links per page").

3. **Add podcast-sourced founder quotes** — once the 25-episode ASR pilot completes, pull verbatim founder language about each blog topic and use it as opening hooks or callout blocks. This adds first-party evidence and makes the content more credible for AI citation.

4. **Add a "What founders actually say" callout section** — a styled blockquote pattern that surfaces real podcast quotes alongside the analytical content. This differentiates from generic SEO content and supports the "operator-reality" content standard.

---

## Part 3: Structural Observations from the Logic PAC Reference

The Logic quote configurator demonstrates several patterns worth adopting:

1. **Sticky output panel** — the estimate panel stays visible as the user configures. For Centripetal, this maps to: running Scorecard total, runway chart, or readiness percentage.

2. **Step-by-step flow with visual progress** — numbered sections (Step 1, Step 2...) with completion indicators. Reduces cognitive load and creates a sense of momentum.

3. **Contextual commentary** — the Logic configurator shows "why this matters" text that updates based on selections. For Centripetal, this could be stage-specific finance advice that changes based on the founder's inputs.

4. **Natural CTA moment** — the estimate naturally leads to "Book a consultation." For Centripetal, each tool's output is the CTA trigger: "Your score is 22/40 — here's where the gaps are. Want to discuss?"

5. **Data capture without a form** — the selections themselves are the qualification data. No separate form needed. The CTA pre-populates with the user's configuration.

---

## Part 4: Priority Ranking

Based on SEO impact, commercial value, and feasibility:

| Priority | Asset | Why |
|----------|-------|-----|
| 1 | SaaS Finance Readiness Diagnostic (interactive Scorecard upgrade) | Highest-volume entry point; already has content; produces lead-qualification artifact |
| 2 | Fractional CFO Fit Calculator | Most commercially important prompt clusters (#1, #2); direct conversion path |
| 3 | Fundraise Readiness Checklist (interactive) | Strong SEO cluster (#3); existing content to repurpose; return-visit pattern |
| 4 | CARR vs ARR blog post | Largest uncovered podcast topic; zero current Centripetal content on this |
| 5 | Customer Concentration blog post | High investor relevance; natural cross-link to Series A guide |
| 6 | Cash Runway Scenario Modeler | Strong concept but requires more engineering; lower SEO urgency |
| 7 | Board Deck Structure Builder | Blocked on angle; podcast transcripts could unblock it |
| 8 | AI in SaaS Finance blog post | Emerging topic; differentiating angle; 302 podcast episodes |

---

## Part 5: Immediate Next Steps

1. **Upgrade the Scorecard** from prose to interactive tool — this is the single highest-impact change.
2. **Build the Fractional CFO Fit Calculator** — commercially the most important lead-qualification tool.
3. **Run the 25-episode ASR pilot** — this unblocks podcast-sourced blog content and provides the founder quotes that make the blog layer credible.
4. **Write the CARR vs ARR blog post** — fills the largest content gap with the highest podcast evidence volume.
5. **Add cross-links** between all existing guides and blog posts — pure SEO leverage from content that already exists.
