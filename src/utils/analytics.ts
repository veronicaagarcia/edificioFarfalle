// Analytics and performance monitoring utilities

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

export interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

export class Analytics {
  private isInitialized = false;
  private queue: AnalyticsEvent[] = [];

  constructor() {
    this.initializePerformanceMonitoring();
  }

  // Initialize Google Analytics
  public initializeGA4(measurementId: string) {
    if (this.isInitialized) return;

    // Load GA4 script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };

    // Configure GA4
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      page_title: document.title,
      page_location: window.location.href,
      send_page_view: true,
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure'
    });

    this.isInitialized = true;

    // Process queued events
    this.processQueue();

    console.log('Analytics initialized with ID:', measurementId);
  }

  // Track page views
  public trackPageView(path: string, title?: string) {
    const event: AnalyticsEvent = {
      action: 'page_view',
      category: 'navigation',
      custom_parameters: {
        page_path: path,
        page_title: title || document.title,
        page_location: window.location.href
      }
    };

    this.trackEvent(event);
  }

  // Track custom events
  public trackEvent(event: AnalyticsEvent) {
    if (!this.isInitialized) {
      this.queue.push(event);
      return;
    }

    if (typeof window.gtag === 'function') {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event.custom_parameters
      });
    }

    // Also log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event);
    }
  }

  // Track apartment views
  public trackApartmentView(apartmentId: string, apartmentName: string) {
    this.trackEvent({
      action: 'view_apartment',
      category: 'apartments',
      label: apartmentId,
      custom_parameters: {
        apartment_name: apartmentName,
        content_type: 'apartment_detail'
      }
    });
  }

  // Track reservation attempts
  public trackReservationStart(apartmentId?: string) {
    this.trackEvent({
      action: 'begin_checkout',
      category: 'reservations',
      label: apartmentId,
      custom_parameters: {
        currency: 'ARS',
        content_type: 'reservation'
      }
    });
  }

  // Track contact form submissions
  public trackContactSubmission(source: 'contact_form' | 'reservation_form') {
    this.trackEvent({
      action: 'generate_lead',
      category: 'forms',
      label: source,
      custom_parameters: {
        content_type: 'contact_form'
      }
    });
  }

  // Track PWA installation
  public trackPWAInstall() {
    this.trackEvent({
      action: 'pwa_install',
      category: 'engagement',
      custom_parameters: {
        method: 'browser_prompt'
      }
    });
  }

  // Track image loading performance
  public trackImageLoad(src: string, loadTime: number) {
    this.trackEvent({
      action: 'image_load_time',
      category: 'performance',
      value: Math.round(loadTime),
      custom_parameters: {
        image_url: src,
        load_time_ms: loadTime
      }
    });
  }

  // Track errors
  public trackError(error: Error, context?: string) {
    this.trackEvent({
      action: 'exception',
      category: 'errors',
      label: context,
      custom_parameters: {
        description: error.message,
        stack: error.stack,
        context: context
      }
    });
  }

  // Process queued events
  private processQueue() {
    while (this.queue.length > 0) {
      const event = this.queue.shift();
      if (event) {
        this.trackEvent(event);
      }
    }
  }

  // Initialize performance monitoring
  private initializePerformanceMonitoring() {
    // Web Vitals monitoring
    this.observeWebVitals();
    
    // Resource timing
    this.observeResourceTiming();

    // Navigation timing
    this.observeNavigationTiming();
  }

  // Observe Web Vitals
  private observeWebVitals() {
    // LCP (Largest Contentful Paint)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry & {
        startTime: number;
      };
      
      this.trackEvent({
        action: 'web_vitals',
        category: 'performance',
        label: 'lcp',
        value: Math.round(lastEntry.startTime),
        custom_parameters: {
          metric_name: 'largest_contentful_paint',
          metric_value: lastEntry.startTime
        }
      });
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // FID (First Input Delay)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry: any) => {
        this.trackEvent({
          action: 'web_vitals',
          category: 'performance',
          label: 'fid',
          value: Math.round(entry.processingStart - entry.startTime),
          custom_parameters: {
            metric_name: 'first_input_delay',
            metric_value: entry.processingStart - entry.startTime
          }
        });
      });
    }).observe({ entryTypes: ['first-input'] });

    // CLS (Cumulative Layout Shift)
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      
      this.trackEvent({
        action: 'web_vitals',
        category: 'performance',
        label: 'cls',
        value: Math.round(clsValue * 1000), // Convert to integer
        custom_parameters: {
          metric_name: 'cumulative_layout_shift',
          metric_value: clsValue
        }
      });
    }).observe({ entryTypes: ['layout-shift'] });
  }

  // Observe resource timing
  private observeResourceTiming() {
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        const resourceTiming = entry as PerformanceResourceTiming;
        // Track slow resources (>1s)
        if (resourceTiming.duration > 1000) {
          this.trackEvent({
            action: 'slow_resource',
            category: 'performance',
            label: resourceTiming.name,
            value: Math.round(resourceTiming.duration),
            custom_parameters: {
              resource_type: resourceTiming.initiatorType,
              resource_size: resourceTiming.transferSize,
              resource_url: resourceTiming.name
            }
          });
        }
      });
    }).observe({ entryTypes: ['resource'] });
  }

  // Observe navigation timing
  private observeNavigationTiming() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          // Track page load time
          this.trackEvent({
            action: 'page_load_time',
            category: 'performance',
            value: Math.round(navigation.loadEventEnd - navigation.fetchStart),
            custom_parameters: {
              ttfb: Math.round(navigation.responseStart - navigation.fetchStart),
              dom_content_loaded: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
              load_complete: Math.round(navigation.loadEventEnd - navigation.fetchStart)
            }
          });
        }
      }, 0);
    });
  }
}

// Create singleton instance
export const analytics = new Analytics();

// Export utility functions
export const {
  initializeGA4,
  trackPageView,
  trackEvent,
  trackApartmentView,
  trackReservationStart,
  trackContactSubmission,
  trackPWAInstall,
  trackImageLoad,
  trackError
} = analytics;