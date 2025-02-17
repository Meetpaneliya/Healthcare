import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Users, Home as HomeIcon, Wallet, Calendar } from 'lucide-react';

export const Home = () => {
  const navigate = useNavigate();

  const usps = [
    { icon: Star, text: 'Highest Grade Products' },
    { icon: Users, text: 'Best Doctors' },
    { icon: HomeIcon, text: 'Expert Administration at Home' },
    { icon: Wallet, text: 'Best Prices & Offers' },
    { icon: Calendar, text: 'Personalized Scheduling' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Welcome to VitaLuxe
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Your gateway to premium beauty and health IV drips at your home.
          </p>

          {/* USP Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {usps.map((usp, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition-colors"
              >
                <usp.icon className="h-8 w-8 mx-auto mb-2 text-blue-400" />
                <p className="text-sm font-medium">{usp.text}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate('/segments')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-colors"
          >
            Leap Ahead to the Best Version of Yourself
          </button>
        </div>
      </div>
    </div>
  );
};