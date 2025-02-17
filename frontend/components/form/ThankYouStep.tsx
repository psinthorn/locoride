import React from 'react';
import { useRouter } from 'next/navigation';

const ThankYouStep = ({ formData }: any) => {
  const router = useRouter();

  const handlePayment = () => {
    router.push('/payment');
  };

  return (
    <div className="bg-white p-8 shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Thank You for Your Booking!</h2>
      <p>Your booking has been successfully submitted.</p>
      <p><strong>First Name:</strong> {formData.firstName}</p>
      <p><strong>Last Name:</strong> {formData.lastName}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Mobile:</strong> {formData.mobile}</p>
      <p><strong>Flight No:</strong> {formData.flightNo}</p>
      <p><strong>Arrival Time:</strong> {formData.arrivalTime}</p>
      <p><strong>Car Type:</strong> {formData.carType}</p>
      <p><strong>Pickup Point:</strong> {formData.pickupPoint}</p>
      <p><strong>Dropoff Point:</strong> {formData.dropoffPoint}</p>
      <button type="button" onClick={handlePayment} className="bg-green-500 text-white py-2 px-4 rounded mt-4">
        Proceed to Payment
      </button>
    </div>
  );
};

export default ThankYouStep;