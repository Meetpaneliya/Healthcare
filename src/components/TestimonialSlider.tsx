import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    role: "Business Executive",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    content: "VitaLuxe's IV therapy has significantly improved my energy levels and work performance. The convenience of home service is unmatched!",
    rating: 5,
    location: "Mumbai"
  },
  {
    name: "Priya Sharma",
    role: "Fitness Trainer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    content: "As a fitness professional, I recommend VitaLuxe to all my clients. The performance enhancement drips have shown remarkable results.",
    rating: 5,
    location: "Delhi"
  },
  {
    name: "Amit Patel",
    role: "Professional Athlete",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    content: "The sports recovery drips have significantly improved my performance and recovery time. Highly recommended!",
    rating: 5,
    location: "Bangalore"
  },
  {
    name: "Meera Reddy",
    role: "Model",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    content: "The beauty drips have given my skin an amazing glow. My followers have noticed the difference!",
    rating: 5,
    location: "Chennai"
  },
  {
    name: "Suresh Verma",
    role: "Corporate Professional",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    content: "VitaLuxe's wellness drips have helped me maintain peak performance during demanding work schedules.",
    rating: 5,
    location: "Hyderabad"
  },
  {
    name: "Anjali Singh",
    role: "Wellness Coach",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
    content: "The transformation in my clients' energy levels after using VitaLuxe's services has been incredible.",
    rating: 5,
    location: "Pune"
  },
  {
    name: "Vikram Malhotra",
    role: "Marathon Runner",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=400&fit=crop",
    content: "VitaLuxe's performance drips are now an essential part of my training regime. Amazing results!",
    rating: 5,
    location: "Kolkata"
  },
  {
    name: "Neha Gupta",
    role: "Beauty Influencer",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
    content: "My go-to solution for maintaining that camera-ready glow. The beauty drips work wonders!",
    rating: 5,
    location: "Jaipur"
  },
  {
    name: "Rahul Mehta",
    role: "Yoga Instructor",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
    content: "The holistic approach to wellness through IV therapy aligns perfectly with my yoga practice.",
    rating: 5,
    location: "Ahmedabad"
  },
  {
    name: "Pooja Shah",
    role: "Healthcare Professional",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
    content: "As a healthcare professional, I'm impressed by VitaLuxe's commitment to safety and quality.",
    rating: 5,
    location: "Surat"
  }
];

export const TestimonialSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, EffectCoverflow]}
      spaceBetween={30}
      slidesPerView={1}
      effect="coverflow"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      className="testimonial-slider py-12"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-glass dark:shadow-glass-dark h-full transform hover:scale-105 transition-all duration-300"
          >
            <Quote className="w-10 h-10 text-primary/20 dark:text-primary-dark/20 mb-4" />
            
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-primary dark:border-primary-dark"
              />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                <p className="text-sm text-primary dark:text-primary-dark">{testimonial.role}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.location}</p>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
              "{testimonial.content}"
            </p>
            
            <div className="flex items-center">
              <div className="flex mr-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Verified Customer
              </span>
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};