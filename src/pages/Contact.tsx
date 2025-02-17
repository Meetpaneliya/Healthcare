import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const locations = [
    {
      city: "Mumbai",
      address: "123, Seawood Complex, Navi Mumbai - 400706",
      phone: "+91 98765 43210"
    },
    {
      city: "Delhi",
      address: "456, Connaught Place, New Delhi - 110001",
      phone: "+91 98765 43211"
    },
    {
      city: "Bangalore",
      address: "789, Koramangala, Bangalore - 560034",
      phone: "+91 98765 43212"
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 98765 43210",
      subContent: "Mon-Sat 9am to 6pm"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@vitaluxe.in",
      subContent: "24/7 Online Support"
    },
    {
      icon: MapPin,
      title: "Head Office",
      content: "IIT Delhi, Hauz Khas",
      subContent: "New Delhi - 110016"
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Monday - Saturday",
      subContent: "9:00 AM - 6:00 PM"
    }
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
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-foreground/80 dark:text-foreground-dark/80"
          >
            Have questions? We're here to help and answer any question you might have.
          </motion.p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card text-center"
            >
              <info.icon className="h-10 w-10 mx-auto mb-4 text-primary dark:text-primary-dark" />
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark mb-2">
                {info.title}
              </h3>
              <p className="text-foreground/80 dark:text-foreground-dark/80 mb-1">
                {info.content}
              </p>
              <p className="text-sm text-foreground/60 dark:text-foreground-dark/60">
                {info.subContent}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form and Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="card"
          >
            <h2 className="text-2xl font-bold mb-6 text-foreground dark:text-foreground-dark">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="input"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="input"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input"
                  required
                />
              </div>
              <button type="submit" className="btn w-full">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Locations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-foreground dark:text-foreground-dark">
              Our Locations
            </h2>
            {locations.map((location, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold mb-4 text-foreground dark:text-foreground-dark">
                  {location.city}
                </h3>
                <div className="space-y-2 text-foreground/80 dark:text-foreground-dark/80">
                  <p className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary dark:text-primary-dark" />
                    {location.address}
                  </p>
                  <p className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-primary dark:text-primary-dark" />
                    {location.phone}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Live Chat CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="card text-center max-w-2xl mx-auto"
        >
          <MessageSquare className="h-12 w-12 mx-auto mb-4 text-primary dark:text-primary-dark" />
          <h2 className="text-2xl font-bold mb-4 text-foreground dark:text-foreground-dark">
            Need Immediate Assistance?
          </h2>
          <p className="text-foreground/80 dark:text-foreground-dark/80 mb-6">
            Our customer support team is available 24/7 to answer your questions.
          </p>
          <button className="btn">
            Start Live Chat
          </button>
        </motion.div>
      </div>
    </div>
  );
};