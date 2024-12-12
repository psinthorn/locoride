import Head from 'next/head';
import BookingForm from '../../components/booking/BookingForm';
import nodemailer from 'nodemailer';

export default function Booking() {

  const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '192643efe13672',
      pass: '2a309a3b94ae90',
    },
  });

  async function mailServ() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"F2xMail 👻" <f2coltd@gmail.com>', // sender address
      to: "psinthorn@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }
  console.log('mailServ excute Go ->', );
  mailServ().catch(console.error);
  


  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Car Transfer Booking</title>
        <meta name="description" content="Car Transfer Booking on Koh Samui" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-10">
        <BookingForm />
      </main>
    </div>
  );
}