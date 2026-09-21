import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, Users, Clock, MapPin, ExternalLink } from 'lucide-react';

const WorkshopDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  interface Workshop {
    title: string;
    subtitle: string;
    description: string;
    fullDescription: string;
    date: string;
    time: string;
    location: string;
    participants: string;
    instructor: string;
    instructorDescription: string;
    images: string[];
    highlights: string[];
    courseLink?: string;
  }

  // Workshop data - from Ba Arts Web.md
  const workshopData: Record<string, Workshop> = {
    '1': {
      title: t('workshops.w1Title'),
      subtitle: t('workshopDetail.w1Subtitle'),
      description: t('workshopDetail.w1Desc'),
      fullDescription: t('workshopDetail.w1Full'),
      date: t('workshopDetail.w1Date'),
      time: t('workshopDetail.w1Time'),
      location: t('workshopDetail.w1Location'),
      participants: t('workshopDetail.w1Participants'),
      instructor: t('workshopDetail.w1Instructor'),
      instructorDescription: t('workshopDetail.w1InstructorDesc'),
      images: [
        '/images/workshops/mun-cover.webp',
        '/images/workshops/mun-1.webp',
        '/images/workshops/mun-2.webp',
        '/images/workshops/mun-3.webp',
        '/images/workshops/mun-4.webp',
        '/images/workshops/mun-5.webp',
      ],
      highlights: [
        t('workshopDetail.w1h1'),
        t('workshopDetail.w1h2'),
        t('workshopDetail.w1h3'),
        t('workshopDetail.w1h4'),
        t('workshopDetail.w1h5'),
        t('workshopDetail.w1h6'),
      ]
    },
    '2': {
      title: t('workshops.w2Title'),
      subtitle: t('workshopDetail.w2Subtitle'),
      description: t('workshopDetail.w2Desc'),
      fullDescription: t('workshopDetail.w2Full'),
      date: t('workshopDetail.w2Date'),
      time: t('workshopDetail.w2Time'),
      location: t('workshopDetail.w2Location'),
      participants: t('workshopDetail.w2Participants'),
      instructor: t('workshopDetail.w2Instructor'),
      instructorDescription: t('workshopDetail.w2InstructorDesc'),
      images: [
        '/images/workshops/folklore.webp',
      ],
      highlights: [
        t('workshopDetail.w2h1'),
        t('workshopDetail.w2h2'),
        t('workshopDetail.w2h3'),
        t('workshopDetail.w2h4'),
        t('workshopDetail.w2h5'),
        t('workshopDetail.w2h6'),
      ]
    },
    '3': {
      title: t('workshops.w3Title'),
      subtitle: t('workshopDetail.w3Subtitle'),
      description: t('workshopDetail.w3Desc'),
      fullDescription: t('workshopDetail.w3Full'),
      date: t('workshopDetail.w3Date'),
      time: t('workshopDetail.w3Time'),
      location: t('workshopDetail.w3Location'),
      participants: t('workshopDetail.w3Participants'),
      instructor: t('workshopDetail.w3Instructor'),
      instructorDescription: t('workshopDetail.w3InstructorDesc'),
      courseLink: 'https://classroom.google.com/c/NzQ3MTk3MTQ2ODQx?cjc=o55kk6pk',
      images: [
        '/images/workshops/gd-course.webp',
      ],
      highlights: [
        t('workshopDetail.w3h1'),
        t('workshopDetail.w3h2'),
        t('workshopDetail.w3h3'),
        t('workshopDetail.w3h4'),
        t('workshopDetail.w3h5'),
        t('workshopDetail.w3h6'),
      ]
    }
  };

  const workshop = workshopData[id || '1'];

  const RegisterButton = () => (
    <Link
      to="/registration"
      className="bg-gold text-indigo-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-yellow-400 inline-flex items-center justify-center"
    >
      {t('workshopDetail.registerNow')}
    </Link>
  );

  if (!workshop) {
    return (
      <div className="animate-fade-in pt-8 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-indigo-900 mb-4">{t('workshopDetail.notFound')}</h1>
          <Link
            to="/workshops"
            className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-indigo-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-gold hover:text-indigo-900"
          >
            <ArrowLeft size={20} className="rtl:rotate-180" />
            <span>{t('workshopDetail.backToWorkshops')}</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in pt-8">
      {/* Back to Workshops Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          to="/workshops"
          className="inline-flex items-center space-x-2 rtl:space-x-reverse text-indigo-900 hover:text-gold transition-colors duration-300 font-medium"
        >
          <ArrowLeft size={20} className="rtl:rotate-180" />
          <span>{t('workshopDetail.backToWorkshops')}</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <span className="inline-block bg-gold text-indigo-900 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                {workshop.subtitle}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{workshop.title}</h1>
              <p className="text-xl leading-relaxed opacity-90 mb-8">
                {workshop.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Calendar size={24} className="text-gold" />
                  <div>
                    <p className="font-semibold">{t('workshopDetail.date')}</p>
                    <p className="opacity-90">{workshop.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Clock size={24} className="text-gold" />
                  <div>
                    <p className="font-semibold">{t('workshopDetail.time')}</p>
                    <p className="opacity-90">{workshop.time}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <MapPin size={24} className="text-gold" />
                  <div>
                    <p className="font-semibold">{t('workshopDetail.location')}</p>
                    <p className="opacity-90">{workshop.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Users size={24} className="text-gold" />
                  <div>
                    <p className="font-semibold">{t('workshopDetail.enrolled')}</p>
                    <p className="opacity-90">{workshop.participants}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {workshop.courseLink ? (
                  <a
                    href={workshop.courseLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gold text-indigo-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-yellow-400 flex items-center space-x-2 rtl:space-x-reverse"
                  >
                    <ExternalLink size={20} />
                    <span>{t('workshopDetail.joinCourse')}</span>
                  </a>
                ) : (
                  <RegisterButton />
                )}
              </div>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <img
                src={workshop.images[0]}
                alt={workshop.title}
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Gallery */}
      {workshop.images.length > 1 && (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-indigo-900 text-center mb-16">{t('workshopDetail.galleryTitle')}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workshop.images.map((image: string, index: number) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image}
                  alt={`${workshop.title} - ${t('workshopDetail.imageAlt')} ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">{t('workshopDetail.sessionLabel')} {index + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Workshop Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-indigo-900 mb-6">{t('workshopDetail.aboutThis')}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {workshop.fullDescription}
              </p>
              
              <div className="bg-indigo-50 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-indigo-900 mb-4">{t('workshopDetail.instructor')}</h3>
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-16 h-16 bg-indigo-900 rounded-full flex items-center justify-center">
                    <Users size={32} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-indigo-900">{workshop.instructor}</h4>
                    <p className="text-gray-600">{workshop.instructorDescription}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-3xl font-bold text-indigo-900 mb-6">{t('workshopDetail.whatYoullLearn')}</h3>
              <div className="space-y-4">
                {workshop.highlights.map((highlight: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3 rtl:space-x-reverse">
                    <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-indigo-900 font-bold text-sm">✓</span>
                    </div>
                    <p className="text-gray-700 text-lg">{highlight}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-indigo-900 to-blue-900 rounded-2xl text-white">
                <h4 className="text-xl font-bold mb-2">{t('workshopDetail.includes')}</h4>
                <ul className="space-y-2 opacity-90">
                  <li>• {t('workshopDetail.incMaterial')}</li>
                  <li>• {t('workshopDetail.incCertificate')}</li>
                  <li>• {t('workshopDetail.incCommunity')}</li>
                  <li>• {t('workshopDetail.incSupport')}</li>
                  <li>• {t('workshopDetail.incNetwork')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">{t('workshopDetail.readyToJoin')}</h2>
          <p className="text-xl mb-8 opacity-90">
            {t('workshopDetail.readyToJoinDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {workshop.courseLink ? (
              <a
                href={workshop.courseLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-indigo-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-yellow-400 inline-flex items-center space-x-2 rtl:space-x-reverse"
              >
                <ExternalLink size={20} />
                <span>{t('workshopDetail.joinClassroom')}</span>
              </a>
            ) : (
              <Link
                to="/registration"
                className="bg-gold text-indigo-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-yellow-400"
              >
                {t('workshopDetail.registerNext')}
              </Link>
            )}
            
            <Link
              to="/workshops"
              className="border-2 border-gold text-gold px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gold hover:text-indigo-900"
            >
              {t('workshopDetail.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Workshops Button - Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <Link
          to="/workshops"
          className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-indigo-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-gold hover:text-indigo-900"
        >
          <ArrowLeft size={20} className="rtl:rotate-180" />
          <span>{t('workshopDetail.backToWorkshops')}</span>
        </Link>
      </div>
    </div>
  );
};

export default WorkshopDetail;