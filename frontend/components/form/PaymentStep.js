import React from 'react';

const PaymentStep = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div className="bg-white p-8 shadow-md rounded">
      <h1 className="text-xl font-semibold pb-8">Payment Details</h1>
      {/* Bank Details */}
      
        <label className="block text-gray-700">Bank Name</label>
        

      <form className="flex flex-col space-y-4">
        {/* Bank Details */}
        {/* <div>
          <label className="block text-gray-700">Bank Name</label>
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div> */}
       
        {/* <div>
          <label className="block text-gray-700">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Expiry Date</label>
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">CVV</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div> */}
        <div className="flex justify-between">
          <button type="button" onClick={prevStep} className="bg-gray-500 text-white py-2 px-4 rounded">
            Back
          </button>
          <button type="button" onClick={nextStep} className="bg-blue-500 text-white py-2 px-4 rounded">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentStep;