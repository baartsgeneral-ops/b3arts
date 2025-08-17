import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, Clock, MapPin } from 'lucide-react';

const WorkshopDetail = () => {
  const { id } = useParams();
  
  // Workshop data - in a real app, this would come from an API
  const workshopData: { [key: string]: any } = {
    '1': {
      title: 'Digital Marketing Mastery',
      description: 'A comprehensive workshop covering advanced digital marketing strategies, analytics, and campaign optimization techniques that drive real business results.',
      fullDescription: 'This intensive two-day workshop is designed for marketing professionals, entrepreneurs, and business owners who want to master the art and science of digital marketing. You\'ll learn cutting-edge strategies for social media marketing, search engine optimization, content marketing, email campaigns, and paid advertising. Our expert instructors will guide you through hands-on exercises, real-world case studies, and practical tools that you can implement immediately.',
      date: 'March 15-16, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'ModernCorp Training Center',
      participants: 150,
      instructor: 'Sarah Johnson',
      images: [
        'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      highlights: [
        'Advanced SEO and SEM strategies',
        'Social media marketing mastery',
        'Content creation and storytelling',
        'Analytics and performance tracking',
        'Email marketing automation',
        'Paid advertising optimization'
      ]
    },
    '2': {
      title: 'Leadership Excellence',
      description: 'Develop essential leadership skills for the modern workplace through interactive sessions and real-world scenarios.',
      fullDescription: 'This transformative leadership workshop focuses on developing the core competencies needed to lead effectively in today\'s dynamic business environment. Participants will explore various leadership styles, learn to communicate with impact, and develop strategies for team motivation and conflict resolution.',
      date: 'March 22-23, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'ModernCorp Training Center',
      participants: 120,
      instructor: 'Michael Chen',
      images: [
        'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      highlights: [
        'Leadership styles and adaptability',
        'Effective communication techniques',
        'Team building and motivation',
        'Conflict resolution strategies',
        'Decision-making frameworks',
        'Change management principles'
      ]
    },
    '3': {
      title: 'Creative Design Workshop',
      description: 'Unlock your creative potential with hands-on design exercises and professional techniques.',
      fullDescription: 'This creative workshop is perfect for designers, marketers, and anyone looking to enhance their visual communication skills. Learn fundamental design principles, color theory, typography, and layout techniques through practical exercises and creative challenges.',
      date: 'April 5-6, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'ModernCorp Design Studio',
      participants: 85,
      instructor: 'Emma Davis',
      images: [
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      highlights: [
        'Design principles and theory',
        'Color psychology and application',
        'Typography and layout design',
        'Digital design tools mastery',
        'Brand identity development',
        'Portfolio creation techniques'
      ]
    },
    '4': {
      title: 'Data Analytics Bootcamp',
      description: 'Master data analysis techniques and visualization tools to make data-driven decisions.',
      fullDescription: 'This intensive bootcamp covers everything from basic data analysis to advanced statistical methods and visualization techniques. Perfect for professionals who want to leverage data for strategic decision-making.',
      date: 'April 12-13, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'ModernCorp Tech Lab',
      participants: 95,
      instructor: 'Alex Rodriguez',
      images: [
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      highlights: [
        'Statistical analysis fundamentals',
        'Data visualization techniques',
        'Excel and Google Sheets mastery',
        'Introduction to Python/R',
        'Dashboard creation',
        'Predictive analytics basics'
      ]
    },
    '5': {
      title: 'Social Media Strategy',
      description: 'Build effective social media campaigns that engage audiences and drive business results.',
      fullDescription: 'Learn to create compelling social media strategies that build brand awareness, engage audiences, and drive conversions across all major platforms.',
      date: 'April 19-20, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'ModernCorp Media Center',
      participants: 110,
      instructor: 'David Kim',
      images: [
        'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      highlights: [
        'Platform-specific strategies',
        'Content planning and creation',
        'Community management',
        'Influencer partnerships',
        'Social media advertising',
        'Performance measurement'
      ]
    },
    '6': {
      title: 'Content Creation Mastery',
      description: 'Create compelling content that resonates with your audience and drives engagement.',
      fullDescription: 'Master the art of content creation across multiple formats and platforms. Learn storytelling techniques, content planning, and optimization strategies.',
      date: 'April 26-27, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'ModernCorp Content Studio',
      participants: 75,
      instructor: 'Lisa Thompson',
      images: [
        'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      highlights: [
        'Storytelling fundamentals',
        'Content strategy development',
        'Video and podcast creation',
        'SEO content optimization',
        'Content distribution strategies',
        'Measuring content performance'
      ]
    }
  };

  const workshop = workshopData[id || '1'];

  if (!workshop) {
    return (
      <div className="animate-fade-in pt-8 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-indigo-900 mb-4">Workshop Not Found</h1>
          <Link
            to="/workshops"
            className="inline-flex items-center space-x-2 bg-indigo-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-gold hover:text-indigo-900"
          >
            <ArrowLeft size={20} />
            <span>Back to Workshops</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in pt-8">
      {/* Back to Workshops Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          to="/workshops"
          className="inline-flex items-center space-x-2 text-indigo-900 hover:text-gold transition-colors duration-300 font-medium"
        >
          <ArrowLeft size={20} />
          <span>Back to Workshops</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-5xl font-bold mb-6">{workshop.title}</h1>
              <p className="text-xl leading-relaxed opacity-90 mb-8">
                {workshop.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Calendar size={24} className="text-gold" />
                  <div>
                    <p className="font-semibold">Date</p>
                    <p className="opacity-90">{workshop.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock size={24} className="text-gold" />
                  <div>
                    <p className="font-semibold">Time</p>
                    <p className="opacity-90">{workshop.time}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={24} className="text-gold" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="opacity-90">{workshop.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users size={24} className="text-gold" />
                  <div>
                    <p className="font-semibold">Enrolled</p>
                    <p className="opacity-90">{workshop.participants} participants</p>
                  </div>
                </div>
              </div>
              
              <Link
                to="/registration"
                className="inline-block bg-gold text-indigo-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-yellow-400 hover:transform hover:scale-105"
              >
                Register Now
              </Link>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <img
                src={workshop.images[0]}
                alt={workshop.title}
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-indigo-900 text-center mb-16">Workshop Gallery</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workshop.images.map((image: string, index: number) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image}
                  alt={`${workshop.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Workshop Session {index + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-indigo-900 mb-6">About This Workshop</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {workshop.fullDescription}
              </p>
              
              <div className="bg-indigo-50 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-indigo-900 mb-4">Instructor</h3>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-indigo-900 rounded-full flex items-center justify-center">
                    <Users size={32} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-indigo-900">{workshop.instructor}</h4>
                    <p className="text-gray-600">Expert Instructor & Industry Leader</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-3xl font-bold text-indigo-900 mb-6">What You'll Learn</h3>
              <div className="space-y-4">
                {workshop.highlights.map((highlight: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-indigo-900 font-bold text-sm">✓</span>
                    </div>
                    <p className="text-gray-700 text-lg">{highlight}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-indigo-900 to-blue-900 rounded-2xl text-white">
                <h4 className="text-xl font-bold mb-2">Workshop Includes:</h4>
                <ul className="space-y-2 opacity-90">
                  <li>• All workshop materials and resources</li>
                  <li>• Certificate of completion</li>
                  <li>• Access to exclusive online community</li>
                  <li>• Follow-up support and resources</li>
                  <li>• Networking opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Join This Workshop?</h2>
          <p className="text-xl mb-8 opacity-90">
            Secure your spot now and take the next step in your professional development journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="https://forms.gle/wRp1EBjwRZnLUeoDA"   
        target="_blank"
        rel="noopener noreferrer"
              className="bg-gold text-indigo-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-yellow-400 hover:transform hover:scale-105"
            
              Register for the next Workshop
      </a>
            </Link>
            <Link
              to="/workshops"
              className="border-2 border-gold text-gold px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gold hover:text-indigo-900"
            >
              View All Workshops
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Workshops Button - Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <Link
          to="/workshops"
          className="inline-flex items-center space-x-2 bg-indigo-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-gold hover:text-indigo-900"
        >
          <ArrowLeft size={20} />
          <span>Back to Workshops</span>
        </Link>
      </div>
    </div>
  );
};

export default WorkshopDetail;