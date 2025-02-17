import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';

export const Terms = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing and using VitaLuxe's services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.`
    },
    {
      title: "2. Service Description",
      content: `VitaLuxe provides IV therapy and related medical services. All services are provided by licensed medical professionals in accordance with applicable laws and regulations.`
    },
    {
      title: "3. Medical Disclaimer",
      content: `Our services are not intended to replace regular medical care. Always consult with your healthcare provider about any medical conditions or concerns.`
    },
    {
      title: "4. Appointment and Cancellation",
      content: `Appointments must be cancelled at least 24 hours in advance to avoid cancellation fees. Late arrivals may result in shortened service time.`
    },
    {
      title: "5. Payment Terms",
      content: `Payment is required at the time of service. We accept major credit cards and digital payment methods. Prices are subject to change without notice.`
    },
    {
      title: "6. Refund Policy",
      content: `Refunds are evaluated on a case-by-case basis. No refunds will be issued for completed services unless required by law.`
    },
    {
      title: "7. Privacy and Confidentiality",
      content: `We maintain strict patient confidentiality in accordance with HIPAA guidelines and applicable privacy laws.`
    },
    {
      title: "8. Limitation of Liability",
      content: `VitaLuxe's liability is limited to the amount paid for services. We are not liable for indirect, consequential, or incidental damages.`
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
            Terms & Conditions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-foreground/80 dark:text-foreground-dark/80"
          >
            Please read these terms carefully before using our services.
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

        {/* Terms Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <h2 className="text-xl font-bold mb-4 text-foreground dark:text-foreground-dark">
                {section.title}
              </h2>
              <p className="text-foreground/80 dark:text-foreground-dark/80">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="card text-center"
          >
            <CheckCircle className="h-10 w-10 mx-auto mb-4 text-success dark:text-success-dark" />
            <h3 className="text-lg font-semibold mb-2 text-foreground dark:text-foreground-dark">
              Compliance
            </h3>
            <p className="text-sm text-foreground/80 dark:text-foreground-dark/80">
              We comply with all applicable healthcare regulations and standards.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card text-center"
          >
            <AlertCircle className="h-10 w-10 mx-auto mb-4 text-warning dark:text-warning-dark" />
            <h3 className="text-lg font-semibold mb-2 text-foreground dark:text-foreground-dark">
              Safety First
            </h3>
            <p className="text-sm text-foreground/80 dark:text-foreground-dark/80">
              Your safety and well-being are our top priorities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card text-center"
          >
            <HelpCircle className="h-10 w-10 mx-auto mb-4 text-primary dark:text-primary-dark" />
            <h3 className="text-lg font-semibold mb-2 text-foreground dark:text-foreground-dark">
              Support
            </h3>
            <p className="text-sm text-foreground/80 dark:text-foreground-dark/80">
              Our team is here to help with any questions about these terms.
            </p>
          </motion.div>
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="card max-w-2xl mx-auto mt-12 text-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-foreground dark:text-foreground-dark">
            Questions About Our Terms?
          </h2>
          <p className="text-foreground/80 dark:text-foreground-dark/80 mb-6">
            If you have any questions about our Terms & Conditions, please contact our legal team:
          </p>
          <div className="space-y-2 text-foreground/80 dark:text-foreground-dark/80">
            <p>Email: legal@vitaluxe.in</p>
            <p>Phone: +91 98765 43210</p>
            <p>Address: IIT Delhi, Hauz Khas, New Delhi - 110016</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};