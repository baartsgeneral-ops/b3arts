import React from 'react';
import { useTranslation } from 'react-i18next';
import { Target, Heart, Linkedin, Mail } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: 'Sama Hassan',
      role: t('about.roleFounder'),
      photo: '/images/team/sama.webp',
      linkedin: 'https://www.linkedin.com/in/sama-h-0218362b3/',
      email: 'samahassan450@gmail.com',
    },
    {
      name: 'Menna Ismail',
      role: t('about.roleCOO'),
      photo: '/images/team/menna.webp',
      linkedin: 'https://www.linkedin.com/in/mennaelsadek',
      email: 'mennaismaillsabryy@gmail.com',
    },
  ];

  const values = [
    {
      title: t('about.value1Title'),
      text: t('about.value1Text'),
    },
    {
      title: t('about.value2Title'),
      text: t('about.value2Text'),
    },
    {
      title: t('about.value3Title'),
      text: t('about.value3Text'),
    },
    {
      title: t('about.value4Title'),
      text: t('about.value4Text'),
    },
  ];

  return (
    <div className="animate-fade-in pt-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-slide-up">{t('about.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            {t('about.headerDesc')}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-indigo-900 mb-6">{t('about.missionTitle')}</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('about.mission1')}
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('about.mission2')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('about.mission3')}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start space-x-4 rtl:space-x-reverse p-6 bg-indigo-50 rounded-xl animate-slide-up">
                <div className="w-12 h-12 bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target size={24} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-900 mb-2">{t('about.visionTitle')}</h3>
                  <p className="text-gray-600">
                    {t('about.visionText')}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rtl:space-x-reverse p-6 bg-indigo-50 rounded-xl animate-slide-up" style={{ animationDelay: '0.15s' }}>
                <div className="w-12 h-12 bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart size={24} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-900 mb-2">{t('about.impactTitle')}</h3>
                  <p className="text-gray-600">
                    {t('about.impactText')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900 mb-6">{t('about.valuesTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('about.valuesDesc')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold text-indigo-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900 mb-6">{t('about.teamTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('about.teamDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden ring-2 ring-gold/40">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-indigo-900 mb-2">{member.name}</h3>
                <p className="text-gold font-semibold mb-4">{member.role}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 rtl:space-x-reverse text-indigo-900 hover:text-gold transition-colors duration-300 font-medium"
                  >
                    <Linkedin size={18} />
                    <span>
                      LinkedIn — {member.name}
                    </span>
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center space-x-2 rtl:space-x-reverse text-indigo-900 hover:text-gold transition-colors duration-300 font-medium mt-2"
                  >
                    <Mail size={18} />
                    <span>{member.email}</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;