import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MessageCircle, Instagram, Facebook, Youtube, Linkedin, ArrowLeft, ArrowRight } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: Mail,
      title: t('contact.emailTitle'),
      value: 'baarts.general@gmail.com',
      href: 'mailto:baarts.general@gmail.com',
      description: t('contact.emailDesc')
    },
    {
      icon: Phone,
      title: t('contact.phoneTitle'),
      value: '+201514150278',
      href: 'tel:+201514150278',
      description: t('contact.phoneDesc')
    },
    {
      icon: MessageCircle,
      title: t('contact.whatsappTitle'),
      value: t('contact.whatsappValue'),
      href: 'https://wa.link/et6q7n',
      description: t('contact.whatsappDesc')
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/baarts.eg/', label: 'Instagram', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { icon: Facebook, href: 'https://www.facebook.com/share/16mALfR52L/', label: 'Facebook', color: 'bg-gradient-to-r from-blue-600 to-blue-700' },
    { icon: Youtube, href: 'https://youtube.com/@baarts_eg?si=ZkcU5FcauHhYGk8o', label: 'YouTube', color: 'bg-gradient-to-r from-red-500 to-red-600' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/baarts', label: 'LinkedIn', color: 'bg-gradient-to-r from-blue-700 to-blue-800' },
  ];

  return (
    <div className="animate-fade-in pt-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-slide-up">{t('contact.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            {t('contact.headerDesc')}
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map(({ icon: Icon, title, value, href, description }, index) => (
              <a
                key={title}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 bg-indigo-900 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-3 group-hover:rotate-0 transition-transform duration-300">
                  <Icon size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-indigo-900 mb-2">{title}</h3>
                <p className="text-gold font-semibold text-lg mb-3 break-all">{value}</p>
                <p className="text-gray-500 leading-relaxed">{description}</p>
              </a>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <span className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-[0.2em] text-sm mb-4">
                {t('contact.whatsappQrLabel')}
              </span>
              <h2 className="font-display text-4xl font-bold text-indigo-900 mb-4">
                {t('contact.whatsappQrTitle')}
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                {t('contact.whatsappQrDesc')}
              </p>
              <a
                href="https://wa.link/et6q7n"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-3 rtl:space-x-reverse bg-indigo-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-gold hover:text-indigo-900 hover:scale-105 shadow-lg"
              >
                <MessageCircle size={20} />
                <span>{t('contact.openWhatsApp')}</span>
                <ArrowRight size={20} className="transform rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            <div className="flex justify-center animate-slide-up" style={{ animationDelay: '0.15s' }}>
              <img
                src="/images/whatsapp-qr.webp"
                alt="WhatsApp QR code"
                className="w-64 h-64 object-contain rounded-3xl bg-white p-4 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900 mb-6">{t('contact.followOnline')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('contact.followOnlineDesc')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${color} text-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 rtl:space-x-reverse animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon size={24} />
                <span className="text-lg font-semibold">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Activities Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-indigo-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-gold hover:text-indigo-900"
        >
          <ArrowLeft size={20} className="rtl:rotate-180" />
          <span>{t('contact.backHome')}</span>
        </Link>
      </div>
    </div>
  );
};

export default Contact;