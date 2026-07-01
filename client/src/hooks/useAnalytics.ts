import { useCallback, useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-T5LW5Q2BFX';
let isGoogleAnalyticsInitialized = false;

function initializeGoogleAnalytics() {
  if (!GA_ID || isGoogleAnalyticsInitialized || typeof window === 'undefined') {
    return;
  }

  isGoogleAnalyticsInitialized = true;

  const existingScript = document.querySelector<HTMLScriptElement>(
    `script[src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"]`
  );

  if (!existingScript) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: any[]) => {
    window.dataLayer?.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_ID, {
    page_path: window.location.pathname,
    page_title: document.title,
    send_page_view: false,
  });
}

export function useAnalytics() {
  useEffect(() => {
    initializeGoogleAnalytics();
  }, []);

  // Track page views
  const trackPageView = useCallback((pagePath: string, pageTitle: string) => {
    if (GA_ID && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: pagePath,
        page_title: pageTitle,
      });
    }
  }, []);

  // Track CTA clicks
  const trackCTAClick = useCallback((buttonName: string, location: string) => {
    if (GA_ID && window.gtag) {
      window.gtag('event', 'cta_click', {
        button_name: buttonName,
        location: location,
      });
    }
  }, []);

  // Track form submissions
  const trackFormSubmission = useCallback((formName: string, formData?: Record<string, any>) => {
    if (GA_ID && window.gtag) {
      window.gtag('event', 'form_submit', {
        form_name: formName,
        ...formData,
      });
    }
  }, []);

  // Track scroll depth
  const trackScrollDepth = useCallback((depth: number) => {
    if (GA_ID && window.gtag) {
      window.gtag('event', 'scroll_depth', {
        depth_percentage: depth,
      });
    }
  }, []);

  // Track link clicks
  const trackLinkClick = useCallback((linkName: string, linkUrl: string) => {
    if (GA_ID && window.gtag) {
      window.gtag('event', 'link_click', {
        link_name: linkName,
        link_url: linkUrl,
      });
    }
  }, []);

  // Track blog article views
  const trackBlogView = useCallback((articleTitle: string, articleSlug: string) => {
    if (GA_ID && window.gtag) {
      window.gtag('event', 'blog_view', {
        article_title: articleTitle,
        article_slug: articleSlug,
      });
    }
  }, []);

  // Track conversion (lead capture)
  const trackConversion = useCallback((conversionType: string, conversionValue?: number) => {
    if (GA_ID && window.gtag) {
      window.gtag('event', 'conversion', {
        conversion_type: conversionType,
        conversion_value: conversionValue,
      });
    }
  }, []);

  return {
    trackPageView,
    trackCTAClick,
    trackFormSubmission,
    trackScrollDepth,
    trackLinkClick,
    trackBlogView,
    trackConversion,
  };
}
