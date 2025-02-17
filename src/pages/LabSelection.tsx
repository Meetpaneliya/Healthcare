import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Star, Users, Clock, Percent } from 'lucide-react';

interface Lab {
  id: string;
  name: string;
  rating: number;
  distance: number;
  price: number;
  discount: number;
  customers: number;
  address: string;
}

export const LabSelection = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');

  const labs: Lab[] = [
    {
      id: '1',
      name: 'Apollo Diagnostics',
      rating: 4.5,
      distance: 2.0,
      price: 1500,
      discount: 10,
      customers: 1200,
      address: '123 Healthcare Avenue, Mumbai'
    },
    {
      id: '2',
      name: 'Dr. Lal PathLabs',
      rating: 4.3,
      distance: 3.0,
      price: 1400,
      discount: 15,
      customers: 1000,
      address: '456 Medical Street, Mumbai'
    },
    {
      id: '3',
      name: 'SRL Diagnostics',
      rating: 4.4,
      distance: 1.5,
      price: 1600,
      discount: 5,
      customers: 900,
      address: '789 Wellness Road, Mumbai'
    },
    {
      id: '4',
      name: 'Metropolis Healthcare',
      rating: 4.6,
      distance: 2.5,
      price: 1550,
      discount: 12,
      customers: 1100,
      address: '321 Health Lane, Mumbai'
    },
    {
      id: '5',
      name: 'Thyrocare',
      rating: 4.2,
      distance: 3.2,
      price: 1300,
      discount: 20,
      customers: 800,
      address: '654 Care Street, Mumbai'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">
          Select Your Lab
        </h1>

        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {labs.map((lab) => (
            <div
              key={lab.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">
                {lab.name}
              </h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  <span>{lab.rating}/5.0</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 text-blue-400 mr-2" />
                  <span>{lab.distance} km away</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Users className="h-5 w-5 text-green-400 mr-2" />
                  <span>{lab.customers}+ customers</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Percent className="h-5 w-5 text-purple-400 mr-2" />
                  <span>{lab.discount}% discount</span>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-400 text-sm">{lab.address}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-white">
                  <span className="text-gray-400">Price:</span>{' '}
                  <span className="font-semibold">₹{lab.price}</span>
                </div>
                <button
                  onClick={() => navigate('/checkout')}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  Select Lab
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};