// Testing utilities and performance validation

export interface PerformanceTest {
  name: string;
  threshold: number;
  unit: 'ms' | 'score' | 'bytes';
  description: string;
}

export interface AccessibilityTest {
  name: string;
  selector: string;
  expectedAttribute?: string;
  expectedValue?: string;
  description: string;
}

export class QualityAssurance {
  // Performance thresholds based on Core Web Vitals
  static PERFORMANCE_THRESHOLDS: PerformanceTest[] = [
    {
      name: 'First Contentful Paint',
      threshold: 1800,
      unit: 'ms',
      description: 'Time until first content appears'
    },
    {
      name: 'Largest Contentful Paint',
      threshold: 2500,
      unit: 'ms',
      description: 'Time until largest content element appears'
    },
    {
      name: 'First Input Delay',
      threshold: 100,
      unit: 'ms',
      description: 'Time from first user interaction to browser response'
    },
    {
      name: 'Cumulative Layout Shift',
      threshold: 0.1,
      unit: 'score',
      description: 'Visual stability score'
    },
    {
      name: 'Total Blocking Time',
      threshold: 200,
      unit: 'ms',
      description: 'Time main thread is blocked'
    }
  ];

  // Accessibility tests
  static ACCESSIBILITY_TESTS: AccessibilityTest[] = [
    {
      name: 'Images have alt text',
      selector: 'img',
      expectedAttribute: 'alt',
      description: 'All images should have descriptive alt text'
    },
    {
      name: 'Links have accessible names',
      selector: 'a',
      expectedAttribute: 'aria-label',
      description: 'Links should be properly labeled'
    },
    {
      name: 'Buttons have accessible names',
      selector: 'button',
      description: 'Buttons should have descriptive text or labels'
    },
    {
      name: 'Form inputs have labels',
      selector: 'input',
      expectedAttribute: 'aria-label',
      description: 'Form inputs should be properly labeled'
    },
    {
      name: 'Skip links exist',
      selector: 'a[href="#main-content"]',
      description: 'Skip navigation links should be present'
    }
  ];

  // Run performance tests
  static async runPerformanceTests(): Promise<{ passed: boolean; results: any[] }> {
    const results: any[] = [];
    let allPassed = true;

    // Get navigation timing
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (navigation) {
      // Calculate metrics
      const fcp = this.getFCP();
      const lcp = this.getLCP();
      const totalPageLoad = navigation.loadEventEnd - navigation.fetchStart;

      const metrics = [
        { name: 'First Contentful Paint', value: fcp, threshold: 1800 },
        { name: 'Largest Contentful Paint', value: lcp, threshold: 2500 },
        { name: 'Page Load Time', value: totalPageLoad, threshold: 3000 }
      ];

      metrics.forEach(metric => {
        const passed = metric.value ? metric.value <= metric.threshold : false;
        if (!passed) allPassed = false;

        results.push({
          test: metric.name,
          value: metric.value,
          threshold: metric.threshold,
          passed,
          unit: 'ms'
        });
      });
    }

    return { passed: allPassed, results };
  }

  // Run accessibility tests
  static runAccessibilityTests(): { passed: boolean; results: any[] } {
    const results: any[] = [];
    let allPassed = true;

    this.ACCESSIBILITY_TESTS.forEach(test => {
      const elements = document.querySelectorAll(test.selector);
      let passed = true;
      let details = '';

      if (elements.length === 0) {
        passed = false;
        details = 'No elements found';
      } else {
        elements.forEach((element, index) => {
          if (test.expectedAttribute) {
            const hasAttribute = element.hasAttribute(test.expectedAttribute);
            if (!hasAttribute) {
              passed = false;
              details += `Element ${index + 1} missing ${test.expectedAttribute}; `;
            }
          }

          // Check for text content in buttons
          if (test.selector === 'button' && !element.textContent?.trim()) {
            const hasAriaLabel = element.hasAttribute('aria-label');
            if (!hasAriaLabel) {
              passed = false;
              details += `Button ${index + 1} has no text or aria-label; `;
            }
          }
        });
      }

      if (!passed) allPassed = false;

      results.push({
        test: test.name,
        passed,
        details: details || 'All elements pass',
        elementsFound: elements.length,
        description: test.description
      });
    });

    return { passed: allPassed, results };
  }

  // SEO validation
  static runSEOTests(): { passed: boolean; results: any[] } {
    const results: any[] = [];
    let allPassed = true;

    const seoTests = [
      {
        name: 'Page has title',
        check: () => document.title.length > 0,
        description: 'Page should have a descriptive title'
      },
      {
        name: 'Title length appropriate',
        check: () => document.title.length >= 30 && document.title.length <= 60,
        description: 'Title should be 30-60 characters'
      },
      {
        name: 'Meta description exists',
        check: () => {
          const desc = document.querySelector('meta[name="description"]');
          return desc && (desc.getAttribute('content')?.length || 0) > 0;
        },
        description: 'Page should have a meta description'
      },
      {
        name: 'Canonical URL exists',
        check: () => document.querySelector('link[rel="canonical"]') !== null,
        description: 'Page should have a canonical URL'
      },
      {
        name: 'Open Graph tags exist',
        check: () => {
          const ogTitle = document.querySelector('meta[property="og:title"]');
          const ogDesc = document.querySelector('meta[property="og:description"]');
          return ogTitle && ogDesc;
        },
        description: 'Page should have Open Graph meta tags'
      },
      {
        name: 'Structured data exists',
        check: () => {
          const scripts = document.querySelectorAll('script[type="application/ld+json"]');
          return scripts.length > 0;
        },
        description: 'Page should have structured data markup'
      }
    ];

    seoTests.forEach(test => {
      const passed = test.check();
      if (!passed) allPassed = false;

      results.push({
        test: test.name,
        passed,
        description: test.description
      });
    });

    return { passed: allPassed, results };
  }

  // Mobile friendliness tests
  static runMobileTests(): { passed: boolean; results: any[] } {
    const results: any[] = [];
    let allPassed = true;

    const mobileTests = [
      {
        name: 'Viewport meta tag exists',
        check: () => document.querySelector('meta[name="viewport"]') !== null,
        description: 'Page should have a viewport meta tag'
      },
      {
        name: 'Touch targets are adequate',
        check: () => {
          const buttons = document.querySelectorAll('button, a');
          let adequateSize = true;
          
          buttons.forEach(button => {
            const rect = button.getBoundingClientRect();
            if (rect.width < 44 || rect.height < 44) {
              adequateSize = false;
            }
          });
          
          return adequateSize;
        },
        description: 'Touch targets should be at least 44px'
      },
      {
        name: 'Text is readable',
        check: () => {
          const styles = getComputedStyle(document.body);
          const fontSize = parseInt(styles.fontSize);
          return fontSize >= 16;
        },
        description: 'Base font size should be at least 16px'
      }
    ];

    mobileTests.forEach(test => {
      const passed = test.check();
      if (!passed) allPassed = false;

      results.push({
        test: test.name,
        passed,
        description: test.description
      });
    });

    return { passed: allPassed, results };
  }

  // Run all tests
  static async runAllTests() {
    console.log('🧪 Running Quality Assurance Tests...');

    const performanceResults = await this.runPerformanceTests();
    const accessibilityResults = this.runAccessibilityTests();
    const seoResults = this.runSEOTests();
    const mobileResults = this.runMobileTests();

    const allResults = {
      performance: performanceResults,
      accessibility: accessibilityResults,
      seo: seoResults,
      mobile: mobileResults,
      overallPassed: performanceResults.passed && 
                    accessibilityResults.passed && 
                    seoResults.passed && 
                    mobileResults.passed
    };

    // Log results
    console.log('📊 Test Results:', allResults);

    // Create detailed report
    this.generateTestReport(allResults);

    return allResults;
  }

  // Generate test report
  static generateTestReport(results: any) {
    const report = {
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      ...results
    };

    // Store in localStorage for debugging
    localStorage.setItem('qa-report', JSON.stringify(report, null, 2));

    // Log summary
    console.log(`✅ Overall Status: ${results.overallPassed ? 'PASSED' : 'FAILED'}`);
    console.log(`🚀 Performance: ${results.performance.passed ? 'PASSED' : 'FAILED'}`);
    console.log(`♿ Accessibility: ${results.accessibility.passed ? 'PASSED' : 'FAILED'}`);
    console.log(`🔍 SEO: ${results.seo.passed ? 'PASSED' : 'FAILED'}`);
    console.log(`📱 Mobile: ${results.mobile.passed ? 'PASSED' : 'FAILED'}`);
  }

  // Helper methods
  private static getFCP(): number | null {
    const paintEntries = performance.getEntriesByType('paint');
    const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    return fcpEntry ? Math.round(fcpEntry.startTime) : null;
  }

  private static getLCP(): number | null {
    // This is simplified - real LCP needs PerformanceObserver
    const paintEntries = performance.getEntriesByType('paint');
    const lcpEntry = paintEntries.find(entry => entry.name === 'largest-contentful-paint');
    return lcpEntry ? Math.round(lcpEntry.startTime) : null;
  }
}

// Export for easy testing
export const { runAllTests } = QualityAssurance;

// Auto-run tests in development
if (process.env.NODE_ENV === 'development') {
  window.addEventListener('load', () => {
    setTimeout(() => {
      QualityAssurance.runAllTests();
    }, 2000); // Wait 2 seconds after page load
  });
}