# Animation & Interaction Guide

## Overview
This guide covers the animation system implemented across Rock Your Body's website, including fade-in effects, parallax scrolling, magnetic buttons, and hover interactions.

## Components

### 1. FadeInSection
Smoothly fades in content when it enters the viewport with a 0.4s ease transition.

**Props:**
- `children` - Content to animate
- `className` - Additional CSS classes
- `delay` - Delay before animation starts (ms)
- `direction` - Animation direction: 'up', 'down', 'left', 'right', 'none'

**Usage:**
```jsx
import FadeInSection from '../components/FadeInSection';

<FadeInSection direction="up" delay={100}>
  <h2>This will fade in from below</h2>
</FadeInSection>
```

**Best Practices:**
- Use `direction="up"` for most content (natural reading flow)
- Add `delay` to stagger multiple elements (100ms, 200ms, 300ms)
- Use `direction="none"` for pure fade without movement
- Keep delays under 500ms to avoid feeling sluggish

---

### 2. ParallaxSection
Creates subtle parallax effect on background elements for depth.

**Props:**
- `children` - Section content
- `backgroundImage` - Background image URL
- `backgroundColor` - Background color (fallback)
- `speed` - Parallax speed (0.1 = slow, 0.5 = fast)
- `className` - Additional CSS classes

**Usage:**
```jsx
import ParallaxSection from '../components/ParallaxSection';

<ParallaxSection 
  backgroundColor="#faf8f5"
  backgroundImage="/hero-image.jpg"
  speed={0.3}
  className="py-20"
>
  <div className="max-w-6xl mx-auto">
    {/* Your content */}
  </div>
</ParallaxSection>
```

**Best Practices:**
- Use `speed={0.2-0.3}` for subtle, professional effect
- Higher speeds (0.4-0.5) for hero sections
- Always provide `backgroundColor` as fallback
- Use sparingly (1-2 sections per page)
- Works best with large background images

---

### 3. AnimatedCard
Card component that lifts on hover with smooth shadow transitions.

**Props:**
- `children` - Card content
- `className` - Additional CSS classes
- `clickable` - Whether card is clickable
- `onClick` - Click handler
- `glassmorphism` - Apply glassmorphism effect (semi-transparent with blur)

**Usage:**
```jsx
import AnimatedCard from '../components/AnimatedCard';

<AnimatedCard glassmorphism clickable onClick={handleClick}>
  <h3>Service Title</h3>
  <p>Description</p>
  <button>Learn More</button>
</AnimatedCard>
```

**Best Practices:**
- Use `glassmorphism={true}` for luxury product tiles
- Set `clickable={true}` if entire card is interactive
- Lifts 8px on hover with enhanced shadow
- Perfect for pricing cards, service offerings, testimonials

---

### 4. AnimatedButton
Button with magnetic pull effect and gradient hover animations.

**Props:**
- `children` - Button text/content
- `variant` - 'primary', 'secondary', 'outline', 'ghost', 'cta'
- `size` - 'sm', 'md', 'lg'
- `to` - React Router link destination
- `href` - External link URL
- `onClick` - Click handler
- `className` - Additional CSS classes
- `magnetic` - Enable magnetic effect (default: true)
- `gradient` - Enable gradient hover (default: true)
- `disabled` - Disabled state

**Usage:**
```jsx
import AnimatedButton from '../components/AnimatedButton';

{/* Internal link */}
<AnimatedButton to="/pricing" variant="primary" size="lg">
  View Pricing
</AnimatedButton>

{/* External link */}
<AnimatedButton href="https://cal.com" variant="cta" size="md">
  Book Now
</AnimatedButton>

{/* Button with click handler */}
<AnimatedButton onClick={handleSubmit} variant="secondary">
  Submit
</AnimatedButton>
```

**Variants:**
- `primary` - Ocean blue gradient (primary → secondary)
- `secondary` - Sage green, calm and inviting
- `outline` - Transparent with cyan border (subtle accent)
- `ghost` - Transparent, minimal hover effect
- `cta` - Orange gradient, high-contrast call-to-action

**Best Practices:**
- Use `variant="cta"` for primary actions (Book Now, Purchase)
- Use `variant="primary"` for secondary actions (Learn More, View Details)
- Use `variant="outline"` for tertiary actions (Cancel, Back)
- Magnetic effect works best on desktop (automatically disabled on mobile)
- Button scales slightly (1.02x) on hover for tactile feedback

---

## Implementation Examples

### Pricing Page
```jsx
import FadeInSection from '../components/FadeInSection';
import AnimatedCard from '../components/AnimatedCard';
import AnimatedButton from '../components/AnimatedButton';
import ParallaxSection from '../components/ParallaxSection';

function Pricing() {
  return (
    <PageLayout>
      <ParallaxSection 
        backgroundColor="#faf8f5"
        speed={0.2}
        className="pt-24 pb-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <FadeInSection direction="up">
            <h1>Pricing</h1>
          </FadeInSection>
          
          <FadeInSection delay={100}>
            <div className="grid md:grid-cols-3 gap-6">
              <AnimatedCard glassmorphism>
                <h3>Basic Package</h3>
                <p className="text-3xl font-bold text-sage">$180</p>
                <p>Perfect for getting started</p>
                <AnimatedButton variant="cta" className="w-full">
                  Purchase
                </AnimatedButton>
              </AnimatedCard>
              
              {/* More cards... */}
            </div>
          </FadeInSection>
        </div>
      </ParallaxSection>
    </PageLayout>
  );
}
```

### Services Page
```jsx
<FadeInSection direction="up">
  <h2>Our Services</h2>
</FadeInSection>

<div className="grid md:grid-cols-2 gap-8">
  <FadeInSection delay={100} direction="left">
    <AnimatedCard>
      <h3>Movement Education</h3>
      <p>Learn to move with ease and confidence</p>
      <AnimatedButton to="/services/movement" variant="primary">
        Learn More
      </AnimatedButton>
    </AnimatedCard>
  </FadeInSection>
  
  <FadeInSection delay={200} direction="right">
    <AnimatedCard>
      <h3>Structural Integration</h3>
      <p>Deep fascial work for lasting change</p>
      <AnimatedButton to="/services/structural" variant="primary">
        Learn More
      </AnimatedButton>
    </AnimatedCard>
  </FadeInSection>
</div>
```

### Hero Section
```jsx
<ParallaxSection 
  backgroundImage="/hero-background.jpg"
  speed={0.4}
  className="min-h-screen flex items-center"
>
  <div className="max-w-4xl mx-auto text-center">
    <FadeInSection direction="up">
      <h1 className="text-6xl font-bold text-white mb-6">
        Move Better. Feel Better.
      </h1>
    </FadeInSection>
    
    <FadeInSection delay={200} direction="up">
      <p className="text-xl text-white/90 mb-8">
        Transform your movement patterns and unlock your body's potential
      </p>
    </FadeInSection>
    
    <FadeInSection delay={400} direction="up">
      <AnimatedButton variant="cta" size="lg" to="/book">
        Book Your Session
      </AnimatedButton>
    </FadeInSection>
  </div>
</ParallaxSection>
```

---

## Performance Considerations

### Intersection Observer
- `FadeInSection` uses Intersection Observer API for efficient scroll detection
- Only animates when elements are near viewport (50px margin)
- Automatically cleans up observers on unmount

### Parallax Optimization
- `ParallaxSection` uses `requestAnimationFrame` for smooth 60fps animations
- Throttles scroll events to prevent performance issues
- Only calculates parallax when section is in viewport

### Magnetic Button
- Mouse tracking is throttled and only active on hover
- Magnetic effect is subtle (0.2x strength) to avoid distraction
- Automatically resets position on mouse leave

---

## Animation Timing

### Standard Durations
- **Fade-in**: 400ms (0.4s) - smooth, not too fast or slow
- **Hover effects**: 300ms - responsive but not jarring
- **Magnetic pull**: Instant tracking with smooth reset
- **Card lift**: 400ms - matches fade-in for consistency

### Easing Functions
- **Fade-in**: `ease-out` - starts fast, ends slow (natural deceleration)
- **Hover**: `ease-out` - responsive feel
- **Parallax**: `ease-out` - smooth scrolling effect

---

## Accessibility

### Motion Preferences
All animations respect `prefers-reduced-motion` media query:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Keyboard Navigation
- `AnimatedButton` fully supports keyboard navigation
- Focus states are clearly visible
- Magnetic effect only applies to mouse, not keyboard

### Screen Readers
- Animations don't interfere with screen reader content
- All interactive elements have proper ARIA labels
- Content is accessible before and during animations

---

## Best Practices Summary

### Do's ✅
- Stagger animations with 100-200ms delays
- Use subtle parallax (speed 0.2-0.3)
- Apply glassmorphism to luxury cards
- Use magnetic buttons for primary CTAs
- Fade in content as users scroll
- Keep animations under 500ms
- Test on mobile devices

### Don'ts ❌
- Don't animate everything (causes fatigue)
- Don't use fast parallax (>0.5 speed)
- Don't stack multiple effects on one element
- Don't forget fallback colors for parallax backgrounds
- Don't use magnetic effect on small buttons
- Don't animate above-the-fold content (delays initial view)
- Don't use animations for critical information

---

## Browser Support

- **Chrome/Edge**: Full support
- **Firefox**: Full support
- **Safari**: Full support (webkit prefix for backdrop-filter)
- **Mobile**: Full support (magnetic effect disabled automatically)
- **IE11**: Graceful degradation (no animations, content still visible)

---

## Troubleshooting

### Animations not triggering
- Check that `FadeInSection` has enough scroll space to trigger
- Verify Intersection Observer is supported (all modern browsers)
- Ensure parent containers don't have `overflow: hidden`

### Parallax feels janky
- Reduce `speed` value (try 0.2 instead of 0.5)
- Ensure background images are optimized (<500KB)
- Check for other scroll listeners that might conflict

### Magnetic buttons not working
- Verify `magnetic={true}` is set
- Check that button has enough space around it
- Test on desktop (effect is disabled on mobile)

### Cards not lifting on hover
- Ensure parent doesn't have `transform` or `will-change` set
- Check z-index stacking context
- Verify hover state is triggering (use dev tools)

---

## Future Enhancements

Potential additions to the animation system:
- Scroll-triggered number counters
- Staggered list animations
- Page transition animations
- Loading skeleton screens
- Micro-interactions for form inputs
- Reveal animations for images
- Text typing effect for hero statements
