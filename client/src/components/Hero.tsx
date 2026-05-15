import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useAnalytics } from "@/hooks/useAnalytics";

const DASHBOARD_URL = "https://d2xsxph8kpxj0f.cloudfront.net/114882360/9WmLTxwCNsoDeqoqcNTHiT/revforge-dashboard-FBzpQAAYJUFzaf5PRV4rWx.webp";

export default function Hero() {
  const { t } = useTranslation();
  const { trackCTAClick } = useAnalytics();

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-background lg:pt-28 lg:pb-20">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-12 lg:gap-14 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-7">
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-normal text-foreground sm:text-5xl lg:text-6xl">
                <span className="block">{t('hero.headline1')}</span>
                <span className="block text-primary">{t('hero.headline2')}</span>
                <span className="block">{t('hero.headline3')}</span>
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground leading-relaxed sm:text-lg">
                {t('hero.subheadline')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/contact" onClick={() => trackCTAClick('hero_get_audit', 'hero')}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/80 text-black rounded-lg font-semibold flex items-center gap-2 group"
                >
                  {t('hero.cta1')}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#how-it-works" onClick={() => trackCTAClick('hero_learn_more', 'hero')}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-card rounded-lg font-semibold text-foreground"
                >
                  {t('hero.cta2')}
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>{t('hero.trust1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>{t('hero.trust2')}</span>
              </div>
            </div>
          </div>

          {/* Right: Dashboard Visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-3xl" />
              
              {/* Dashboard Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                <img
                  src={DASHBOARD_URL}
                  alt="RevForge Dashboard"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-2xl border border-border p-6 max-w-xs">
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{t('hero.metric')}</p>
                  <p className="text-3xl font-bold text-primary">{t('hero.metricValue')}</p>
                  <p className="text-xs text-muted-foreground">{t('hero.metricChange')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
