'use client';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type AnalyticsEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

export function trackEvent({ action, category, label, value }: AnalyticsEvent) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
}

export function trackPageView(url: string) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '', {
    page_path: url,
  });
}

export function trackFormSubmit(formName: string) {
  trackEvent({ action: 'form_submit', category: 'engagement', label: formName });
}

export function trackProductView(productId: string, productName: string) {
  trackEvent({ action: 'view_item', category: 'ecommerce', label: `${productId}:${productName}` });
}

export function trackCTAClick(ctaLabel: string, destination: string) {
  trackEvent({ action: 'cta_click', category: 'engagement', label: `${ctaLabel} -> ${destination}` });
}
