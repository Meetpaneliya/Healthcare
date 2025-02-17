import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';

export const Appointment = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/confirmation');
  };

  return (
    <div className="page-transition min-h-screen bg-background dark:bg-background-dark py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-foreground dark:text-foreground-dark">
            Schedule Your Appointment
          </h1>

          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-4">
                  Select Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary dark:text-primary-dark" />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="input pl-12"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-4">
                  Select Time
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary dark:text-primary-dark" />
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="input pl-12 appearance-none"
                    required
                  >
                    <option value="">Select a time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {parseInt(slot) > 12 
                          ? `${parseInt(slot) - 12}:00 PM`
                          : `${slot} AM`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <button type="submit" className="btn w-full">
                  Confirm & Proceed to Payment
                </button>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t border-border dark:border-border-dark">
              <h2 className="text-xl font-semibold text-foreground dark:text-foreground-dark mb-4">
                Appointment Details
              </h2>
              <div className="space-y-4 text-foreground/80 dark:text-foreground-dark/80">
                <p>
                  <span className="font-medium">Duration:</span> 45-60 minutes
                </p>
                <p>
                  <span className="font-medium">Location:</span> Home Visit
                </p>
                <p>
                  <span className="font-medium">Note:</span> Our medical professional will arrive at your specified location within the selected time slot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};