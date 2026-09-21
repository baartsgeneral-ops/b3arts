import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mic, Users, Share2, BookOpen, Mail, MessageCircle, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

const Activities = () => {
  const { t } = useTranslation();

  const activities = [
    {
      icon: Mic,
      title: t('home.pillarPodcast'),
      description: t('activities.podcastDesc'),
      link: '/podcast',
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: Users,
      title: t('home.pillarWorkshops'),
      description: t('activities.workshopsDesc'),
      link: '/workshops',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Share2,
      title: t('home.pillarSocial'),
      description: t('activities.socialDesc'),
      link: '/social',
      color: 'from-green-500 to-green-700'
    },
    {
      icon: BookOpen,
      title: t('home.pillarMagazine'),
      description: t('activities.magazineDesc'),
      link: '/magazine',
      color: 'from-orange-500 to-orange-700'
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/baarts.eg/', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/share/16mALfR52L/', label: 'Facebook' },
    { icon: Youtube, href: 'https://youtube.com/@baarts_eg?si=ZkcU5FcauHhYGk8o', label: 'YouTube' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/baarts', label: 'LinkedIn' },
  ];

  return (
    <div className="animate-fade-in pt-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-slide-up">{t('activities.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            {t('activities.headerDesc')}
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <Link
                key={activity.title}
                to={activity.link}
                className="group block"
              >
                <div 
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:transform hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`bg-gradient-to-r ${activity.color} p-8 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                      <activity.icon size={48} className="text-white mb-4" />
                      <h3 className="text-3xl font-bold text-white mb-2">{activity.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {activity.description}
                    </p>
                    <div className="flex items-center text-indigo-900 font-semibold group-hover:text-gold transition-colors duration-300">
                      <span>{t('activities.explore')} {activity.title}</span>
                      <svg className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2 transform rotate-0 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us & Social Media */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900 mb-6">{t('activities.contactTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('activities.contactDesc')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <a
                href="mailto:baarts.general@gmail.com"
                className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-900 mb-1">{t('activities.email')}</h3>
                  <p className="text-gray-600">baarts.general@gmail.com</p>
                </div>
              </a>
              <a
                href="https://wa.link/et6q7n"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={24} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-900 mb-1">{t('activities.whatsapp')}</h3>
                  <p className="text-gray-600">+201514150278</p>
                </div>
              </a>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.15s' }}>
              <h3 className="text-2xl font-bold text-indigo-900 mb-6 text-center">{t('activities.followSocial')}</h3>
              <div className="grid grid-cols-2 gap-6">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:bg-indigo-900 group transition-all duration-300"
                  >
                    <Icon size={24} className="text-indigo-900 group-hover:text-gold" />
                    <span className="text-indigo-900 font-semibold group-hover:text-white">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">{t('activities.readyToJoin')}</h2>
          <p className="text-xl mb-8 opacity-90">
            {t('activities.readyToJoinDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/registration"
              className="bg-gold text-indigo-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-yellow-400 hover:transform hover:scale-105"
            >
              {t('activities.registerNow')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;