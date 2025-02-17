import React from 'react';
import { motion } from 'framer-motion';
import { Star, Phone, Mail, Calendar, Award, BookOpen, Stethoscope, MapPin } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

interface Doctor {
  name: string;
  specialization: string;
  experience: string;
  image: string;
  rating: number;
  qualifications: string;
  availability: string;
  achievements: string[];
  location: string;
}

const doctors: Doctor[] = [
  {
    name: "Dr. Rajesh Kumar",
    specialization: "IV Therapy Specialist",
    experience: "15+ years",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop",
    rating: 4.9,
    qualifications: "MBBS, MD (Internal Medicine)",
    availability: "Mon-Sat: 9AM-5PM",
    achievements: [
      "Published in International Medical Journal",
      "Best Doctor Award 2023",
      "1000+ Successful Treatments"
    ],
    location: "Delhi NCR"
  },
  {
    name: "Dr. Priya Sharma",
    specialization: "Wellness Expert",
    experience: "12+ years",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    rating: 4.8,
    qualifications: "MBBS, MD (Alternative Medicine)",
    availability: "Mon-Fri: 10AM-6PM",
    achievements: [
      "Wellness Innovation Award",
      "Featured in Medical Times",
      "Pioneer in IV Therapy"
    ],
    location: "Mumbai"
  },
  {
    name: "Dr. Amit Patel",
    specialization: "Nutritionist",
    experience: "10+ years",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
    rating: 4.7,
    qualifications: "MBBS, PhD (Nutrition)",
    availability: "Tue-Sun: 9AM-5PM",
    achievements: [
      "Research Excellence Award",
      "Nutrition Expert of the Year",
      "500+ Happy Clients"
    ],
    location: "Bangalore"
  },
  {
    name: "Dr. Meera Reddy",
    specialization: "Aesthetic Medicine",
    experience: "14+ years",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
    rating: 4.9,
    qualifications: "MBBS, MD (Dermatology)",
    availability: "Mon-Sat: 10AM-6PM",
    achievements: [
      "Beauty & Wellness Award",
      "Celebrity Choice Doctor",
      "Advanced Training from USA"
    ],
    location: "Chennai"
  }
];

export const DoctorsGrid = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectCards]}
      effect="cards"
      grabCursor={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="max-w-md mx-auto h-[600px]"
    >
      {doctors.map((doctor, index) => (
        <SwiperSlide key={index}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="card h-full"
          >
            <div className="relative mb-6">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium">{doctor.rating}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground dark:text-foreground-dark">
                  {doctor.name}
                </h3>
                <p className="text-primary dark:text-primary-dark font-medium">
                  {doctor.specialization}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-foreground/80 dark:text-foreground-dark/80">
                  <Stethoscope className="w-4 h-4 mr-2 text-primary dark:text-primary-dark" />
                  <span>{doctor.qualifications}</span>
                </div>
                <div className="flex items-center text-foreground/80 dark:text-foreground-dark/80">
                  <BookOpen className="w-4 h-4 mr-2 text-primary dark:text-primary-dark" />
                  <span>{doctor.experience} experience</span>
                </div>
                <div className="flex items-center text-foreground/80 dark:text-foreground-dark/80">
                  <Calendar className="w-4 h-4 mr-2 text-primary dark:text-primary-dark" />
                  <span>{doctor.availability}</span>
                </div>
                <div className="flex items-center text-foreground/80 dark:text-foreground-dark/80">
                  <MapPin className="w-4 h-4 mr-2 text-primary dark:text-primary-dark" />
                  <span>{doctor.location}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-foreground dark:text-foreground-dark flex items-center">
                  <Award className="w-4 h-4 mr-2 text-primary dark:text-primary-dark" />
                  Achievements
                </h4>
                <ul className="space-y-1">
                  {doctor.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-sm text-foreground/80 dark:text-foreground-dark/80 flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary dark:bg-primary-dark mr-2" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border dark:border-border-dark">
              <button className="btn w-full">
                Book Consultation
              </button>
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};