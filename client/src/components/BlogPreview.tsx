import { useTranslation } from "@/hooks/useTranslation";
import { getBlogArticles } from "@/lib/blog-data";
import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogPreview() {
  const { t, language } = useTranslation();
  const articles = getBlogArticles(language).slice(0, 3);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {language === 'en' ? 'Latest from the Blog' : 'Derniers articles du blog'}
          </h2>
          <p className="text-lg text-gray-300">
            {language === 'en'
              ? 'Expert insights on payment optimization and revenue recovery.'
              : 'Conseils d\'experts sur l\'optimisation des paiements et la récupération de revenus.'}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {articles.map(article => (
            <Link key={article.id} href={`/blog/${article.slug}`}>
              <a className="group h-full flex flex-col rounded-xl border border-border hover:shadow-lg hover:border-primary/30 overflow-hidden transition-all duration-300 bg-slate-900 text-white">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/30 to-primary/10"><span class="text-primary font-bold text-lg">${article.category}</span></div>`;
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col">
                  <div className="inline-block mb-3">
                    <span className="text-xs font-semibold text-white bg-primary px-3 py-1 rounded-full">{article.category}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-primary transition">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="mt-auto flex items-center gap-4 text-xs text-gray-300">
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{article.readTime} {language === 'en' ? 'min' : 'min'}</span>
                    </div>
                    <span>{article.author}</span>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>

        {/* CTA to Blog */}
        <div className="text-center">
          <Link href="/blog">
            <a>
              <Button className="bg-primary hover:bg-primary/80 text-black rounded-lg font-semibold flex items-center gap-2 group mx-auto">
                {language === 'en' ? 'View All Articles' : 'Voir tous les articles'}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
