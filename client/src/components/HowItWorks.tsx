import { Database, BarChart3, Zap, TrendingUp } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const iconMap = {
  0: Database,
  1: BarChart3,
  2: Zap,
  3: TrendingUp,
};

export default function HowItWorks() {
  const { t } = useTranslation();
  const steps = t('howItWorks.steps');

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-lg text-foreground">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="space-y-8">
          {steps.map((step: any, index: number) => {
            const Icon = iconMap[index as keyof typeof iconMap];
            const isLast = index === steps.length - 1;

            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {!isLast && (
                  <div className="absolute left-8 top-24 w-0.5 h-12 bg-gradient-to-b from-primary/30 to-transparent" />
                )}

                {/* Step Card */}
                <div className="flex gap-8">
                  {/* Step Number & Icon */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <span className="absolute -top-2 -right-2 text-xs font-bold text-primary bg-white rounded-full w-6 h-6 flex items-center justify-center border border-primary/20">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-2 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="md:col-span-2">
                        <h3 className="text-2xl font-semibold text-foreground mb-2">{step.title}</h3>
                        <p className="text-foreground">{step.description}</p>
                      </div>
                      <div className="flex items-start justify-end">
                        <div className="text-right">
                          <p className="text-xs text-foreground font-medium mb-1">TIME</p>
                          <p className="text-lg font-semibold text-foreground">{step.time}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
