# Animation System Documentation

## Overview
A comprehensive animation system using CSS transitions, IntersectionObserver, and micro-interactions for a smooth, responsive user experience.

## Core Principles
1. **Natural Motion**: cubic-bezier(0.22, 1, 0.36, 1) for smooth, natural animations
2. **Performance**: Transform-only animations (no layout properties)
3. **Progressive Enhancement**: Animations enhance but don't block functionality
4. **Accessibility**: Respects `prefers-reduced-motion`

---

## Components

### 1. ScrollReveal
Animates elements when they enter the viewport.

```jsx
import ScrollReveal from './components/animations/ScrollReveal';

<ScrollReveal direction="up" delay={100}>
  <h2>This slides up when scrolled into view</h2>
</ScrollReveal>
```

**Props:**
- `direction`: 'up', 'down', 'left', 'right', 'fade'
- `delay`: ms delay before animation
- `distance`: px to move (default 40)
- `threshold`: Intersection threshold 0-1 (default 0.1)

**Usage Examples:**
```jsx
{/* Fade in */}
<ScrollReveal direction="fade">
  <p>Content fades in</p>
</ScrollReveal>

{/* Slide up with delay */}
<ScrollReveal direction="up" delay={200} distance={60}>
  <Card />
</ScrollReveal>

{/* Slide from left */}
<ScrollReveal direction="left">
  <Image />
</ScrollReveal>
```

---

### 2. InteractiveButton
Enhanced button with ripple effects, hover scale, and smooth transitions.

```jsx
import InteractiveButton from './components/animations/InteractiveButton';

<InteractiveButton variant="primary" size="md" onClick={handleClick}>
  Click Me
</InteractiveButton>
```

**Props:**
- `variant`: 'primary', 'secondary', 'outline'
- `size`: 'sm', 'md', 'lg'
- `onClick`: Click handler
- `href`: Link URL (renders as anchor)
- `external`: Opens in new tab
- `disabled`: Disabled state

**Features:**
- ✅ Ripple effect on click
- ✅ Hover scale (1.05x)
- ✅ Active scale (0.95x)
- ✅ Shadow elevation on hover
- ✅ Smooth color transitions

---

### 3. AnimatedCard
Card with hover lift, subtle rotation, and smooth transitions.

```jsx
import AnimatedCard from './components/animations/AnimatedCard';

<AnimatedCard lift overlap>
  <h3>Card Title</h3>
  <p>Card content</p>
</AnimatedCard>
```

**Props:**
- `lift`: Enable hover lift effect (default true)
- `overlap`: Enable negative margin for overlapping sections
- `className`: Additional CSS classes

**Features:**
- ✅ Hover lift and scale (1.02x)
- ✅ Shadow elevation
- ✅ Can overlap section boundaries (-mt-16 md:-mt-20)
- ✅ Smooth 500ms transitions

---

### 4. AnimatedInput
Input field with focus transitions and label animations.

```jsx
import AnimatedInput from './components/animations/AnimatedInput';

<AnimatedInput
  label="Email Address"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

**Props:**
- `label`: Floating label text
- `type`: Input type
- `placeholder`: Placeholder text
- `value`: Input value
- `onChange`: Change handler

**Features:**
- ✅ Floating label animation
- ✅ Focus border color change
- ✅ Subtle scale on focus (1.01x)
- ✅ Shadow on focus
- ✅ Hover border transition

---

### 5. AnimatedLink
Link with underline slide animation.

```jsx
import AnimatedLink from './components/animations/AnimatedLink';

<AnimatedLink to="/about" underline icon={<ArrowIcon />}>
  Learn More
</AnimatedLink>
```

**Props:**
- `to`: Link destination
- `underline`: Show underline animation (default true)
- `icon`: Optional icon component
- `className`: Additional CSS classes

**Features:**
- ✅ Underline slides in from left on hover
- ✅ Icon slides right on hover
- ✅ Color transition
- ✅ 500ms cubic-bezier timing

---

## Usage Examples

### Page with Scroll Reveals
```jsx
function About() {
  return (
    <PageLayout>
      <ScrollReveal direction="fade">
        <h1>About Us</h1>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <p>Our story...</p>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={200}>
        <AnimatedCard overlap>
          <h2>Our Mission</h2>
        </AnimatedCard>
      </ScrollReveal>
    </PageLayout>
  );
}
```

### Form with Animated Inputs
```jsx
function ContactForm() {
  return (
    <form>
      <AnimatedInput
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      
      <AnimatedInput
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <InteractiveButton variant="primary" type="submit">
        Send Message
      </InteractiveButton>
    </form>
  );
}
```

### Overlapping Sections
```jsx
<section className="bg-gradient-to-b from-primary to-secondary py-24">
  <h2>Our Services</h2>
</section>

<AnimatedCard overlap>
  {/* This card overlaps the section above */}
  <h3>Featured Service</h3>
</AnimatedCard>
```

---

## Custom Timing Functions

### Default (Natural Motion)
```css
cubic-bezier(0.22, 1, 0.36, 1)
```
Slightly slower entry, faster exit. Best for most animations.

### Quick Entry
```css
cubic-bezier(0.4, 0, 0.2, 1)
```
Material Design standard easing.

### Bounce
```css
cubic-bezier(0.68, -0.55, 0.265, 1.55)
```
Adds playful bounce effect.

---

## Accessibility

All animations respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Add this to your global CSS to ensure accessibility compliance.

---

## Performance Tips

1. **Use transform only** - Avoid animating layout properties
2. **Add will-change** - For frequently animated elements
3. **Remove will-change after** - Don't leave it active
4. **Batch animations** - Group simultaneous animations
5. **Lazy load offscreen** - Don't animate what's not visible

---

## Migration Guide

### Replace existing buttons:
```jsx
// Before
<button className="px-6 py-3 bg-accent">
  Click Me
</button>

// After
<InteractiveButton variant="primary">
  Click Me
</InteractiveButton>
```

### Add scroll reveals:
```jsx
// Before
<div className="content">
  <h2>Title</h2>
</div>

// After
<ScrollReveal direction="up">
  <h2>Title</h2>
</ScrollReveal>
```

### Update cards:
```jsx
// Before
<div className="bg-white p-8 rounded-2xl">
  Content
</div>

// After
<AnimatedCard>
  Content
</AnimatedCard>
```

