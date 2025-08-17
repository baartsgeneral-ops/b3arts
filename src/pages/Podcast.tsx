import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ExternalLink, ArrowLeft } from 'lucide-react';

const Podcast = () => {
  const episodes = [
    {
      id: 1,
      title: 'فنون جميلة|مع شهد الشاذلي',
      description: ' في الحلقة دي من zu goes off topic، بنفتح الباب على واحدة من أكتر الكليات اللي حواليها تساؤلات وخرافات: فنون جميلة.',
      cover: '/src/pic/112.jpg',
      duration: '26 min',
      youtubeUrl: 'https://youtube.com/@zugoesofftopic?si=wwXYtEB3zn0u6pUh',
      spotifyUrl: 'https://open.spotify.com/show/4ehspgAgKiDJ6KumEWMTsI?si=QZlI34OjRByFAx4iz0-1fg'
    },
    {
      id: 2,
      title: 'Between Canvas and Calculations | with Isaac James',
      description: 'What’s it like to study art — while also studying mathematics? In this episode, I talk with Isaac James, a student at Washington and Lee University',
      cover: '/src/pic/122.jpg',
      duration: '26 min',
      youtubeUrl: 'https://youtube.com/@zugoesofftopic?si=wwXYtEB3zn0u6pUh',
      spotifyUrl: 'https://open.spotify.com/show/4ehspgAgKiDJ6KumEWMTsI?si=QZlI34OjRByFAx4iz0-1fg'
    },
    {
      id: 3,
      title: 'Feeling Through Art – with Róisín Lyst',
      description: 'In this very first episode of zu goes off topic, I sit down with artist Róisín Lyst to talk about what art truly means beyond school walls and technical rules.',
      cover: '/src/pic/132.jpg',
      duration: '24 min',
      youtubeUrl: 'https://youtube.com/@zugoesofftopic?si=wwXYtEB3zn0u6pUh',
      spotifyUrl: 'https://open.spotify.com/show/4ehspgAgKiDJ6KumEWMTsI?si=QZlI34OjRByFAx4iz0-1fg'
    },

  ];

  const platforms = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/zu_goes_off_topic?igsh=MW1zMjZsd2pzMHBrdg==',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      icon: '📷'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@zugoesofftopic?si=wwXYtEB3zn0u6pUh',
      color: 'bg-gradient-to-r from-red-500 to-red-600',
      icon: '📺'
    },
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/show/4ehspgAgKiDJ6KumEWMTsI?si=QZlI34OjRByFAx4iz0-1fg',
      color: 'bg-gradient-to-r from-green-500 to-green-600',
      icon: '🎵'
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
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-slide-up">Zu Goes OFF Topic Podcast</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Whether it’s painting, music, design, or movement — this podcast explores how art connects to who we are, and why it deserves to be seen, felt, and taken seriously.
Because sometimes, the most powerful things… are the ones we were told don’t matter.
          </p>
        </div>
      </section>

      {/* Platform Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-indigo-900 text-center mb-12">Listen On Your Favorite Platform</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {platforms.map((platform, index) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${platform.color} text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg flex items-center space-x-3 animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <span className="text-2xl">{platform.icon}</span>
                <span>{platform.name}</span>
                <ExternalLink size={20} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Episodes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900 mb-6">Latest Episodes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most recent conversations!
            </p>
          </div>
          
          <div className="overflow-x-auto pb-6">
            <div className="flex space-x-6 min-w-max">
              {episodes.map((episode, index) => (
                <div 
                  key={episode.id}
                  className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative">
                    <img
                      src={episode.cover}
                      alt={episode.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-4 right-4 bg-indigo-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {episode.duration}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-indigo-900 mb-3">{episode.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{episode.description}</p>
                    
                    <div className="flex flex-col space-y-3">
                      <a
                        href={episode.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold text-center transition-all duration-300 hover:bg-red-700 flex items-center justify-center space-x-2"
                      >
                        <span>📺</span>
                        <span>Watch on YouTube</span>
                      </a>
                      <a
                        href={episode.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-center transition-all duration-300 hover:bg-green-700 flex items-center justify-center space-x-2"
                      >
                        <span>🎵</span>
                        <span>Listen on Spotify</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Never Miss an Episode</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to get notified when we release new episodes and exclusive behind-the-scenes content.
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

export default Podcast;