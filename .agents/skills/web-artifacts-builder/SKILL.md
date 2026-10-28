---
name: web-artifacts-builder
description: Multi-component web application and interactive artifact architecture. Covers React, TypeScript, Tailwind CSS, modern component patterns, state management, and self-contained interactive builds.
---

# Web Artifacts Builder: Interactive Frontend Applications

Guidelines and architectural standards for constructing multi-component, production-grade frontend applications and self-contained web artifacts.

---

## 1. Stack & Architecture

- **Core Technologies**:
  - **Framework**: React 18+ (Functional components, Hooks, TypeScript).
  - **Styling**: Tailwind CSS (with utility classes and custom color tokens).
  - **Component Primitives**: Accessible headless UI patterns (inspired by Radix UI / shadcn/ui).
  - **Icons**: Lucide React icons or inline SVGs.
- **Component Modularity**:
  - Break complex applications into distinct single-responsibility components (e.g., `Header`, `Sidebar`, `DataTable`, `FilterBar`, `MetricCard`, `Modal`).
  - Keep state as close as possible to the consumers. Lift state only when multiple peer components require synchronization.

---

## 2. Robust State & Interaction Patterns

- **Predictable State Transitions**:
  - For complex state logic (multi-step wizards, filtering with multiple facets, cart/item operations), prefer `useReducer` or clear custom hooks over multiple disjointed `useState` calls.
- **Client-Side Persistence**:
  - When appropriate for demo or user persistence, leverage `localStorage` with error handling to preserve user data across sessions.
- **Responsive & Touch-Friendly**:
  - Build mobile-first. Ensure all tap targets are at least `44x44px`.
  - Use responsive modifiers (`sm:`, `md:`, `lg:`, `xl:`) thoughtfully rather than breaking desktop layouts on small screens.

---

## 3. Production Readiness & Code Hygiene

- **TypeScript Safety**:
  - Define clear interfaces and types for all data models, component props, and API payloads. Avoid `any`.
- **Accessibility (a11y)**:
  - Use semantic HTML (`<main>`, `<nav>`, `<aside>`, `<section>`, `<article>`, `<button>`).
  - Ensure all icon buttons include `aria-label`.
  - Keyboard navigation: visible focus rings (`focus-visible:ring-2 focus-visible:ring-offset-2`).
- **Self-Contained Portability**:
  - Avoid hidden external runtime dependencies. Ensure all styles, components, and helper utilities work reliably within the browser or bundled artifact.
