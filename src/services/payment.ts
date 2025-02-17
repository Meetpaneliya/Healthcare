import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

interface PaymentDetails {
  amount: number;
  currency: string;
  receipt: string;
  notes: {
    customerName: string;
    service: string;
  };
}

export const createOrder = async (details: PaymentDetails) => {
  const options = {
    amount: details.amount * 100, // Convert to paise
    currency: details.currency,
    receipt: details.receipt,
    notes: details.notes,
  };

  try {
    const order = await razorpay.orders.create(options);
    return order;
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    throw error;
  }
};