import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Welcome to
              <span className="text-gold block">Bȝ Arts</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Discover innovative solutions, connect with like-minded individuals, and transform your journey with our comprehensive platform.
            </p>
            <Link
              to="/activities"
              className="inline-flex items-center space-x-2 bg-gold text-indigo-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-yellow-400 hover:transform hover:scale-105 shadow-lg"
            >
              <span>Explore Activities</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
        
        {/* Abstract Background Pattern */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
            <path d="M0 120L50 105C100 90 200 60 300 45C400 30 500 30 600 37.5C700 45 800 60 900 67.5C1000 75 1100 75 1150 75L1200 75V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900 mb-4">Our Identity</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Inspired by the timeless spirit of Ancient Egypt, our identity is built on three powerful symbols. Together, they define who we are and what we stand for.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: 'The Ba',
                description: ' A bird with a human head, the Ba represents the soul and uniqueness of every person. For us, it stands for Unique Opportunity: every student has a distinct creative voice that deserves to be heard.'
              },
              {
                icon: Users,
                title: 'The Sema',
                description: 'The ancient symbol of Sema Tawy, representing the union of the two lands. For us, it means Integration: where arts connect with science, technology, and society to spark innovation.'
              },
              {
                icon:Zap,
                title: 'The Sesen',
                description: 'The lotus flower, symbol of beauty, rebirth, and artistic inspiration. For us, it represents both creative individuality — every student’s unique artistic voice — and community, as talents flourish together just like lotus blossoms opening side by side.'
              }
            ].map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-indigo-50 transition-all duration-300 hover:transform hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-indigo-900 mb-4">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community today and unlock your potential with our comprehensive programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/registration"
              className="bg-gold text-indigo-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-yellow-400 hover:transform hover:scale-105"
            >
              Register Now
            </Link>
            <Link
              to="/about"
              className="border-2 border-gold text-gold px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gold hover:text-indigo-900"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;