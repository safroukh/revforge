import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export function useAnalytics() {
  useEffect(() => {
    // Initialize Google Analytics 4
    const GA_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 Measurement ID
    
    // Create script for Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer?.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', GA_ID, {
      page_path: window.location.pathname,
      page_title: document.title,
    });

    window.gtag = gtag;
  }, []);

  // Track page views
  const trackPageView = (pagePath: string, pageTitle: string) => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: pagePath,
        page_title: pageTitle,
      });
    }
  };

  // Track CTA clicks
  const trackCTAClick = (buttonName: string, location: string) => {
    if (window.gtag) {
      window.gtag('event', 'cta_click', {
        button_name: buttonName,
        location: location,
      });
    }
  };

  // Track form submissions
  const trackFormSubmission = (formName: string, formData?: Record<string, any>) => {
    if (window.gtag) {
      window.gtag('event', 'form_submit', {
        form_name: formName,
        ...formData,
      });
    }
  };

  // Track scroll depth
  const trackScrollDepth = (depth: number) => {
    if (window.gtag) {
      window.gtag('event', 'scroll_depth', {
        depth_percentage: depth,
      });
    }
  };

  // Track link clicks
  const trackLinkClick = (linkName: string, linkUrl: string) => {
    if (window.gtag) {
      window.gtag('event', 'link_click', {
        link_name: linkName,
        link_url: linkUrl,
      });
    }
  };

  // Track blog article views
  const trackBlogView = (articleTitle: string, articleSlug: string) => {
    if (window.gtag) {
      window.gtag('event', 'blog_view', {
        article_title: articleTitle,
        article_slug: articleSlug,
      });
    }
  };

  // Track conversion (lead capture)
  const trackConversion = (conversionType: string, conversionValue?: number) => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        conversion_type: conversionType,
        conversion_value: conversionValue,
      });
    }
  };

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
