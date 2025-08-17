import React from 'react';
import { Users, Target, Heart } from 'lucide-react';

const About = () => {
  <div className="flex justify-center items-center min-h-screen"></div>
  const teamMembers = [
    {
      name: 'Sama Hassan',
      role: 'Founder & CEO',
    },
    
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
                We believe that art is not an accessory to education, but a foundation for imagination, identity, and innovation. Our mission is to create a platform where high school students in Egypt and the MENA region can express their individuality, discover the value of their creativity, and understand how art connects with the wider world. We want every young person to see that their artistic voice matters — that it has the power to inspire, to challenge, and to transform.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                At the same time, our mission is to build a supportive community that encourages collaboration and growth. Through programs, mentorship, and opportunities for recognition, we give students the tools to integrate art with science, technology, and society. By doing so, we nurture a generation of young creatives who are not only artists but changemakers — ready to shape the future with imagination, courage, and purpose.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {[
                { icon: Target, title: 'Our Vision', text: 'Our vision is to build a future where young creatives in Egypt and the MENA region place art at the center of innovation, learning, and community. We imagine a generation that values its artistic voice, integrates creativity with science and society, and leads cultural change across borders' },
                { icon: Heart, title: 'Our Values', text: 'Our values shape everything we do. We believe in the power of imagination to transform lives, and we grow stronger when we learn and create together as a community. We embrace the meeting point of arts, science, and society, celebrating authenticity through originality and unique voices.' },
                { icon: Users, title: 'Our Impact', text: 'Our impact lies in changing the way young people see art — not as something to be pushed aside, but as a powerful force that belongs at the heart of everything they do. We create spaces where students can connect their artistic expression with science, technology, and everyday life, proving that creativity is not separate from knowledge but a vital part of it. In doing so, we empower young creatives to value their art, integrate it with other fields, and use it as a tool for growth and change.' }
              ].map(({ icon: Icon, title, text }, index) => (
                <div 
                  key={title}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                  
                >
                  <div className="w-12 h-12 bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className="text-gold" />
                    <div className="flex justify-center items-center min-h-screen"></div>
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
                <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden">
  <img 
    src="/src/pic/1.jpg"   // <-- هنا حطي اسم صورتك أو لينك الصورة
    alt={member.name} 
    className="w-full h-full object-cover"
  />
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