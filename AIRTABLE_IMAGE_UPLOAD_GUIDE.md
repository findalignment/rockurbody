# How to Add Images to Your Airtable

## Current Status ✅

Your Airtable "Site Images" table is set up correctly with 7 records:
- `rotator-cuff-treatment-hero.jpg`
- `neck-pain-treatment-hero.jpg`
- `exercise-for-life-hero.jpg`
- `gravity-structural-integration-hero.jpg`
- `surfers-hero.jpg`
- `daily-mobility-hero.jpg`
- `plank`

**What's missing:** The actual image files need to be attached to each record.

---

## Step-by-Step: Adding Images to Airtable Records

### 1. Open Your Airtable Base
Go to: https://airtable.com/appAeB6tFMIhlzY4R

### 2. Make Sure Your Table Has These Fields:
- **Name** (Single line text) - ✅ You have this
- **Image** (Attachment) - You need this field for uploading files

### 3. If You Don't Have an "Image" or "Attachment" Field:
1. Click the **+** button next to your last column
2. Choose "Attachment" as the field type
3. Name it "Image" or "Attachment" or "File"

### 4. Upload Images to Each Record:
1. Click on a record (row) to open it
2. Find the **Image/Attachment** field
3. Click **"Add attachment"** or drag & drop your image file
4. Upload your JPG or PNG file
5. Close the record
6. Repeat for each record

### 5. File Naming in Airtable:
The actual filename you upload doesn't matter! The script uses the **Name** field.

Example:
- **Name field:** `surfers-hero.jpg`
- **Uploaded file:** `IMG_1234.jpg` ← doesn't matter
- **Result:** Will be saved as `surfers-hero.jpg` in your site

### 6. Run the Download Script:
Once you've attached images to your records:
```bash
cd /Users/rockhudson/Desktop/rockurbody
npm run download-images
```

---

## What Will Happen When Images Are Attached

When you run `npm run download-images` with actual images attached, you'll see:

```
🚀 Starting Airtable image download...

📦 Base ID: appAeB6tFMIhlzY4R
📊 Table: Site Images
📁 Output: /Users/rockhudson/Desktop/rockurbody/public

📥 Fetching records from Airtable...
✅ Found 7 records

📥 Downloading: surfers-hero.jpg
   URL: https://dl.airtable.com/.attachments/...
   ✅ Saved to: /Users/rockhudson/Desktop/rockurbody/public/surfers-hero.jpg
   ✅ WebP created: surfers-hero.webp

📥 Downloading: exercise-for-life-hero.jpg
   URL: https://dl.airtable.com/.attachments/...
   ✅ Saved to: /Users/rockhudson/Desktop/rockurbody/public/exercise-for-life-hero.jpg
   ✅ WebP created: exercise-for-life-hero.webp

... (continues for all images)

============================================================
📊 SUMMARY
============================================================
✅ Downloaded: 7
⚠️  Skipped: 0
❌ Errors: 0
📁 Location: /Users/rockhudson/Desktop/rockurbody/public
============================================================

✨ Images are ready! You can now view them on your site.
```

Then your images will be:
- In `/public/surfers-hero.jpg` (original)
- In `/public/surfers-hero.webp` (optimized)
- Ready to use on your site!

---

## Quick Test: Upload One Image

**To see it work right now:**

1. Go to your Airtable "Site Images" table
2. Click on the **surfers-hero.jpg** record
3. Find the Image/Attachment field
4. Upload ANY image (even a placeholder)
5. Close the record
6. Run: `npm run download-images`
7. Check `/public/` folder - you should see `surfers-hero.jpg` and `surfers-hero.webp`!

---

## Current Table Structure Should Look Like:

| Name (text) | Image (attachment) | Notes (text, optional) |
|-------------|-------------------|------------------------|
| surfers-hero.jpg | [📎 Upload here] | Hero image for Surfers page |
| exercise-for-life-hero.jpg | [📎 Upload here] | Hero for Exercise page |
| gravity-structural-integration-hero.jpg | [📎 Upload here] | Hero for Gravity page |
| ... | ... | ... |

---

## Tips

1. **File size:** Keep images under 2MB for web use
2. **Dimensions:** Aim for 1920px wide for hero images
3. **Format:** Upload JPG or PNG (script converts to WebP automatically)
4. **Multiple images per record:** If you attach multiple files, the script uses the first one
5. **Updating images:** Just replace the attachment in Airtable and run the script again

---

## Troubleshooting

**"⚠️  Skipping: No image attachment"**
→ The record has no file attached. Upload an image to that record.

**"⚠️  Skipping: No Name field"**
→ The Name field is empty. Add a filename to the Name field.

**"❌ Error downloading"**
→ The image file might be corrupted or inaccessible. Try re-uploading.

---

## Next Steps

1. Open your Airtable base
2. Make sure you have an "Image" or "Attachment" field
3. Upload images to your 7 records
4. Run `npm run download-images`
5. Check `/public/` folder for your images
6. View them on your site!

Once you see this working with these 7 images, you can add more records for the other 66 hero images listed in `HERO_IMAGES_NEEDED.md`.

---

**Need more images?** Check `HERO_IMAGES_NEEDED.md` for the complete list of 73 hero images with suggestions for each page.

