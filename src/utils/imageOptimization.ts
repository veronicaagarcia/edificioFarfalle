// Image optimization utilities

export interface ImageConfig {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  priority?: boolean;
  sizes?: string;
}

export class ImageOptimizer {
  // Check WebP support
  static supportsWebP(): Promise<boolean> {
    return new Promise((resolve) => {
      const webP = new Image();
      webP.onload = webP.onerror = () => resolve(webP.height === 2);
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });
  }

  // Check AVIF support
  static supportsAVIF(): Promise<boolean> {
    return new Promise((resolve) => {
      const avif = new Image();
      avif.onload = avif.onerror = () => resolve(avif.height === 2);
      avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A=';
    });
  }

  // Generate optimized image sources
  static generateSources(basePath: string, _config: ImageConfig): string[] {
    const sources: string[] = [];
    
    // Remove file extension to add format-specific extensions
    const pathWithoutExt = basePath.replace(/\.[^/.]+$/, "");
    
    // Generate different format sources
    sources.push(`${pathWithoutExt}.avif`);
    sources.push(`${pathWithoutExt}.webp`);
    sources.push(basePath); // Original format as fallback
    
    return sources;
  }

  // Generate responsive sizes
  static generateResponsiveSizes(config: ImageConfig): string {
    if (config.sizes) return config.sizes;
    
    // Default responsive sizes
    return "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";
  }

  // Preload critical images
  static preloadCriticalImages(images: string[]) {
    images.forEach((src, index) => {
      if (index < 3) { // Only preload first 3 images
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        
        // Add crossorigin for external images
        if (src.startsWith('http')) {
          link.crossOrigin = 'anonymous';
        }
        
        document.head.appendChild(link);
      }
    });
  }

  // Lazy load images with Intersection Observer
  static createIntersectionObserver(
    callback: (entry: IntersectionObserverEntry) => void,
    options?: IntersectionObserverInit
  ): IntersectionObserver {
    const defaultOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1,
      ...options
    };

    return new IntersectionObserver(
      (entries) => {
        entries.forEach(callback);
      },
      defaultOptions
    );
  }

  // Create responsive image element
  static createResponsiveImage(config: ImageConfig): HTMLPictureElement {
    const picture = document.createElement('picture');
    const sources = this.generateSources(config.src, config);
    const sizes = this.generateResponsiveSizes(config);

    // Create source elements for each format
    sources.slice(0, -1).forEach((src) => {
      const source = document.createElement('source');
      source.srcset = src;
      source.sizes = sizes;
      
      // Set format type
      if (src.includes('.avif')) {
        source.type = 'image/avif';
      } else if (src.includes('.webp')) {
        source.type = 'image/webp';
      }
      
      picture.appendChild(source);
    });

    // Create fallback img element
    const img = document.createElement('img');
    img.src = sources[sources.length - 1]; // Original format
    img.alt = config.alt;
    img.loading = config.priority ? 'eager' : 'lazy';
    img.decoding = 'async';
    
    if (config.width) img.width = config.width;
    if (config.height) img.height = config.height;
    if (sizes) img.sizes = sizes;

    picture.appendChild(img);
    
    return picture;
  }

  // Compress image quality for development
  static getOptimizedSrc(src: string, _quality: number = 80): string {
    // In production, this would integrate with image optimization service
    // For now, return original src
    return src;
  }

  // Calculate aspect ratio for responsive containers
  static calculateAspectRatio(width: number, height: number): string {
    const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
    const divisor = gcd(width, height);
    return `${width / divisor}/${height / divisor}`;
  }

  // Create blur placeholder (low quality image placeholder)
  static createBlurPlaceholder(_src: string, width: number = 40): string {
    // In production, generate a very small, blurred version
    // For now, return a simple data URI
    return `data:image/svg+xml;base64,${btoa(`
      <svg width="${width}" height="${Math.round(width * 0.75)}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#f3f4f6"/>
        <rect width="60%" height="20%" x="20%" y="40%" fill="#e5e7eb" rx="4"/>
      </svg>
    `)}`;
  }
}

// Export utility functions for easy access
export const {
  supportsWebP,
  supportsAVIF,
  generateSources,
  generateResponsiveSizes,
  preloadCriticalImages,
  createIntersectionObserver,
  createResponsiveImage,
  getOptimizedSrc,
  calculateAspectRatio,
  createBlurPlaceholder
} = ImageOptimizer;