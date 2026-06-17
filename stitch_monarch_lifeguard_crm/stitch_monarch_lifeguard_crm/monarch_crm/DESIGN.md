---
name: Monarch CRM
colors:
  surface: '#f8f9fb'
  surface-dim: '#d9dadc'
  surface-bright: '#f8f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f6'
  surface-container: '#edeef0'
  surface-container-high: '#e7e8ea'
  surface-container-highest: '#e1e2e4'
  on-surface: '#191c1e'
  on-surface-variant: '#424751'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f3'
  outline: '#727782'
  outline-variant: '#c2c6d2'
  surface-tint: '#1960a6'
  primary: '#004782'
  on-primary: '#ffffff'
  primary-container: '#185fa5'
  on-primary-container: '#c1d9ff'
  inverse-primary: '#a4c9ff'
  secondary: '#416089'
  on-secondary: '#ffffff'
  secondary-container: '#afcefe'
  on-secondary-container: '#385781'
  tertiary: '#005039'
  on-tertiary: '#ffffff'
  tertiary-container: '#006b4d'
  on-tertiary-container: '#7aecbe'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#a4c9ff'
  on-primary-fixed: '#001c39'
  on-primary-fixed-variant: '#004883'
  secondary-fixed: '#d4e3ff'
  secondary-fixed-dim: '#aac8f8'
  on-secondary-fixed: '#001c3a'
  on-secondary-fixed-variant: '#284870'
  tertiary-fixed: '#86f8c9'
  tertiary-fixed-dim: '#68dbae'
  on-tertiary-fixed: '#002115'
  on-tertiary-fixed-variant: '#00513a'
  background: '#f8f9fb'
  on-background: '#191c1e'
  surface-variant: '#e1e2e4'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  table-header:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  body-base:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  sidebar-width: 240px
  gutter: 24px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
  page-margin: 32px
---

## Brand & Style

The design system is engineered for operational excellence in high-stakes environments. It targets emergency service coordinators and administrators who require clarity, speed, and reliability. 

The aesthetic is **Corporate Modern** with a strong influence from **Minimalism**. It prioritizes information density and functional hierarchy over decorative elements. The UI evokes a sense of "calm authority"—professional, structured, and profoundly trustworthy. By utilizing a restrained color palette and precise alignment, the interface minimizes cognitive load during emergency management workflows, mirroring the efficiency of tools like Linear or Notion.

## Colors

The palette is anchored by a deep navy for structural reliability and an "ocean teal" for success states and safety-related accents.

- **Primary (#185fa5):** Used for primary actions and highlights.
- **Surface Secondary (#042c53):** Reserved for the global navigation sidebar to provide high contrast against the content area.
- **Accent/Success (#1d9e75):** Utilized for positive status indicators, active lifeguards, and "safe" certifications.
- **System Background (#f3f4f6):** A cool gray that provides a soft canvas for white cards to pop.
- **Borders (#e5e7eb):** Subtle gray outlines for containers to define structure without adding visual noise.

## Typography

This design system uses **Inter** exclusively to leverage its exceptional legibility in data-heavy interfaces.

- **Headlines:** Use semibold weights with slight negative letter-spacing for a modern, compact look.
- **Data Tables:** Table headers use a reduced font size with uppercase styling and increased tracking to differentiate them clearly from row data.
- **Body Text:** Set at 14px for optimal density in CRM environments, ensuring large amounts of text remain readable without excessive scrolling.

## Layout & Spacing

The layout utilizes a **Fixed Left Sidebar** model combined with a fluid content area.

- **Sidebar:** A constant 240px width, using the deep navy background to separate navigation from the workspace.
- **Content Area:** Follows a flexible grid. Content is housed within cards that use a 24px gutter.
- **Margins:** 32px padding on the main viewport ensures the interface feels spacious despite the data density.
- **Responsive Behavior:** On tablet, the sidebar collapses into an icon-only rail or a hidden drawer. On mobile, the layout reflows into a single column with a bottom navigation bar or top hamburger menu.

## Elevation & Depth

This design system follows a **Flat Design** philosophy with depth conveyed through tonal layering rather than heavy shadows.

- **Level 0:** Background surface (#f3f4f6).
- **Level 1:** Content cards. Pure white (#ffffff) with a 1px solid border (#e5e7eb). No box-shadow is used, keeping the interface crisp and clinical.
- **Active States:** Subtle 2px "focus" rings or slight shifts in background tint (e.g., #f9fafb for hover) are used to indicate interactivity.
- **Modals:** Use a heavy backdrop blur (12px) with a subtle, soft shadow to focus user attention during emergency entry workflows.

## Shapes

The shape language is disciplined and geometric.

- **Cards/Containers:** 8px corner radius provides a modern, approachable feel while maintaining professional structure.
- **Interactive Elements:** Buttons use a tighter 6px radius to look more "tool-like" and precise.
- **Status Pills:** Badges for "On Duty," "Available," or "Critical" use a 9999px (full) radius to distinguish them clearly from interactive buttons.

## Components

### Buttons
- **Primary:** Solid #042c53 (Deep Navy) with white text.
- **Secondary:** White background, #e5e7eb border, #185fa5 text.
- **Ghost:** Transparent background, primary color text, used for less frequent actions.

### Inputs & Fields
- 1px border (#e5e7eb), 6px radius.
- Height: 36px for standard fields.
- Background: #ffffff.

### Status Badges
- High-contrast pill shapes.
- "Active" uses #1d9e75 with white text or a soft teal background with dark teal text for lower priority info.

### Data Tables
- No vertical borders.
- Horizontal separators: 1px #f3f4f6.
- Row hover state: #f9fafb.

### Lists
- Standardized vertical padding (12px) for list items.
- Leading icons for quick visual categorization of emergency types or personnel roles.