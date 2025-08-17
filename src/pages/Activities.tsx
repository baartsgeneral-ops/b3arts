import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, Users, Share2, BookOpen } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      icon: Mic,
      title: 'Podcast',
      description: 'Engaging conversations with industry leaders, thought-provoking discussions, and insights that inspire action.',
      link: '/podcast',
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: Users,
      title: 'Workshops',
      description: 'Interactive learning experiences designed to build practical skills and foster collaborative growth.',
      link: '/workshops',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Connect with our vibrant community across multiple platforms and stay updated with latest content.',
      link: '/social',
      color: 'from-green-500 to-green-700'
    },
    {
      icon: BookOpen,
      title: 'Website & Magazine',
      description: 'Curated articles, visual stories, and in-depth features that celebrate creativity and innovation.',
      link: '/magazine',
      color: 'from-orange-500 to-orange-700'
    }
  ];

  return (
    <div className="animate-fade-in pt-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-slide-up">Our Activities</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Discover diverse ways to engage, learn, and grow with our comprehensive range of activities designed for your success.
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
                      <span>Explore {activity.title}</span>
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Call to Action */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Join?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start your journey with us today and become part of a community that values growth and innovation.
          </p>
          <Link
            to="/registration"
            className="inline-block bg-gold text-indigo-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-yellow-400 hover:transform hover:scale-105"
          >
            Register Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Activities;