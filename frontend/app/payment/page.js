"use client"

import React, { useState } from 'react';
import PaymentStep from '../../components/form/PaymentStep';

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle payment submission logic here
    console.log('Preparing to submit payment form');
  };

  return (
    <section className="bg-blue-50 dark:bg-slate-200 py-8 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
            Payment
          </p>
          <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
            Complete Your Payment
          </h2>
        </div>
        <PaymentStep formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    </section>
  );
};

export default PaymentPage;