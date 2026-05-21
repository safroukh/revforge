import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { getBlogArticles } from "@/lib/blog-data";
import { Link } from "wouter";
import { ArrowRight, Clock, User } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";

export default function Blog() {
  const { t, language } = useTranslation();
  const articles = getBlogArticles(language);
  const categories = Array.from(new Set(articles.map(a => a.category)));
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleNewsletterSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const subject = "demande d'abonnement à la newsletter";
    const body = [
      "Demande d'abonnement à la newsletter",
      "",
      `Email : ${newsletterEmail || '-'}`,
    ].join('\n');
    window.location.href = `mailto:contact@revforge.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "RevForge Blog",
    "description": "Expert insights on Stripe payment optimization, failed payment recovery, and revenue optimization for SaaS and e-commerce.",
    "url": "https://revforge.fr/blog"
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <SEO
        title={language === 'en' ? 'Blog - RevForge | Stripe Payment Optimization Insights' : 'Blog - RevForge | Conseils sur l\'optimisation des paiements Stripe'}
        description={language === 'en' ? 'Expert insights on Stripe optimization, payment strategy, and revenue recovery. Learn how to reduce failed payments and improve LTV.' : 'Conseils d\'experts sur l\'optimisation de Stripe, la stratégie de paiement et la récupération de revenus. Apprenez à réduire les paiements échoués.'}
        canonical="https://revforge.fr/blog"
        schema={blogSchema}
      />
      <Header />
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[{ label: language === 'en' ? 'Home' : 'Accueil', href: '/' }]}
          currentPage={language === 'en' ? 'Blog' : 'Blog'}
        />

        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            {language === 'en' ? 'Blog' : 'Blog'}
          </h1>
          <p className="text-lg text-gray-300">
            {language === 'en'
              ? 'Expert insights on Stripe optimization, payment strategy, and revenue recovery.'
              : 'Conseils d\'experts sur l\'optimisation de Stripe, la stratégie de paiement et la récupération de revenus.'}
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border border-gray-600 hover:border-primary hover:bg-primary/5 transition text-sm font-medium text-gray-300 hover:text-white"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <Link key={article.id} href={`/blog/${article.slug}`}>
              <a className="group h-full flex flex-col rounded-xl border border-gray-700 hover:shadow-lg hover:border-primary/30 overflow-hidden transition-all duration-300 bg-slate-900">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-secondary">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-primary transition">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="mt-auto space-y-4">
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{article.readTime} {language === 'en' ? 'min read' : 'min de lecture'}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{article.author}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {article.tags.slice(0, 2).map(tag => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded bg-slate-800 text-gray-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      <span>{language === 'en' ? 'Read Article' : 'Lire l\'article'}</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/40 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {language === 'en' ? 'Stay Updated' : 'Restez informé'}
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Get the latest insights on payment optimization and revenue recovery delivered to your inbox.'
              : 'Recevez les dernières informations sur l\'optimisation des paiements et la récupération de revenus dans votre boîte de réception.'}
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(event) => setNewsletterEmail(event.target.value)}
              placeholder={language === 'en' ? 'Enter your email' : 'Entrez votre e-mail'}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-600 bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button type="submit" className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition">
              {language === 'en' ? 'Subscribe' : 'S\'abonner'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
