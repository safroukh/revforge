import { AlertCircle, TrendingDown, Zap, Users } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const PROBLEM_URL = "https://d2xsxph8kpxj0f.cloudfront.net/114882360/9WmLTxwCNsoDeqoqcNTHiT/revforge-problem-UNF7yxPvZ2rPfbNjdkVe7h.webp";

const iconMap = {
  0: AlertCircle,
  1: Zap,
  2: TrendingDown,
  3: Users,
};

export default function Problem() {
  const { t } = useTranslation();
  const problems = t('problem.problems');

  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('problem.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('problem.subtitle')}
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem: any, index: number) => {
            const Icon = iconMap[index as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{problem.title}</h3>
                    <p className="text-muted-foreground">{problem.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Problem Illustration */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-card">
          <img
            src={PROBLEM_URL}
            alt="Revenue Loss Illustration"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
