import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShoppingCart } from 'lucide-react';

const Shop = () => {
  const { t } = useTranslation();

  const products = [
    {
      id: 1,
      title: 'Product 1',
      image: '/images/shop/product-01.webp',
      rating: 4.9,
    },
    {
      id: 2,
      title: 'Product 2',
      image: '/images/shop/product-02.webp',
      rating: 4.8,
    },
    {
      id: 3,
      title: 'Product 3',
      image: '/images/shop/product-03.webp',
      rating: 4.7,
    },
    {
      id: 4,
      title: 'Product 4',
      image: '/images/shop/product-04.webp',
      rating: 5.0,
    },
    {
      id: 5,
      title: 'Product 5',
      image: '/images/shop/product-05.webp',
      rating: 4.6,
    },
    {
      id: 6,
      title: 'Product 6',
      image: '/images/shop/product-06.webp',
      rating: 4.9,
    }
  ];

  return (
    <div className="animate-fade-in pt-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-slide-up">{t('shop.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            {t('shop.headerDesc')}
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
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-indigo-900 mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{t('shop.productDesc')}</p>
                  
                  <a
                    href="https://forms.gle/1cVoK9Gacf7v3xZn8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-indigo-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-gold hover:text-indigo-900 flex items-center justify-center space-x-2 group"
                  >
                    <ShoppingCart size={20} />
                    <span>{t('shop.orderNow')}</span>
                    <svg className="w-4 h-4 transform rotate-0 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <h2 className="text-4xl font-bold mb-6">{t('shop.needCustom')}</h2>
          <p className="text-xl mb-8 opacity-90">
            {t('shop.needCustomDesc')}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gold text-indigo-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-yellow-400 hover:transform hover:scale-105"
          >
            {t('shop.contactUs')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Shop;