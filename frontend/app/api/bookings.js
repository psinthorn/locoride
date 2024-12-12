import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, phone, carType, pickupLocation, dropoffLocation, date, time } = req.body;

    // Create a transporter object using Mailtrap
    const transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '192643efe13672',
        pass: '2a309a3b94ae90',
      },
    });

    console.log('name', name);

    // Email content
    const mailOptions = {
      from: '"Car Transfer Service" <no-reply@cartransfer.com>',
      to: `${email}, admin@cartransfer.com`,
      subject: 'New Car Transfer Booking',
      html: `
        <h1>New Booking Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Car Type:</strong> ${carType}</p>
        <p><strong>Pickup Location:</strong> ${pickupLocation}</p>
        <p><strong>Dropoff Location:</strong> ${dropoffLocation}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Booking request sent successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to send booking request.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};