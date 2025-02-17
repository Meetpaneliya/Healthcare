import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface CustomerDetails {
  name: string;
  age: string;
  mobile: string;
  email: string;
}

interface Lab {
  id: string;
  name: string;
  price: number;
  discount: number;
}

export const Checkout = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState<CustomerDetails>({
    name: '',
    age: '',
    mobile: '',
    email: ''
  });
  const [selectedLab, setSelectedLab] = useState<Lab | null>(null);

  useEffect(() => {
    // Retrieve selected lab from session storage
    const labData = sessionStorage.getItem('selectedLab');
    if (labData) {
      setSelectedLab(JSON.parse(labData));
    } else {
      // If no lab is selected, redirect back to lab selection
      navigate('/lab-selection');
    }
  }, [navigate]);

  const calculatePrice = () => {
    if (!selectedLab) return 0;
    const discountedPrice = selectedLab.price * (1 - selectedLab.discount / 100);
    return {
      original: selectedLab.price,
      discounted: discountedPrice,
      savings: selectedLab.price - discountedPrice
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store customer details in session storage
    sessionStorage.setItem('customerDetails', JSON.stringify(details));
    navigate('/appointment');
  };

  const prices = calculatePrice();

  return (
    <div className="page-transition min-h-screen bg-background dark:bg-background-dark py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-foreground dark:text-foreground-dark">
            Complete Your Booking
          </h1>

          <div className="card">
            {selectedLab && (
              <div className="mb-8 p-4 bg-primary/5 dark:bg-primary-dark/5 rounded-lg">
                <h2 className="text-xl font-semibold text-foreground dark:text-foreground-dark mb-4">
                  Selected Lab: {selectedLab.name}
                </h2>
                <div className="space-y-2">
                  <p className="text-foreground/80 dark:text-foreground-dark/80">
                    Original Price: <span className="line-through">₹{prices.original}</span>
                  </p>
                  <p className="text-foreground/80 dark:text-foreground-dark/80">
                    Discount: {selectedLab.discount}%
                  </p>
                  <p className="text-success dark:text-success-dark font-semibold">
                    You Save: ₹{Math.round(prices.savings)}
                  </p>
                  <p className="text-2xl font-bold text-foreground dark:text-foreground-dark">
                    Final Price: ₹{Math.round(prices.discounted)}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={details.name}
                  onChange={(e) => setDetails({ ...details, name: e.target.value })}
                  className="input"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={details.email}
                  onChange={(e) => setDetails({ ...details, email: e.target.value })}
                  className="input"
                  required
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-2">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  value={details.age}
                  onChange={(e) => setDetails({ ...details, age: e.target.value })}
                  className="input"
                  required
                  min="18"
                  max="100"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-foreground dark:text-foreground-dark mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  value={details.mobile}
                  onChange={(e) => setDetails({ ...details, mobile: e.target.value })}
                  className="input"
                  required
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit mobile number"
                />
              </div>

              <div className="pt-4">
                <button type="submit" className="btn w-full">
                  Proceed to Appointment Booking
                </button>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t border-border dark:border-border-dark">
              <h2 className="text-xl font-semibold text-foreground dark:text-foreground-dark mb-4">
                Important Information
              </h2>
              <div className="space-y-4 text-foreground/80 dark:text-foreground-dark/80">
                <p>
                  <span className="font-medium">Preparation:</span> Please avoid eating for 4 hours before the appointment
                </p>
                <p>
                  <span className="font-medium">Duration:</span> The procedure takes approximately 45-60 minutes
                </p>
                <p>
                  <span className="font-medium">Documents Required:</span> Please keep a valid ID proof handy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};