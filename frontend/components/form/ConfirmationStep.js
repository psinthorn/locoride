import React from 'react';

const ConfirmationStep = ({ formData, prevStep, handleSubmit }) => {
  return (
    <div className="bg-white p-8 shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Confirm Your Booking</h2>
      <p><strong>First Name:</strong> {formData.firstName}</p>
      <p><strong>Last Name:</strong> {formData.lastName}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Mobile:</strong> {formData.mobile}</p>
      <p><strong>Flight No:</strong> {formData.flightNo}</p>
      <p><strong>Arrival Time:</strong> {formData.arrivalTime}</p>
      <p><strong>Car Type:</strong> {formData.carType}</p>
      <p><strong>Pickup Point:</strong> {formData.pickupPoint}</p>
      <p><strong>Dropoff Point:</strong> {formData.dropoffPoint}</p>
      <div className="flex justify-between mt-4">
        <button type="button" onClick={prevStep} className="bg-gray-500 text-white py-2 px-4 rounded">
          Back
        </button>
        <button type="button" onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmationStep;