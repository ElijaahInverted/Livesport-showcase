# Livesport Affiliate Comparison

_Started 2026-05-01 19:23 UTC_

---

## User



## Assistant

I'll design a responsive landing page for an affiliate betting comparison site. Let me start by checking what's in the project and asking a few key questions before building.

_[tool: list_files]_

Empty project. Let me ask some focused questions before designing — this is a substantial page and getting the direction right up front matters.

_[tool: questions_v2]_

## User

Questions answered:
- accent_color: 0
- bg_tone: Deep dark (near-black, premium feel)
- type_pairing: Decide for me
- bookmaker_count: 6
- imagery: Generic monogram tiles (e.g. 'BA', 'BB' in colored squares) — safest, no branding
- viewports: Side-by-side on a design canvas (desktop frame + mobile frame visible together)
- novelty: By-the-book affiliate comparison page (familiar patterns, optimized for conversion)
- interactivity: Sortable table columns (rating, bonus, min deposit)
- tweaks: Background tone (dark / mid / light)
- logo_brand: the site should be named Livesport

## Assistant

Got it. Building a desktop + mobile design canvas for **Livesport** — deep dark background, green accent, single neo-grotesk type, 6 detailed reviews, monogram bookmaker tiles, sortable comparison table, and a Tweak for background tone.

_[tool: set_project_title]_

_[tool: copy_starter_component]_

_[tool: copy_starter_component]_

Now let me build the landing page. I'll split it into manageable component files.

_[tool: update_todos]_

_[tool: write_file]_

Now the styles + UI primitives:

_[tool: write_file]_

_[tool: snip]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: snip]_

_[tool: write_file]_

_[tool: snip]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: snip]_

_[tool: done]_

_[tool: fork_verifier_agent]_

**Livesport — Best Betting Sites UK 2026** is live on the canvas with both desktop (1440px) and mobile (390px) artboards side by side.

**Sections built (top to bottom):**
1. **Sticky nav** — Livesport logo, anchor links, "Show Top 3" CTA. Hamburger on mobile.
2. **Hero** — H1 with green accent, trust pills, dual CTA, affiliate disclosure, plus a live "top picks" preview card on desktop.
3. **Quick Comparison** — sortable table (rating / bonus / min deposit) with filter chips. Stacks to cards on mobile.
4. **Methodology** — narrative + 6 criteria cards + author block (Jamie Marsh).
5. **Top 6 In-Depth Reviews** — pros/cons, bonus block, 5 sub-ratings with bars, dual CTAs, anchor IDs.
6. **Best by Category** — 5 cards with stacked monogram tiles + "View details" anchor.
7. **Educational Guides** — Safe bookmaker checklist, Bonus concepts (5 cards), Bankroll/RG tips + BeGambleAware link.
8. **FAQ** — 9 Q&As in an accordion (first one open by default).
9. **Footer** — 4-column links, 18+ badge, full disclaimers.
10. **Sticky "Back to top"** appears on desktop after scrolling.

**Design decisions:**
- Single neo-grotesk (**Inter Tight**) — clean, modern, trustworthy, no font slop.
- Deep dark palette (`#0A0D12` base) with one green accent (`#10B981`) reserved for primary CTAs and positive signals only.
- Bookmaker logos as gradient monogram tiles (BA–BF) — safest placeholder strategy.
- Card-based layout throughout for clean mobile collapse.
- Subtle radial accent + grid pattern on hero only — every other section stays calm.

**Tweak available** (toolbar toggle): **Background tone** — switch between Dark / Mid / Light.

**Next steps you might want:**
- Real bookmaker names + logos
- Live affiliate links + bonus terms
- Trim to 3–5 categories or extend to full 10 reviews
- Add a sortable "key markets" column or country/sport filter

## User

Apply comment

## Assistant

_[tool: snip]_

_[tool: str_replace_edit]_

Hero removed — users now land directly on the Quick Comparison after the nav. The "Top 3" sticky button still works to scroll within the page.

Since the Comparison is now the first thing visible, I should make sure it has enough visual presence at the top. Let me also adjust the artboard heights since we removed a section.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

Hero removed. Users now land directly on the Quick Comparison table — the most relevant info first, no fluff above the fold.

## User

Apply comment

## User

Apply comment

