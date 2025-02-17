import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Dumbbell, Scale } from 'lucide-react';

export const Segments = () => {
  const navigate = useNavigate();

  const segments = [
    {
      id: 'beauty',
      title: 'Beauty Drips',
      description: 'Enhance your natural glow, rejuvenate skin, and support hair & nail health.',
      icon: Sparkles,
    },
    {
      id: 'performance',
      title: 'Performance Enhancement',
      description: 'Boost energy, recovery, and overall athletic performance with nutrient-rich drips.',
      icon: Dumbbell,
    },
    {
      id: 'weight',
      title: 'Weight Management',
      description: 'Support metabolism, regulate appetite, and promote effective weight loss.',
      icon: Scale,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">
          Choose Your Path
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {segments.map((segment) => (
            <div
              key={segment.id}
              onClick={() => navigate(`/drip-details/${segment.id}`)}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <segment.icon className="h-12 w-12 mb-4 text-blue-400" />
              <h2 className="text-2xl font-semibold mb-4 text-white">
                {segment.title}
              </h2>
              <p className="text-gray-300">
                {segment.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};