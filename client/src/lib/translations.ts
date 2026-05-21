export type Language = 'en' | 'fr';

export const translations = {
  en: {
    // Header
    header: {
      problem: 'Problem',
      solution: 'Solution',
      howItWorks: 'How It Works',
      results: 'Results',
      pricing: 'Pricing',
      getAudit: 'Get Free Audit',
    },

    // Hero
    hero: {
      headline1: "You're losing revenue on Stripe.",
      headline2: 'We show you where',
      headline3: 'and help you fix it.',
      subheadline: 'RevForge identifies hidden revenue loss from failed payments, poor retry logic, and billing misconfigurations. Recover what you\'re leaving on the table.',
      cta1: 'Get a Free Audit',
      cta2: 'See How It Works',
      trust1: 'No credit card required',
      trust2: '30 min setup',
      metric: 'REVENUE RECOVERED',
      metricValue: '$127,450',
      metricChange: '+15% vs previous period',
    },

    // Problem
    problem: {
      title: 'The Hidden Revenue Leak',
      subtitle: 'Most SaaS companies are leaving 10-25% of potential revenue on the table due to payment failures, poor retry strategies, and billing misconfigurations.',
      problems: [
        {
          title: 'Failed Payments Not Recovered',
          description: 'Most SaaS companies lose 5-15% of recurring revenue to failed payments that are never retried or recovered.',
        },
        {
          title: 'Poor Retry Logic',
          description: 'Default Stripe retry schedules miss recovery opportunities. Smart routing and timing can recover more than 40% of failed transactions.',
        },
        {
          title: 'Hidden Churn',
          description: 'Payment failures are the 1st cause of involuntary churn. Silent failures lead to lost customers and revenue.',
        },
        {
          title: 'Billing Misconfigurations',
          description: 'Incorrect tax settings, pricing tiers, and subscription logic cost you thousands monthly without you knowing.',
        },
      ],
    },

    // Solution
    solution: {
      title: 'Optimize Payments. Recover Revenue.',
      titleHighlight: 'Grow.',
      subtitle: 'RevForge combines deep Stripe expertise with intelligent payment optimization to recover lost revenue and drive sustainable growth.',
      features: [
        {
          title: 'Stripe Audit',
          description: 'Deep analysis of your Stripe configuration, payment flows, and historical data to identify all revenue leaks.',
        },
        {
          title: 'Payment Simulation',
          description: 'We simulate real customer payment behavior to test retry logic, recovery rates, and optimization opportunities.',
        },
        {
          title: 'KPI Analysis',
          description: 'Comprehensive metrics: failure rates, recovery rates, LTV impact, churn attribution, and revenue opportunity.',
        },
      ],
      benefits: [
        { metric: '+20%', label: 'Average Revenue Recovery' },
        { metric: '94%', label: 'Payment Success Rate' },
        { metric: '-30%', label: 'Involuntary Churn Reduction' },
        { metric: '3-6 months', label: 'RoI Timeline' },
      ],
    },

    // How It Works
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Get a complete Stripe audit and actionable recommendations in just 4 steps.',
      steps: [
        {
          title: 'Connect Stripe',
          description: 'Securely connect your Stripe account. We read-only access your payment data to perform the audit.',
          time: '2 minutes',
        },
        {
          title: 'Run Audit & Simulations',
          description: 'Our engine analyzes your payment flows, tests retry strategies, and simulates recovery scenarios.',
          time: '24 hours',
        },
        {
          title: 'Get Detailed Report',
          description: 'Receive a comprehensive audit report with KPIs, identified issues, and concrete recommendations.',
          time: 'Instant',
        },
        {
          title: 'Implement & Grow',
          description: 'Apply our recommendations to optimize payments, recover revenue, and improve your bottom line.',
          time: 'Ongoing',
        },
      ],
    },

    // Results
    results: {
      title: 'Real Results. Real Impact.',
      subtitle: 'Companies using RevForge recover significant revenue and improve payment performance within weeks.',
      metrics: [
        { label: 'Average Revenue Recovered', value: '+$50K', subtext: 'First 90 days' },
        { label: 'Payment Success Rate Improvement', value: '+20%', subtext: 'Post-optimization' },
        { label: 'Involuntary Churn Reduction', value: '-30%', subtext: 'Payment-related churn' },
        { label: 'Average RoI Timeline', value: '3-6 months', subtext: 'From implementation' },
      ],
      testimonials: [
        {
          name: 'Sarah Cohen',
          role: 'CFO',
          company: 'SaaS, $5M ARR',
          quote: 'RevForge identified $30K in monthly revenue we were losing to failed payments. The RoI was immediate.',
        },
        {
          name: 'Marc Francis',
          role: 'Founder',
          company: 'E-commerce, $12M ARR',
          quote: 'The payment optimization recommendations increased our success rate by 20%. Game changer.',
        },
        {
          name: 'Marie Rodriguez',
          role: 'Revenue Ops Lead',
          company: 'SaaS, $8M ARR',
          quote: 'Best investment. The audit alone paid for itself in the first week.',
        },
      ],
      testimonialHeading: 'What our customers say',
    },

    // Payment Metrics
    metrics: {
      title: 'Real Results. Real Data.',
      subtitle: 'See how RevForge transforms payment optimization with data-driven insights',
      failedPaymentRecovery: 'Failed Payment Recovery Rate',
      retrySuccessRate: 'Retry Success Rate by Strategy',
      paymentStatus: 'Payment Status Distribution',
      ltvImpact: 'Customer LTV Growth Impact',
      insight1: 'Average recovery rate improvement',
      insight2: 'Retry success rate with AI optimization',
      insight3: 'Average customer LTV growth in 6 months',
    },

    // Pricing
    pricing: {
      title: 'Simple, Transparent Pricing',
      subtitle: 'Choose the plan that fits your needs. All plans include read-only Stripe integration and certified expert support.',
      plans: [
        {
          name: 'Free Audit Preview',
          description: 'Get started with a quick assessment',
          price: 'Free',
          cta: 'Start Free Audit',
          features: [
            'Quick Stripe configuration review',
            'Identify top 3 revenue leaks',
            'Estimated recovery potential',
            '15-minute consultation call',
          ],
        },
        {
          name: 'Deep Audit & Optimization',
          description: 'Full analysis with actionable recommendations',
          price: '€1,900',
          period: 'one-time',
          cta: 'Schedule Deep Audit',
          features: [
            'Complete Stripe audit',
            'Payment simulation & testing',
            'Detailed KPI analysis',
            'Custom optimization roadmap',
            'Implementation support',
            '60-day follow-up review',
          ],
          highlighted: true,
        },
        {
          name: 'Ongoing Optimization',
          description: 'Continuous monitoring and improvement',
          price: '€900',
          period: '/month',
          cta: 'Contact Sales',
          features: [
            'Everything in Deep Audit',
            'Monthly performance reviews',
            'Real-time payment monitoring',
            'Quarterly strategy sessions',
            'Priority support',
            'A/B testing & experimentation',
          ],
        },
      ],
      faqText: 'Need a custom plan? Have questions?',
      contactSales: 'Contact Our Sales Team',
      mostPopular: 'Most Popular',
    },

    // Final CTA
    finalCTA: {
      title: 'Stop Losing Money on Stripe',
      subtitle: 'Get a free audit today and discover exactly how much revenue you\'re leaving on the table. No credit card required.',
      cta1: 'Get Your Free Audit',
      trust1: 'No credit card required',
      trust2: '30 min setup',
      trust3: 'Secure Stripe connection',
    },

    // Footer
    footer: {
      tagline: 'Stripe audit and payment optimization for SaaS and e-commerce.',
      product: 'Product',
      productLinks: {
        features: 'Features',
        pricing: 'Pricing',
        howItWorks: 'How It Works',
        security: 'Security',
      },
      company: 'Company',
      companyLinks: {
        about: 'About',
        blog: 'Blog',
        contact: 'Contact',
        careers: 'Careers',
      },
      legal: 'Legal',
      legalLinks: {
        privacy: 'Privacy',
        terms: 'Terms',
        compliance: 'Compliance',
        status: 'Status',
      },
      copyright: '© 2026 RevForge. All rights reserved.',
    },
  },

  fr: {
    // Header
    header: {
      problem: 'Problème',
      solution: 'Solution',
      howItWorks: 'Comment ça marche',
      results: 'Résultats',
      pricing: 'Tarifs',
      getAudit: 'Audit gratuit',
    },

    // Hero
    hero: {
      headline1: 'Vous perdez des revenus sur Stripe.',
      headline2: 'Nous identifions les fuites',
      headline3: 'et vous aidons à les récupérer.',
      subheadline: 'RevForge identifie les pertes de revenus cachées dues aux paiements échoués, à la mauvaise logique de relance et aux erreurs de configuration de facturation. Récupérez ce que vous laissez sur la table.',
      cta1: 'Obtenir un audit gratuit',
      cta2: 'Voir comment ça marche',
      trust1: 'Aucune carte de crédit requise',
      trust2: 'Configuration en 30 min',
      metric: 'REVENUS RÉCUPÉRÉS',
      metricValue: '127 450 €',
      metricChange: '+15% vs période précédente',
    },

    // Problem
    problem: {
      title: 'La fuite de revenus cachée',
      subtitle: 'La plupart des entreprises SaaS laissent 10-25% de leurs revenus potentiels sur la table en raison des paiements échoués, des mauvaises stratégies de relance et des erreurs de configuration de facturation.',
      problems: [
        {
          title: 'Paiements échoués non récupérés',
          description: 'La plupart des entreprises SaaS perdent 5-15% de leurs revenus récurrents à cause des paiements échoués qui ne sont jamais relancés ou récupérés.',
        },
        {
          title: 'Mauvaise logique de relance',
          description: 'Les calendriers de relance par défaut de Stripe manquent les opportunités de récupération. Un routage et un timing intelligents peuvent récupérer 40%+ des transactions échouées.',
        },
        {
          title: 'Churn caché',
          description: 'Les paiements échoués sont la #1 cause du churn involontaire. Les défaillances silencieuses entraînent la perte de clients et de revenus.',
        },
        {
          title: 'Erreurs de configuration de facturation',
          description: 'Les paramètres fiscaux incorrects, les niveaux de tarification et la logique d\'abonnement vous coûtent des milliers par mois sans que vous le sachiez.',
        },
      ],
    },

    // Solution
    solution: {
      title: 'Optimisez les paiements. Récupérez les revenus.',
      titleHighlight: 'Grandissez.',
      subtitle: 'RevForge combine une expertise approfondie de Stripe avec une optimisation intelligente des paiements pour récupérer les revenus perdus et stimuler une croissance durable.',
      features: [
        {
          title: 'Audit Stripe',
          description: 'Analyse approfondie de votre configuration Stripe, de vos flux de paiement et de vos données historiques pour identifier toutes les fuites de revenus.',
        },
        {
          title: 'Simulation de paiement',
          description: 'Nous simulons le comportement réel des clients pour tester la logique de relance, les taux de récupération et les opportunités d\'optimisation.',
        },
        {
          title: 'Analyse des KPI',
          description: 'Métriques complètes : taux d\'échec, taux de récupération, impact LTV, attribution du churn et opportunité de revenus.',
        },
      ],
      benefits: [
        { metric: '+20%', label: 'Récupération moyenne de revenus' },
        { metric: '94%', label: 'Taux de succès des paiements' },
        { metric: '-30%', label: 'Réduction du churn involontaire' },
        { metric: '3-6 mois', label: 'Délai de RoI' },
      ],
    },

    // How It Works
    howItWorks: {
      title: 'Comment ça marche',
      subtitle: 'Obtenez un audit Stripe complet et des recommandations exploitables en seulement 4 étapes.',
      steps: [
        {
          title: 'Connectez Stripe',
          description: 'Connectez votre compte Stripe en toute sécurité. Nous accédons en lecture seule à vos données de paiement pour effectuer l\'audit.',
          time: '2 minutes',
        },
        {
          title: 'Exécuter l\'audit et les simulations',
          description: 'Notre moteur analyse vos flux de paiement, teste les stratégies de relance et simule les scénarios de récupération.',
          time: '24 heures',
        },
        {
          title: 'Obtenir un rapport détaillé',
          description: 'Recevez un rapport d\'audit complet avec les KPI, les problèmes identifiés et les recommandations concrètes.',
          time: 'Instantané',
        },
        {
          title: 'Implémenter et grandir',
          description: 'Appliquez nos recommandations pour optimiser les paiements, récupérer les revenus et améliorer votre résultat net.',
          time: 'Continu',
        },
      ],
    },

    // Results
    results: {
      title: 'Des résultats réels. Un impact réel.',
      subtitle: 'Les entreprises utilisant RevForge récupèrent des revenus importants et améliorent les performances des paiements en quelques semaines.',
      metrics: [
        { label: 'Revenus moyens récupérés', value: '+50 K€', subtext: 'Premiers 90 jours' },
        { label: 'Amélioration du taux de succès des paiements', value: '+20%', subtext: 'Après optimisation' },
        { label: 'Réduction du churn involontaire', value: '-30%', subtext: 'Churn lié aux paiements' },
        { label: 'Délai moyen de RoI', value: '3-6 mois', subtext: 'À partir de la mise en œuvre' },
      ],
      testimonials: [
        {
          name: 'Sarah Cohen',
          role: 'CFO',
          company: 'SaaS, 5M€ ARR',
          quote: 'RevForge a identifié 30 000€ de revenus mensuels que nous perdions à cause des paiements échoués. Le RoI a été immédiat.',
        },
        {
          name: 'Marc Francis',
          role: 'Fondateur',
          company: 'E-commerce, 12M€ ARR',
          quote: 'Les recommandations d\'optimisation des paiements ont augmenté notre taux de succès de 20%. Un vrai changement de jeu.',
        },
        {
          name: 'Marie Rodriguez',
          role: 'Responsable des opérations de revenus',
          company: 'SaaS, 8M€ ARR',
          quote: 'Le meilleur investissement. L\'audit seul s\'est amorti en une semaine.',
        },
      ],
      testimonialHeading: 'Ce que disent nos clients',
    },

    // Payment Metrics
    metrics: {
      title: 'Résultats réels. Données réelles.',
      subtitle: 'Découvrez comment RevForge transforme l\'optimisation des paiements avec des insights basés sur les données',
      failedPaymentRecovery: 'Taux de récupération des paiements échoués',
      retrySuccessRate: 'Taux de succès des relances par stratégie',
      paymentStatus: 'Distribution du statut des paiements',
      ltvImpact: 'Impact de la croissance du LTV client',
      insight1: 'Amélioration moyenne du taux de récupération',
      insight2: 'Taux de succès des relances avec optimisation IA',
      insight3: 'Croissance moyenne du LTV client en 6 mois',
    },

    // Pricing
    pricing: {
      title: 'Tarification simple et transparente',
      subtitle: 'Choisissez le plan qui vous convient. Tous les plans incluent l\'intégration Stripe en lecture seule et le support d\'un expert certifié.',
      plans: [
        {
          name: 'Aperçu d\'audit gratuit',
          description: 'Commencez par une évaluation rapide',
          price: 'Gratuit',
          cta: 'Commencer l\'audit gratuit',
          features: [
            'Examen rapide de la configuration Stripe',
            'Identifier les 3 principales fuites de revenus',
            'Potentiel de récupération estimé',
            'Appel de consultation de 15 minutes',
          ],
        },
        {
          name: 'Audit approfondi et optimisation',
          description: 'Analyse complète avec recommandations exploitables',
          price: '1 900 €',
          period: 'une seule fois',
          cta: 'Planifier un audit approfondi',
          features: [
            'Audit Stripe complet',
            'Simulation et test des paiements',
            'Analyse détaillée des KPI',
            'Feuille de route d\'optimisation personnalisée',
            'Support à la mise en œuvre',
            'Examen de suivi de 60 jours',
          ],
          highlighted: true,
        },
        {
          name: 'Optimisation continue',
          description: 'Surveillance et amélioration continues',
          price: '900 €',
          period: '/mois',
          cta: 'Contacter les ventes',
          features: [
            'Tout ce qui est inclus dans l\'audit approfondi',
            'Examens mensuels des performances',
            'Surveillance des paiements en temps réel',
            'Sessions stratégiques trimestrielles',
            'Support prioritaire',
            'Tests A/B et expérimentation',
          ],
        },
      ],
      faqText: 'Besoin d\'un plan personnalisé ? Des questions ?',
      contactSales: 'Contacter notre équipe commerciale',
      mostPopular: 'Le plus populaire',
    },

    // Final CTA
    finalCTA: {
      title: 'Arrêtez de perdre de l\'argent sur Stripe',
      subtitle: 'Obtenez un audit gratuit dès aujourd\'hui et découvrez exactement combien de revenus vous laissez sur la table. Aucune carte de crédit requise.',
      cta1: 'Obtenir votre audit gratuit',
      trust1: 'Aucune carte de crédit requise',
      trust2: 'Configuration en 30 min',
      trust3: 'Connexion Stripe sécurisée',
    },

    // Footer
    footer: {
      tagline: 'Audit Stripe et optimisation des paiements pour SaaS et e-commerce.',
      product: 'Produit',
      productLinks: {
        features: 'Caractéristiques',
        pricing: 'Tarifs',
        howItWorks: 'Comment ça marche',
        security: 'Sécurité',
      },
      company: 'Entreprise',
      companyLinks: {
        about: 'À propos',
        blog: 'Blog',
        contact: 'Contact',
        careers: 'Carrières',
      },
      legal: 'Légal',
      legalLinks: {
        privacy: 'Confidentialité',
        terms: 'Conditions',
        compliance: 'Conformité',
        status: 'Statut',
      },
      copyright: '© 2026 RevForge. Tous droits réservés.',
    },
  },
};

export function getTranslation(lang: Language, key: string): any {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value;
}
