import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import PaymentMetricsChart from "@/components/PaymentMetricsChart";
import ValuePropositionDiagram from "@/components/ValuePropositionDiagram";
import Pricing from "@/components/Pricing";
import BlogPreview from "@/components/BlogPreview";
import FinalCTA from "@/components/FinalCTA";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { useTranslation } from "@/hooks/useTranslation";

/**
 * RevForge Landing Page
 * 
 * Design Philosophy: Data-Driven Minimalism
 * - Clean, professional SaaS aesthetic inspired by Stripe and Linear
 * - Color Palette: Deep slate-blue (#0F172A) + Emerald green (#10B981)
 * - Typography: Sohne for headlines, Inter for body, IBM Plex Mono for metrics
 * - Layout: Asymmetric, minimal, data-focused with smooth animations
 */
export default function Home() {
  const { language } = useTranslation();

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "RevForge",
    "description": "Stripe audit and payment optimization service for SaaS and e-commerce companies. Recover lost revenue from failed payments and billing misconfigurations.",
    "url": "https://revforge.fr",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "description": "Free audit preview"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "127"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="RevForge - Stripe Audit & Payment Optimization | Recover Lost Revenue"
        description="Stop losing revenue on Stripe. RevForge identifies hidden payment failures, retry logic issues, and billing misconfigurations. Get a free audit today."
        canonical="https://revforge.fr"
        schema={homeSchema}
      />
      <Header />
      <main className="pt-16">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Results />
        <PaymentMetricsChart />
        <ValuePropositionDiagram />
        <Pricing />
        <BlogPreview />
        <FinalCTA />
      </main>
    </div>
  );
}
