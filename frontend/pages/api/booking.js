// import React from 'react'
// import nodemailer from 'nodemailer';

// const booking = (req, res) => {

//     const transporter = nodemailer.createTransport({
//     host: 'sandbox.smtp.mailtrap.io',
//     port: 2525,
//     auth: {
//       user: '192643efe13672',
//       pass: '2a309a3b94ae90',
//     },
//   });

//   async function mailServ() {
//     // send mail with defined transport object
//     const info = await transporter.sendMail({
//       from: '"F2xMail 👻" <f2coltd@gmail.com>', // sender address
//       to: "psinthorn@gmail.com", // list of receivers
//       subject: "Hello ✔", // Subject line
//       text: "Hello world? LOcoride", // plain text body
//       html: "<b>Hello world?</b>", // html body
//     });
  
//     console.log("Message sent: %s", info.messageId);
//     // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
//   }
//   console.log('mailServ excute Go ->', );
//   mailServ().catch(console.error);
// }

// export default booking


//import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
// import mysql from 'mysql2/promise';
//import { EmailOptions } from '../../types';
//import htmlPdf from 'html-pdf';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { firstName, lastName, email, mobile, flightNo, arrivalTime, carType, rate, pickupPoint, dropoffPoint, cardNumber, expiryDate, cvv, recaptchaToken } = req.body;

    // // Verify reCAPTCHA
    // const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`, {
    //   method: 'POST',
    // });
    // const recaptchaData = await recaptchaResponse.json();

    // if (!recaptchaData.success) {
    //   return res.status(400).json({ message: 'reCAPTCHA verification failed.' });
    // }

    // // Create a MySQL connection
    // const connection = await mysql.createConnection({
    //   host: process.env.MYSQL_HOST,
    //   user: process.env.MYSQL_USER,
    //   password: process.env.MYSQL_PASSWORD,
    //   database: process.env.MYSQL_DATABASE,
    // });

    // // Insert booking data into the database
    // await connection.execute(
    //   'INSERT INTO bookings (firstName, lastName, email, mobile, flightNo, arrivalTime, carType, rate, pickupPoint, dropoffPoint, cardNumber, expiryDate, cvv) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    //   [firstName, lastName, email, mobile, flightNo, arrivalTime, carType, rate, pickupPoint, dropoffPoint, cardNumber, expiryDate, cvv]
    // );

    // Create a transporter object using Mailtrap
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: parseInt(process.env.MAILTRAP_PORT, 10),
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    // Email content to be sent to the administrator
    const adminMailOptions = {
      from: '"Booking Form" <no-reply@locoride.com>',
      to: process.env.ADMIN_EMAIL, // Administrator email
      subject: 'New Transfer Booking',
      html: `
        <h1>New Transfer Booking</h1>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Flight No:</strong> ${flightNo}</p>
        <p><strong>Arrival Time:</strong> ${arrivalTime}</p>
        <p><strong>Car Type:</strong> ${carType}</p>
        <p><strong>Rate:</strong> ${rate}</p>
        <p><strong>Pickup Point:</strong> ${pickupPoint}</p>
        <p><strong>Dropoff Point:</strong> ${dropoffPoint}</p>
      `,
    };

    // Email content to be sent to the customer for acknowledgment
    const customerMailOptions = {
      from: '"Booking Form" <no-reply@locoride.com>',
      to: email, // Customer email
      subject: 'Thank you for booking with us',
      html: `
        <h1>Thank you for booking with us</h1>
        <p>Dear ${firstName} ${lastName},</p>
        <p>Thank you for booking your transfer with us. Here are your booking details:</p>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Flight No:</strong> ${flightNo}</p>
        <p><strong>Arrival Time:</strong> ${arrivalTime}</p>
        <p><strong>Car Type:</strong> ${carType}</p>
        <p><strong>Rate:</strong> ${rate}</p>
        <p><strong>Pickup Point:</strong> ${pickupPoint}</p>
        <p><strong>Dropoff Point:</strong> ${dropoffPoint}</p>
        <p>Best regards,</p>
        <p>The Locoride Team</p>
      `,
    };

    // // Generate PDF voucher
    // const voucherHtml = `
    //   <h1>Booking Voucher</h1>
    //   <p><strong>First Name:</strong> ${firstName}</p>
    //   <p><strong>Last Name:</strong> ${lastName}</p>
    //   <p><strong>Email:</strong> ${email}</p>
    //   <p><strong>Mobile:</strong> ${mobile}</p>
    //   <p><strong>Flight No:</strong> ${flightNo}</p>
    //   <p><strong>Arrival Time:</strong> ${arrivalTime}</p>
    //   <p><strong>Car Type:</strong> ${carType}</p>
    //   <p><strong>Rate:</strong> ${rate}</p>
    //   <p><strong>Pickup Point:</strong> ${pickupPoint}</p>
    //   <p><strong>Dropoff Point:</strong> ${dropoffPoint}</p>
    // `;

    // htmlPdf.create(voucherHtml).toBuffer(async (err, buffer) => {
    //   if (err) {
    //     console.error('Error generating PDF:', err);
    //     res.status(500).json({ message: 'Failed to generate PDF.' });
    //     return;
    //   }

    //   // Attach PDF voucher to customer email
    //   customerMailOptions.attachments = [
    //     {
    //       filename: 'voucher.pdf',
    //       content: buffer,
    //     },
    //   ];

      try {
        // Send email to the administrator
        await transporter.sendMail(adminMailOptions);

        // Send acknowledgment email to the customer with PDF voucher
        await transporter.sendMail(customerMailOptions);

        res.status(200).json({ message: 'Messages sent successfully!' });
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send messages.' });
      }

    //});
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};