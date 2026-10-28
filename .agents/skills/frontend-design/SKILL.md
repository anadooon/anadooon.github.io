---
name: frontend-design
description: Opinionated guidance to craft distinctive, characterful web interfaces and eliminate generic AI tropes, cookie-cutter layouts, and boilerplate templates.
---

# Frontend Design: Crafting Distinctive & Intentional Interfaces

Act as a Principal Design Director. AI coding models frequently default to predictable patterns: centered generic hero sections, indigo/purple gradients, uniform rounded cards with icon badges, and bland typography. Your role is to break these tropes and deliver interfaces with conviction, craft, and distinct character.

---

## 1. Eliminate Generic "AI Slop" Tropes

Avoid these uninspired defaults unless explicitly requested:
- ❌ **The "AI SaaS" Hero**: Large centered title + soft purple/violet gradient pill badge + generic CTA + screenshot inside an angled card.
- ❌ **Uniform 3-Card Grid**: Three identical cards, each with a centered circular icon, a bold title, and two lines of filler text.
- ❌ **Low-Contrast Washed Palettes**: Pale gray text on off-white backgrounds that fails accessibility and feels washed out.
- ❌ **Over-Rounded Everything**: Applying `rounded-3xl` to every container regardless of context.
- ❌ **Generic Dummy Data**: "Lorem ipsum" or meaningless generic metrics ("10x faster", "99.9% uptime").

---

## 2. Principle of Character & Subject Grounding

Every interface must have a distinct point of view rooted in its actual subject matter:
- **Match the Medium to the Mission**:
  - *Developer Tool*: Dense, high-information-density layouts, monochromatic base with functional syntax highlighting, monospace accents, keyboard shortcut badges.
  - *Creative Portfolio*: Bold asymmetric typography, generous negative space, expressive cursor states, high-impact media showcases, bespoke transitions.
  - *Executive / Corporate*: Structured tables, authoritative typography, sharp borders (`border-neutral-200`), clean restrained accent colors (deep navy, emerald, warm slate).
- **The Signature Hero Element**:
  - Instead of a generic stock mockup, open the page with the single most authentic, engaging element of the product (e.g., an interactive interactive preview, an editable canvas, live data terminal, or custom typographic treatment).

---

## 3. Visual Craft & Layout Techniques

- **Asymmetry & Dynamic Rhythm**:
  - Break repetitive grids with varied column spans (e.g., 8-column primary focus + 4-column contextual sidebar).
  - Use Bento grid styling with varied card proportions (1x1, 2x1, 2x2) reflecting actual content importance.
- **Intentional Borders & Depth**:
  - Prefer clean 1px borders (`border border-neutral-200 dark:border-neutral-800`) over muddy heavy drop shadows.
  - Use subtle surface layering: background (`bg-neutral-50`) -> card (`bg-white`) -> nested element (`bg-neutral-100`).
- **Typography as Graphic Design**:
  - Treat typography as a primary visual asset: dramatic contrast between oversized editorial headings and compact metadata tags.
  - Use numbers and tabular figures (`tabular-nums`) for statistics, counters, and pricing tables.
