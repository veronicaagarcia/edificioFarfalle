// Performance optimization and monitoring utilities

export interface PerformanceConfig {
  enablePreloading: boolean;
  enableLazyLoading: boolean;
  enableImageOptimization: boolean;
  enableCaching: boolean;
  enableCompression: boolean;
}

export class PerformanceManager {
  private config: PerformanceConfig;
  private resourceHints: Map<string, HTMLLinkElement> = new Map();

  constructor(config: Partial<PerformanceConfig> = {}) {
    this.config = {
      enablePreloading: true,
      enableLazyLoading: true,
      enableImageOptimization: true,
      enableCaching: true,
      enableCompression: true,
      ...config
    };

    this.init();
  }

  private init() {
    // Initialize performance optimizations
    this.setupResourceHints();
    this.setupPerformanceObserver();
    this.optimizeScripts();
    this.setupMemoryManagement();
  }

  // Setup resource hints for critical resources
  private setupResourceHints() {
    if (!this.config.enablePreloading) return;

    // Preload critical fonts
    this.addResourceHint({
      rel: 'preload',
      href: 'https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap',
      as: 'style',
      crossorigin: 'anonymous'
    });

    // Preconnect to external domains
    this.addResourceHint({
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    });

    this.addResourceHint({
      rel: 'preconnect', 
      href: 'https://fonts.gstatic.com',
      crossorigin: 'anonymous'
    });

    // DNS prefetch for external resources
    this.addResourceHint({
      rel: 'dns-prefetch',
      href: 'https://www.google-analytics.com'
    });
  }

  // Add resource hint to document
  private addResourceHint(attributes: Record<string, string>) {
    const key = `${attributes.rel}-${attributes.href}`;
    
    if (this.resourceHints.has(key)) return;

    const link = document.createElement('link');
    Object.entries(attributes).forEach(([key, value]) => {
      link.setAttribute(key, value);
    });

    document.head.appendChild(link);
    this.resourceHints.set(key, link);
  }

  // Setup performance observer for monitoring
  private setupPerformanceObserver() {
    if (!('PerformanceObserver' in window)) return;

    // Monitor long tasks
    try {
      const longTaskObserver = new PerformanceObserver((entryList) => {
        entryList.getEntries().forEach((entry: any) => {
          if (entry.duration > 50) { // Tasks longer than 50ms
            console.warn('Long task detected:', {
              duration: entry.duration,
              startTime: entry.startTime,
              name: entry.name
            });

            // Track in analytics if available
            if (typeof window.gtag === 'function') {
              window.gtag('event', 'long_task', {
                event_category: 'performance',
                value: Math.round(entry.duration),
                custom_parameters: {
                  task_duration: entry.duration,
                  task_start: entry.startTime
                }
              });
            }
          }
        });
      });

      longTaskObserver.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      console.warn('Long task observer not supported');
    }

    // Monitor paint timing
    try {
      const paintObserver = new PerformanceObserver((entryList) => {
        entryList.getEntries().forEach((entry) => {
          console.log(`${entry.name}: ${entry.startTime}ms`);
        });
      });

      paintObserver.observe({ entryTypes: ['paint'] });
    } catch (e) {
      console.warn('Paint observer not supported');
    }
  }

  // Optimize script loading
  private optimizeScripts() {
    // Defer non-critical scripts
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach((script: Element) => {
      const scriptElement = script as HTMLScriptElement;
      if (!scriptElement.async && !scriptElement.defer) {
        scriptElement.defer = true;
      }
    });
  }

  // Setup memory management
  private setupMemoryManagement() {
    // Monitor memory usage
    if ('memory' in performance) {
      setInterval(() => {
        const memory = (performance as any).memory;
        const memoryUsage = {
          used: Math.round(memory.usedJSHeapSize / 1048576), // MB
          total: Math.round(memory.totalJSHeapSize / 1048576), // MB
          limit: Math.round(memory.jsHeapSizeLimit / 1048576) // MB
        };

        // Warn if memory usage is high
        if (memoryUsage.used / memoryUsage.limit > 0.8) {
          console.warn('High memory usage detected:', memoryUsage);
        }
      }, 30000); // Check every 30 seconds
    }

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
      this.cleanup();
    });
  }

  // Preload critical resources
  public preloadCriticalResources(resources: string[]) {
    if (!this.config.enablePreloading) return;

    resources.forEach((src) => {
      const extension = src.split('.').pop()?.toLowerCase();
      let asValue = 'fetch';

      switch (extension) {
        case 'css':
          asValue = 'style';
          break;
        case 'js':
          asValue = 'script';
          break;
        case 'woff':
        case 'woff2':
        case 'ttf':
          asValue = 'font';
          break;
        case 'jpg':
        case 'jpeg':
        case 'png':
        case 'webp':
        case 'avif':
          asValue = 'image';
          break;
        case 'mp4':
        case 'webm':
          asValue = 'video';
          break;
      }

      this.addResourceHint({
        rel: 'preload',
        href: src,
        as: asValue,
        ...(asValue === 'font' && { crossorigin: 'anonymous' })
      });
    });
  }

  // Get performance metrics
  public getPerformanceMetrics() {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (!navigation) return null;

    return {
      // Core Web Vitals approximations
      ttfb: Math.round(navigation.responseStart - navigation.fetchStart),
      fcp: this.getFCP(),
      lcp: this.getLCP(),
      
      // Loading metrics
      domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
      pageLoad: Math.round(navigation.loadEventEnd - navigation.fetchStart),
      
      // Network metrics
      dnsLookup: Math.round(navigation.domainLookupEnd - navigation.domainLookupStart),
      tcpConnect: Math.round(navigation.connectEnd - navigation.connectStart),
      
      // Resource counts
      resourceCount: performance.getEntriesByType('resource').length
    };
  }

  // Get First Contentful Paint
  private getFCP(): number | null {
    const paintEntries = performance.getEntriesByType('paint');
    const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    return fcpEntry ? Math.round(fcpEntry.startTime) : null;
  }

  // Get Largest Contentful Paint (approximation)
  private getLCP(): number | null {
    const paintEntries = performance.getEntriesByType('paint');
    const lcpEntry = paintEntries.find(entry => entry.name === 'largest-contentful-paint');
    return lcpEntry ? Math.round(lcpEntry.startTime) : null;
  }

  // Optimize images for current viewport
  public optimizeImagesForViewport() {
    if (!this.config.enableImageOptimization) return;

    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;
          
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px'
    });

    images.forEach((img) => imageObserver.observe(img));
  }

  // Create performance report
  public createPerformanceReport() {
    const metrics = this.getPerformanceMetrics();
    const resources = performance.getEntriesByType('resource');
    
    const report = {
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      metrics,
      resources: {
        total: resources.length,
        slowResources: resources.filter((r) => (r as PerformanceResourceTiming).duration > 1000).length,
        largeResources: resources.filter((r) => (r as PerformanceResourceTiming).transferSize > 500000).length // >500KB
      },
      memory: (performance as any).memory ? {
        used: Math.round((performance as any).memory.usedJSHeapSize / 1048576),
        total: Math.round((performance as any).memory.totalJSHeapSize / 1048576),
        limit: Math.round((performance as any).memory.jsHeapSizeLimit / 1048576)
      } : null
    };

    return report;
  }

  // Cleanup resources
  public cleanup() {
    // Remove resource hints
    this.resourceHints.forEach((link) => {
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    });
    
    this.resourceHints.clear();
  }
}

// Create singleton instance
export const performanceManager = new PerformanceManager();

// Export utility functions
export const {
  preloadCriticalResources,
  getPerformanceMetrics,
  optimizeImagesForViewport,
  createPerformanceReport
} = performanceManager;