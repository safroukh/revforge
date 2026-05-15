import { Star } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function Results() {
  const { t } = useTranslation();
  const metrics = t('results.metrics');
  const testimonials = t('results.testimonials');

  return (
    <section id="results" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('results.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('results.subtitle')}
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric: any, index: number) => (
            <div key={index} className="p-6 rounded-xl bg-card border border-border">
              <p className="text-sm text-muted-foreground font-medium mb-2">{metric.label}</p>
              <p className="text-3xl font-bold text-primary mb-1">{metric.value}</p>
              <p className="text-xs text-muted-foreground">{metric.subtext}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8">{t('results.testimonialHeading')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial: any, index: number) => (
              <div key={index} className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>

                {/* Author */}
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
