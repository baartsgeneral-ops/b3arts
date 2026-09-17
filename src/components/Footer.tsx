import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Twitter, Mail, Heart, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#080b1a] text-white">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-transparent to-gold" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="rounded-xl overflow-hidden ring-1 ring-white/10">
                <img src="/src/pic/logo.png" alt="Bȝ Arts logo" className="h-12 w-auto" />
              </div>
              <span className="font-display text-2xl font-bold text-gold">Bȝ Arts</span>
            </Link>
            <p className="text-white/60 leading-relaxed mb-6">
              A youth-led creative community where ancient spirit meets modern voices — empowering young artists across Egypt and the MENA region.
            </p>
            <div className="flex items-center space-x-3">
              {[
                { icon: Instagram, href: 'https://linktr.ee/b3arts', label: 'Instagram' },
                { icon: Facebook, href: 'https://linktr.ee/b3arts', label: 'Facebook' },
                { icon: Youtube, href: 'https://youtube.com/@zugoesofftopic?si=wwXYtEB3zn0u6pUh', label: 'YouTube' },
                { icon: Twitter, href: 'https://linktr.ee/b3arts', label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 bg-white/5 hover:bg-gold hover:text-indigo-900 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-wider text-sm text-gold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Activities', path: '/activities' },
                { label: 'Shop', path: '/shop' },
                { label: 'Registration', path: '/registration' },
              ].map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="text-white/60 hover:text-gold transition-colors duration-300 inline-flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold rounded-full" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-wider text-sm text-gold mb-6">Our Activities</h3>
            <ul className="space-y-3">
              {[
                { label: 'Podcast', path: '/podcast' },
                { label: 'Workshops', path: '/workshops' },
                { label: 'Social Media', path: '/social' },
                { label: 'Website & Magazine', path: '/magazine' },
              ].map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="text-white/60 hover:text-gold transition-colors duration-300 inline-flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold rounded-full" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-wider text-sm text-gold mb-6">Stay Connected</h3>
            <p className="text-white/60 leading-relaxed mb-6">
              Follow our journey and never miss a workshop, episode, or announcement.
            </p>
            <a
              href="https://linktr.ee/b3arts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gold text-indigo-900 px-6 py-3 rounded-full font-bold transition-all duration-300 hover:bg-yellow-400 group"
            >
              <Mail size={18} />
              <span>Say hello</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Bȝ Arts. All rights reserved.
          </p>
          <p className="text-white/50 text-sm flex items-center gap-1.5">
            Made with <Heart size={14} className="text-gold fill-current" /> by young creatives
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;