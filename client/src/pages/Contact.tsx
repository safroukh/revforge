import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import { useTranslation } from "@/hooks/useTranslation";
import { Mail, Phone, MapPin } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";

export default function Contact() {
  const { t, language } = useTranslation();

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "RevForge",
    "description": "Stripe audit and payment optimization service. Book a free audit.",
    "url": "https://revforge.io/contact",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "email": "contact@revforge.xyz"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={language === 'en' ? 'Contact RevForge - Book Your Free Stripe Audit' : 'Contactez RevForge - Réservez votre audit Stripe gratuit'}
        description={language === 'en' ? 'Get a free Stripe audit from RevForge. Our team will analyze your payment setup and identify hidden revenue opportunities.' : 'Obtenez un audit Stripe gratuit de RevForge. Notre équipe analysera votre configuration de paiement et identifiera les opportunités de revenus cachées.'}
        canonical="https://revforge.io/contact"
        schema={contactSchema}
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
          <div className="container max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <Breadcrumb
              items={[{ label: language === 'en' ? 'Home' : 'Accueil', href: '/' }]}
              currentPage={language === 'en' ? 'Contact' : 'Contact'}
            />

            <div className="max-w-2xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {language === 'en' ? 'Get Your Free Audit' : 'Obtenez votre audit gratuit'}
              </h1>
              <p className="text-lg text-muted-foreground">
                {language === 'en'
                  ? 'Fill out the form below and our team will contact you within 24 hours to discuss your payment optimization opportunities.'
                  : 'Remplissez le formulaire ci-dessous et notre équipe vous contactera dans les 24 heures pour discuter de vos opportunités d\'optimisation des paiements.'}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                  <ContactForm />
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {language === 'en' ? 'Email' : 'Email'}
                    </h3>
                    <p className="text-muted-foreground">contact@revforge.xyz</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {language === 'en'
                        ? 'We\'ll respond within 24 hours'
                        : 'Nous répondrons dans les 24 heures'}
                    </p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {language === 'en' ? 'Quick Response' : 'Réponse rapide'}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'en'
                        ? 'Schedule a call with our team'
                        : 'Planifiez un appel avec notre équipe'}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {language === 'en'
                        ? 'Available Mon-Fri, 9am-6pm CET'
                        : 'Disponible lun-ven, 9h-18h CET'}
                    </p>
                  </div>
                </div>

                {/* FAQ */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {language === 'en' ? 'Based in' : 'Basé à'}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'en' ? 'Paris, France' : 'Paris, France'}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {language === 'en'
                        ? 'Serving SaaS and e-commerce companies globally'
                        : 'Servant les SaaS et e-commerce mondialement'}
                    </p>
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="mt-12 p-6 rounded-lg bg-secondary border border-border">
                  <p className="text-sm font-semibold text-foreground mb-3">
                    {language === 'en' ? 'Why RevForge?' : 'Pourquoi RevForge ?'}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>
                        {language === 'en'
                          ? 'Free initial audit with no commitment'
                          : 'Audit initial gratuit sans engagement'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>
                        {language === 'en'
                          ? 'Expert Stripe knowledge'
                          : 'Expertise Stripe reconnue'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>
                        {language === 'en'
                          ? 'Proven track record of revenue recovery'
                          : 'Historique prouvé de récupération de revenus'}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
