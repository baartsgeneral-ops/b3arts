import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, User, Calendar, ArrowLeft } from 'lucide-react';

const Magazine = () => {
  const articles = [
    {
      id: 1,
      title: 'Upcoming',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
      artist: 'Sarah Johnson',
      description: 'Upcoming',
      date: 'Upcoming 2025',
      category: 'Upcoming'
    },
    {
      id: 2,
      title: 'Upcoming',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
      artist: 'Sarah Johnson',
      description: 'Upcoming',
      date: 'Upcoming 2025',
      category: 'Upcoming'
    },
    {
      id: 3,
      title: 'Upcoming',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
      artist: 'Sarah Johnson',
      description: 'Upcoming',
      date: 'Upcoming 2025',
      category: 'Upcoming'
    },
    {
      id: 4,
      title: 'Upcoming',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
      artist: 'Sarah Johnson',
      description: 'Upcoming',
      date: 'Upcoming 2025',
      category: 'Upcoming'
    },
    {
      id: 5,
      title: 'Upcoming',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
      artist: 'Sarah Johnson',
      description: 'Upcoming',
      date: 'Upcoming 2025',
      category: 'Upcoming'
    },
    {
      id: 6,
      title: 'Upcoming',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
      artist: 'Sarah Johnson',
      description: 'Upcoming',
      date: 'Upcoming 2025',
      category: 'Upcoming'
    }
  ];

  const categories = ['All', 'Technology', 'Design', 'Management', 'Art', 'Analytics', 'Leadership'];

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
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-slide-up">Digital Magazine</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            A curated collection of insights, stories, and creative expressions from industry leaders and innovative thinkers.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-16 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 animate-fade-in ${
                  index === 0
                    ? 'bg-indigo-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-900'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article 
                key={article.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-indigo-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-indigo-900 mb-3 leading-tight">
                    {article.title}
                  </h2>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User size={16} className="mr-1" />
                      <span>{article.artist}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {article.description}
                  </p>
                  
                  <button className="w-full bg-indigo-900 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:bg-gold hover:text-indigo-900 flex items-center justify-center space-x-2 group">
                    <BookOpen size={20} />
                    <span>Read Article</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Author */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-indigo-900 mb-6">Featured Author Spotlight</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  This month we're highlighting the exceptional work of our contributing authors who bring unique perspectives and valuable insights to our community.
                </p>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-indigo-900 rounded-full flex items-center justify-center">
                      <User size={32} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-indigo-900">Upcoming</h3>
                      <p className="text-gray-600">Upcoming</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "Upcoming Upcoming Upcoming"
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Featured Author"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter and never miss the latest articles, insights, and creative content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          
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

export default Magazine;