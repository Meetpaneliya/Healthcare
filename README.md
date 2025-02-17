# VitaLuxe - Premium IV Therapy Services

VitaLuxe is a modern web application for IV therapy services, built with React and TypeScript. This guide will help you understand the project structure and set up the development environment.

## 🚀 Quick Start

```bash
# Demo
Url - https://sensational-florentine-98597c.netlify.app/

# Install dependencies
cd vitaluxe
npm install

# Start development server
npm run dev
```

## 🏗️ Project Structure

```
vitaluxe/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── services/      # API and service integrations
│   ├── lib/           # Utility functions
│   └── types/         # TypeScript type definitions
├── public/            # Static assets
└── supabase/         # Database migrations and configurations
```

## 🔧 Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **State Management**: React Context
- **Animations**: Framer Motion
- **Database**: Supabase
- **Payment Gateway**: Razorpay
- **Email Service**: Nodemailer
- **SMS Gateway**: Fast2SMS

## 📦 Core Dependencies

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.22.2",
    "framer-motion": "^11.0.3",
    "@supabase/supabase-js": "latest",
    "razorpay": "^2.9.2",
    "nodemailer": "^6.9.10"
  }
}
```

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
# Supabase
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Razorpay
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret

# Email
EMAIL_USER=your_email
EMAIL_PASS=your_email_app_password

# SMS
FAST2SMS_API_KEY=your_fast2sms_api_key
```

## 🗄️ Database Schema

### Tables

1. **users**
   - id (uuid, primary key)
   - email (text, unique)
   - full_name (text)
   - phone (text)
   - created_at (timestamp)

2. **bookings**
   - id (uuid, primary key)
   - user_id (uuid, foreign key)
   - drip_id (uuid, foreign key)
   - appointment_date (timestamp)
   - status (text)
   - payment_status (text)
   - created_at (timestamp)

3. **drips**
   - id (uuid, primary key)
   - name (text)
   - category (text)
   - description (text)
   - price (numeric)
   - duration (integer)

### API Integration Guide

#### Authentication

```typescript
// services/auth.ts
import { supabase } from './supabaseClient';

export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};
```

#### Booking Management

```typescript
// services/bookings.ts
import { supabase } from './supabaseClient';

export const createBooking = async (bookingData: BookingData) => {
  const { data, error } = await supabase
    .from('bookings')
    .insert([bookingData])
    .select();
  return { data, error };
};
```

#### Payment Integration

```typescript
// services/payment.ts
import Razorpay from 'razorpay';

export const createOrder = async (amount: number, receipt: string) => {
  const razorpay = new Razorpay({
    key_id: import.meta.env.VITE_RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  return await razorpay.orders.create({
    amount: amount * 100,
    currency: 'INR',
    receipt,
  });
};
```

#### Notification Services

```typescript
// services/notification.ts
import nodemailer from 'nodemailer';

export const sendEmail = async (to: string, subject: string, html: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  return await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    html,
  });
};

export const sendSMS = async (phone: string, message: string) => {
  const response = await fetch('https://www.fast2sms.com/dev/bulk', {
    method: 'POST',
    headers: {
      'authorization': process.env.FAST2SMS_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      route: 'v3',
      sender_id: 'TXTIND',
      message,
      language: 'english',
      numbers: phone,
    }),
  });
  return response.json();
};
```

## 🔄 Deployment

The application can be deployed to various platforms:

```bash
# Build the application
npm run build

# Preview the build
npm run preview
```

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests with coverage
npm run test:coverage
```

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

For support, email support@vitaluxe.in or join our Slack channel.