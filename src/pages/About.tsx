import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Users, Microscope, GraduationCap } from 'lucide-react';

export const About = () => {
  const doctors = [
    {
      name: "Dr. Rajesh Kumar",
      specialization: "IV Therapy Specialist",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop",
      qualifications: "MBBS, MD (Internal Medicine)"
    },
    {
      name: "Dr. Priya Sharma",
      specialization: "Wellness Expert",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
      qualifications: "MBBS, MD (Alternative Medicine)"
    },
    {
      name: "Dr. Amit Patel",
      specialization: "Nutritionist",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
      qualifications: "MBBS, PhD (Nutrition)"
    },
    {
      name: "Dr. Meera Reddy",
      specialization: "Aesthetic Medicine",
      experience: "14+ years",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
      qualifications: "MBBS, MD (Dermatology)"
    },
    {
      name: "Dr. Suresh Verma",
      specialization: "Sports Medicine",
      experience: "13+ years",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
      qualifications: "MBBS, MS (Ortho)"
    },
    {
      name: "Dr. Anjali Singh",
      specialization: "Regenerative Medicine",
      experience: "11+ years",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
      qualifications: "MBBS, MD (Internal Medicine)"
    },
    {
      name: "Dr. Vikram Malhotra",
      specialization: "Anti-Aging Specialist",
      experience: "16+ years",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop",
      qualifications: "MBBS, MD (Dermatology)"
    },
    {
      name: "Dr. Neha Gupta",
      specialization: "Wellness Coach",
      experience: "9+ years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
      qualifications: "MBBS, MD (Alternative Medicine)"
    },
    {
      name: "Dr. Rahul Mehta",
      specialization: "Performance Enhancement",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
      qualifications: "MBBS, MS (Sports Medicine)"
    },
    {
      name: "Dr. Pooja Shah",
      specialization: "Nutritional Medicine",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
      qualifications: "MBBS, PhD (Clinical Nutrition)"
    }
  ];

  const stats = [
    { icon: Users, value: "50,000+", label: "Satisfied Patients" },
    { icon: Shield, value: "10+", label: "Years of Excellence" },
    { icon: Award, value: "25+", label: "Awards & Recognition" },
    { icon: GraduationCap, value: "100+", label: "Research Papers" }
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground dark:text-foreground-dark"
          >
            Pioneering IV Therapy in India
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-foreground/80 dark:text-foreground-dark/80"
          >
            In collaboration with IIT Delhi, we're revolutionizing wellness through advanced IV therapy solutions.
          </motion.p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card text-center"
            >
              <stat.icon className="h-10 w-10 mx-auto mb-4 text-primary dark:text-primary-dark" />
              <h3 className="text-3xl font-bold text-foreground dark:text-foreground-dark mb-2">{stat.value}</h3>
              <p className="text-foreground/80 dark:text-foreground-dark/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Our Story Section */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-12 text-foreground dark:text-foreground-dark"
          >
            Our Story
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6 text-foreground/80 dark:text-foreground-dark/80"
            >
              <p>
                Founded in 2015, VitaLuxe emerged from a vision to revolutionize wellness through advanced IV therapy. Our collaboration with IIT Delhi has enabled us to develop cutting-edge formulations that set new standards in the industry.
              </p>
              <p>
                We've grown from a single clinic to multiple locations across India, serving thousands of satisfied clients. Our commitment to excellence, research, and personalized care has made us the trusted name in IV therapy.
              </p>
              <p>
                Today, we continue to innovate and expand, bringing the benefits of IV therapy to more people while maintaining our high standards of safety and efficacy.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=800&fit=crop" 
                alt="Modern medical facility"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Our Doctors Section */}
        <div>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-12 text-foreground dark:text-foreground-dark"
          >
            Our Expert Doctors
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-center text-foreground dark:text-foreground-dark mb-2">
                  {doctor.name}
                </h3>
                <p className="text-primary dark:text-primary-dark text-center font-medium mb-2">
                  {doctor.specialization}
                </p>
                <p className="text-foreground/60 dark:text-foreground-dark/60 text-center text-sm">
                  {doctor.qualifications}
                </p>
                <p className="text-foreground/60 dark:text-foreground-dark/60 text-center text-sm">
                  Experience: {doctor.experience}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};