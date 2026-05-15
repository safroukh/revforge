import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { Link } from "wouter";

export default function Pricing() {
  const { t } = useTranslation();
  const plans = t('pricing.plans');

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan: any, index: number) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? "ring-2 ring-primary shadow-2xl transform md:scale-105"
                  : "border border-border hover:shadow-lg"
              } ${plan.highlighted ? "bg-card" : "bg-card"}`}
            >
              {/* Highlight Badge */}
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-primary/80 text-black py-2 text-center text-sm font-semibold">
                  {t('pricing.mostPopular')}
                </div>
              )}

              {/* Content */}
              <div className={`p-8 ${plan.highlighted ? "pt-16" : ""}`}>
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground ml-2">{plan.period}</span>}
                </div>

                {/* CTA Button */}
                <Link href="/contact">
                  <a className="block mb-8">
                    <Button
                      className={`w-full rounded-lg font-semibold ${
                        plan.highlighted
                          ? "bg-primary hover:bg-primary/80 text-black"
                          : "border border-border hover:bg-secondary text-foreground"
                      }`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </a>
                </Link>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature: string, featureIndex: number) => (
                    <div key={featureIndex} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Note */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            {t('pricing.faqText')}
          </p>
          <Link href="/contact">
            <a>
              <Button variant="outline" className="border-border hover:bg-secondary rounded-lg">
                {t('pricing.contactSales')}
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
