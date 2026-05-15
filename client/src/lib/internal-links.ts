/**
 * Internal Links System for SEO
 * Maps blog articles to relevant service pages and other articles
 */

export interface InternalLink {
  text: string;
  href: string;
  context: string; // Where this link should appear
}

export const internalLinksMap = {
  // Home page links
  home: {
    en: [
      { text: 'payment optimization guide', href: '/blog/stripe-payment-retry-strategy', context: 'hero' },
      { text: 'payment failure analysis', href: '/blog/payment-failure-analysis', context: 'problem' },
      { text: 'dunning strategy', href: '/blog/dunning-management-churn-reduction', context: 'solution' },
      { text: 'Stripe configuration checklist', href: '/blog/stripe-configuration-audit-checklist', context: 'solution' },
    ],
    fr: [
      { text: 'guide d\'optimisation des paiements', href: '/blog/stripe-payment-retry-strategy', context: 'hero' },
      { text: 'analyse des paiements échoués', href: '/blog/payment-failure-analysis', context: 'problem' },
      { text: 'stratégie de dunning', href: '/blog/dunning-management-churn-reduction', context: 'solution' },
      { text: 'liste de vérification de configuration Stripe', href: '/blog/stripe-configuration-audit-checklist', context: 'solution' },
    ],
  },

  // Article-to-Article links
  'stripe-payment-retry-strategy': {
    en: [
      { text: 'payment failure analysis', href: '/blog/payment-failure-analysis', context: 'related' },
      { text: 'dunning management guide', href: '/blog/dunning-management-churn-reduction', context: 'related' },
    ],
    fr: [
      { text: 'analyse des paiements échoués', href: '/blog/payment-failure-analysis', context: 'related' },
      { text: 'guide de gestion du dunning', href: '/blog/dunning-management-churn-reduction', context: 'related' },
    ],
  },

  'payment-failure-analysis': {
    en: [
      { text: 'retry strategy optimization', href: '/blog/stripe-payment-retry-strategy', context: 'related' },
      { text: 'Stripe configuration audit', href: '/blog/stripe-configuration-audit-checklist', context: 'related' },
      { text: 'Get a free audit', href: '/contact', context: 'cta' },
    ],
    fr: [
      { text: 'optimisation de la stratégie de retry', href: '/blog/stripe-payment-retry-strategy', context: 'related' },
      { text: 'audit de configuration Stripe', href: '/blog/stripe-configuration-audit-checklist', context: 'related' },
      { text: 'Obtenez un audit gratuit', href: '/contact', context: 'cta' },
    ],
  },

  'dunning-management-churn-reduction': {
    en: [
      { text: 'payment retry strategy', href: '/blog/stripe-payment-retry-strategy', context: 'related' },
      { text: 'payment failure analysis', href: '/blog/payment-failure-analysis', context: 'related' },
      { text: 'Book an audit', href: '/contact', context: 'cta' },
    ],
    fr: [
      { text: 'stratégie de retry des paiements', href: '/blog/stripe-payment-retry-strategy', context: 'related' },
      { text: 'analyse des paiements échoués', href: '/blog/payment-failure-analysis', context: 'related' },
      { text: 'Réservez un audit', href: '/contact', context: 'cta' },
    ],
  },

  'stripe-configuration-audit-checklist': {
    en: [
      { text: 'payment failure analysis', href: '/blog/payment-failure-analysis', context: 'related' },
      { text: 'retry strategy guide', href: '/blog/stripe-payment-retry-strategy', context: 'related' },
      { text: 'Start your free audit', href: '/contact', context: 'cta' },
    ],
    fr: [
      { text: 'analyse des paiements échoués', href: '/blog/payment-failure-analysis', context: 'related' },
      { text: 'guide de stratégie de retry', href: '/blog/stripe-payment-retry-strategy', context: 'related' },
      { text: 'Commencez votre audit gratuit', href: '/contact', context: 'cta' },
    ],
  },
};

/**
 * Get internal links for a specific page
 */
export function getInternalLinks(slug: string, language: 'en' | 'fr'): InternalLink[] {
  return internalLinksMap[slug as keyof typeof internalLinksMap]?.[language] || [];
}

/**
 * Get related articles for a blog post
 */
export function getRelatedArticles(slug: string, language: 'en' | 'fr'): InternalLink[] {
  const links = getInternalLinks(slug, language);
  return links.filter(link => link.context === 'related');
}

/**
 * Get CTA links for a blog post
 */
export function getCtaLinks(slug: string, language: 'en' | 'fr'): InternalLink[] {
  const links = getInternalLinks(slug, language);
  return links.filter(link => link.context === 'cta');
}
