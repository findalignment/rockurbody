# Image Optimization Guide

## Hero Images - Compression Required

All hero images should be compressed to **< 300 KB** for optimal page load performance.

### Current Hero Images That Need Compression:

Located in `/public/` directory:

1. `hero-astronaut.jpg` - Homepage background
2. `hero-background.jpg` - Alternative homepage
3. `hero-raccoons.jpg` - Alternative homepage
4. `about-hero.jpg` - About page
5. `services-hero.jpg` - Services page (also used for location pages)
6. `packages-hero.jpg` - Packages page
7. `pricing-hero.jpg` - Pricing page
8. `contact-hero.jpg` - Contact page
9. `approach-hero.jpg` - Approach page
10. `credentials-hero.jpg` - Credentials page
11. `training-hero.jpg` - Training lineage page
12. `smart-starts-hero.jpg` - Smart Starts page
13. `blog-hero.jpg` - Blog index
14. `dashboard-hero.jpg` - Dashboard
15. Location-specific heroes (if any)

### Recommended Compression Tools:

#### Online Tools:
1. **TinyJPG/TinyPNG** (https://tinyjpg.com/)
   - Simple drag-and-drop
   - Excellent compression ratio
   - Preserves quality well

2. **Squoosh** (https://squoosh.app/)
   - Google's web app
   - Fine-tune compression settings
   - Compare before/after

3. **ImageOptim** (Mac only, free)
   - Batch processing
   - Lossless and lossy options
   - Removes metadata

#### Command Line (if you have ImageMagick):
```bash
# Navigate to public directory
cd /Users/rockhudson/Documents/Websites/rockurbody/public

# Compress a single image
convert hero-astronaut.jpg -quality 85 -strip hero-astronaut-compressed.jpg

# Batch compress all hero images
for img in *-hero.jpg; do
  convert "$img" -quality 85 -strip -resize '1920x1080>' "optimized-$img"
done
```

### Optimization Settings:

**Target Specs:**
- **Max file size:** 300 KB
- **Dimensions:** 1920 × 1080 px (or proportional)
- **Quality:** 80-85% (adjust to meet file size target)
- **Format:** Keep as JPG (already using WebP fallbacks in code)

### Steps to Optimize:

1. **Backup originals** - Copy all hero images to a backup folder first
2. **Compress** - Use TinyJPG or Squoosh to compress each image
3. **Check file sizes** - Ensure each is < 300 KB
4. **Replace** - Replace original files in `/public/` directory
5. **Test** - Load pages to verify images still look good
6. **Deploy** - Push changes to repository

### Alt Text Standards:

Images should have descriptive alt text that:
- Describes what's shown in the image
- Includes relevant keywords naturally
- Helps with accessibility and SEO

**Examples:**

```jsx
// Homepage astronaut
alt="Astronaut symbolizing freedom of movement – Rock Your Body Santa Cruz"

// Services/location pages
alt="Personal training and structural integration workspace in Santa Cruz"

// About page
alt="Rock Hudson, certified structural integrator and movement specialist"

// Movement education
alt="Functional movement training and corrective exercise in Santa Cruz"
```

### Current Alt Text Implementation:

✅ **PageHero Component** - Uses `alt={title}` (dynamic, descriptive)
✅ **OptimizedImage Component** - Requires alt prop (enforced)
✅ **Location Pages** - Rock Hudson photo has descriptive alt text
✅ **TrainingLineage** - Mentor photos have names as alt text

### WebP Conversion:

The site already uses WebP format with JPG fallbacks via the `<picture>` element:

```jsx
<picture>
  <source srcSet="/hero-astronaut.webp" type="image/webp" />
  <img src="/hero-astronaut.jpg" alt="..." />
</picture>
```

**Action:** After compressing JPGs, also create WebP versions:
- Use Squoosh to export both JPG and WebP
- Or use ImageMagick: `convert image.jpg -quality 85 image.webp`

---

## Next Steps:

1. [ ] Compress all hero JPG images to < 300 KB
2. [ ] Create WebP versions of compressed images
3. [ ] Replace files in `/public/` directory
4. [ ] Test all pages to verify image quality
5. [ ] Run Lighthouse audit to verify improvements
6. [ ] Push optimized images to repository

---

**Last Updated:** November 8, 2025

