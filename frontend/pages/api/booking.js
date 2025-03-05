import nodemailer from 'nodemailer';
// import mysql from 'mysql2/promise';
//import { EmailOptions } from '../../types';
//import htmlPdf from 'html-pdf';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { requestNumber, firstName, lastName, email, mobile, flightNo, date, carType, carModel, rate, pickupPoint, dropoffPoint, cardNumber, expiryDate, cvv, recaptchaToken } = req.body;

    // Create a transporter object using Mailtrap
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_SSL_HOST,
      port: process.env.SMTP_PORT,
      // secure: false, // true for 465, false for other ports
      // port: parseInt(process.env.MAILTRAP_PORT, 10),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content to be sent to the administrator
    const adminMailOptions = {
      from: '"Request Transfer Booking" <booking@rungruangsubsamui.com>',
      to: "<booking@rungruangsubsamui.com>", // Administrator email
      subject: 'New Request Transfer Booking',
      html: `
        <h1>New Request Transfer Booking</h1>
        <h3>Customer Details:</h3>
        <hr/>
        <h3>Booking Details</h3>
        <hr/>
        <p><strong>Booking ID:</strong> ${requestNumber}</p>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Flight No:</strong> ${flightNo}</p>
        <p><strong>Pickup Date/Time:</strong> ${date}</p>
        <p><strong>Car Type:</strong> ${carType}</p>
        <p><strong>Car Type:</strong> ${carModel}</p>
        <p><strong>Rate:</strong> ${rate}</p>
        <p><strong>Pickup Point:</strong> ${pickupPoint}</p>
        <p><strong>Dropoff Point:</strong> ${dropoffPoint}</p>
        <hr/>
      `,
    };

    // Email content to be sent to the customer for acknowledgment
    const customerMailOptions = {
      from: '"Your Transfer Rquest" <booking@rungruangsubsamui.com>',
      to: email, // Customer email
      subject: 'Thank you for booking with us',
      html: `
        <br/>
       
        <p>Dear ${firstName} ${lastName},</p>
        <p>Thank you for booking your transfer with us. Here are your booking details:</p>
        <p>*This not a confirmation email, we will contact you soon.</p>
        <br/>
        <h3>Booking Details</h3>
        <hr/>
        <p><strong>Booking ID:</strong> ${requestNumber}</p>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Flight No:</strong> ${flightNo}</p>
        <p><strong>Pickup Date/Time:</strong> ${date}</p>
        <p><strong>Car Type:</strong> ${carType}</p>
         <p><strong>Car Type:</strong> ${carModel}</p>
        <p><strong>Rate:</strong> ${rate}</p>
        <p><strong>Pickup Point:</strong> ${pickupPoint}</p>
        <p><strong>Dropoff Point:</strong> ${dropoffPoint}</p>
        <br/>
        <hr/>
        <h3>Terms and Conditions</h3>
        <p className="text-sm text-gray-600 mb-1">Please read and agree to the terms and conditions before proceeding.</p>
        <Label className='font-semibold text-md'>Conditions for booking</Label>
        <p className='text-sm'><strong></strong>1. When booking, pay 50% of the total travel price.</p>
        <p className='text-sm'><strong></strong>2. Cancel before 7 days of departure, we will refund 100% of the deposit.</p>
        <p className='text-sm'><strong></strong>3. Cancel before 3 days of departure. We refund 50% of the deposit within 5-7 business days.</p>
        <br/>
        <hr/>
        <h3>Payment Details</h3>
        <p className="text-sm text-gray-600 mb-1">Please transfer the deposit to the following account:</p>
        <p><strong>Krungsri Bank (Bank of Ayudhya Public Company Limited. (BAY))</strong></p>
        <p><strong>Account Type:</strong> Savings</p>
        <p><strong>Account Name:</strong> Thanita Ngamsuppakorn</p>
        <p><strong>Account Number:</strong> 478-1-07889-8</p>
        <p><strong>Swift Code:</strong> AYUDTHBK</p>
        <br/>
        <hr/>
        <br/>
        <h3>To confirm your transfer booking</h3>
        <p>- Please email us your transfer payment slip to email booking@rungruangsubsamui.com or</p>
        <p>- Send or payment slip via our Whatsapp</p>
        <p>- Call us at (+66) 77 427 000, Mobile: (+66) 084-678-0154</p>
        <p>- Line ID: (+66) 084 678 0154</p> 
        <p>- We will confirm your booking within 24 hours</p> 
        <br/>
        <p>After we have received your payment, we will send you a confirmation email.</p>
        <br/>
        <p>Thank you for choosing Us.</p>
      
        <br/>
        <p>Best regards,</p>
        <p>Rungruang Sub Samui Team</p>
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
        // Success message
        res.status(200).json({ message: 'Messages sent successfully!' });
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send messages.' });
      }
    // });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};