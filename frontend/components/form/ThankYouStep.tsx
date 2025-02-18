import React from 'react';
import { useRouter } from 'next/navigation';
import PaymentStep from './PaymentStep';

const ThankYouStep = ({ formData }: any) => {
  const router = useRouter();

  const handlePayment = () => {
    router.push('/payment');
  };

  return (
    <div className="bg-white p-8 shadow-md rounded">
      <h2 className="text-2xl text-center font-bold mb-4 rounded-full bg-slate-300 ">Thank You for Your Booking!</h2>
      <p className='text-center'>Your booking has been successfully submitted.</p>
      <div className='text-center font-semibold text-lg p-4 bg-slate-100 rounded-lg my-4'>
        <p>Far Rate Total: <span className='font-bold text-2xl'> { formData.rate } THB</span></p>
        <p>Make deposit @50% for booking: <span className='font-bold text-2xl'> { (formData.rate / 2).toFixed(2) }THB </span></p>
      </div>
      
      <PaymentStep />
      <div className='my-4 p-4 rounded-sm bg-slate-100'>
        <p className='text-2xl'>To confirm your transfer booking</p>
        <p>- Please email us your transfer payment slip to email rungruangsamui2510@gmail.com or</p>
        <p>- Send or payment slip via our Whatsapp</p>
        <p>- Call us at (+66) 77 427 000, Mobile: (+66) 084-678-0154</p>
        <p>- Line ID: (+66) 084 678 0154</p> 
        <p>- We will confirm your booking within 24 hours</p> 
      </div>
      
      {/* <button type="button" onClick={handlePayment} className="bg-green-500 text-white py-2 px-4 rounded mt-4">
        Proceed to Payment
      </button> */}
    </div>
  );
};

export default ThankYouStep;