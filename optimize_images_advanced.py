#!/usr/bin/env python3
"""
Advanced Image Optimization Script for Life Alliance Website
Optimizes images for web performance and SEO
"""

import os
import sys
from PIL import Image, ImageOps
import glob

def optimize_image(input_path, output_dir, max_width=None, quality=85, format='WEBP'):
    """
    Optimize a single image for web use
    """
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if necessary (for JPEG/WebP)
            if format in ['JPEG', 'WEBP'] and img.mode in ['RGBA', 'LA', 'P']:
                # Create white background for transparent images
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                img = background
            elif format == 'WEBP' and img.mode == 'P':
                img = img.convert('RGBA')
            
            # Resize if max_width is specified
            if max_width and img.width > max_width:
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            
            # Auto-orient image
            img = ImageOps.exif_transpose(img)
            
            # Generate output filename
            base_name = os.path.splitext(os.path.basename(input_path))[0]
            if format == 'WEBP':
                output_filename = f"{base_name}.webp"
            elif format == 'JPEG':
                output_filename = f"{base_name}.jpg"
            else:
                output_filename = f"{base_name}_optimized.png"
            
            output_path = os.path.join(output_dir, output_filename)
            
            # Save optimized image
            save_kwargs = {'optimize': True}
            if format == 'WEBP':
                save_kwargs.update({
                    'quality': quality,
                    'method': 6,  # Best compression
                    'lossless': False
                })
            elif format == 'JPEG':
                save_kwargs.update({'quality': quality})
            
            img.save(output_path, format, **save_kwargs)
            
            # Get file sizes
            original_size = os.path.getsize(input_path)
            optimized_size = os.path.getsize(output_path)
            savings = ((original_size - optimized_size) / original_size) * 100
            
            print(f"✅ {os.path.basename(input_path)} → {output_filename}")
            print(f"   {original_size:,} bytes → {optimized_size:,} bytes ({savings:.1f}% smaller)")
            
            return True
            
    except Exception as e:
        print(f"❌ Error optimizing {input_path}: {e}")
        return False

def create_responsive_images(input_path, output_dir):
    """
    Create responsive images for different screen sizes
    """
    sizes = [
        (50, "xs"),   # Extra small (mobile)
        (100, "sm"),  # Small (tablet)
        (200, "md"),  # Medium (desktop)
        (400, "lg"),  # Large (high-res)
        (800, "xl")   # Extra large (retina)
    ]
    
    base_name = os.path.splitext(os.path.basename(input_path))[0]
    
    for size, suffix in sizes:
        output_filename = f"{base_name}_{suffix}.webp"
        output_path = os.path.join(output_dir, output_filename)
        
        optimize_image(input_path, output_dir, max_width=size, format='WEBP')
        
        # Rename to include suffix
        temp_path = os.path.join(output_dir, f"{base_name}.webp")
        if os.path.exists(temp_path):
            os.rename(temp_path, output_path)

def main():
    """
    Main optimization function
    """
    print("🚀 Life Alliance Image Optimization")
    print("=" * 50)
    
    # Define directories
    logos_dir = "Logos"
    guilds_dir = "Guilds logo and names"
    leaders_dir = "Leaders"
    
    # Create optimized directories
    optimized_dirs = {
        "Logos": "Logos/optimized",
        "Guilds logo and names": "Guilds logo and names/optimized", 
        "Leaders": "Leaders/optimized"
    }
    
    for dir_name, optimized_dir in optimized_dirs.items():
        if os.path.exists(dir_name):
            os.makedirs(optimized_dir, exist_ok=True)
            print(f"\n📁 Processing {dir_name}...")
            
            # Process PNG files
            png_files = glob.glob(os.path.join(dir_name, "*.png"))
            jpg_files = glob.glob(os.path.join(dir_name, "*.jpg"))
            jpeg_files = glob.glob(os.path.join(dir_name, "*.jpeg"))
            
            all_files = png_files + jpg_files + jpeg_files
            
            for image_file in all_files:
                # Skip if already optimized
                if "optimized" in image_file:
                    continue
                    
                # Create WebP version
                optimize_image(image_file, optimized_dir, format='WEBP')
                
                # Create responsive versions for guild logos (smaller sizes)
                if "Guilds logo and names" in dir_name:
                    create_responsive_images(image_file, optimized_dir)
    
    print("\n" + "=" * 50)
    print("✅ Image optimization complete!")
    print("\n📋 Next steps:")
    print("1. Update HTML to use optimized images")
    print("2. Implement responsive images with <picture> tags")
    print("3. Test performance improvements")
    
    # Calculate total savings
    total_original = 0
    total_optimized = 0
    
    for optimized_dir in optimized_dirs.values():
        if os.path.exists(optimized_dir):
            for file in os.listdir(optimized_dir):
                if file.endswith('.webp'):
                    total_optimized += os.path.getsize(os.path.join(optimized_dir, file))
    
    print(f"\n💾 Estimated total savings: {((total_original - total_optimized) / 1024 / 1024):.1f} MB")

if __name__ == "__main__":
    main()
