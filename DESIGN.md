---
name: Synthetic Intelligence
colors:
  surface: '#0f131d'
  surface-dim: '#0f131d'
  surface-bright: '#353944'
  surface-container-lowest: '#0a0e18'
  surface-container-low: '#171b26'
  surface-container: '#1c1f2a'
  surface-container-high: '#262a35'
  surface-container-highest: '#313540'
  on-surface: '#dfe2f1'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dfe2f1'
  inverse-on-surface: '#2c303b'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#7bd0ff'
  on-tertiary: '#00354a'
  tertiary-container: '#009bd1'
  on-tertiary-container: '#002d40'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#0f131d'
  on-background: '#dfe2f1'
  surface-variant: '#313540'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 4rem
    fontWeight: '700'
    lineHeight: 4.5rem
    letterSpacing: -0.04em
  display-mobile:
    fontFamily: Space Grotesk
    fontSize: 2.5rem
    fontWeight: '700'
    lineHeight: 3rem
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 2.75rem
    fontWeight: '600'
    lineHeight: 3.25rem
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: 2.5rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 1.25rem
    fontWeight: '500'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.25rem
    letterSpacing: 0.01em
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.25rem
    letterSpacing: 0.02em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.04em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.625rem
    fontWeight: '500'
    lineHeight: 0.875rem
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 1.5rem
  margin-sm: 1rem
  margin-lg: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an ultra-precise, forward-leaning aesthetic tailored for advanced artificial intelligence engineering, RAG orchestration, and autonomous agent architectures. The interface delivers an atmosphere of deep technical mastery, combining the stark utility of high-end developer consoles with the refined luxury of modern glass-forward web experiences.

The style blends Dark Mode Minimalism with subtle Cyber-Glassmorphism:
- **Atmosphere:** Deep cosmic voids layered with translucent slate surfaces, emitting controlled ambient glows rather than loud surface fills.
- **Visual Tone:** Analytical, hyper-performant, mathematically aligned, and authoritative.
- **Key Differentiator:** Precise hairline luminous borders (`1px`) coupled with selective radial cyan-indigo back-lighting that makes interactive artifacts feel powered by latent neural pipelines.

## Colors

The palette relies on a pitch-black/deep-navy foundation overlaid with slate containers to create depth without relying on visual noise.

- **Canvas Foundation (`#0B0F19`):** The primary void. Used for the baseline background, full-bleed backdrops, and root app wrappers.
- **Surface Elevation 1 (`#0F172A`):** Low-contrast structural wrappers, code canvases, and primary sectioning.
- **Surface Elevation 2 (`#111827`):** Interactive card layers, tooltips, and modal backdrops.
- **Surface Elevation 3 / Active Surface (`#1E293B`):** Hover states, chip backgrounds, nested code blocks, and border highlights.
- **Primary Electric Indigo (`#6366F1`):** Primary action items, active agent flow lines, focused inputs, and prominent identity nodes.
- **Secondary Cyber Cyan (`#06B6D4`):** Secondary interactive components, RAG pipeline metrics, live status nodes, and visual highlights.
- **Tertiary Sky Glow (`#38BDF8`):** High-energy data metrics, tag badges, and targeted text gradients.
- **Functional Semantics:**
  - Success/Online: `#10B981` (emerald terminal status)
  - Warning/Degraded: `#F59E0B` (amber evaluation delta)
  - Error/Interrupt: `#EF4444` (crimson pipeline failure)
- **Text & Foreground:** Primary text sits at `#F8FAFC` (98% contrast against canvas), secondary text at `#94A3B8`, and muted/meta labels at `#64748B`.

## Typography

Typography establishes an immediate hierarchy between algorithmic precision and structural prose.

- **Headlines (Space Grotesk):** Provides structured geometry and subtle tech idiosyncrasies. Display and headline levels should leverage tight negative letter tracking to command visual authority.
- **Body & Editorial (Inter):** Highly legible, neutral workhorse engineered for maximum clarity on sub-pixel dark interfaces. Ensures seamless readability for long-form project case studies, system breakdowns, and research publications.
- **Technical & Metrics (JetBrains Mono):** Reserved for contextual metadata, prompt templates, vector similarity metrics, code snippets, and operational status chips. Always formatted with uppercase tracking for micro labels.

## Layout & Spacing

The layout is anchored by a structured 12-column fluid grid system bounded by a max-width of `1280px` for optimal high-density reading and scanning.

- **Desktop (>= 1024px):** 12 columns, `2rem` gutters, and `3rem` canvas margins. Content is organized into modular engineering panels (e.g., side-by-side terminal demos, architecture flow diagrams).
- **Tablet (768px - 1023px):** 8 columns, `1.5rem` gutters, and `2rem` outer margins. Multi-column cards compress into dual-column grids; primary navigation collapses into a consolidated command dock.
- **Mobile (< 768px):** 4 columns, `1rem` gutters, and `1rem` outer canvas padding. Stack flows linearly with high-priority metrics elevated above extensive technical copy.
- **Rhythm Principle:** Spacing follows strict multiples of 4px/8px. Component internal padding strictly scales using `space-xs` through `space-xl` to ensure strict spatial balance across all card and badge variants.

## Elevation & Depth

Visual depth is achieved through translucent planar layering, hairline glass borders, and localized ambient photonic discharge. Heavy drop shadows are omitted in favor of glow falloffs.

- **Surface Layer 0 (Base Canvas):** Solid `#0B0F19`. Unlit and infinite.
- **Surface Layer 1 (Card/Container Surfaces):** `rgba(30, 41, 59, 0.4)` layered over canvas with `backdrop-filter: blur(16px)` and an ambient inner rim border of `1px solid rgba(255, 255, 255, 0.08)`.
- **Surface Layer 2 (Raised Overlay / Modals / Hovered Elements):** `rgba(17, 24, 39, 0.75)` with `backdrop-filter: blur(24px)` and a responsive outer border of `1px solid rgba(99, 102, 241, 0.3)`.
- **Glow & Radiance Strategy:**
  - **Focus & Active Glow:** `0 0 24px -4px rgba(99, 102, 241, 0.35)`
  - **Teal / Dynamic Signal Glow:** `0 0 20px -2px rgba(6, 182, 212, 0.4)`
  - **Passive Edge Line:** Gradient hairline borders using `linear-gradient(135deg, rgba(99, 102, 241, 0.4) 0%, rgba(6, 182, 212, 0.1) 50%, rgba(255, 255, 255, 0.03) 100%)`.

## Shapes

The shape system employs balanced geometry (`roundedness: 2`, where base components use `0.5rem` / `8px` corner radii) to project clean modernism while avoiding excessive playfulness.

- **Interactive Controls (Buttons, Inputs, Selectors):** `0.5rem` radius. Crisp, tactile, and engineered.
- **Cards, System Modules, and Containers (`rounded-lg`):** `1rem` radius. Balances large structural surfaces with smooth corner continuity.
- **Modals, Floating Panels, and Visual Hero Blocks (`rounded-xl`):** `1.5rem` radius.
- **Micro-Badges & Status Pills:** Full circular pill (`9999px`) to immediately distinguish system states, parameter tags, and latency indicators from structural cards.

## Components

### Buttons
- **Primary:** Background in `#6366F1` with an interior transition to `#4F46E5` on hover. High-contrast white text (`#FFFFFF`), `0.5rem` corner radius, typography token `label-lg`. Subtle interactive glow: `box-shadow: 0 0 16px rgba(99, 102, 241, 0.4)`.
- **Secondary (Glass):** Semi-transparent background `rgba(30, 41, 59, 0.6)` with `backdrop-filter: blur(12px)`. Border is `1px solid rgba(255, 255, 255, 0.12)`. Foreground is `#F8FAFC`. On hover, the border shifts to `rgba(6, 182, 212, 0.5)` with a cyan ambient highlight.
- **Ghost / Icon:** Transparent background with `#94A3B8` icon stroke; on hover, shifts to `rgba(99, 102, 241, 0.12)` background fill and `#38BDF8` icon stroke.

### Chips & Badges
- **Glass Tech Badge:** `9999px` pill radius, padding `space-xs` `space-sm`. Background `rgba(15, 23, 42, 0.6)` with `1px solid rgba(99, 102, 241, 0.25)`. Text set in `label-md` with `#38BDF8`.
- **Agent Status Indicator:** Pill badge housing a live pulsating green node (`#10B981`) next to `label-sm` tracking monospace label text (`ONLINE`, `EVALUATING`, `IDLE`).

### Cards & Modular Panels
- **Architecture Showcase Card:** Background `rgba(15, 23, 42, 0.55)`, blur `16px`, corner radius `1rem` (`rounded-lg`), padded with `space-lg`. Edge treatment is a `1px` border with top-down diagonal linear accent lighting (`#6366F1` into transparent).
- **Interactive State:** Hover lifts the card slightly by transitioning border luminescence to `rgba(6, 182, 212, 0.4)` and activating a soft cyan back-gradient bloom.

### Form Inputs & Terminal Fields
- **Input Fields:** Darkened field `rgba(11, 15, 25, 0.8)` with inset border `1px solid #1E293B`. Text set to `body-md` in `#F8FAFC`.
- **Focus State:** Border shifts cleanly to `#6366F1` with an outer ring glow of `0 0 0 3px rgba(99, 102, 241, 0.2)`. Placeholder text sits at `#64748B`.

### Lists & Key-Value Param Meters
- **Metric Row:** Separated by `1px solid rgba(255, 255, 255, 0.04)`. Left element displays parameter label in `label-md` (`#94A3B8`); right element displays evaluation score or parameter weight in `Space Grotesk` (`#38BDF8`).

### Custom Domain Components
- **Agent Execution Pipeline Node:** Compact card with left-hand vertical accent line (`#06B6D4` or `#6366F1`), monospaced node title (`label-lg`), step index counter, and an integrated status chip.
- **Prompt & Code Console:** Enclosed `#0B0F19` code window with `0.5rem` top utility toolbar, window controls, copy button, and code block styled via `JetBrains Mono` with cyan/indigo keyword token highlighting.