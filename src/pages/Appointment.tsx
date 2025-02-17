import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';

// Declare Razorpay types
declare global {
  interface Window {
    Razorpay: any;
  }
}

export const Appointment = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  const initializeRazorpay = () => {
    if (!window.Razorpay) {
      alert("Razorpay SDK failed to load. Check your internet connection.");
      return;
    }

    const options = {
      key: "rzp_test_mpl4mEFOrxfsxU",
      amount: 150000, // Amount in paise (Rs. 1500)
      currency: "INR",
      name: "VitaLuxe IV Drips",
      description: "IV Drip Treatment Appointment",
      image: "YOUR_LOGO_URL",
      handler: function (response: any) {
        console.log("Payment ID: ", response.razorpay_payment_id);
        alert("Payment Successful!");
        navigate('/confirmation');
      },
      prefill: {
        name,
        email,
        contact
      },
      notes: {
        address: "Home Visit",
        appointment_date: date,
        appointment_time: time
      },
      theme: {
        color: "#3B82F6"
      }
    };

    const razorpay = new window.Razorpay(options);
    razorpay.on('payment.failed', function (response: any) {
      console.error("Payment Failed:", response.error);
      alert("Payment failed! Please try again.");
    });

    razorpay.open();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time || !name || !email || !contact) {
      alert("Please fill all fields before proceeding.");
      return;
    }
    initializeRazorpay();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-white">
            Schedule Your Appointment
          </h1>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Contact Number Input */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Enter your contact number"
                  required
                />
              </div>

              {/* Date Picker */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-4">
                  Select Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Time Slot Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-4">
                  Select Time
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 appearance-none"
                    required
                  >
                    <option value="">Select a time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {parseInt(slot) > 12
                          ? `${parseInt(slot) - 12}:00 PM`
                          : `${slot}:00 AM`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-lg transition-colors"
                >
                  Confirm & Proceed to Payment
                </button>
              </div>
            </form>

            {/* Appointment Details */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <h2 className="text-xl font-semibold text-white mb-4">
                Appointment Details
              </h2>
              <div className="space-y-4 text-gray-300">
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
