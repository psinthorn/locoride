import React, { useState } from 'react';
import { Label } from '../ui/label';
import { set } from 'date-fns';

const ConfirmationStep = ({ formData, prevStep, handleSubmit }: any) => {
  const [agree, setAgree] = useState(false);

  const onAgree = () => {
    const agree = document.getElementById('agree') as HTMLInputElement;
    if (agree.checked) {
      setAgree(true);
      return;
    }else{
      setAgree(false);
      return;
    }
  };

  return (
    <div className="bg-white p-8 shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Confirm Your Booking</h2>
      <p className='border-b-2'>Please confirm your booking details below:</p>
      <p><strong>First Name:</strong> {formData.firstName}</p>
      <p><strong>Last Name:</strong> {formData.lastName}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Mobile:</strong> {formData.mobile}</p>
      <p><strong>Flight No:</strong> {formData.flightNo}</p>
      <p><strong>Date/Time:</strong> {formData.date}</p>
      <p><strong>Car Type:</strong> {formData.carType}</p>
      <p><strong>Pickup Point:</strong> {formData.pickupPoint}</p>
      <p><strong>Dropoff Point:</strong> {formData.dropoffPoint}</p>

      {/* Terms and Conditions */}
      <div className='mt-4 border-t-2'>
        <label className="block text-gray-700 mt-4">
          <Label className='font-semibold text-md'>Terms and Conditions</Label>
          <p className="text-sm text-gray-600 mb-1">Please read and agree to the terms and conditions before proceeding.</p>
          <Label className='font-semibold text-md'>Conditions for booking</Label>
          <p className='text-sm'><strong></strong>1. When booking, pay 50% of the total travel price.</p>
          <p className='text-sm'><strong></strong>2. Cancel before 7 days of departure, we will refund 100% of the deposit.</p>
          <p className='text-sm'><strong></strong>3. Cancel before 3 days of departure. We refund 50% of the deposit within 5-7 business days.</p>
       
          <form
            className="mb-4"
          >
            <input type="checkbox" id="agree" name="agree" className="mr-2" onChange={onAgree} />
            I agree to the Terms and Conditions
          </form> 
        </label>
      </div>
      <div className="flex justify-between mt-4">
        <button type="button" onClick={prevStep} className="bg-gray-500 text-white py-2 px-4 rounded">
          Back
        </button>
        { agree ?
          <button type="button" onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded">
            Confirm
          </button>
          :
          <button type="button" disabled className="bg-blue-200 text-white py-2 px-4 rounded">
            Confirm
          </button>
        }
      </div>
    </div>
  );
};

export default ConfirmationStep;