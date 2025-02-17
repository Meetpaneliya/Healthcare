import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Dumbbell, Scale, ArrowRight, Star, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export const Segments = () => {
  const navigate = useNavigate();

  const segments = [
    {
      id: 'beauty',
      title: 'Beauty Drips',
      description: 'Enhance your natural glow, rejuvenate skin, and support hair & nail health.',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=600&fit=crop',
      stats: [
        { icon: Star, value: '4.9', label: 'Rating' },
        { icon: Users, value: '5000+', label: 'Clients' },
        { icon: Clock, value: '45-60', label: 'Minutes' },
      ],
      benefits: [
        'Brighter, glowing skin',
        'Reduced signs of aging',
        'Enhanced collagen production',
        'Improved hair & nail health'
      ],
      price: 'From ₹4,999'
    },
    {
      id: 'performance',
      title: 'Performance Enhancement',
      description: 'Boost energy, recovery, and overall athletic performance with nutrient-rich drips.',
      icon: Dumbbell,
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
      stats: [
        { icon: Star, value: '4.8', label: 'Rating' },
        { icon: Users, value: '3000+', label: 'Athletes' },
        { icon: Clock, value: '30-45', label: 'Minutes' },
      ],
      benefits: [
        'Enhanced athletic performance',
        'Faster recovery time',
        'Increased energy levels',
        'Improved endurance'
      ],
      price: 'From ₹5,499'
    },
    {
      id: 'weight',
      title: 'Weight Management',
      description: 'Support metabolism, regulate appetite, and promote effective weight loss.',
      icon: Scale,
      image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=800&h=600&fit=crop',
      stats: [
        { icon: Star, value: '4.7', label: 'Rating' },
        { icon: Users, value: '2000+', label: 'Success Stories' },
        { icon: Clock, value: '40-50', label: 'Minutes' },
      ],
      benefits: [
        'Boosted metabolism',
        'Appetite control',
        'Fat burning support',
        'Increased energy'
      ],
      price: 'From ₹4,799'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Choose Your Wellness Path
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore our specialized IV therapy treatments designed to enhance your wellbeing
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {segments.map((segment) => (
            <motion.div
              key={segment.id}
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />
                <img
                  src={segment.image}
                  alt={segment.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <segment.icon className="h-10 w-10 text-white mb-3" />
                  <h2 className="text-3xl font-bold text-white mb-2">{segment.title}</h2>
                  <p className="text-white/90">{segment.description}</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-6">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {segment.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <stat.icon className="h-6 w-6 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                      <div className="font-bold text-gray-900 dark:text-white">{stat.value}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Benefits</h3>
                  <ul className="space-y-2">
                    {segment.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                        <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and CTA */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">{segment.price}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Per session</span>
                  </div>
                  <button
                    onClick={() => navigate(`/drip-details/${segment.id}`)}
                    className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center group"
                  >
                    <span>View Treatments</span>
                    <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};