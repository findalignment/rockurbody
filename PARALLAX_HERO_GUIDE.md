# Parallax Hero Images Setup Guide

## 📁 Where to Put Images

Place all hero images in the **`/public/`** folder at the root of your project.

## 📋 Image List & Names

### Required Images (9 total):

| File Name | Page | Suggested Content |
|-----------|------|-------------------|
| `about-hero.jpg` | About | Welcoming workspace, team photo, or inviting studio shot |
| `services-hero.jpg` | Services | Movement/training in action, body alignment work |
| `packages-hero.jpg` | Packages | Transformation results, happy client, or professional setup |
| `pricing-hero.jpg` | Pricing | Clean professional image, organized space |
| `contact-hero.jpg` | Contact | Studio location, Santa Cruz scenery, or office space |
| `training-hero.jpg` | Training & Lineage | Education/mentorship scene, books, certificates |
| `credentials-hero.jpg` | Credentials | Professional certificates, award ceremony, or achievement |
| `dashboard-hero.jpg` | Dashboard | Organized/personal space, calendar, wellness planning |
| `blog-hero.jpg` | Blog Index & Posts | Reading, knowledge, wellness concepts |

### Image Specifications:
- **Format**: JPG (preferred) or PNG
- **Dimensions**: 1920x600px minimum (landscape orientation)
- **Aspect Ratio**: 16:9 or 3:1 works best
- **File Size**: Under 500KB each (optimize for web performance)
- **Quality**: High-res, professional, well-lit
- **Style**: Consistent with brand (professional, warm, inviting)

## 🔧 How to Add to Each Page

### Step 1: Import PageHero Component

```jsx
import PageHero from '../components/PageHero';
```

### Step 2: Add PageHero at Top of Page (inside PageLayout)

```jsx
function YourPage() {
  return (
    <PageLayout>
      <PageHero 
        imageSrc="/your-image-hero.jpg"
        title="Page Title"
        subtitle="Optional subtitle or tagline"
        overlayOpacity={40}  // Optional: 0-100 (default 40)
      />
      
      {/* Rest of your page content */}
      <div className="pt-16 pb-24 px-6">
        {/* ... */}
      </div>
    </PageLayout>
  );
}
```

## 📝 Example Implementation for Each Page

### About.jsx
```jsx
<PageHero 
  imageSrc="/about-hero.jpg"
  title="About Rock Your Body"
  subtitle="Helping you move better, feel better, and live better"
/>
```

### Services.jsx
```jsx
<PageHero 
  imageSrc="/services-hero.jpg"
  title="Our Services"
  subtitle="Structural Integration & Movement Education"
/>
```

### Packages.jsx
```jsx
<PageHero 
  imageSrc="/packages-hero.jpg"
  title="Programs & Packages"
  subtitle="Structured pathways to lasting change"
/>
```

### Pricing.jsx
```jsx
<PageHero 
  imageSrc="/pricing-hero.jpg"
  title="Pricing"
  subtitle="Transparent, flexible investment in your wellbeing"
/>
```

### Contact.jsx
```jsx
<PageHero 
  imageSrc="/contact-hero.jpg"
  title="Get in Touch"
  subtitle="Located in Santa Cruz, CA"
/>
```

### TrainingLineage.jsx
```jsx
<PageHero 
  imageSrc="/training-hero.jpg"
  title="Training & Lineage"
  subtitle="Mentors who shaped my approach"
/>
```

### Credentials.jsx
```jsx
<PageHero 
  imageSrc="/credentials-hero.jpg"
  title="Credentials & Certifications"
  subtitle="Professional training and expertise"
/>
```

### Dashboard.jsx
```jsx
<PageHero 
  imageSrc="/dashboard-hero.jpg"
  title="My Account"
  subtitle="Manage your sessions and appointments"
/>
```

### Blog Pages
```jsx
<PageHero 
  imageSrc="/blog-hero.jpg"
  title="Blog"
  subtitle="Insights on movement, structure, and wellness"
/>
```

## 🎨 Customization Options

### Adjust Overlay Darkness
The `overlayOpacity` prop controls how dark the overlay is (for text readability):
- `overlayOpacity={20}` - Light overlay (for darker images)
- `overlayOpacity={40}` - Default (balanced)
- `overlayOpacity={60}` - Heavy overlay (for very bright images)

### Adjust Parallax Speed
Edit the `speed` prop in PageHero component (0.3 is default):
- `speed={0.2}` - Slower parallax (more subtle)
- `speed={0.3}` - Default
- `speed={0.5}` - Faster parallax (more dramatic)

## 📦 Image Optimization Tips

Before adding images to `/public/`:

1. **Resize** to max 1920px wide
2. **Compress** using tools like:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - [ImageOptim](https://imageoptim.com/) (Mac)
3. **Convert** to WebP format for better performance (optional)
4. **Test** on mobile - images should still look good cropped

## 🚀 Next Steps

1. ✅ Component created: `src/components/PageHero.jsx`
2. ⏳ Add 9 hero images to `/public/` folder
3. ⏳ Update each page component with PageHero
4. ⏳ Test on desktop and mobile
5. ⏳ Adjust overlay opacity if needed

## 🔍 Troubleshooting

**Image not showing?**
- Check file name matches exactly (case-sensitive)
- Ensure image is in `/public/` folder
- Clear browser cache
- Check browser console for 404 errors

**Parallax too fast/slow?**
- Adjust `speed` prop in ParallaxSection (lower = slower)

**Text hard to read?**
- Increase `overlayOpacity` (try 50-60)
- Use darker source images
- Ensure images aren't too busy/cluttered

**Performance issues?**
- Compress images more (target 200-300KB)
- Convert to WebP format
- Use lazy loading (already implemented)

