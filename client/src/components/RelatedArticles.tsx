import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { getRelatedArticles } from "@/lib/internal-links";
import { getBlogArticles } from "@/lib/blog-data";

interface RelatedArticlesProps {
  currentSlug: string;
}

export default function RelatedArticles({ currentSlug }: RelatedArticlesProps) {
  const { language } = useTranslation();
  const relatedLinks = getRelatedArticles(currentSlug, language as 'en' | 'fr');
  const allArticles = getBlogArticles(language);

  // Get the actual article data for related links
  const relatedArticles = relatedLinks
    .map(link => {
      const slug = link.href.split('/blog/')[1];
      return allArticles.find(a => a.slug === slug);
    })
    .filter(Boolean);

  if (relatedArticles.length === 0) return null;

  return (
    <section className="mt-16 pt-16 border-t border-border">
      <h3 className="text-2xl font-bold text-foreground mb-8">
        {language === 'en' ? 'Related Articles' : 'Articles Connexes'}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {relatedArticles.map(article => (
          <Link key={article?.id} href={`/blog/${article?.slug}`}>
            <a className="group p-6 rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 bg-white flex flex-col h-full">
              <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition line-clamp-2">
                {article?.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                {article?.excerpt}
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                <span>{language === 'en' ? 'Read More' : 'Lire la suite'}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}
