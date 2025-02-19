"use client"

import React, { useState, useEffect, useActionState } from 'react';
import BookingStep from './BookingStep';
import ConfirmationStep from './ConfirmationStep';
import ThankYouStep from './ThankYouStep';
import StepNavigation from './StepNavigation';
import { CreateRequest } from '../actions/actions';

const BookingForm = ({ bookingData }) => {

  // Set the initial form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    mobile: '',
    passengers: '',
    luggage: '',

    date: '',
    time: '',

    arrival: '',
    departure: '',
    flightNo: '',
    flightTime: '',
    
    carType: '',
    carModel: '',

    rate: '',
    total: '', // Total price calculation from the rate and passengers

    pickupPoint: '',
    dropOffPoint: '',

    note: '',

    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',

    status: '',
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [responseMessage, setResponseMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  // const [recaptchaToken, setRecaptchaToken] = useState('');

  useEffect(() => {
    if (bookingData) {
      setFormData((prevData) => ({
        ...prevData,
        ...bookingData,
      }));
    }
  }, [bookingData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  // const handleRecaptchaChange = (token) => {
  //   setRecaptchaToken(token);
  // };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e) => {
    //console.log("submit form");
    e.preventDefault();
    const response = await fetch('/api/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formData}),
    });

    const result = await response.json();
    setResponseMessage(result.message);
    setShowMessage(true);

    // Hide the message after 5 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);

    nextStep(); // Move to the next step after submission
  };


  // Add data to database use actionState
  // const [lastResult, actionForm] = useActionState(CreateRequest, undefined)
  
  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   const result = await actionForm.submit(formData);
  //   if (result.success) {
  //     setResponseMessage(result.message);
  //     setShowMessage(true);

  //     // Hide the message after 5 seconds
  //     setTimeout(() => {
  //       setShowMessage(false);
  //     }, 5000);

  //     nextStep(); // Move to the next step after submission
  //   } else {
  //     alert("Failed to create request: " + result.error);
  //   }

  //   console.log("form submited");
  //   console.log(formData);
  //   nextStep();
  // };


  return (
    <section className="bg-blue-50 dark:bg-slate-200 py-8 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
            Transfer Booking
          </p>
          <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
            Book Your Transfer
          </h2>
        </div>
        <StepNavigation currentStep={currentStep} />
        {currentStep === 1 && (
          <BookingStep bookingData={formData} handleChange={handleChange} nextStep={nextStep} />
        )}
        {currentStep === 2 && (
          <ConfirmationStep formData={formData} prevStep={prevStep} />
        )}
        {currentStep === 3 && (
          <ThankYouStep formData={formData} />
        )}
        {showMessage && (
          <p className="mt-4 text-center text-green-600">{responseMessage}</p>
        )}
      </div>
    </section>
  );
};

export default BookingForm;