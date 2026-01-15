---
version: 1.0
submitted_by: markus-ntt-seidl, navveenb
published_date: 2022-11-10
category: development
description: Modern image formats can help to reduce bandwidth, storage and computing requirements on the displaying device. Optimizing both static images and animated content significantly reduces data transfer and energy consumption.
tags:
 - web
 - networking
 - role:web-developer
 - size:medium
---

# Optimize image delivery

## Description

Images are a key element in modern websites and are widely used. Modern image formats can help to reduce bandwidth, storage and computing requirements on the displaying device. This applies to both static images and animated content, where newer technologies provide significantly better compression and quality than legacy formats.

## Solution

Optimize image delivery by selecting appropriate modern formats for your content type and implementing proper delivery strategies.

### Modern Static Image Formats

Test and adopt modern image formats that provide better compression ratio, increased quality, and more features than traditional formats:

**WebP:**
- Widely supported (98%+ browser coverage as of 2025)
- Offers around 30% smaller file sizes than JPEG with no drop in quality
- Supports both lossy and lossless compression
- Now considered the baseline modern format

**AVIF:**
- Excellent compression (often 20-50% smaller than WebP for similar quality)
- Broader browser support (75%+ coverage as of 2025)
- Superior quality at low bitrates
- Ideal for high-quality images where size matters

**JPEG XL:**
- Emerging format with excellent compression and no legacy format baggage
- Progressive decoding support
- Better preservation of color accuracy for photography
- Growing browser support

**HEIF/HEIC:**
- Dominant in Apple ecosystem (iOS/macOS native format)
- Excellent compression and features
- Consider for applications with significant Apple user base

### Animated Content Optimization

**Replace GIFs with Modern Alternatives:**

GIFs were invented in the early 1980s and while still popular for animated content, they are technically obsolete. Modern alternatives provide much smaller file sizes and higher quality:

**Video formats (Primary recommendation):**
- **MP4/H.264**: Direct GIF replacement, much smaller files, higher quality
- **WebM**: Excellent compression, good browser support
- **Animated AVIF/WebP**: Image-based animation with better compression than GIF

Convert source material to MP4 or other modern video formats for significantly reduced file size. If source material isn't available, GIFs can be directly converted while maintaining quality.

**Alternative techniques for specific content:**
- **CSS animations**: For simple geometric or UI animations, zero image data transfer
- **SVG animations**: For vector-based animated content, scalable and efficient
- **Lottie/JSON animations**: For complex animations, especially in mobile apps

Inspect the content to choose the best technique - simple animations may be better served by CSS/SVG, while photographic animated content benefits from video formats.

### Implementation Best Practices

**Responsive image delivery:**
```html
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>
```

**Considerations for implementation:**
- Use `<picture>` element with multiple sources for format fallbacks
- Implement responsive images with `srcset` for different screen sizes
- Enable lazy loading for off-screen images
- Serve appropriate formats based on browser capabilities
- Use server-side content negotiation with Accept header
- Implement image optimization pipelines (ImageMagick, libvips, Squoosh)
- Consider dark mode variants for images with embedded text
- Preserve important metadata (color profiles, accessibility alt text)

### Format Selection Decision Tree

**For static images:**
- **Photography/complex images**: AVIF or JPEG XL for best quality-to-size ratio
- **General web images**: WebP (ubiquitous support, good compression)
- **Apple-focused apps**: Consider HEIF/HEIC
- **Always provide fallbacks** for older browsers

**For animated content:**
- **Photographic/video-like animations**: MP4/WebM
- **Simple UI animations**: CSS or SVG
- **Image-based animations**: Animated AVIF or WebP
- **Legacy GIF**: Only as final fallback

## SCI Impact

`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Optimizing image delivery will impact SCI as follows:

- `E`: Reduces energy consumption by:
  - Reducing data transfer size (network energy)
  - Decreasing download time and page load performance
  - Lowering decoding/rendering computational requirements on devices
  - Reducing device battery consumption for mobile users

## Assumptions

- Modern web browsers support the selected formats (validate against your target browser matrix)
- Fallback mechanisms are in place for older browsers
- Image optimization tools are available in your build pipeline

## Considerations

- Always provide fallback images in widely-supported formats (JPEG, PNG)
- Test format selection based on your specific images - results vary by content type
- Balance between file size and visual quality based on use case
- Consider automated format selection and conversion in your CDN or build process
- Monitor browser support matrices as formats evolve (check caniuse.com)
- Regional differences in browser adoption may affect format choice
- Consider implementing automated testing for visual regression when changing formats
- For animated content, ensure video formats have controls disabled and autoplay enabled to match GIF behavior

## References

- [WebP Image Format](https://en.wikipedia.org/wiki/WebP)
- [AVIF Image Format](https://en.wikipedia.org/wiki/AVIF)
- [JPEG XL Image Format](https://jpeg.org/jpegxl/)
- [Image Format Browser Support](https://caniuse.com/?search=image%20format)
- [Alternatives to GIF](https://en.wikipedia.org/wiki/GIF#Alternatives)
- [Real-world GIF replacement case studies](https://en.wikipedia.org/wiki/GIF#Uses)
- [Software Carbon Intensity Spec](https://grnsft.org/sci)
