import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Award, ArrowLeft } from 'lucide-react';

const Workshops = () => {
  const workshops = [
    {
      id: 1,
      title: 'upcoming',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'upcoming',
      participants: 50,
      date: 'upcoming, 2025'
    },
    {
      id: 2,
      title: 'upcoming',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'upcoming',
      participants: 50,
      date: 'upcoming, 2025'
    },
    {
      id: 3,
      title: 'upcoming',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'upcoming',
      participants: 50,
      date: 'upcoming, 2025'
    },
    {
      id: 4,
      title: 'upcoming',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'upcoming',
      participants: 50,
      date: 'upcoming, 2025'
    },
  ];

  return (
    <div className="animate-fade-in pt-8">
      {/* Back to Activities Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          to="/activities"
          className="inline-flex items-center space-x-2 text-indigo-900 hover:text-gold transition-colors duration-300 font-medium"
        >
          <ArrowLeft size={20} />
          <span>Back to Activities</span>
        </Link>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-slide-up">Workshops</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Interactive learning experiences designed to build practical skills, foster collaboration, and accelerate your professional growth.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Users, number: 'Upcoming', label: 'Participants Trained' },
              { icon: Calendar, number: 'Upcoming', label: 'Workshops This Year' },
              { icon: Award, number: 'upcoming', label: 'Satisfaction Rate' }
            ].map(({ icon: Icon, number, label }, index) => (
              <div 
                key={label}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Icon size={48} className="text-indigo-900 mx-auto mb-4" />
                <div className="text-4xl font-bold text-indigo-900 mb-2">{number}</div>
                <div className="text-gray-600 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900 mb-6">Upcoming Workshops</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our expert-led workshops and gain practical skills that you can apply immediately in your professional journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <Link
                key={workshop.id}
                to={`/workshops/${workshop.id}`}
                className="group block"
              >
                <div 
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                >
                <div className="relative overflow-hidden">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-indigo-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {workshop.participants} enrolled
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-indigo-900 mb-3">{workshop.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{workshop.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <Calendar size={16} className="mr-2" />
                    <span>{workshop.date}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 bg-indigo-100 rounded-full border-2 border-white flex items-center justify-center">
                          <Users size={14} className="text-indigo-600" />
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">+{workshop.participants - 3} more</span>
                    
                    <div className="ml-auto">
                      <span className="text-indigo-900 font-semibold group-hover:text-gold transition-colors duration-300">
                        View Details →
                      </span>
                    </div>
                  </div>
                </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="bg-indigo-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Join a Workshop?</h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step towards professional growth. Register now and secure your spot in our upcoming workshops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
<div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="https://forms.gle/wRp1EBjwRZnLUeoDA"   
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gold text-indigo-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-yellow-400 hover:transform hover:scale-105"
      >
        Register Now
      </a>
</div>
            <Link
              to="/shop"
              className="border-2 border-gold text-gold px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gold hover:text-indigo-900"
            >
              Shope
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Activities Button - Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <Link
          to="/activities"
          className="inline-flex items-center space-x-2 bg-indigo-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-gold hover:text-indigo-900"
        >
          <ArrowLeft size={20} />
          <span>Back to Activities</span>
        </Link>
      </div>
    </div>
  );
};

export default Workshops;