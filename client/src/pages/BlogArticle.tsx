import { useRoute, Link } from "wouter";
import { useTranslation } from "@/hooks/useTranslation";
import { getBlogArticleBySlug } from "@/lib/blog-data";
import { ArrowLeft, Clock, User, Share2, Twitter, Linkedin, Facebook, Link as LinkIcon } from "lucide-react";
import { Streamdown } from "streamdown";
import RelatedArticles from "@/components/RelatedArticles";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function BlogArticle() {
  const [match, params] = useRoute("/blog/:slug");
  const { language } = useTranslation();
  const [copied, setCopied] = useState(false);

  if (!match) return null;

  const article = getBlogArticleBySlug(params?.slug, language);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.slug]);

  const handleShare = (platform: string) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const text = article?.title || '';
    
    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    };
    
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  const handleCopyLink = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    navigator.clipboard.writeText(url);
    setCopied(true);
    toast.success(language === 'en' ? 'Link copied!' : 'Lien copié !');
    setTimeout(() => setCopied(false), 2000);
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-950">
        <Header />
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            {language === 'en' ? 'Article not found' : 'Article non trouvé'}
          </h1>
          <Link href="/blog">
            <a className="text-primary hover:text-primary/80 font-semibold">
              {language === 'en' ? '← Back to Blog' : '← Retour au Blog'}
            </a>
          </Link>
        </div>
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.image,
    "datePublished": article.date,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "articleBody": article.content
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <SEO
        title={`${article.title} | RevForge Blog`}
        description={article.excerpt}
        canonical={`https://revforge.fr/blog/${article.slug}`}
        schema={articleSchema}
      />
      <Header />
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: language === 'en' ? 'Home' : 'Accueil', href: '/' },
            { label: language === 'en' ? 'Blog' : 'Blog', href: '/blog' }
          ]}
          currentPage={article.title}
        />

        {/* Back Link */}
        <Link href="/blog">
          <a className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold mb-8 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            {language === 'en' ? 'Back to Blog' : 'Retour au Blog'}
          </a>
        </Link>

        {/* Article Header */}
        <div className="mb-8">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              {article.category}
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            {article.title}
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            {article.excerpt}
          </p>

          {/* Article Meta */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-8 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-bold text-primary text-lg">
                  {article.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-white">{article.author}</p>
                <p className="text-sm text-gray-400">{article.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{article.readTime} {language === 'en' ? 'min read' : 'min de lecture'}</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleShare('twitter')}
                  className="p-2 rounded-lg hover:bg-slate-700 transition text-gray-400 hover:text-white"
                  title="Share on Twitter"
                >
                  <Twitter size={16} />
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="p-2 rounded-lg hover:bg-slate-700 transition text-gray-400 hover:text-white"
                  title="Share on LinkedIn"
                >
                  <Linkedin size={16} />
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="p-2 rounded-lg hover:bg-slate-700 transition text-gray-400 hover:text-white"
                  title="Share on Facebook"
                >
                  <Facebook size={16} />
                </button>
                <button
                  onClick={handleCopyLink}
                  className="p-2 rounded-lg hover:bg-slate-700 transition text-gray-400 hover:text-white"
                  title={language === 'en' ? 'Copy link' : 'Copier le lien'}
                >
                  <LinkIcon size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Article Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-none mb-12 text-gray-300">
          <Streamdown>{article.content}</Streamdown>
        </div>

        {/* Tags */}
        <div className="mb-12 py-8 border-t border-b border-gray-700">
          <p className="text-sm font-semibold text-gray-400 mb-4">
            {language === 'en' ? 'Tags:' : 'Étiquettes :'}
          </p>
          <div className="flex flex-wrap gap-2">
            {article.tags.map(tag => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-slate-800 border border-gray-600 text-gray-300 hover:border-primary hover:text-white transition cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        <RelatedArticles currentSlug={article.slug} />

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {language === 'en'
              ? 'Ready to optimize your payments?'
              : 'Prêt à optimiser vos paiements ?'}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl">
            {language === 'en'
              ? 'Get a free Stripe audit and discover how much revenue you\'re leaving on the table.'
              : 'Obtenez un audit Stripe gratuit et découvrez combien de revenus vous laissez sur la table.'}
          </p>
          <Link href="/contact">
            <a className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition">
              {language === 'en' ? 'Get Free Audit' : 'Obtenir un audit gratuit'}
              <ArrowLeft size={18} className="rotate-180" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
