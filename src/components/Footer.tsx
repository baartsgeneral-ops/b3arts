import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Instagram, Facebook, Youtube, Linkedin, Mail, Phone, MessageCircle, ArrowRight } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/baarts.eg/', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/share/16mALfR52L/', label: 'Facebook' },
    { icon: Youtube, href: 'https://youtube.com/@baarts_eg?si=ZkcU5FcauHhYGk8o', label: 'YouTube' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/baarts', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.activities'), path: '/activities' },
    { label: t('nav.shop'), path: '/shop' },
    { label: t('nav.register'), path: '/registration' },
    { label: t('footer.contactUs'), path: '/contact' },
  ];

  const activityLinks = [
    { label: t('home.pillarPodcast'), path: '/podcast' },
    { label: t('home.pillarWorkshops'), path: '/workshops' },
    { label: t('home.pillarSocial'), path: '/social' },
    { label: t('home.pillarMagazine'), path: '/magazine' },
  ];

  return (
    <footer className="bg-[#080b1a] text-white">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-transparent to-gold" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <div className="rounded-xl overflow-hidden ring-1 ring-white/10">
                <img src="/images/logo.webp" alt="Bȝ Arts logo" className="h-12 w-auto" />
              </div>
              <span className="font-display text-2xl font-bold text-gold">Bȝ Arts</span>
            </Link>
            <p className="text-white/60 leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <h3 className="font-bold uppercase tracking-wider text-sm text-gold mb-4">{t('footer.followUs')}</h3>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 bg-white/5 hover:bg-gold hover:text-indigo-900 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-wider text-sm text-gold mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="text-white/60 hover:text-gold transition-colors duration-300 inline-flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold rounded-full" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-wider text-sm text-gold mb-6">{t('footer.ourActivities')}</h3>
            <ul className="space-y-3">
              {activityLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="text-white/60 hover:text-gold transition-colors duration-300 inline-flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold rounded-full" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-wider text-sm text-gold mb-6">{t('footer.contactUs')}</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:baarts.general@gmail.com"
                  className="text-white/60 hover:text-gold transition-colors duration-300 inline-flex items-start gap-3"
                >
                  <Mail size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <span>baarts.general@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+201514150278"
                  className="text-white/60 hover:text-gold transition-colors duration-300 inline-flex items-start gap-3"
                >
                  <Phone size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <span>+201514150278</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.link/et6q7n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-gold transition-colors duration-300 inline-flex items-start gap-3"
                >
                  <MessageCircle size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <span>{t('footer.whatsapp')}</span>
                </a>
              </li>
            </ul>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-gold text-indigo-900 px-6 py-3 rounded-full font-bold transition-all duration-300 hover:bg-yellow-400 group mt-6"
            >
              <Mail size={18} />
              <span>{t('footer.getInTouch')}</span>
              <ArrowRight size={16} className="transform rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} {t('footer.rights')}
          </p>
          <p className="text-white/50 text-sm flex items-center gap-1.5">
            {t('footer.enhanced')}{' '}
            <a
              href="https://linktr.ee/mo.alqabbni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:underline font-semibold"
            >
              {t('footer.enhancerName')}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;