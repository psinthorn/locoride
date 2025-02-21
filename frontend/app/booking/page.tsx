"use client"

import Head from 'next/head';
import React, { useContext, useState, useEffect } from 'react';
// import { useSearchParams } from 'next/navigation';
import BookingForm from '../../components/form/BookingForm';
import { useRequestTransferContext } from '@/context/RequestTransferContext';
// import RequestTransferContext from '@/context/RequestTransferContext';

export default function Booking() {
  const { requestTransfer, setRequestTransfer } = useRequestTransferContext();
  console.log("Booking Request is: ", requestTransfer);
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
      
      // carType: carType? carType : '',
      carType: requestTransfer?.carType ,
      carModel: requestTransfer?.carModel,
  
      rate: requestTransfer?.rate,
      // total: '', // Total price calculation from the rate and passengers
      // pickupPoint: requestTransfer.source? requestTransfer.source : '',
      // dropoffPoint: requestTransfer.destination? requestTransfer.destination : '',
  
      note: '',
  
      cardNumber: '',
      cardHolder: '',
      expiryDate: '',
      cvv: '',
  
      status: '',
    });

    // useEffect(() => {
    //   if (!requestTransfer) {
    //     // Handle the case where requestTransfer is not available
    //     console.log("No booking data available.");
    //   } else {
    //     console.log("Booking Request is: ", requestTransfer);
    //   }
    // }, [requestTransfer]);

  // Update the form data with the search parameters
  // useEffect(() => {
  //   setFormData((formData) => ({
  //       ...formData,
  //       rate: requestTransfer.rate,
  //       carType: requestTransfer.carType,
  //       carModel: requestTransfer.carModel,
  //       pickupPoint: requestTransfer.source,
  //       dropoffPoint: requestTransfer.destination,
  //     }));     
  // }, [requestTransfer]);

  console.log("Form Data on Main Booking Page: ", formData);

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