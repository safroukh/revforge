import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { useAnalytics } from "@/hooks/useAnalytics";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  company: string;
  arr: string;
  message: string;
}

export default function ContactForm() {
  const { t, language } = useTranslation();
  const { trackFormSubmission, trackConversion } = useAnalytics();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    arr: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = language === 'en' ? 'Name is required' : 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = language === 'en' ? 'Email is required' : 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === 'en' ? 'Invalid email' : 'Email invalide';
    }

    if (!formData.company.trim()) {
      newErrors.company = language === 'en' ? 'Company is required' : 'L\'entreprise est requise';
    }

    if (!formData.arr.trim()) {
      newErrors.arr = language === 'en' ? 'ARR is required' : 'L\'ARR est requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error(language === 'en' ? 'Please fill all required fields' : 'Veuillez remplir tous les champs requis');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          language,
        }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || 'Unable to send contact request');
      }

      // Track form submission in Google Analytics
      trackFormSubmission('contact_form', {
        language: language,
      });

      // Track conversion
      trackConversion('lead_capture', 1);

      // Show success state
      setIsSubmitted(true);
      toast.success(
        language === 'en'
          ? 'Thank you! Your audit request has been sent.'
          : 'Merci ! Votre demande d\'audit a bien été envoyée.'
      );

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          company: "",
          arr: "",
          message: "",
        });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      const message = error instanceof Error ? error.message : '';
      const isMissingEmailConfig = message === 'Email service is not configured';
      toast.error(
        isMissingEmailConfig
          ? language === 'en'
            ? 'Email sending is not configured yet. Please add RESEND_API_KEY in Render.'
            : 'L\'envoi email n\'est pas encore configuré. Ajoutez RESEND_API_KEY dans Render.'
          : language === 'en'
            ? 'Something went wrong. Please try again.'
            : 'Une erreur s\'est produite. Veuillez réessayer.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4">
        <CheckCircle size={48} className="text-primary mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-2">
          {language === 'en' ? 'Request Sent' : 'Demande envoyée'}
        </h3>
        <p className="text-muted-foreground text-center max-w-md">
          {language === 'en'
            ? 'We received your information and will contact you within 24 hours.'
            : 'Nous avons reçu vos informations et vous contacterons dans les 24 heures.'}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          {language === 'en' ? 'Full Name' : 'Nom complet'} *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={language === 'en' ? 'John Doe' : 'Jean Dupont'}
          className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.name
              ? 'border-destructive focus:ring-destructive'
              : 'border-border hover:border-border/80'
          }`}
        />
        {errors.name && (
          <p className="text-xs text-destructive mt-1 flex items-center gap-1">
            <AlertCircle size={12} />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          {language === 'en' ? 'Email' : 'Email'} *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={language === 'en' ? 'john@company.com' : 'jean@entreprise.com'}
          className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.email
              ? 'border-destructive focus:ring-destructive'
              : 'border-border hover:border-border/80'
          }`}
        />
        {errors.email && (
          <p className="text-xs text-destructive mt-1 flex items-center gap-1">
            <AlertCircle size={12} />
            {errors.email}
          </p>
        )}
      </div>

      {/* Company */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          {language === 'en' ? 'Company' : 'Entreprise'} *
        </label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder={language === 'en' ? 'Your Company' : 'Votre Entreprise'}
          className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.company
              ? 'border-destructive focus:ring-destructive'
              : 'border-border hover:border-border/80'
          }`}
        />
        {errors.company && (
          <p className="text-xs text-destructive mt-1 flex items-center gap-1">
            <AlertCircle size={12} />
            {errors.company}
          </p>
        )}
      </div>

      {/* ARR */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          {language === 'en' ? 'Annual Recurring Revenue (ARR)' : 'Revenu Récurrent Annuel (ARR)'} *
        </label>
        <select
          name="arr"
          value={formData.arr}
          onChange={handleChange as any}
          className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.arr
              ? 'border-destructive focus:ring-destructive'
              : 'border-border hover:border-border/80'
          }`}
        >
          <option value="">
            {language === 'en' ? 'Select your ARR' : 'Sélectionnez votre ARR'}
          </option>
          <option value="0-100k">$0 - $100K</option>
          <option value="100k-500k">$100K - $500K</option>
          <option value="500k-1m">$500K - $1M</option>
          <option value="1m-5m">$1M - $5M</option>
          <option value="5m+">$5M+</option>
        </select>
        {errors.arr && (
          <p className="text-xs text-destructive mt-1 flex items-center gap-1">
            <AlertCircle size={12} />
            {errors.arr}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          {language === 'en' ? 'Message (Optional)' : 'Message (Optionnel)'}
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={language === 'en' ? 'Tell us about your payment challenges...' : 'Parlez-nous de vos défis de paiement...'}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-border hover:border-border/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary hover:bg-primary/90 text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
      >
        {isLoading ? (
          <>
            <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
            {language === 'en' ? 'Sending...' : 'Envoi...'}
          </>
        ) : (
          <>
            <Mail size={18} />
            {language === 'en' ? 'Get Free Audit' : 'Obtenir un audit gratuit'}
          </>
        )}
      </Button>

      {/* Privacy Note */}
      <p className="text-xs text-muted-foreground text-center">
        {language === 'en'
          ? 'We respect your privacy. Your information will never be shared.'
          : 'Nous respectons votre vie privée. Vos informations ne seront jamais partagées.'}
      </p>
    </form>
  );
}
