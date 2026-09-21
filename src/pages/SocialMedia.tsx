import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ExternalLink, ArrowLeft } from 'lucide-react';

const SocialMedia = () => {
  const { t } = useTranslation();

  const socialPlatforms = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/baarts.eg/',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      icon: '📷',
      description: t('socialMedia.igDesc')
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/16mALfR52L/',
      color: 'bg-gradient-to-r from-blue-600 to-blue-700',
      icon: '👥',
      description: t('socialMedia.fbDesc')
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/baarts',
      color: 'bg-gradient-to-r from-blue-700 to-blue-800',
      icon: '💼',
      description: t('socialMedia.liDesc')
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@baarts_eg?si=ZkcU5FcauHhYGk8o',
      color: 'bg-gradient-to-r from-red-500 to-red-600',
      icon: '📺',
      description: t('socialMedia.ytDesc')
    },
    {
      name: t('socialMedia.ytPodName'),
      url: 'https://youtube.com/@zugoesofftopic?si=wwXYtEB3zn0u6pUh',
      color: 'bg-gradient-to-r from-red-500 to-red-600',
      icon: '📺',
      description: t('socialMedia.ytPodDesc')
    },
    {
      name: t('socialMedia.spName'),
      url: 'https://open.spotify.com/show/4ehspgAgKiDJ6KumEWMTsI?si=QZlI34OjRByFAx4iz0-1fg',
      color: 'bg-gradient-to-r from-[#1DB954] to-[#191414] text-white p-6 rounded-xl',
      icon: '🎵',
      description: t('socialMedia.spDesc')
    }
  ];

  return (
    <div className="animate-fade-in pt-8">
      {/* Back to Activities Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          to="/activities"
          className="inline-flex items-center space-x-2 rtl:space-x-reverse text-indigo-900 hover:text-gold transition-colors duration-300 font-medium"
        >
          <ArrowLeft size={20} className="rtl:rotate-180" />
          <span>{t('socialMedia.backToActivities')}</span>
        </Link>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-slide-up">{t('socialMedia.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90 mb-8">
            {t('socialMedia.headerDesc')}
          </p>
          <div className="text-3xl font-bold text-gold">
            {t('socialMedia.tagline')}
          </div>
        </div>
      </section>

      {/* Social Platforms Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900 mb-6">{t('socialMedia.platformsTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('socialMedia.platformsDesc')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialPlatforms.map((platform, index) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div 
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:transform hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`${platform.color} p-8 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative z-10 flex items-center justify-between">
                      <div>
                        <div className="text-4xl mb-2">{platform.icon}</div>
                        <h3 className="text-2xl font-bold text-white mb-1">{platform.name}</h3>
                      </div>
                      <ExternalLink size={32} className="text-white opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed">
                      {platform.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">{t('socialMedia.readyToConnect')}</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            {t('socialMedia.readyToConnectDesc')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {socialPlatforms.slice(0, 4).map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${platform.color} text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:transform hover:scale-105 flex items-center space-x-2 rtl:space-x-reverse`}
              >
                <span>{platform.icon}</span>
                <span>{t('socialMedia.followOn')} {platform.name}</span>
              </a>
            ))}
          </div>
          
          <p className="text-lg opacity-75">
            {t('socialMedia.dontMiss')}
          </p>
        </div>
      </section>

      {/* Back to Activities Button - Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <Link
          to="/activities"
          className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-indigo-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-gold hover:text-indigo-900"
        >
          <ArrowLeft size={20} className="rtl:rotate-180" />
          <span>{t('socialMedia.backToActivities')}</span>
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;