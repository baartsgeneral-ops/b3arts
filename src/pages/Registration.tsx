import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    workshop: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const workshops = [
    'Digital Marketing Fundamentals',
    'Creative Design Workshop',
    'Leadership Development',
    'Data Analytics Bootcamp',
    'Social Media Strategy',
    'Content Creation Mastery'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="animate-fade-in pt-8 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center bg-white p-8 rounded-2xl shadow-lg">
          <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">Registration Successful!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for registering! We've received your information and will send you confirmation details shortly.
          </p>
          <div className="bg-indigo-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-indigo-900 mb-2">Your Registration Details:</h3>
            <p className="text-sm text-gray-600"><strong>Name:</strong> {formData.name}</p>
            <p className="text-sm text-gray-600"><strong>Email:</strong> {formData.email}</p>
            <p className="text-sm text-gray-600"><strong>Workshop:</strong> {formData.workshop}</p>
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-indigo-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-gold hover:text-indigo-900"
          >
            Register Another Person
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in pt-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-slide-up">Workshop Registration</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Join our upcoming workshops and take your skills to the next level with expert-led sessions.
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-slide-up">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8 text-center">Register for a Workshop</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="workshop" className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Workshop *
                </label>
                <select
                  id="workshop"
                  name="workshop"
                  required
                  value={formData.workshop}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                >
                  <option value="">Choose a workshop...</option>
                  {workshops.map((workshop) => (
                    <option key={workshop} value={workshop}>
                      {workshop}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-indigo-900 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gold hover:text-indigo-900 hover:transform hover:scale-105 shadow-lg"
                >
                  Register Now
                </button>
              </div>
            </form>

            <div className="mt-8 p-6 bg-indigo-50 rounded-lg">
              <h3 className="font-semibold text-indigo-900 mb-2">What to Expect:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Confirmation email within 24 hours</li>
                <li>• Workshop materials sent 2 days before</li>
                <li>• Certificate of completion</li>
                <li>• Access to exclusive community</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;