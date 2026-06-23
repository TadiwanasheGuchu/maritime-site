---
name: Aquatic Rescue Pro
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#3e484f'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#6e7880'
  outline-variant: '#bdc8d0'
  surface-tint: '#00668a'
  primary: '#00668a'
  on-primary: '#ffffff'
  primary-container: '#29abe2'
  on-primary-container: '#003b53'
  inverse-primary: '#7bd0ff'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#595f64'
  on-tertiary: '#ffffff'
  tertiary-container: '#9aa1a5'
  on-tertiary-container: '#31383c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#dde3e8'
  tertiary-fixed-dim: '#c1c7cc'
  on-tertiary-fixed: '#161c20'
  on-tertiary-fixed-variant: '#41484c'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style

This design system is built for a safety-critical organization, evoking a sense of athletic precision, reliability, and maritime alertness. The brand personality is disciplined and vigilant, yet accessible. 

The visual style follows a **Corporate Modern** approach with **High-Contrast** accents. It utilizes the stark contrast between deep blacks and vibrant sky blues to create a clear visual hierarchy that prioritizes rapid information processing. The aesthetic is clean and expansive, mirroring the clarity of open water, with an emphasis on circularity and fluidity to match the provided brand mark.

## Colors

The palette is derived directly from the logo to ensure total brand cohesion. 

- **Primary (Sky Blue):** Used for primary actions, branding elements, and key status indicators. It represents the "professional aquatic" tone.
- **Secondary (Solid Black):** Reserved for high-impact typography and silhouettes, ensuring maximum legibility.
- **Tertiary (Water Tint):** A very pale blue used for background sections and subtle container fills.
- **Neutral:** A range of greys used for secondary text and borders, maintaining a clean and professional appearance without distracting from the primary sky blue.

## Typography

The design system utilizes **Montserrat** across all levels to maintain a bold, geometric, and modern feel. 

Headlines utilize a heavy weight (700-800) in Solid Black (#1a1a1a) to mimic the impactful "MONARCH" and "LIFEGUARD" lettering from the logo. Labels and small headers should occasionally utilize the primary blue to highlight key metadata or status updates. Uppercase styling is recommended for labels and navigation items to reflect the authoritative nature of emergency services.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop to maintain a structured, controlled environment for data and service information. 

- **Desktop:** 12-column grid with a 1280px max-width.
- **Tablet:** 8-column grid with 24px gutters.
- **Mobile:** 4-column grid with 16px margins.

The spacing rhythm is built on an 8px base unit. Generous white space is encouraged to prevent visual clutter, allowing for fast scanning during critical use cases.

## Elevation & Depth

To maintain the clean, aquatic aesthetic, this design system avoids heavy drop shadows. Instead, it uses **Tonal Layers** and **Low-Contrast Outlines**.

Depth is achieved through subtle shifts in background color (using the Tertiary tint) and thin 1px borders in a soft neutral grey. When an element must appear elevated (like a floating action button), use a very diffused, low-opacity shadow tinted with the primary blue (e.g., `rgba(41, 171, 226, 0.15)`) to maintain the "light" and "airy" feel of the brand.

## Shapes

The shape language is defined by **Round Full (Pill-shaped)** geometry. This directly mirrors the circular boundary of the logo and the fluid, organic lines of the water waves. All buttons, input fields, and tags must use fully rounded corners. Larger containers like cards should use a `rounded-xl` (1.5rem / 24px) setting to maintain a soft but structural appearance.

## Components

- **Buttons:** Primary buttons are pill-shaped with a Solid Blue fill and White text. Secondary buttons use a Blue outline with Blue text.
- **Inputs:** Text fields should be fully rounded with a light grey border that shifts to Solid Blue on focus.
- **Chips/Badges:** Use pill-shaped backgrounds in the Tertiary Blue tint with Primary Blue text for status indicators.
- **Cards:** White backgrounds with a subtle 1px border or a very soft Primary-tinted shadow. Content inside should follow the 24px internal padding rule.
- **Icons:** Use thick-stroke, rounded-end icons to match the weight of the Montserrat typeface.
- **Progress Bars:** Utilize the wave-like curves for loading states or data visualization to reinforce the aquatic theme.