#!/bin/bash

# Image Optimization Script for Rock Your Body
# Converts JPG images to WebP format for better performance

echo "🖼️  Rock Your Body Image Optimizer"
echo "=================================="
echo ""

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "❌ cwebp is not installed."
    echo ""
    echo "To install on macOS:"
    echo "  brew install webp"
    echo ""
    echo "To install on Ubuntu/Debian:"
    echo "  sudo apt-get install webp"
    echo ""
    exit 1
fi

# Navigate to public directory
cd "$(dirname "$0")/public" || exit

echo "📁 Converting images in public/ directory..."
echo ""

# Counter for converted images
converted=0

# Convert each JPG to WebP
for file in *.jpg; do
    if [ -f "$file" ]; then
        # Get filename without extension
        filename="${file%.*}"
        
        # Convert to WebP with quality 85 (good balance of size/quality)
        cwebp -q 85 "$file" -o "${filename}.webp"
        
        if [ $? -eq 0 ]; then
            # Get file sizes
            original_size=$(du -h "$file" | cut -f1)
            webp_size=$(du -h "${filename}.webp" | cut -f1)
            
            echo "✅ ${file} → ${filename}.webp"
            echo "   Original: ${original_size} | WebP: ${webp_size}"
            echo ""
            
            ((converted++))
        else
            echo "❌ Failed to convert $file"
            echo ""
        fi
    fi
done

echo "=================================="
echo "✨ Conversion complete!"
echo "   Converted ${converted} images to WebP"
echo ""
echo "📝 Next steps:"
echo "   1. Update image references in your components to use .webp"
echo "   2. Add <picture> tags with fallback for older browsers"
echo "   3. Consider keeping .jpg files as fallback"
echo ""
echo "Example usage in React:"
echo '   <picture>'
echo '     <source srcSet="/hero-background.webp" type="image/webp" />'
echo '     <img src="/hero-background.jpg" alt="Description" />'
echo '   </picture>'
echo ""

