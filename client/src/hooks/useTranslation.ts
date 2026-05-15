import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';

export function useTranslation() {
  const { language, setLanguage } = useLanguage();

  const t = (key: string): any => {
    return getTranslation(language, key);
  };

  return { t, language, setLanguage };
}
