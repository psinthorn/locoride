"use client"

import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import BookingForm from '../../components/form/BookingForm';

export default function Booking() {

  // Get data from the URL query string
  const searchParams = useSearchParams();
  const rateEstimate = searchParams.get('rateEstimate');
  const source = JSON.parse(searchParams.get('source'));
  const destination = JSON.parse(searchParams.get('destination'));
  const carType = searchParams.get('carType');
  const carModel = searchParams.get('carModel');
  const pickupPoint = source?.label;
  const destinationPoint = destination?.label;
 
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
      
      carType: carType? carType : '',
      carModel: carModel? carModel : '',
  
      rate: rateEstimate,
      total: '', // Total price calculation from the rate and passengers
  
      pickupPoint: pickupPoint,
      dropoffPoint: destinationPoint,
  
      note: '',
  
      cardNumber: '',
      cardHolder: '',
      expiryDate: '',
      cvv: '',
  
      status: '',
    });

  // Update the form data with the search parameters
  useEffect(() => {
    setFormData((formData) => ({
        ...formData,
        carType: carType,
        carModel: carModel,
        rate: rateEstimate,
        pickupPoint: pickupPoint,
        dropoffPoint: destinationPoint,
      }));     
  }, [searchParams]);

  console.log("Form Data: ", formData);

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Car Transfer Booking</title>
        <meta name="description" content="Car Transfer Booking on Koh Samui" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="py-10">
        <BookingForm bookingData={formData}/>
      </main>
    </div>
  );
}