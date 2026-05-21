import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Language } from "@/lib/translations";
import { Link } from "wouter";
import BrandLogo from "./BrandLogo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    const newLang: Language = language === 'en' ? 'fr' : 'en';
    setLanguage(newLang);
  };

  const handleLogoClick = () => {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
          <a onClick={handleLogoClick} className="flex items-center gap-2 hover:opacity-80 transition">
            <BrandLogo />
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-sm text-muted-foreground hover:text-foreground transition">
            {t('header.problem')}
          </a>
          <a href="#solution" className="text-sm text-muted-foreground hover:text-foreground transition">
            {t('header.solution')}
          </a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition">
            {t('header.howItWorks')}
          </a>
          <a href="#results" className="text-sm text-muted-foreground hover:text-foreground transition">
            {t('header.results')}
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition">
            {t('header.pricing')}
          </a>
        </nav>

        {/* CTA Button & Language Switcher */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="p-2 hover:bg-secondary rounded-lg transition flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            title={language === 'en' ? 'Switch to French' : 'Switch to English'}
          >
            <Globe size={18} />
            <span className="hidden sm:inline">{language.toUpperCase()}</span>
          </button>

          <a href="/contact">
            <Button
              className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-black rounded-lg font-medium"
            >
              {t('header.getAudit')}
            </Button>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-4">
            <a href="#problem" onClick={() => setIsMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition">
              {t('header.problem')}
            </a>
            <a href="#solution" onClick={() => setIsMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition">
              {t('header.solution')}
            </a>
            <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition">
              {t('header.howItWorks')}
            </a>
            <a href="#results" onClick={() => setIsMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition">
              {t('header.results')}
            </a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition">
              {t('header.pricing')}
            </a>
            <a href="/contact" className="w-full">
              <Button className="w-full bg-primary hover:bg-primary/90 text-black rounded-lg font-medium">
                {t('header.getAudit')}
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
