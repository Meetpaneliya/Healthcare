import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface Drip {
  name: string;
  description: string;
  timeline: string;
  benefits: string[];
}

export const DripDetails = () => {
  const navigate = useNavigate();
  const { segment } = useParams();

  const drips: Record<string, Drip[]> = {
    beauty: [
      {
        name: 'Glutathione Drip',
        description: 'Detoxifies and brightens skin for a radiant complexion.',
        timeline: '2-3 weeks for noticeable results',
        benefits: ['Skin brightening', 'Detoxification', 'Anti-aging effects', 'Improved skin texture']
      },
      {
        name: 'Vitamin C Drip',
        description: 'Enhances collagen synthesis and provides antioxidant protection.',
        timeline: '3-4 weeks for optimal results',
        benefits: ['Collagen boost', 'Antioxidant protection', 'Improved skin tone', 'Enhanced healing']
      },
      {
        name: 'Collagen Drip',
        description: 'Supports skin elasticity and reduces fine lines.',
        timeline: '4-6 sessions for best results',
        benefits: ['Increased elasticity', 'Reduced fine lines', 'Improved skin firmness', 'Enhanced hydration']
      },
      {
        name: 'Biotin Drip',
        description: 'Strengthens hair and nails while improving skin health.',
        timeline: 'Gradual improvement over multiple sessions',
        benefits: ['Stronger hair', 'Healthier nails', 'Improved skin health', 'Enhanced metabolism']
      },
      {
        name: 'Hyaluronic Acid Drip',
        description: 'Provides deep hydration for plump, youthful skin.',
        timeline: '3-4 sessions for optimal results',
        benefits: ['Deep hydration', 'Plumper skin', 'Reduced fine lines', 'Enhanced skin barrier']
      }
    ],
    performance: [
      {
        name: 'B-Complex Drip',
        description: 'Essential vitamins for energy metabolism and performance.',
        timeline: 'Immediate energy boost',
        benefits: ['Enhanced energy', 'Improved metabolism', 'Better focus', 'Reduced fatigue']
      },
      {
        name: 'Magnesium Drip',
        description: 'Supports muscle function and recovery after exercise.',
        timeline: '2-3 sessions for optimal results',
        benefits: ['Muscle recovery', 'Reduced cramping', 'Better sleep', 'Improved energy']
      },
      {
        name: 'Amino Acid Drip',
        description: 'Crucial building blocks for muscle repair and growth.',
        timeline: 'Varies by training regimen',
        benefits: ['Muscle repair', 'Enhanced recovery', 'Improved strength', 'Better endurance']
      },
      {
        name: 'Electrolyte Drip',
        description: 'Replenishes essential minerals lost during intense exercise.',
        timeline: 'Immediate effect post-workout',
        benefits: ['Rapid rehydration', 'Electrolyte balance', 'Improved performance', 'Better recovery']
      },
      {
        name: 'Coenzyme Q10 Drip',
        description: 'Boosts cellular energy production for enhanced performance.',
        timeline: '4-5 sessions for optimal results',
        benefits: ['Increased energy', 'Better endurance', 'Improved recovery', 'Enhanced performance']
      }
    ],
    weight: [
      {
        name: 'L-Carnitine Drip',
        description: 'Enhances fat metabolism and supports weight loss.',
        timeline: 'Visible changes in few sessions',
        benefits: ['Enhanced fat burning', 'Increased energy', 'Improved metabolism', 'Better endurance']
      },
      {
        name: 'Vitamin B12 Drip',
        description: 'Boosts metabolism and energy levels.',
        timeline: '3-4 sessions for optimal results',
        benefits: ['Metabolic boost', 'Increased energy', 'Improved focus', 'Better appetite control']
      },
      {
        name: 'Metabolic Boost Drip',
        description: 'Comprehensive formula to stimulate metabolism.',
        timeline: '4-5 sessions for best results',
        benefits: ['Enhanced metabolism', 'Fat burning', 'Increased energy', 'Improved vitality']
      },
      {
        name: 'Green Tea Extract Drip',
        description: 'Natural compounds that support fat burning.',
        timeline: 'Gradual improvement over time',
        benefits: ['Fat oxidation', 'Antioxidant effects', 'Enhanced energy', 'Improved metabolism']
      },
      {
        name: 'Fat-Burning Complex Drip',
        description: 'Combined nutrients for optimal fat oxidation.',
        timeline: '5-6 sessions for optimal results',
        benefits: ['Accelerated fat loss', 'Improved metabolism', 'Better energy', 'Enhanced stamina']
      }
    ]
  };

  const currentDrips = drips[segment as keyof typeof drips] || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">
          {segment?.charAt(0).toUpperCase()}{segment?.slice(1)} IV Drips
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {currentDrips.map((drip, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 cursor-pointer"
              onClick={() => navigate('/lab-selection')}
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">
                {drip.name}
              </h2>
              <p className="text-gray-300 mb-4">
                {drip.description}
              </p>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Benefits:</h3>
                <ul className="list-disc list-inside text-gray-300">
                  {drip.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Timeline:</span> {drip.timeline}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/lab-selection')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-colors"
          >
            Find a Lab Near You
          </button>
        </div>
      </div>
    </div>
  );
};