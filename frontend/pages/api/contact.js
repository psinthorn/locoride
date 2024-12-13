import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    console.log('req.body ->', req.body);

    // Create a SMTP transporter object
    console.log('process.env.MAILTRAP_HOST ->', process.env.MAILTRAP_HOST);
    console.log('process.env.MAILTRAP_USER ->', process.env.MAILTRAP_USER);
    console.log('process.env.MAILTRAP_PASSWORD ->', process.env.MAILTRAP_PASSWORD);
    console.log('process.env.ADMIN_EMAIL ->', process.env.ADMIN_EMAIL);

    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    // Email content to be sent to the administrator
    const adminMailOptions = {
      from: '"Contact Form" <no-reply@locoride.com>',
      to: process.env.ADMIN_EMAIL, // Administrator email
      subject: 'New Contact Form Submission',
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Email content to be sent to the customer for acknowledgment
    const customerMailOptions = {
      from: '"Contact Form" <no-reply@locoride.com>',
      to: `${email}`, // Customer email
      subject: 'Thank you for contacting us',
      html: `
        <h1>Thank you for contacting us</h1>
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to us. We have received your message and will get back to you shortly.</p>
        <p><strong>Your Message:</strong></p>
        <p>${message}</p>
        <p>Best regards,</p>
        <p>The Locoride Team</p>
      `,
    };

    try {
      // Send email to the administrator
      await transporter.sendMail(adminMailOptions);

      // Send acknowledgment email to the customer
      await transporter.sendMail(customerMailOptions);

      res.status(200).json({ message: 'Messages sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send messages.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};