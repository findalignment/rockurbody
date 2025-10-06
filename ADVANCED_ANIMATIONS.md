# Advanced Animation System

This document outlines the comprehensive animation system implemented across Rock Your Body.

## 🎬 Features Implemented

### 1. Page Transitions
**Location:** `src/components/PageTransition.jsx`

Smooth fade + slide transitions between routes:
- Fade out current page
- Slide in new page horizontally
- Respects `prefers-reduced-motion`
- User toggle available

**Usage:**
```jsx
// Already integrated in App.jsx
<PageTransition>
  <Routes>...</Routes>
</PageTransition>
```

---

### 2. Multi-Layer Parallax Backgrounds
**Location:** `src/components/ParallaxBackground.jsx`

Creates depth with layered backgrounds that move at different speeds:
- Background shapes/textures move slower than foreground
- Hardware-accelerated with `transform3d`
- Uses `requestAnimationFrame` for smooth performance
- Debounced scroll handlers

**Usage:**
```jsx
import ParallaxBackground from './components/ParallaxBackground';

const layers = [
  {
    type: 'gradient',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #312e81 100%)',
    speed: 0.3,
    opacity: 0.2,
    zIndex: 1
  },
  {
    type: 'shape',
    className: 'w-96 h-96 bg-accent/10 rounded-full absolute top-20 right-10',
    speed: 0.5,
    opacity: 0.1,
    zIndex: 2
  }
];

<ParallaxBackground layers={layers}>
  <YourContent />
</ParallaxBackground>
```

---

### 3. Fluid Typography System
**Location:** `src/styles/fluidTypography.css`

Responsive text that scales smoothly across all screen sizes:
- Uses `clamp()` for min/max constraints
- Relative units (`vw`, `vh`, `%`)
- Consistent spacing scale

**CSS Variables:**
```css
--font-size-xs to --font-size-5xl
--spacing-xs to --spacing-2xl
--line-height-tight to --line-height-loose
```

**Usage:**
```jsx
<h1 className="fluid-text-4xl fluid-leading-tight">Hero Title</h1>
<p className="fluid-text-base fluid-leading-relaxed fluid-my-md">
  Body text with fluid spacing
</p>
```

---

### 4. Micro-Interactions

#### Animated Buttons
**Location:** `src/components/interactions/AnimatedButton.jsx`

- Hover scale (1.03)
- Shadow changes
- Color glow
- Tap feedback (scale 0.98)

```jsx
<AnimatedButton variant="primary" onClick={handleClick}>
  Click Me
</AnimatedButton>
```

**Variants:** `primary`, `secondary`, `accent`, `outline`, `ghost`

---

#### Animated Links
**Location:** `src/components/interactions/AnimatedLink.jsx`

- Underline slide animation on hover
- Smooth color transitions
- Works with React Router and external links

```jsx
<AnimatedLink to="/services">Learn More</AnimatedLink>
<AnimatedLink to="https://example.com" external>External Link</AnimatedLink>
```

---

#### Animated Cards
**Location:** `src/components/interactions/AnimatedCard.jsx`

- Elevate on hover
- Optional tilt effect
- Smooth shadow transitions

```jsx
<AnimatedCard enableTilt>
  <CardContent />
</AnimatedCard>
```

---

#### Animated Inputs
**Location:** `src/components/interactions/AnimatedInput.jsx`

- Floating labels
- Focus glow effect
- Error shake animation
- Smooth transitions

```jsx
<AnimatedInput 
  label="Email Address"
  type="email"
  error={errors.email}
/>
```

---

### 5. Loading States

#### Skeleton Loader
**Location:** `src/components/loading/SkeletonLoader.jsx`

Shimmer placeholders for content:

```jsx
<SkeletonLoader variant="text" count={3} />
<SkeletonLoader variant="card" width="100%" height="300px" />
<SkeletonLoader variant="circle" width="80px" />
```

**Variants:** `text`, `title`, `circle`, `rectangle`, `card`, `image`

---

#### Content Loader
**Location:** `src/components/loading/ContentLoader.jsx`

Fade + slide animation when content loads:

```jsx
<ContentLoader 
  isLoading={isLoading}
  skeleton={<SkeletonLoader variant="card" />}
>
  <YourContent />
</ContentLoader>
```

---

### 6. Chat Typing Animation
**Location:** `src/components/TypingText.jsx`

Displays text character-by-character or word-by-word:

```jsx
<TypingText 
  text="Hello! How can I help you today?"
  speed={30}
  mode="char"
  onComplete={() => console.log('Done typing')}
/>
```

**Modes:** `char` (character by character), `word` (word by word)

---

### 7. Accessibility & Performance

#### Reduced Motion Support
All animations respect:
1. OS-level `prefers-reduced-motion` setting
2. User preference via `AnimationToggle` component

When reduced motion is enabled:
- Page transitions: simple fade only
- Micro-interactions: instant state changes
- Parallax: disabled
- Typing animation: shows full text immediately

#### Performance Optimizations
- Hardware acceleration: `transform3d`, `will-change`
- `requestAnimationFrame` for scroll handlers
- Debounced/throttled events
- `IntersectionObserver` for scroll triggers
- Lazy loading of motion libraries (code splitting)

---

## 🎨 Animation Settings Toggle

Add to your site's footer or settings page:

```jsx
import AnimationToggle from './components/AnimationToggle';

<AnimationToggle className="my-4" />
```

Users can disable all animations. Setting persists via `localStorage`.

---

## 🚀 Best Practices

### CSS Performance
```css
/* ✅ Good - Hardware accelerated */
transform: translate3d(0, 20px, 0);
opacity: 0.5;

/* ❌ Avoid - Triggers layout */
top: 20px;
left: 50px;
```

### Timing Functions
Use `cubic-bezier` for natural motion:
```css
/* Slower entry, faster exit */
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
```

### Will-Change
Use sparingly on elements you're about to animate:
```css
.animating-element {
  will-change: transform, opacity;
}
```

Remove after animation completes.

---

## 📦 Dependencies

```json
{
  "framer-motion": "^11.x"
}
```

Install:
```bash
npm install framer-motion
```

---

## 🔄 Migration Guide

### Before (Static)
```jsx
<div className="bg-white p-6 rounded-lg">
  <h2>Title</h2>
  <p>Content</p>
</div>
```

### After (Animated)
```jsx
<AnimatedCard className="bg-white p-6">
  <h2 className="fluid-text-2xl">Title</h2>
  <p className="fluid-text-base">Content</p>
</AnimatedCard>
```

---

## 🎯 Next Steps

1. **Scroll-triggered animations:** Use `FadeInSection` (already exists)
2. **Stagger animations:** Animate lists with delays
3. **SVG path animations:** Draw icons/illustrations
4. **3D transforms:** Card flip effects
5. **Spring physics:** More natural motion

---

## 📚 Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [WCAG 2.1 - Animation from Interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html)
- [CSS Triggers](https://csstriggers.com/)
- [Web Animation Performance](https://web.dev/animations/)

---

**Note:** All animations are production-ready, accessible, and performant. They enhance UX without compromising usability or performance.

