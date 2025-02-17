import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Calendar, MessageCircle } from 'lucide-react';

export const OrderConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="page-transition min-h-screen bg-background dark:bg-background-dark py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <CheckCircle className="h-20 w-20 text-success dark:text-success-dark mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-foreground dark:text-foreground-dark mb-4">
              Payment Successful!
            </h1>
            <p className="text-xl text-foreground/80 dark:text-foreground-dark/80">
              We will contact you soon to confirm your appointment.
            </p>
          </div>

          <div className="card">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground dark:text-foreground-dark mb-4">
                  Order Details
                </h2>
                <div className="space-y-3 text-foreground/80 dark:text-foreground-dark/80">
                  <p>
                    <span className="font-medium">IV Drip:</span> Glutathione Beauty Drip
                  </p>
                  <p>
                    <span className="font-medium">Lab:</span> Apollo Diagnostics
                  </p>
                  <p>
                    <span className="font-medium">Doctor:</span> Dr. A.K. Sharma
                  </p>
                  <p>
                    <span className="font-medium">Appointment:</span> [Date] at [Time]
                  </p>
                  <p>
                    <span className="font-medium">Location:</span> Your registered address
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-border dark:border-border-dark">
                <h2 className="text-xl font-semibold text-foreground dark:text-foreground-dark mb-4">
                  What's Next?
                </h2>
                <div className="space-y-3 text-foreground/80 dark:text-foreground-dark/80">
                  <p>1. You'll receive a confirmation SMS and email shortly.</p>
                  <p>2. Our medical professional will arrive at your location at the scheduled time.</p>
                  <p>3. The procedure will take approximately 45-60 minutes.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  onClick={() => navigate('/appointment')}
                  className="flex-1 bg-surface hover:bg-surface-hover text-foreground dark:text-foreground-dark font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Reschedule
                </button>
                <button
                  onClick={() => window.location.href = '#'}
                  className="btn flex-1 flex items-center justify-center"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};