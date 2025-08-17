import React from 'react';
import { Users, Target, Heart } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Upcoming',
      role: 'Upcoming',
    },
    {
      name: 'Sama Hassan',
      role: 'Founder & CEO',
    },
    {
      name: 'Upcoming',
      role: 'Upcoming',
    }
  ];

  return (
    <div className="animate-fade-in pt-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-slide-up">Who We Are</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            We are a youth-led creative community inspired by the spirit of Ancient Egypt, bringing together individuality (Ba), growth & community (Sesen), and integration (Sema). We exist to empower high school students in Egypt and the MENA region to explore their artistic voices and connect across disciplines.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-indigo-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe in the power of connection and continuous learning. Our platform serves as a bridge between innovative ideas and practical implementation, fostering growth in individuals and communities alike.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through our diverse range of activities—from podcasts and workshops to social media engagement and publications—we create opportunities for meaningful dialogue and skill development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {[
                { icon: Target, title: 'Our Vision', text: 'To be the leading platform for innovative learning and community building.' },
                { icon: Heart, title: 'Our Values', text: 'Creativity – We believe in the power of imagination to transform lives.Community – We grow stronger when we learn and create together.Integration – We embrace the meeting point of arts, science, and society.Authenticity – We celebrate originality and unique voices.Inspiration – We aim to spark ideas that go beyond borders.`' },
                { icon: Users, title: 'Our Impact', text: 'Empowering thousands of individuals to achieve their personal and professional goals.' }
              ].map(({ icon: Icon, title, text }, index) => (
                <div 
                  key={title}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-12 h-12 bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-900 mb-2">{title}</h3>
                    <p className="text-gray-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind our success, dedicated to bringing you the best experience possible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-900 to-indigo-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users size={40} className="text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-indigo-900 mb-2">{member.name}</h3>
                <p className="text-gold font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;