import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock, CheckCircle, AlertTriangle, Timer, Droplets, Shield } from 'lucide-react';

interface Drip {
  id: string;
  name: string;
  description: string;
  timeline: string;
  benefits: string[];
  price: number;
  duration: string;
  precautions: string[];
  rating: number;
  reviews: number;
}

export const DripDetails = () => {
  const navigate = useNavigate();
  const { segment } = useParams();

  const drips: Record<string, Drip[]> = {
    beauty: [
      {
        id: 'glutathione',
        name: 'Glutathione Drip',
        description: 'Detoxifies and brightens skin for a radiant complexion.',
        timeline: '2-3 weeks',
        benefits: [
          'Skin brightening',
          'Detoxification',
          'Anti-aging effects',
          'Improved skin texture',
          'Reduced pigmentation'
        ],
        price: 4999,
        duration: '45-60 minutes',
        precautions: [
          'Avoid if pregnant or nursing',
          'Inform about any allergies',
          'Stay hydrated before treatment'
        ],
        rating: 4.8,
        reviews: 1250
      },
      {
        id: 'vitamin-c',
        name: 'Vitamin C Drip',
        description: 'Enhances collagen synthesis for firmer, younger-looking skin.',
        timeline: '3-4 weeks',
        benefits: [
          'Increased collagen production',
          'Brighter complexion',
          'Reduced fine lines',
          'Antioxidant protection',
          'Enhanced skin repair'
        ],
        price: 4499,
        duration: '45 minutes',
        precautions: [
          'Not recommended for kidney issues',
          'Avoid high doses of oral vitamin C',
          'Monitor iron levels'
        ],
        rating: 4.7,
        reviews: 980
      },
      {
        id: 'collagen',
        name: 'Collagen Drip',
        description: 'Supports skin elasticity and reduces signs of aging.',
        timeline: '4-6 sessions',
        benefits: [
          'Improved skin elasticity',
          'Reduced wrinkles',
          'Better skin hydration',
          'Enhanced wound healing',
          'Stronger connective tissue'
        ],
        price: 5999,
        duration: '60 minutes',
        precautions: [
          'Consult if autoimmune condition',
          'Avoid before sun exposure',
          'Not for collagen allergies'
        ],
        rating: 4.9,
        reviews: 850
      },
      {
        id: 'biotin',
        name: 'Biotin Drip',
        description: 'Strengthens hair and nails while improving skin health.',
        timeline: 'Gradual improvement',
        benefits: [
          'Stronger hair growth',
          'Healthier nails',
          'Improved skin texture',
          'Enhanced keratin production',
          'Better nutrient absorption'
        ],
        price: 4299,
        duration: '40 minutes',
        precautions: [
          'May affect certain lab tests',
          'Discuss current supplements',
          'Monitor for allergies'
        ],
        rating: 4.6,
        reviews: 720
      },
      {
        id: 'hyaluronic',
        name: 'Hyaluronic Acid Drip',
        description: 'Deep hydration for youthful, plump skin.',
        timeline: '3-4 sessions',
        benefits: [
          'Intense hydration',
          'Reduced fine lines',
          'Plumper skin',
          'Improved skin barrier',
          'Enhanced moisture retention'
        ],
        price: 5499,
        duration: '50 minutes',
        precautions: [
          'Avoid if prone to edema',
          'Monitor fluid intake',
          'Discuss current skincare'
        ],
        rating: 4.8,
        reviews: 890
      }
    ],
    performance: [
      {
        id: 'b-complex',
        name: 'B-Complex Drip',
        description: 'Boosts energy metabolism and mental clarity.',
        timeline: 'Immediate energy boost',
        benefits: [
          'Enhanced energy levels',
          'Improved metabolism',
          'Better cognitive function',
          'Reduced fatigue',
          'Mood enhancement'
        ],
        price: 3999,
        duration: '30 minutes',
        precautions: [
          'Monitor B12 levels',
          'Discuss medications',
          'Avoid on empty stomach'
        ],
        rating: 4.7,
        reviews: 1100
      },
      {
        id: 'magnesium',
        name: 'Magnesium Drip',
        description: 'Aids muscle function and recovery.',
        timeline: '2-3 sessions',
        benefits: [
          'Reduced muscle cramps',
          'Better recovery',
          'Improved sleep',
          'Enhanced energy',
          'Stress reduction'
        ],
        price: 4299,
        duration: '45 minutes',
        precautions: [
          'Monitor blood pressure',
          'Check kidney function',
          'Discuss medications'
        ],
        rating: 4.8,
        reviews: 950
      },
      {
        id: 'amino-acid',
        name: 'Amino Acid Drip',
        description: 'Supports muscle repair and growth.',
        timeline: 'Varies by regimen',
        benefits: [
          'Enhanced muscle recovery',
          'Improved strength',
          'Better endurance',
          'Reduced soreness',
          'Faster healing'
        ],
        price: 5299,
        duration: '60 minutes',
        precautions: [
          'Monitor protein intake',
          'Discuss exercise routine',
          'Check liver function'
        ],
        rating: 4.9,
        reviews: 780
      },
      {
        id: 'electrolyte',
        name: 'Electrolyte Drip',
        description: 'Replenishes salts and fluids for optimal hydration.',
        timeline: 'Immediate effect',
        benefits: [
          'Rapid hydration',
          'Electrolyte balance',
          'Enhanced performance',
          'Reduced fatigue',
          'Better recovery'
        ],
        price: 3799,
        duration: '30 minutes',
        precautions: [
          'Monitor heart conditions',
          'Check sodium levels',
          'Discuss fluid intake'
        ],
        rating: 4.6,
        reviews: 850
      },
      {
        id: 'coq10',
        name: 'Coenzyme Q10 Drip',
        description: 'Boosts cellular energy and stamina.',
        timeline: '4-5 sessions',
        benefits: [
          'Increased energy',
          'Better heart health',
          'Enhanced stamina',
          'Antioxidant protection',
          'Improved recovery'
        ],
        price: 5999,
        duration: '45 minutes',
        precautions: [
          'Check blood pressure',
          'Discuss medications',
          'Monitor heart rate'
        ],
        rating: 4.8,
        reviews: 670
      }
    ],
    weight: [
      {
        id: 'l-carnitine',
        name: 'L-Carnitine Drip',
        description: 'Enhances fat metabolism and energy production.',
        timeline: 'Visible changes in few sessions',
        benefits: [
          'Enhanced fat burning',
          'Increased energy',
          'Better metabolism',
          'Improved endurance',
          'Muscle preservation'
        ],
        price: 4799,
        duration: '45 minutes',
        precautions: [
          'Monitor thyroid function',
          'Discuss medications',
          'Check liver health'
        ],
        rating: 4.7,
        reviews: 890
      },
      {
        id: 'vitamin-b12',
        name: 'Vitamin B12 Drip',
        description: 'Supports metabolic rate and energy levels.',
        timeline: '3-4 sessions',
        benefits: [
          'Boosted metabolism',
          'Increased energy',
          'Better appetite control',
          'Improved mood',
          'Enhanced focus'
        ],
        price: 3999,
        duration: '30 minutes',
        precautions: [
          'Check B12 levels',
          'Monitor blood pressure',
          'Discuss supplements'
        ],
        rating: 4.8,
        reviews: 920
      },
      {
        id: 'metabolic-boost',
        name: 'Metabolic Boost Drip',
        description: 'Stimulates metabolism for effective weight management.',
        timeline: '4-5 sessions',
        benefits: [
          'Enhanced metabolism',
          'Better fat burning',
          'Increased energy',
          'Improved digestion',
          'Appetite regulation'
        ],
        price: 5299,
        duration: '50 minutes',
        precautions: [
          'Monitor heart rate',
          'Check thyroid function',
          'Discuss diet plan'
        ],
        rating: 4.6,
        reviews: 780
      },
      {
        id: 'green-tea',
        name: 'Green Tea Extract Drip',
        description: 'Promotes fat burning and antioxidant protection.',
        timeline: 'Gradual improvement',
        benefits: [
          'Enhanced fat oxidation',
          'Antioxidant boost',
          'Better metabolism',
          'Improved energy',
          'Detoxification'
        ],
        price: 4299,
        duration: '40 minutes',
        precautions: [
          'Monitor caffeine sensitivity',
          'Check liver function',
          'Discuss medications'
        ],
        rating: 4.7,
        reviews: 650
      },
      {
        id: 'fat-burning',
        name: 'Fat-Burning Complex Drip',
        description: 'Supports efficient fat oxidation and weight management.',
        timeline: '5-6 sessions',
        benefits: [
          'Accelerated fat burning',
          'Enhanced metabolism',
          'Better energy levels',
          'Improved stamina',
          'Appetite control'
        ],
        price: 5999,
        duration: '60 minutes',
        precautions: [
          'Monitor heart health',
          'Check liver function',
          'Discuss exercise routine'
        ],
        rating: 4.9,
        reviews: 840
      }
    ]
  };

  const currentDrips = drips[segment as keyof typeof drips] || [];

  const handleDripSelection = (drip: Drip) => {
    // Store selected drip details in session storage
    sessionStorage.setItem('selectedDrip', JSON.stringify(drip));
    navigate('/lab-selection');
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-foreground dark:text-foreground-dark"
        >
          {segment?.charAt(0).toUpperCase()}{segment?.slice(1)} IV Drips
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {currentDrips.map((drip, index) => (
            <motion.div
              key={drip.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card group cursor-pointer overflow-hidden"
              onClick={() => handleDripSelection(drip)}
            >
              <div className="absolute top-0 right-0 bg-primary/10 dark:bg-primary-dark/10 px-4 py-2 rounded-bl-lg">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-foreground/80 dark:text-foreground-dark/80">
                    {drip.rating} ({drip.reviews})
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <Droplets className="h-12 w-12 text-primary dark:text-primary-dark mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h2 className="text-2xl font-semibold text-foreground dark:text-foreground-dark">
                  {drip.name}
                </h2>
                <p className="text-foreground/60 dark:text-foreground-dark/60 mt-2">
                  {drip.description}
                </p>
              </div>

              <div className="space-y-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary dark:text-primary-dark mb-2 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Benefits
                  </h3>
                  <ul className="grid grid-cols-1 gap-2">
                    {drip.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-foreground/80 dark:text-foreground-dark/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary dark:bg-primary-dark mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-warning dark:text-warning-dark mb-2 flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Precautions
                  </h3>
                  <ul className="grid grid-cols-1 gap-2">
                    {drip.precautions.map((precaution, idx) => (
                      <li key={idx} className="flex items-center text-foreground/80 dark:text-foreground-dark/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-warning dark:bg-warning-dark mr-2" />
                        {precaution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-foreground/60 dark:text-foreground-dark/60 mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {drip.duration}
                </div>
                <div className="flex items-center">
                  <Timer className="h-4 w-4 mr-1" />
                  {drip.timeline}
                </div>
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border dark:border-border-dark">
                <div className="text-2xl font-bold text-foreground dark:text-foreground-dark">
                  ₹{drip.price.toLocaleString()}
                </div>
                <button className="btn">
                  Select & Continue
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {currentDrips.length === 0 && (
          <div className="text-center text-foreground/80 dark:text-foreground-dark/80">
            No drips found for this category.
          </div>
        )}

        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/segments')}
            className="btn bg-surface hover:bg-surface-hover text-foreground dark:text-foreground-dark"
          >
            Back to Categories
          </button>
        </div>
      </div>
    </div>
  );
};