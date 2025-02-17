import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CustomerDetails {
  name: string;
  age: string;
  mobile: string;
}

export const Checkout = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState<CustomerDetails>({
    name: '',
    age: '',
    mobile: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/appointment');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-white">
            Complete Your Booking
          </h1>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={details.name}
                  onChange={(e) => setDetails({ ...details, name: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-300 mb-2">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  value={details.age}
                  onChange={(e) => setDetails({ ...details, age: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-300 mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  value={details.mobile}
                  onChange={(e) => setDetails({ ...details, mobile: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-lg transition-colors"
                >
                  Proceed to Appointment Booking
                </button>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <h2 className="text-xl font-semibold text-white mb-4">
                Lab & Doctor Information
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="font-medium">Lab:</span> Apollo Diagnostics - Known for state-of-the-art facilities and over 15 years of trusted service
                </p>
                <p>
                  <span className="font-medium">Doctor:</span> Dr. A.K. Sharma - 20+ years of experience in IV therapy, renowned for personalized care
                </p>
                <p>
                  <span className="font-medium">Customer Review:</span> "Excellent service and professional staff. Highly recommended!" - Priya M.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};