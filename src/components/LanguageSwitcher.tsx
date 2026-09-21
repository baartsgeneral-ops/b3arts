import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', i18n.language);
  }, [i18n.language]);

  const toggleLanguage = () => {
    const next = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(next);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-indigo-900/20 text-indigo-900 font-semibold transition-all duration-300 hover:bg-indigo-900 hover:text-white text-sm"
      aria-label="Switch language"
    >
      <Languages size={17} />
      <span>{i18n.language === 'ar' ? 'EN' : 'عربي'}</span>
    </button>
  );
};

export default LanguageSwitcher;