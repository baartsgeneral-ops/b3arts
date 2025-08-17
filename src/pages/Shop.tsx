import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

const Shop = () => {
  const products = [
    {
      id: 1,
      title: 'Upcoming',
      image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Upcoming',
      price: '0EGP',
      rating: 4.9,
      orderUrl: 'https://example.com/order/course-bundle'
    },
    {
      id: 2,
      title: 'Upcoming',
      image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Upcoming',
      price: '0EGP',
      rating: 4.8,
      orderUrl: 'https://example.com/order/materials-kit'
    },
    {
      id: 3,
      title: 'Upcoming',
      image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Upcoming',
      price: '0EGP',
      rating: 4.7,
      orderUrl: 'https://example.com/order/magazine-sub'
    },
    {
      id: 4,
      title: 'Upcoming',
      image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Upcoming',
      price: '0EGP',
      rating: 5.0,
      orderUrl: 'https://example.com/order/membership'
    },
    {
      id: 5,
      title: 'Upcoming',
      image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Upcoming',
      price: '0EGP',
      rating: 4.6,
      orderUrl: 'https://example.com/order/sponsor-package'
    },
    {
      id: 6,
      title: 'Upcoming',
      image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Upcoming',
      price: '0EGP',
      rating: 4.9,
      orderUrl: 'https://example.com/order/masterclass'
    }
  ];

  return (
    <div className="animate-fade-in pt-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-slide-up">Shop</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Discover our curated collection of premium products from youth to youth.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-indigo-900 px-3 py-1 rounded-full font-semibold text-sm">
                    {product.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(product.rating) ? 'text-gold fill-current' : 'text-gray-300'}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-indigo-900 mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  
                  <a
                    href="https://forms.gle/1cVoK9Gacf7v3xZn8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-indigo-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-gold hover:text-indigo-900 flex items-center justify-center space-x-2 group"
                  >
                    <ShoppingCart size={20} />
                    <span>Order Now</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Need Custom Solutions?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact our team for personalized packages and enterprise solutions tailored to your specific needs.
          </p>
          <a
            href="https://www.instagram.com/ba3.arts/"
            className="inline-block bg-gold text-indigo-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-yellow-400 hover:transform hover:scale-105"
          >
           Contact us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Shop;