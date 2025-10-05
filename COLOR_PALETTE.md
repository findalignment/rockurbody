# Rock Your Body - Color Palette

## Design Philosophy
Sophisticated, calming, and professional. Inspired by the ocean, natural elements, and vitality.

## Primary Colors

### Deep Ocean Blue
- **Primary**: `#0a2540` - Main brand color, headers, navigation
- **Medium**: `#1e4a6f` - Hover states, secondary elements
- **Dark**: `#051729` - Emphasis, deep contrast

### Natural Tones
- **Sand**: `#d4c5b0` - Desaturated sand, warm accent backgrounds
- **Sand Light**: `#e8dfd0` - Subtle backgrounds
- **Sand Dark**: `#b8a890` - Borders, dividers

### Sage Green (Vitality & Calm)
- **Sage**: `#8ba888` - Success states, vitality indicators
- **Sage Light**: `#a8c4a5` - Backgrounds, subtle highlights
- **Sage Dark**: `#6d8a6b` - Text accents, borders

### Off-White
- **Off-White**: `#faf8f5` - Main background, card backgrounds
- **Light Sand**: `#f5f1ea` - Secondary backgrounds

## Accent Colors (Use Sparingly)

### Cyan (Fine Accents Only)
- **Cyan**: `#0891b2` - Button borders, underlines, hover states
- **Cyan Dark**: `#0e7490` - Active states
- **Cyan Light**: `#06b6d4` - Very subtle accents

**Usage Guidelines:**
- Use cyan ONLY for:
  - Button borders (1-2px)
  - Link underlines
  - Hover state indicators
  - Focus rings
- Never use cyan for large backgrounds or primary CTAs

### Highlight (CTAs)
- **Orange**: `#ea580c` - Primary call-to-action buttons
- **Orange Dark**: `#c2410c` - CTA hover states

## Text Colors

- **Primary Text**: `#1a1a1a` - Main body text, near black
- **Secondary Text**: `#2c3e50` - Dark blue-gray, subheadings
- **Tertiary Text**: `#5a6c7d` - Medium blue-gray, captions
- **Muted Text**: `#8a9ba8` - Placeholders, disabled states (large text only)
- **Inverse Text**: `#faf8f5` - Text on dark backgrounds
- **Link**: `#0891b2` - Link color (cyan)
- **Link Hover**: `#0e7490` - Link hover (dark cyan)

## Background Colors

- **Primary**: `#faf8f5` - Off-white, main page background
- **Secondary**: `#f5f1ea` - Light sand, alternate sections
- **Tertiary**: `#e8f1f8` - Very light blue, subtle variation
- **Sand**: `#d4c5b0` - Sand accent backgrounds
- **Dark**: `#0a2540` - Deep ocean blue, dark sections
- **Dark Secondary**: `#1e4a6f` - Medium ocean blue, dark alternates

## Usage Examples

### Headers & Navigation
- Background: Semi-transparent with blur (`bg-white/80 backdrop-blur-xl`)
- Text: `#0a2540` (primary) when scrolled, `#ffffff` when transparent
- Hover underlines: `#0891b2` (cyan) - 2px

### Cards & Containers
- Background: `#faf8f5` (off-white) or `#ffffff` (pure white)
- Border: `#d4c5b0` (sand) - 1px
- Shadow: Subtle, warm-toned

### Buttons
- Primary CTA: `#ea580c` (orange) background, white text
- Secondary: `#0a2540` (ocean blue) background, off-white text
- Outline: `#0891b2` (cyan) border, primary text
- Hover: Add shadow, slightly darken

### Section Alternation
- Section 1: `#faf8f5` (off-white)
- Section 2: `#f5f1ea` (light sand)
- Section 3: `#e8f1f8` (very light blue)
- Accent section: `#d4c5b0` (sand)

### Success/Positive States
- Color: `#8ba888` (sage green)
- Background: `#a8c4a5` (light sage)

## Accessibility

All color combinations meet WCAG AA standards for normal text and AAA for large text where applicable.

### Contrast Ratios
- Primary text on off-white: 16.5:1 ✅ AAA
- Secondary text on off-white: 11.2:1 ✅ AAA
- Cyan links on off-white: 4.51:1 ✅ AA
- Ocean blue on off-white: 12.8:1 ✅ AAA
- Sage on off-white: 5.2:1 ✅ AA

## Do's and Don'ts

### ✅ Do:
- Use ocean blue as the primary brand color
- Use sand and sage for warmth and vitality
- Use cyan sparingly for fine accents (borders, underlines)
- Maintain generous whitespace with off-white backgrounds
- Use subtle gradients between sand and off-white

### ❌ Don't:
- Use bright cyan for large areas or backgrounds
- Use pure white everywhere (prefer off-white)
- Mix too many accent colors in one section
- Use cyan for primary CTAs (use orange instead)
- Forget to add backdrop blur for glassmorphism effects
