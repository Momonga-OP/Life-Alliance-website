#!/usr/bin/env python3
"""
Image Optimization Script for Life Alliance Website
This script optimizes all images for better page speed
"""

import os
from PIL import Image
import glob

def optimize_image(input_path, output_path, quality=85, max_width=800):
    """Optimize a single image"""
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if necessary
            if img.mode in ('RGBA', 'LA', 'P'):
                img = img.convert('RGB')
            
            # Resize if too large
            if img.width > max_width:
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            
            # Save with optimization
            img.save(output_path, 'JPEG', quality=quality, optimize=True)
            print(f"✅ Optimized: {input_path} -> {output_path}")
            return True
    except Exception as e:
        print(f"❌ Error optimizing {input_path}: {e}")
        return False

def optimize_all_images():
    """Optimize all images in the project"""
    # Create optimized directory
    os.makedirs('optimized_images', exist_ok=True)
    
    # Image directories to optimize
    image_dirs = [
        'Logos',
        'Guilds logo and names',
        'Leaders'
    ]
    
    total_optimized = 0
    
    for directory in image_dirs:
        if os.path.exists(directory):
            print(f"\n🔄 Optimizing images in {directory}/")
            
            # Find all image files
            for ext in ['*.png', '*.jpg', '*.jpeg']:
                for image_path in glob.glob(os.path.join(directory, ext)):
                    # Create output path
                    rel_path = os.path.relpath(image_path)
                    output_path = os.path.join('optimized_images', rel_path)
                    
                    # Create output directory
                    os.makedirs(os.path.dirname(output_path), exist_ok=True)
                    
                    # Optimize image
                    if optimize_image(image_path, output_path):
                        total_optimized += 1
    
    print(f"\n🎉 Optimization complete! {total_optimized} images optimized.")
    print("📁 Optimized images saved to 'optimized_images/' directory")

if __name__ == "__main__":
    optimize_all_images()
