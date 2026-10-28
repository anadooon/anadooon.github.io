# Project Rules: Design & Engineering Standards

## 1. Zero "AI Slop" Policy
- **No Generic Hero Sections**: Never use centered hero layouts with floating pill badges, generic CTA pairs, and angled screenshot cards.
- **No Predictable Card Grids**: Strictly avoid uniform 3-card feature rows with centered circular icon badges. Use asymmetric Bento layouts, varied column spans, and dynamic editorial rhythms.
- **No Default Tailwind / Unstyled Shadcn**: Never leave shadcn/ui components in their default slate/zinc appearance. Every component must be customized with bespoke tokens, borders, and tactile active/hover states.
- **No Cliched Aesthetics**: Avoid glowing purple/indigo radial gradients, dark mesh backgrounds with blurry orbs, and generic placeholder metrics ("10x faster", "99.9% uptime").

## 2. Typography & Spatial Rhythm
- **Bold Typography First**: Treat type as the primary visual architecture. Pair a distinctive, high-personality display font (e.g., Syne, Clash Display, Space Grotesk, Editorial New) with a crisp, neutral monospace/sans-serif body font.
- **Tight Headings & Hierarchy**: Use tight tracking (`tracking-tight` or `tracking-tighter`) on large headlines, high contrast between titles and body copy, and generous line height on readable text.
- **Intentional Whitespace**: Prioritize generous, purposeful negative space over visual clutter. Every element must have room to breathe.

## 3. Motion & Micro-Interactions (Framer Motion)
- **Framer Motion Standards**:
  - Implement fluid, choreography-driven animations (staggered children, smooth scroll-triggered reveals, spring physics).
  - Use deliberate transitions (`transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }`).
  - Tactile micro-interactions on all clickable elements (`whileHover={{ y: -2 }}`, `whileTap={{ scale: 0.98 }}`).
  - Always support accessibility with `useReducedMotion()`.

## 4. Distinct Color Palettes
- Curate purposeful, bespoke color palettes specific to the project's domain (e.g., warm brutalist, dark obsidian with acid accents, editorial cream with deep espresso and vermilion).
- Adhere strictly to WCAG AA/AAA contrast ratios.
- Avoid flat, monotonous surfaces by layering tones with refined 1px borders and subtle textural depth.
