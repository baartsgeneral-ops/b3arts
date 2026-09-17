import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, Activity, ShoppingBag } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About Us', icon: Info },
    { path: '/activities', label: 'Activities', icon: Activity },
    { path: '/shop', label: 'Shop', icon: ShoppingBag },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-900 via-gold to-indigo-900"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="rounded-2xl overflow-hidden ring-1 ring-indigo-900/10 group-hover:ring-gold transition-all duration-300">
              <img
                src="/src/pic/logo.png"
                alt="Logo"
                className="h-12 w-auto"
              />
            </div>
            <span className="text-indigo-900 font-extrabold text-2xl tracking-tight font-display">
              Bȝ Arts
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-full transition-all duration-300 hover:bg-indigo-900 hover:text-white ${
                  location.pathname === path
                    ? 'text-gold bg-indigo-50 font-semibold'
                    : 'text-indigo-900 font-medium'
                }`}
              >
                <Icon size={17} />
                <span>{label}</span>
              </Link>
            ))}
            <Link
              to="/registration"
              className="ml-3 bg-indigo-900 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:bg-gold hover:text-indigo-900 hover:scale-105 shadow-md"
            >
              Register
            </Link>
          </div>

          <div className="md:hidden">
            <Link
              to="/registration"
              className="text-indigo-900 font-semibold bg-indigo-50 px-4 py-2 rounded-full"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;