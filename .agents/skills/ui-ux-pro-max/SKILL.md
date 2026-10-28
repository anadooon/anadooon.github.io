---
name: ui-ux-pro-max
description: Comprehensive UI/UX design intelligence system. Enforces deliberate design-first thinking, color palettes, typography pairings, UX heuristics, responsive layouts, and multi-stack UI patterns before code execution.
---

# UI/UX Pro Max: Design Intelligence & Guidelines

Act as a Principal Design Architect and Senior UI/UX Engineer. Whenever building, restyling, or evaluating user interfaces, never jump immediately to boilerplate code. Follow a structured, design-first process.

---

## 1. Design-First Workflow

Before generating frontend code, establish the design foundation:
1. **Identify the Core Context**: Who is the user, what is the product personality (e.g., editorial, enterprise B2B, developer tooling, playful consumer), and what is the primary job to be done?
2. **Establish the Design Token System**:
   - **Color Scale**: Primary brand color, secondary accent, neutral shades (background, surface, border, subtle, muted), and functional states (success, warning, error, info).
   - **Typography Scale**: Display font (for high-personality headings) and body font (for high-legibility readability). Define font size, line-height, and font-weight scales.
   - **Spatial Rhythm**: Strict 4px or 8px grid (4, 8, 12, 16, 24, 32, 48, 64px) for margins, padding, and layout gaps.
   - **Elevation & Radius**: Defined border radius scale (`rounded-sm` through `rounded-2xl` or sharp `rounded-none`) and subtle shadow elevations.

---

## 2. Color & Contrast Rules

- **Accessibility First**: All text-to-background contrast ratios must meet **WCAG AA** (4.5:1 for normal text, 3:1 for large text) and ideally **WCAG AAA** (7:1).
- **60-30-10 Rule**:
  - `60%`: Dominant neutral/background color.
  - `30%`: Structural/surface contrast (cards, sidebars, secondary sections).
  - `10%`: High-impact accent color reserved for primary calls-to-action (CTAs) and active indicators.
- **Dark Mode Fidelity**: Never invert colors blindly. Use warm/cool dark grays (`#0B0F17`, `#121824`) rather than pure `#000000` to prevent eye strain, and desaturate vibrant accents for readability.

---

## 3. Typography & Hierarchy

- **Pairing Strategy**:
  - *Modern Tech / Clean*: Inter, Geist, or Plus Jakarta Sans with JetBrains Mono for code/data.
  - *Editorial / High-End*: Newsreader or Playfair Display paired with Source Sans 3 or Inter.
  - *Humanist / Approachable*: Outfit, DM Sans, or Satoshi paired with Work Sans.
- **Hierarchy Anchors**:
  - Headings should carry distinctive personality and tight letter-spacing (`tracking-tight`).
  - Body copy must maintain comfortable line length (45–75 characters per line) and generous line height (`leading-relaxed` or 1.5–1.6).
  - Use typographic weight (`font-semibold`, `font-bold`) and color contrast rather than just increasing font size to create hierarchy.

---

## 4. Layout Architecture & UX Heuristics

- **Scannability**: Leverage visual anchors—clear section headers, bullet lists, metric callouts, and scannable Bento grid or split-screen layouts.
- **State Completeness**: Always design and implement the 5 essential UI states:
  1. *Blank / Initial*: What does the user see before interaction?
  2. *Loading / Skeleton*: Smooth skeleton screens matching exact component dimensions.
  3. *Populated / Ideal*: Content-rich presentation with realistic data.
  4. *Empty*: Actionable empty state guiding the user to create or import data.
  5. *Error*: Clear, human-readable recovery suggestions rather than raw system errors.
- **Micro-Interactions & Feedback**:
  - Interactive elements must provide immediate visual feedback (hover, focus-visible, active states).
  - Transitions should be fast and fluid (`150ms`–`250ms`, `cubic-bezier(0.16, 1, 0.3, 1)`), avoiding sluggish animations.
  - Respect `prefers-reduced-motion`.
