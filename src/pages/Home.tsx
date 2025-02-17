import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Star, 
  Users, 
  Home as HomeIcon, 
  Wallet, 
  Calendar,
  Shield,
  Award,
  Clock,
  CheckCircle,
  Sparkles,
  Dumbbell,
  Scale,
  Building2,
  GraduationCap,
  HeartPulse,
  Stethoscope
} from 'lucide-react';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { TestimonialSlider } from '../components/TestimonialSlider';
import { DoctorsGrid } from '../components/DoctorsGrid';

export const Home = () => {
  const navigate = useNavigate();

  const usps = [
    { 
      icon: Star, 
      text: 'Highest Grade Products',
      description: 'Premium quality IV solutions sourced from certified manufacturers'
    },
    { 
      icon: Users, 
      text: 'Best Doctors',
      description: 'Expert medical professionals with years of specialized experience'
    },
    { 
      icon: HomeIcon, 
      text: 'Expert Administration at Home',
      description: 'Professional IV therapy in the comfort of your home'
    },
    { 
      icon: Wallet, 
      text: 'Best Prices & Offers',
      description: 'Competitive pricing with regular discounts and package deals'
    },
    { 
      icon: Calendar, 
      text: 'Personalized Scheduling',
      description: 'Flexible appointment times that fit your schedule'
    },
  ];

  const stats = [
    { icon: Users, value: "10,000+", label: "Satisfied Clients" },
    { icon: CheckCircle, value: "50,000+", label: "Treatments Delivered" },
    { icon: Award, value: "100%", label: "Satisfaction Rate" },
    { icon: Shield, value: "100%", label: "Safety Record" }
  ];

  const drips = [
    {
      icon: Sparkles,
      category: "Beauty Drips",
      description: "Enhance your natural beauty from within",
      treatments: [
        "Glutathione Drip",
        "Vitamin C Drip",
        "Collagen Drip",
        "Beauty Boost Drip"
      ],
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=600&fit=crop",
      price: "From ₹4,999"
    },
    {
      icon: Dumbbell,
      category: "Performance Drips",
      description: "Maximize your athletic potential",
      treatments: [
        "Athletic Performance",
        "Recovery Boost",
        "Energy Enhancement",
        "Endurance Plus"
      ],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      price: "From ₹5,499"
    },
    {
      icon: Scale,
      category: "Weight Management",
      description: "Support your weight loss journey",
      treatments: [
        "Fat Burn Boost",
        "Metabolism Support",
        "Detox Cleanse",
        "Appetite Control"
      ],
      image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=800&h=600&fit=crop",
      price: "From ₹4,799"
    }
  ];

  const whoWeAre = [
    {
      icon: Building2,
      title: "State-of-the-Art Facilities",
      description: "Our labs are equipped with the latest medical technology"
    },
    {
      icon: GraduationCap,
      title: "Research Excellence",
      description: "Collaboration with IIT Delhi for cutting-edge IV therapy solutions"
    },
    {
      icon: HeartPulse,
      title: "Patient-Centric Care",
      description: "Personalized treatment plans tailored to your needs"
    },
    {
      icon: Stethoscope,
      title: "Medical Expertise",
      description: "Team of experienced healthcare professionals"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-radial from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-12">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to VitaLuxe
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12">
            Your gateway to premium beauty and health IV drips at your home.
            Experience the future of wellness with our innovative treatments.
          </p>

          {/* USP Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {usps.map((usp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 transform hover:scale-105 shadow-glass dark:shadow-glass-dark"
              >
                <usp.icon className="h-8 w-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">{usp.text}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{usp.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={() => navigate('/segments')}
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Wellness Journey
          </motion.button>
        </motion.div>
      </div>

      {/* Who We Are Section */}
      <div className="bg-white/90 dark:bg-black/50 backdrop-blur-md py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Who We Are</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              VitaLuxe is India's premier IV therapy provider, combining medical expertise with cutting-edge technology
              to deliver exceptional wellness solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whoWeAre.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
              >
                <item.icon className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Drips Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Premium IV Drips</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Discover our range of specialized IV treatments designed to enhance your wellbeing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {drips.map((drip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => navigate(`/drip-details/${drip.category.toLowerCase().split(' ')[0]}`)}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={drip.image}
                    alt={drip.category}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <drip.icon className="h-8 w-8 text-white mb-2" />
                    <h3 className="text-2xl font-bold text-white mb-2">{drip.category}</h3>
                    <p className="text-white/90">{drip.description}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {drip.treatments.map((treatment, i) => (
                      <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                        {treatment}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">{drip.price}</span>
                    <button className="btn">Book Now</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white/90 dark:bg-black/50 backdrop-blur-md py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center transform hover:scale-105 transition-all duration-300"
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Doctors Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Meet Our Expert Doctors
          </motion.h2>
          <DoctorsGrid />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white/90 dark:bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            What Our Clients Say
          </motion.h2>
          <TestimonialSlider />
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Ready to Transform Your Health?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Join thousands of satisfied clients who have experienced the VitaLuxe difference.
              Book your session now and start your journey to better health.
            </p>
            <motion.button
              onClick={() => navigate('/segments')}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Session Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};