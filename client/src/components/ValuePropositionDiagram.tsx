import { useTranslation } from "@/hooks/useTranslation";
import { Shield, Zap, TrendingUp } from "lucide-react";
import BrandLogo from "./BrandLogo";

export default function ValuePropositionDiagram() {
  const { t, language } = useTranslation();

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {language === 'en' ? 'How RevForge Adds Value' : 'Comment RevForge Ajoute de la Valeur'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'en'
              ? 'A comprehensive approach to payment optimization across three key areas'
              : 'Une approche complète de l\'optimisation des paiements dans trois domaines clés'}
          </p>
        </div>

        {/* Circular Value Proposition Diagram */}
        <div className="flex justify-center items-center mb-16 overflow-hidden px-2 py-6 sm:overflow-visible">
          <div className="relative w-full max-w-[21rem] aspect-square sm:max-w-2xl">
            {/* SVG Background - Circular connections */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              {/* Center circle */}
              <circle cx="200" cy="200" r="60" fill="none" stroke="#10B981" strokeWidth="2" opacity="0.3" strokeDasharray="5,5" />
              
              {/* Connection lines from center to bubbles */}
              <line x1="200" y1="140" x2="200" y2="80" stroke="#10B981" strokeWidth="2" opacity="0.3" />
              <line x1="280" y1="260" x2="320" y2="300" stroke="#10B981" strokeWidth="2" opacity="0.3" />
              <line x1="120" y1="260" x2="80" y2="300" stroke="#10B981" strokeWidth="2" opacity="0.3" />
              
              {/* Circular arc connecting the three bubbles */}
              <path d="M 200 80 A 120 120 0 1 1 200 80" fill="none" stroke="#10B981" strokeWidth="1" opacity="0.2" strokeDasharray="3,3" />
            </svg>

            {/* Center Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="z-10 flex h-20 w-32 items-center justify-center rounded-xl border-2 border-primary bg-card p-2 shadow-lg sm:h-24 sm:w-40">
                <BrandLogo compact className="h-full w-full p-0 shadow-none ring-0" />
              </div>
            </div>

            {/* Three Bubble Cards positioned in circular layout */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Top Bubble - Identify */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                <div className="w-28 h-28 bg-card border-2 border-primary rounded-full flex flex-col items-center justify-center p-3 shadow-lg hover:shadow-xl transition-shadow hover:scale-105 transform duration-300 sm:w-32 sm:h-32 sm:p-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-2">
                    <Shield className="text-primary" size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-foreground text-center">
                    {language === 'en' ? 'Identify' : 'Identifier'}
                  </h3>
                  <p className="text-xs text-muted-foreground text-center mt-1">
                    {language === 'en' ? 'Find losses' : 'Trouver les pertes'}
                  </p>
                </div>
              </div>

              {/* Bottom Right Bubble - Optimize */}
              <div className="absolute bottom-0 right-0 transform translate-x-2 translate-y-4 sm:translate-x-8 sm:translate-y-8">
                <div className="w-28 h-28 bg-card border-2 border-primary rounded-full flex flex-col items-center justify-center p-3 shadow-lg hover:shadow-xl transition-shadow hover:scale-105 transform duration-300 sm:w-32 sm:h-32 sm:p-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-2">
                    <Zap className="text-primary" size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-foreground text-center">
                    {language === 'en' ? 'Optimize' : 'Optimiser'}
                  </h3>
                  <p className="text-xs text-muted-foreground text-center mt-1">
                    {language === 'en' ? 'Implement AI' : 'Mettre en œuvre'}
                  </p>
                </div>
              </div>

              {/* Bottom Left Bubble - Grow */}
              <div className="absolute bottom-0 left-0 transform -translate-x-2 translate-y-4 sm:-translate-x-8 sm:translate-y-8">
                <div className="w-28 h-28 bg-card border-2 border-primary rounded-full flex flex-col items-center justify-center p-3 shadow-lg hover:shadow-xl transition-shadow hover:scale-105 transform duration-300 sm:w-32 sm:h-32 sm:p-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-2">
                    <TrendingUp className="text-primary" size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-foreground text-center">
                    {language === 'en' ? 'Grow' : 'Croître'}
                  </h3>
                  <p className="text-xs text-muted-foreground text-center mt-1">
                    {language === 'en' ? 'Increase LTV' : 'Augmenter LTV'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Description Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Column 1: Identify */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-6">
              <Shield className="text-primary" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {language === 'en' ? 'Identify' : 'Identifier'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === 'en'
                ? 'Discover hidden revenue loss from failed payments, misconfigured billing, and suboptimal retry logic'
                : 'Découvrez les pertes de revenus cachées dues aux paiements échoués, à la facturation mal configurée et à la logique de relance sous-optimale'}
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Audit your Stripe account' : 'Auditez votre compte Stripe'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Analyze payment patterns' : 'Analysez les modèles de paiement'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Quantify revenue impact' : 'Quantifiez l\'impact sur les revenus'}
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2: Optimize */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-6">
              <Zap className="text-primary" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {language === 'en' ? 'Optimize' : 'Optimiser'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === 'en'
                ? 'Implement AI-powered retry strategies, intelligent routing, and dynamic dunning to recover failed payments'
                : 'Mettez en œuvre des stratégies de relance alimentées par l\'IA, un routage intelligent et un dunning dynamique'}
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-sm text-muted-foreground">
                  {language === 'en' ? 'AI-powered retry logic' : 'Logique de relance alimentée par l\'IA'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Intelligent payment routing' : 'Routage intelligent des paiements'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Dynamic dunning management' : 'Gestion dynamique du dunning'}
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Grow */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-6">
              <TrendingUp className="text-primary" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {language === 'en' ? 'Grow' : 'Croître'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === 'en'
                ? 'Recover 40%+ of failed payments, reduce involuntary churn, and increase customer lifetime value'
                : 'Récupérez plus de 40% des paiements échoués, réduisez le churn involontaire et augmentez la valeur de vie du client'}
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Recover 40%+ failed payments' : 'Récupérez 40%+ des paiements échoués'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Reduce involuntary churn' : 'Réduisez le churn involontaire'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Increase customer LTV' : 'Augmentez la valeur de vie du client'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Metric */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-12 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            {language === 'en'
              ? 'Average ROI Timeline'
              : 'Délai moyen de RoI'}
          </p>
          <div className="text-5xl font-bold text-primary mb-2">
            {language === 'en' ? '2-4 weeks' : '2-4 semaines'}
          </div>
          <p className="text-muted-foreground">
            {language === 'en'
              ? 'Most clients see positive ROI within the first month'
              : 'La plupart des clients voient un RoI positif dans le premier mois'}
          </p>
        </div>
      </div>
    </section>
  );
}
