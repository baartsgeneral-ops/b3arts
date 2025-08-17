import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Heart, MessageCircle, Share, ArrowLeft } from 'lucide-react';

const SocialMedia = () => {
  const socialPlatforms = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/1CFFLax8bv/',
      color: 'bg-gradient-to-r from-blue-600 to-blue-700',
      icon: '👥',
      description: 'Join our community discussions and stay updated with our latest news and events.'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/baarts2025/?utm_source=qr&r=nametag',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      icon: '📷',
      description: 'Visual stories, behind-the-scenes content, and inspiring moments from our journey.'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/baarts',
      color: 'bg-gradient-to-r from-blue-700 to-blue-800',
      icon: '💼',
      description: 'Professional insights, industry updates, and networking opportunities.'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/moderncorp',
      color: 'bg-gradient-to-r from-red-500 to-red-600',
      icon: '📺',
      description: 'Educational videos, workshop recordings, and exclusive interviews.'
    },
    {
      name: 'Podcast Youtube',
      url: 'https://youtube.com/@zugoesofftopic?si=wwXYtEB3zn0u6pUh',
      color: 'bg-gradient-to-r from-red-500 to-red-600',
      icon: '📺',
      description: 'Real-time updates, quick tips, and engaging conversations with our audience.'
    },
    {
      name: 'Podcast Spotify',
      url: 'https://open.spotify.com/show/4ehspgAgKiDJ6KumEWMTsI?si=QZlI34OjRByFAx4iz0-1fg',
      color: 'bg-gradient-to-r from-[#1DB954] to-[#191414] text-white p-6 rounded-xl',
      icon: '🎵',
      description: 'Creative short-form content, trends, and fun educational snippets.'
    }
  ];

  const recentPosts = [
    {
      id: 1,
      platform: 'Instagram',
      content: 'Behind the scenes at our latest workshop! Amazing energy from all participants. 🚀',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 234,
      comments: 18,
      shares: 12
    },
    {
      id: 2,
      platform: 'LinkedIn',
      content: 'Key insights from our latest podcast episode on digital transformation.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 189,
      comments: 25,
      shares: 31
    },
    {
      id: 3,
      platform: 'YouTube',
      content: 'New video: "5 Essential Skills for Modern Leaders" - Watch now!',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 456,
      comments: 67,
      shares: 89
    }
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
          <h1 className="text-5xl font-bold mb-6 animate-slide-up">Connect With Us</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90 mb-8">
            Join our vibrant community across multiple platforms. Stay connected, get inspired, and be part of conversations that matter.
          </p>
          <div className="text-3xl font-bold text-gold">
            Follow • Engage • Grow Together
          </div>
        </div>
      </section>

      {/* Social Platforms Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900 mb-6">Our Social Media Platforms</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your preferred platform and join thousands of community members sharing ideas and insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialPlatforms.map((platform, index) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div 
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:transform hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`${platform.color} p-8 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative z-10 flex items-center justify-between">
                      <div>
                        <div className="text-4xl mb-2">{platform.icon}</div>
                        <h3 className="text-2xl font-bold text-white mb-1">{platform.name}</h3>
                        <p className="text-white opacity-90 font-semibold">{platform.followers} followers</p>
                      </div>
                      <ExternalLink size={32} className="text-white opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed">
                      {platform.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900 mb-6">Latest Social Media Posts</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get a glimpse of our recent social media activity and the engaging content we share with our community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <div 
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={post.image}
                  alt={post.content}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-indigo-100 text-indigo-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.platform}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {post.content}
                  </p>
                  
                  <div className="flex items-center justify-between text-gray-500 text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Heart size={16} />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle size={16} />
                        <span>{post.comments}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Share size={16} />
                        <span>{post.shares}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Connect?</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Join our growing community today! Follow us on your favorite platforms and be part of meaningful conversations that drive innovation and growth.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {socialPlatforms.slice(0, 4).map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${platform.color} text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:transform hover:scale-105 flex items-center space-x-2`}
              >
                <span>{platform.icon}</span>
                <span>Follow on {platform.name}</span>
              </a>
            ))}
          </div>
          
          <p className="text-lg opacity-75">
            Don't miss out on exclusive content, live events, and community discussions!
          </p>
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

export default SocialMedia;