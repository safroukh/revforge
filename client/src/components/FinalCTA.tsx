import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Linkedin, Twitter } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import BrandLogo from "./BrandLogo";

export default function FinalCTA() {
  const { t, language } = useTranslation();

  return (
    <>
      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            {t('finalCTA.title')}
          </h2>
          <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
            {t('finalCTA.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/80 text-black rounded-lg font-semibold flex items-center gap-2 group"
              >
                {t('finalCTA.cta1')}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12 pt-12 border-t border-foreground/20 text-sm text-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>{t('finalCTA.trust1')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>{t('finalCTA.trust2')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>{t('finalCTA.trust3')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white border-t border-border">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <BrandLogo className="mb-4" />
              <p className="text-sm text-muted-foreground">
                {t('footer.tagline')}
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold text-white mb-4">{t('footer.product')}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#solution" className="text-muted-foreground hover:text-white transition">{t('footer.productLinks.features')}</a></li>
                <li><a href="#pricing" className="text-muted-foreground hover:text-white transition">{t('footer.productLinks.pricing')}</a></li>
                <li><a href="#how-it-works" className="text-muted-foreground hover:text-white transition">{t('footer.productLinks.howItWorks')}</a></li>
                <li><a href="#solution" className="text-muted-foreground hover:text-white transition">{t('footer.productLinks.security')}</a></li>
                <li><a href="/blog" className="hover:text-white transition">{language === 'en' ? 'Blog' : 'Blog'}</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-white mb-4">{t('footer.company')}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#problem" className="text-muted-foreground hover:text-white transition">{t('footer.companyLinks.about')}</a></li>
                <li><a href="/blog" className="text-muted-foreground hover:text-white transition">{t('footer.companyLinks.blog')}</a></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-white transition">{t('footer.companyLinks.contact')}</a></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-white transition">{t('footer.companyLinks.careers')}</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-white mb-4">{t('footer.legal')}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/contact" className="text-muted-foreground hover:text-white transition">{t('footer.legalLinks.privacy')}</a></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-white transition">{t('footer.legalLinks.terms')}</a></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-white transition">{t('footer.legalLinks.compliance')}</a></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-white transition">{t('footer.legalLinks.status')}</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60">
              {t('footer.copyright')}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="https://twitter.com" aria-label="Twitter" className="text-white/60 hover:text-white transition">
                <Twitter size={18} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white/60 hover:text-white transition">
                <Linkedin size={18} />
              </a>
              <a href="mailto:contact@revforge.fr" aria-label="Email" className="text-white/60 hover:text-white transition">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
