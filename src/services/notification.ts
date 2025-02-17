import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

interface BookingDetails {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  lab: string;
}

export const sendAdminNotification = async (booking: BookingDetails) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'zainni.1801@gmail.com',
    subject: 'New Booking Notification - VitaLuxe',
    html: `
      <h1>New Booking Details</h1>
      <p><strong>Customer Name:</strong> ${booking.name}</p>
      <p><strong>Email:</strong> ${booking.email}</p>
      <p><strong>Phone:</strong> ${booking.phone}</p>
      <p><strong>Service:</strong> ${booking.service}</p>
      <p><strong>Appointment Date:</strong> ${booking.date}</p>
      <p><strong>Appointment Time:</strong> ${booking.time}</p>
      <p><strong>Selected Lab:</strong> ${booking.lab}</p>
    `,
  };

  return transporter.sendMail(mailOptions);
};

export const sendCustomerNotification = async (booking: BookingDetails) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: booking.email,
    subject: 'Booking Confirmation - VitaLuxe',
    html: `
      <h1>Booking Confirmation</h1>
      <p>Dear ${booking.name},</p>
      <p>Thank you for choosing VitaLuxe. Your booking has been confirmed.</p>
      <h2>Booking Details:</h2>
      <p><strong>Service:</strong> ${booking.service}</p>
      <p><strong>Date:</strong> ${booking.date}</p>
      <p><strong>Time:</strong> ${booking.time}</p>
      <p><strong>Lab:</strong> ${booking.lab}</p>
      <p>Our team will contact you shortly to confirm the appointment.</p>
      <p>Best regards,<br>Team VitaLuxe</p>
    `,
  };

  return transporter.sendMail(mailOptions);
};

export const sendSMS = async (phone: string, message: string) => {
  const apiKey = process.env.FAST2SMS_API_KEY;
  const response = await fetch('https://www.fast2sms.com/dev/bulk', {
    method: 'POST',
    headers: {
      'authorization': apiKey,
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