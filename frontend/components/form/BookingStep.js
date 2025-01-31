'use client'

import { useEffect, useState } from "react";

const BookingStep = ({bookingData, handleChange, nextStep}) => {
  console.log('booking Data: ', bookingData);
  const [formData, setFormData] = useState({
  });

  useEffect

 useEffect(() => {
    setFormData({
      ...bookingData,
    });
  }, [bookingData]);

  return (
    <div className="bg-white p-8 shadow-md rounded">
      <form className="flex flex-col space-y-4">
        <div>
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Mobile</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Flight No</label>
          <input
            type="text"
            name="flightNo"
            value={formData.flightNo}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Arrival Time</label>
          <input
            type="datetime-local"
            name="arrivalTime"
            value={formData.arrivalTime}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        {/* <div>
          <label className="block text-gray-700">Car Type</label>
          <select
            type="text"
            name="carType"
            value={formData.carType == }
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="">Select a car type</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="van">Van</option>
          </select>
        </div> */}
        <div>
          <label className="block text-gray-700">Car Type</label>
          <input
            type="text"
            name="carType"
            value={`${formData.carType} - ${formData.carModel}`}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Pickup Point</label>
          <input
            type="text"
            name="pickupPoint"
            value={formData.pickupPoint}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Dropoff Point</label>
          <input
            type="text"
            name="dropoffPoint"
            value={formData.dropoffPoint}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Car Model</label>
          <input
            type="text"
            name="dropoffPoint"
            value={formData.carModel}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Rate</label>
          <input
            type="text"
            name="rate"
            value={formData.rate}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            readOnly
          />
        </div>
        <button type="button" onClick={nextStep} className="w-full bg-blue-500 text-white py-2 rounded">
          Next
        </button>
      </form>
    </div>
  );
};

export default BookingStep;