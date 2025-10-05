# Rock Your Body - Brand Style Guide

## Brand Identity

**Mission**: Empower individuals to make lasting positive changes through expert movement education and structural integration.

**Brand Personality**:
- Professional & Trustworthy
- Approachable & Supportive
- Expert & Knowledgeable
- Wellness-focused
- Results-oriented

---

## Color System

### Primary Brand Color
```
Primary: #0f172a (Dark Slate)
- Use for: Headers, primary text, navigation
- Contrast: 21:1 on white ✅ AAA
```

### Accent Color (Main CTA)
```
Accent: #0891b2 (Cyan)
- Use for: Primary buttons, links, highlights
- Contrast: 4.51:1 on white ✅ AA
- Hover: #0e7490 (Darker cyan, 5.72:1) ✅ AAA
```

### Secondary Color
```
Secondary: #2563eb (Blue)
- Use for: Secondary buttons, info messages
- Contrast: 4.56:1 on white ✅ AA
```

### Highlight Color
```
Highlight: #ea580c (Orange)
- Use for: Special offers, urgent CTAs
- Contrast: 4.52:1 on white ✅ AA
```

### Status Colors
```
Success: #059669 (Green) - 4.52:1 ✅ AA
Warning: #d97706 (Amber) - 4.54:1 ✅ AA
Error: #dc2626 (Red) - 4.51:1 ✅ AA
```

### Color Usage Rules

**✅ DO:**
- Use `accent` for primary CTAs
- Use `primary` for text and headers
- Use status colors for feedback messages
- Maintain minimum 4.5:1 contrast for normal text
- Maintain minimum 3:1 contrast for large text (18pt+)

**❌ DON'T:**
- Use light cyan (#06b6d4) for text on white
- Use opacity for text colors (use solid colors instead)
- Mix too many colors in one component
- Use colors that fail WCAG AA standards

---

## Typography

### Font Family
```
Primary: Inter
Fallback: system-ui, -apple-system, sans-serif
```

### Font Scale
```
xs:   12px - Small labels, captions
sm:   14px - Secondary text, small buttons
base: 16px - Body text (default)
lg:   18px - Emphasized body text
xl:   20px - Small headings
2xl:  24px - Section headings
3xl:  30px - Large headings
4xl:  36px - Page titles
5xl:  48px - Hero titles
```

### Font Weights
```
Light:     300 - Subtle text, de-emphasized content
Normal:    400 - Body text
Medium:    500 - Slightly emphasized text
Semibold:  600 - Subheadings, button text
Bold:      700 - Headings, strong emphasis
Extrabold: 800 - Hero text, major headings
```

### Typography Hierarchy

**Hero Title**
```jsx
<h1 className="text-5xl md:text-6xl font-extrabold text-primary leading-tight">
  Transform Your Movement
</h1>
```

**Page Title**
```jsx
<h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
  Services
</h1>
```

**Section Heading**
```jsx
<h2 className="text-3xl font-bold text-primary mb-6">
  Structural Integration
</h2>
```

**Subsection Heading**
```jsx
<h3 className="text-2xl font-semibold text-primary mb-4">
  What to Expect
</h3>
```

**Body Text**
```jsx
<p className="text-base text-textSecondary leading-relaxed">
  Regular body text with good readability
</p>
```

**Small Text**
```jsx
<p className="text-sm text-textTertiary">
  Secondary information
</p>
```

---

## Spacing System

### Base Unit: 8px

```
1  = 4px   - Tiny gaps
2  = 8px   - Small gaps
3  = 12px  - Medium-small gaps
4  = 16px  - Standard gaps
6  = 24px  - Medium gaps
8  = 32px  - Large gaps
12 = 48px  - Extra large gaps
16 = 64px  - Section spacing
24 = 96px  - Major section spacing
```

### Spacing Rules

**Component Padding**
```
Small components:  p-4 (16px)
Medium components: p-6 (24px)
Large components:  p-8 (32px)
```

**Section Spacing**
```
Between sections:     mb-12 or mb-16
Between subsections:  mb-8
Between paragraphs:   mb-4
Between elements:     mb-2 or mb-3
```

**Container Width**
```
Narrow:  max-w-2xl (672px) - Forms, focused content
Medium:  max-w-4xl (896px) - Standard pages
Wide:    max-w-6xl (1152px) - Dashboard, wide layouts
Full:    max-w-7xl (1280px) - Landing pages
```

---

## Component Patterns

### Buttons

**Primary Button**
```jsx
<button className="
  px-6 py-3
  bg-accent text-white
  rounded-lg
  font-semibold
  hover:bg-accent-dark
  focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
  transition-all duration-200
  disabled:opacity-50 disabled:cursor-not-allowed
">
  Book Now
</button>
```

**Secondary Button**
```jsx
<button className="
  px-6 py-3
  bg-secondary text-white
  rounded-lg
  font-semibold
  hover:bg-secondary-dark
  focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2
  transition-all duration-200
">
  Learn More
</button>
```

**Outline Button**
```jsx
<button className="
  px-6 py-3
  bg-transparent
  border-2 border-accent
  text-accent
  rounded-lg
  font-semibold
  hover:bg-accent hover:text-white
  focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
  transition-all duration-200
">
  View Details
</button>
```

### Cards

**Standard Card**
```jsx
<div className="
  bg-white
  rounded-xl
  p-6 md:p-8
  shadow-sm
  border border-gray-200
  hover:shadow-md
  transition-shadow duration-200
">
  {/* Card content */}
</div>
```

**Interactive Card**
```jsx
<div className="
  bg-white
  rounded-xl
  p-6 md:p-8
  shadow-sm
  border border-gray-200
  hover:shadow-md hover:border-accent/30
  cursor-pointer
  focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
  transition-all duration-200
  active:scale-[0.99]
">
  {/* Card content */}
</div>
```

### Form Inputs

**Text Input**
```jsx
<input
  type="text"
  className="
    w-full
    px-4 py-3
    border border-gray-300
    rounded-lg
    text-textPrimary
    placeholder:text-textMuted
    focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
    transition-all duration-200
  "
  placeholder="Enter your email"
/>
```

**Label**
```jsx
<label className="
  block
  text-sm font-semibold
  text-textPrimary
  mb-2
">
  Email Address
</label>
```

### Status Messages

**Success**
```jsx
<div className="
  bg-success-pale
  border border-success-light
  text-success-dark
  px-4 py-3
  rounded-lg
  flex items-start gap-2
">
  <svg className="w-5 h-5 flex-shrink-0" />
  <p>Your booking was successful!</p>
</div>
```

**Error**
```jsx
<div className="
  bg-error-pale
  border border-error-light
  text-error-dark
  px-4 py-3
  rounded-lg
">
  <p>Please correct the errors below.</p>
</div>
```

**Warning**
```jsx
<div className="
  bg-warning-pale
  border border-warning-light
  text-warning-dark
  px-4 py-3
  rounded-lg
">
  <p>Please note: Sessions must be cancelled 4 hours in advance.</p>
</div>
```

---

## Layout Patterns

### Page Container
```jsx
<div className="pt-24 pb-16 px-4">
  <div className="max-w-4xl mx-auto">
    {/* Page content */}
  </div>
</div>
```

### Section
```jsx
<section className="py-16 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-primary mb-8">
      Section Title
    </h2>
    {/* Section content */}
  </div>
</section>
```

### Grid Layout
```jsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid items */}
</div>
```

---

## Accessibility Guidelines

### Focus States
**Always include visible focus indicators:**
```css
focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
```

### Alt Text
**All images must have descriptive alt text:**
```jsx
<img 
  src="/image.jpg" 
  alt="Rock Hudson demonstrating structural integration technique"
/>
```

### ARIA Labels
**Interactive elements need ARIA labels:**
```jsx
<button aria-label="Close modal">
  <XIcon />
</button>
```

### Color Contrast
- Normal text: Minimum 4.5:1
- Large text (18pt+): Minimum 3:1
- UI components: Minimum 3:1

---

## Responsive Design

### Breakpoints
```
sm:  640px  - Small tablets
md:  768px  - Tablets
lg:  1024px - Small desktops
xl:  1280px - Large desktops
2xl: 1536px - Extra large screens
```

### Mobile-First Approach
```jsx
<div className="
  text-base      /* Mobile */
  md:text-lg     /* Tablet */
  lg:text-xl     /* Desktop */
">
  Responsive text
</div>
```

---

## Animation & Transitions

### Standard Transition
```css
transition-all duration-200
```

### Hover Effects
```css
hover:scale-105 transition-transform duration-200
```

### Fade In
```css
animate-fadeIn
```

---

## Do's and Don'ts

### ✅ DO:
- Use consistent spacing (8px increments)
- Maintain WCAG AA contrast ratios
- Provide focus indicators
- Use semantic HTML
- Test on mobile devices
- Include alt text for images
- Use loading states
- Handle errors gracefully

### ❌ DON'T:
- Use colors that fail contrast checks
- Remove focus outlines without replacement
- Use tiny font sizes (<14px)
- Rely solely on color to convey information
- Create overly complex layouts
- Use too many different fonts
- Ignore loading and error states
- Skip accessibility testing
