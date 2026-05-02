---
name: Kawaii Tech Portfolio
colors:
  surface: '#fff8f8'
  surface-dim: '#e0d8d8'
  surface-bright: '#fff8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf2f2'
  surface-container: '#f4ecec'
  surface-container-high: '#efe6e7'
  surface-container-highest: '#e9e0e1'
  on-surface: '#1e1b1b'
  on-surface-variant: '#4f4446'
  inverse-surface: '#332f30'
  inverse-on-surface: '#f7efef'
  outline: '#817476'
  outline-variant: '#d3c3c5'
  surface-tint: '#78555e'
  primary: '#78555e'
  on-primary: '#ffffff'
  primary-container: '#ffd1dc'
  on-primary-container: '#7a5761'
  inverse-primary: '#e7bbc6'
  secondary: '#2f6a3f'
  on-secondary: '#ffffff'
  secondary-container: '#b2f2bb'
  on-secondary-container: '#357044'
  tertiary: '#605a7c'
  on-tertiary: '#ffffff'
  tertiary-container: '#e1d8ff'
  on-tertiary-container: '#635c7e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9e2'
  primary-fixed-dim: '#e7bbc6'
  on-primary-fixed: '#2d141c'
  on-primary-fixed-variant: '#5e3e47'
  secondary-fixed: '#b2f2bb'
  secondary-fixed-dim: '#96d5a0'
  on-secondary-fixed: '#00210b'
  on-secondary-fixed-variant: '#145129'
  tertiary-fixed: '#e6deff'
  tertiary-fixed-dim: '#cac1e8'
  on-tertiary-fixed: '#1c1735'
  on-tertiary-fixed-variant: '#484263'
  background: '#fff8f8'
  on-background: '#1e1b1b'
  surface-variant: '#e9e0e1'
typography:
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1140px
  gutter: 24px
  margin-mobile: 20px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

This design system establishes a "Professional Kawaii" aesthetic for software engineers. It balances technical competence with an approachable, high-trust personality. The style leverages **Neomorphism-lite**—a refined take on soft UI that uses extremely subtle shadows and highlights to create "squishy," tactile surfaces without the accessibility issues of traditional neomorphism.

The target audience includes hiring managers and collaborators in the creative tech, startup, and indie-dev spaces. The emotional response is intended to be calm, optimistic, and welcoming. High-quality whitespace and precision alignment ensure that the "cute" elements feel like intentional design choices rather than juvenile ones.

## Colors

The palette is anchored by a high-brightness base to maintain a clean, "breathable" professional feel.
- **Primary (Pastel Pink):** Used for primary calls-to-action and key brand moments.
- **Secondary (Mint Green):** Used for success states, "available for work" indicators, and secondary accents.
- **Tertiary (Lavender):** Used for decorative elements, tags, and specialized categories.
- **Neutral:** A deep soft gray (#4A4A4A) is used for text instead of pure black to maintain the softness of the visual language.

Gradients should be used sparingly, strictly transitioning between a pastel accent and a slightly lighter version of itself (e.g., #FFD1DC to #FFF0F3) at a 135-degree angle.

## Typography

This design system utilizes **Plus Jakarta Sans** for its friendly, geometric, and inherently "round" letterforms which mimic the Quicksand aesthetic while maintaining better legibility for professional content. 

**Space Grotesk** is used for monospaced needs and labels. Its slightly quirky, technical character provides the necessary "engineer" feel without breaking the soft aesthetic. Use tight letter spacing for large headlines and generous line heights for body copy to enhance the airy, clean feel.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop, centered on the viewport to create a sense of focus and containment. 
- Use a 12-column grid for desktop with 24px gutters.
- Vertical rhythm is built on an 8px base unit.
- Generous padding (at least 32px) should be applied inside cards to reinforce the soft, spacious "Kawaii" vibe.
- Sections should be separated by significant whitespace (80px–120px) to prevent the UI from feeling cluttered or overwhelming.

## Elevation & Depth

Depth is achieved through **Neomorphism-lite**. Instead of heavy, dark shadows, use two specific layers:
1.  **Bottom-Right Shadow:** 6px 6px 20px rgba(0, 0, 0, 0.03).
2.  **Top-Left Highlight:** -6px -6px 20px rgba(255, 255, 255, 0.8).

On hover, elements should appear to "lift" by slightly increasing the shadow blur and decreasing its spread, or "press" by switching to an inner-shadow (inset) effect. Backgrounds for containers should be slightly off-white (#F8F9FA) to allow the white highlights to remain visible.

## Shapes

The shape language is defined by **Pill-shaped (Level 3)** roundedness. 
- **Buttons and Tags:** Use full-pill radius (999px).
- **Cards:** Use `rounded-xl` (3rem/48px) to emphasize the soft, approachable nature of the containers.
- **Form Inputs:** Should match the button radius for consistency.
- **Icons:** Must feature rounded terminals and thick strokes (2px+) to match the weight of the typography. Avoid sharp 90-degree corners in any custom illustrations or SVG icons.

## Components

### Buttons
Primary buttons use the pastel pink background with white text and a subtle drop shadow. Secondary buttons use a thick 2px border in lavender or mint with a transparent background. All buttons should have a high-bounce transition effect on hover (transform: scale(1.05)).

### Cards
Cards are white (#FFFFFF) against the light gray background (#F8F9FA). They feature the dual-shadow neomorphic effect and extreme 48px corner radius. Project cards should include a subtle colored "glow" or gradient border matching the project's primary technology.

### Chips/Tags
Used for "Skills" or "Tools." These should have a light pastel fill (10% opacity of the accent color) with a deep-toned text color of the same hue. 

### Code Blocks
For the software engineer's portfolio, code blocks should not be dark mode. They should use a very light lavender background, Space Grotesk font, and pastel-toned syntax highlighting.

### Input Fields
Inputs are recessed into the page using an inner-shadow effect (inset) rather than a traditional border, creating a "soft-dent" look that is characteristic of this design system's neomorphic influence.