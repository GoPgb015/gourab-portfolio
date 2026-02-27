# Scrollytelling Portfolio Redesign Design

**Date:** 2025-02-28
**Designer:** Claude + Gourab Chatterjee

## Overview

Complete redesign of gourab-portfolio from cyberpunk/AI aesthetic to a premium, royal-feel scrollytelling experience following "The AI Practitioner" narrative.

## Design System

### Color Palette (60:30:10)

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| 60% Dominant | Deep Emerald | `#0a4d3c` | Backgrounds, section dividers |
| 60% Dominant | Emerald Dark | `#0f6b54` | Slightly lighter backgrounds |
| 30% Secondary | Charcoal | `#1a1a1a` | Card backgrounds |
| 30% Secondary | Charcoal Light | `#2a2a2a` | Hover states, elevated surfaces |
| 10% Accent | Warm Gold | `#d4af37` | Primary CTAs, highlights |
| 10% Accent | Gold Bright | `#e5c649` | Hover states |

Supporting:
- Text Primary: `#f5f5f5`
- Text Secondary: `#a0a0a0`
- Text Muted: `#606060`
- Border Gold: `#b8942f`

Gradients:
- Emerald: `linear-gradient(135deg, #0a4d3c 0%, #0f6b54 100%)`
- Gold: `linear-gradient(135deg, #d4af37 0%, #e5c649 100%)`

### Typography

```css
--font-display: 'Playfair Display', serif      /* Headlines, hero */
--font-body: 'Inter', sans-serif               /* Body text */
--font-mono: 'JetBrains Mono', monospace       /* Code, tags */
```

Scale:
- H1: `clamp(3rem, 8vw, 6rem)` — Hero name
- H2: `clamp(2rem, 5vw, 3.5rem)` — Section titles
- H3: `clamp(1.5rem, 3vw, 2rem)` — Subtitles
- Body: `clamp(1rem, 1.5vw, 1.125rem)` — Body text
- Small: `0.875rem` — Secondary text
- Tiny: `0.75rem` — Captions

## Page Structure

### Flow (Scroll-linked, Progressive Reveals)

1. **HERO** (Pinned) — Name, Title, Tagline, CTA
2. **SOCIAL PROOF** (Marquee) — "Trusted by" company logos
3. **BY THE NUMBERS** (Pinned) — Stats reveal on scroll
4. **CHAPTER 1: THE FOUNDATION** — Academic research journey
5. **CHAPTER 2: BUILDING REAL** — Industry experience timeline
6. **CHAPTER 3: THE IMPACT** — Real outcomes, metrics
7. **SKILLS & EXPERTISE** — Grid layout
8. **LATEST WRITING / RESEARCH** — Featured articles
9. **CONTACT / CTA** (Pinned) — Let's connect

### Scrollytelling Techniques

- **Section Pinning:** Each story chapter pins while content scrolls through
- **Progressive Reveals:** Elements fade/slide in based on scroll position
- **Parallax:** Background layers move at different speeds
- **Scroll Progress:** Visual indicator of journey progress

## Technical Implementation

### Stack (Preserved)
- Next.js 16.1.6 (App Router)
- React 19
- Tailwind CSS v4
- Framer Motion (for scroll animations)
- TypeScript

### Key Changes
- **Remove:** Three.js neural network (NeuralCanvas.tsx)
- **Add:** Scroll-triggered animations with Framer Motion
- **Update:** Color palette in globals.css
- **Update:** Typography to Playfair Display + Inter

### Animation Library
Use Framer Motion's `useScroll`, `useTransform`, and `useSpring` for scroll-linked animations.

## Components to Update/Create

| Component | Action |
|-----------|--------|
| Hero.tsx | Redesign with scroll-linking |
| Experience.tsx | Convert to scroll-linked timeline |
| Research.tsx | Create "The Foundation" chapter |
| Skills.tsx | Grid layout with reveal animations |
| globals.css | New color palette, typography |
| layout.tsx | Add Playfair Display font |
| SocialProof.tsx | NEW — marquee scroll |
| ByTheNumbers.tsx | NEW — stats section |
| Contact.tsx | Redesign |
| Footer.tsx | Update to match new theme |

## Success Criteria

1. Visual: Premium "royal" feel with emerald/gold palette
2. Scrollytelling: Smooth scroll-linked animations on all sections
3. Performance: 60fps animations, no layout shifts
4. Mobile: Responsive across all devices
5. Accessibility: Proper contrast ratios, keyboard navigation
