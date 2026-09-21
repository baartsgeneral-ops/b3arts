import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ExternalLink, ArrowLeft } from 'lucide-react';

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScugUEh3PAcTSo8MQONd87Sa6cagH5A6qScWjA3yHJ0Wf6ITw/viewform?embedded=true';

const Registration = () => {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in pt-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-slide-up">{t('registration.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            {t('registration.headerDesc')}
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-slide-up">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4 text-center">{t('registration.formTitle')}</h2>
            <p className="text-gray-600 text-center mb-8">{t('registration.choose')}</p>

            <iframe
              src={FORM_URL}
              width="640"
              height="1020"
              title="Workshop Registration Form"
              className="w-full border-0"
            >
              Loading…
            </iframe>

            <div className="text-center mt-8">
              <a
                href={FORM_URL.replace('?embedded=true', '')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-indigo-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-gold hover:text-indigo-900"
              >
                <ExternalLink size={18} />
                <span>{t('registration.openForm')}</span>
              </a>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-indigo-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-gold hover:text-indigo-900"
            >
              <ArrowLeft size={20} className="rtl:rotate-180" />
              <span>{t('registration.backHome')}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;