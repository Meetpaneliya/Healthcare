import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export const Privacy = () => {
  const sections = [
    {
      icon: Shield,
      title: "Information We Collect",
      content: [
        "Personal identification information (Name, email address, phone number, etc.)",
        "Health and medical information",
        "Payment information",
        "Device and usage information"
      ]
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our Service",
        "To notify you about changes to our Service",
        "To provide customer support",
        "To gather analysis or valuable information to improve our Service",
        "To monitor the usage of our Service",
        "To detect, prevent and address technical issues"
      ]
    },
    {
      icon: Eye,
      title: "Information Sharing and Disclosure",
      content: [
        "We do not sell or rent your personal information",
        "Information shared with healthcare providers for treatment",
        "Compliance with laws and legal requirements",
        "Business transfers in case of merger, acquisition, or sale"
      ]
    },
    {
      icon: FileText,
      title: "Your Rights",
      content: [
        "Access to your personal information",
        "Correction of inaccurate data",
        "Deletion of your information",
        "Withdrawal of consent",
        "Data portability"
      ]
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
            Privacy Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-foreground/80 dark:text-foreground-dark/80"
          >
            Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
          </motion.p>
        </div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-12 text-foreground/60 dark:text-foreground-dark/60"
        >
          Last Updated: March 15, 2024
        </motion.div>

        {/* Privacy Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <div className="flex items-center mb-6">
                <section.icon className="h-8 w-8 text-primary dark:text-primary-dark mr-4" />
                <h2 className="text-2xl font-bold text-foreground dark:text-foreground-dark">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-4 text-foreground/80 dark:text-foreground-dark/80">
                {section.content.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-primary dark:bg-primary-dark mt-2 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="card max-w-2xl mx-auto mt-12 text-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-foreground dark:text-foreground-dark">
            Questions About Our Privacy Policy?
          </h2>
          <p className="text-foreground/80 dark:text-foreground-dark/80 mb-6">
            If you have any questions about our Privacy Policy, please contact our Data Protection Officer:
          </p>
          <div className="space-y-2 text-foreground/80 dark:text-foreground-dark/80">
            <p>Email: privacy@vitaluxe.in</p>
            <p>Phone: +91 98765 43210</p>
            <p>Address: IIT Delhi, Hauz Khas, New Delhi - 110016</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};