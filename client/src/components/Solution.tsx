import { CheckCircle2, Zap, TrendingUp } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const SOLUTION_URL = "https://d2xsxph8kpxj0f.cloudfront.net/114882360/9WmLTxwCNsoDeqoqcNTHiT/revforge-solution-MAsBXgBeu3c22jCfxmbK72.webp";

const iconMap = {
  0: CheckCircle2,
  1: Zap,
  2: TrendingUp,
};

export default function Solution() {
  const { t } = useTranslation();
  const features = t('solution.features');
  const benefits = t('solution.benefits');

  return (
    <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('solution.title')}
            <span className="text-primary"> {t('solution.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('solution.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature: any, index: number) => {
            const Icon = iconMap[index as keyof typeof iconMap];
            return (
              <div key={index} className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Solution Illustration */}
        <div className="mb-16 relative rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-card">
          <img
            src={SOLUTION_URL}
            alt="Solution Illustration"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map((benefit: any, index: number) => (
            <div key={index} className="p-6 rounded-xl bg-card border border-border text-center">
              <p className="text-3xl font-bold text-primary mb-2">{benefit.metric}</p>
              <p className="text-sm text-muted-foreground">{benefit.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
