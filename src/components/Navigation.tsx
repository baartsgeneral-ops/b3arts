import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, Activity, ShoppingBag, UserPlus } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About Us', icon: Info },
    { path: '/activities', label: 'Activities', icon: Activity },
    { path: '/shop', label: 'Shop', icon: ShoppingBag },
    { path: '/registration', label: 'Registration', icon: UserPlus },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-900 rounded-lg flex items-center justify-center">
        <img 
  src="/src/pic/logo.png" 
  alt="Logo" 
  className="h-8 w-auto"
/>
            </div>
            <span className="text-indigo-900 font-bold text-xl">Bȝ Arts</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-indigo-900 hover:text-white ${
                  location.pathname === path
                    ? 'text-gold bg-indigo-50'
                    : 'text-indigo-900'
                }`}
              >
                <Icon size={18} />
                <span className="font-medium">{label}</span>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button className="text-indigo-900 p-2">
              <Activity size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;