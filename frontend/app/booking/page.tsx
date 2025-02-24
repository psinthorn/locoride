"use client"

import Head from 'next/head';
import React, { useState } from 'react';
import BookingForm from '../../components/form/BookingForm';
import { useRequestTransferContext } from '@/context/RequestTransferContext';

export default function Booking() {
  const { requestTransfer, setRequestTransfer } = useRequestTransferContext();
  console.log("Booking Request is: ", requestTransfer);
  // // Set the initial form data
  //   const [formData, setFormData] = useState({
  //     ...requestTransfer,
  //     // firstName: '',
  //     // lastName: '',
  //     // address: '',
  //     // email: '',
  //     // mobile: '',
  //     // luggage: '',
  
  //     // date: '',
  //     // time: '',
  
  //     // arrival: '',
  //     // departure: '',
  //     // flightNo: '',
  //     // flightTime: '',
      
  //     // // carType: carType? carType : '',
  //     // carType: requestTransfer?.carType ,
  //     // carModel: requestTransfer?.carModel,
      
  //     // distance: requestTransfer?.distance,
  //     // passengers: requestTransfer?.passengers,
  //     // rate: requestTransfer?.rate,
  //     // total: '', // Total price calculation from the rate and passengers

  //     // pickupPoint: requestTransfer?.pickupPoint,
  //     // dropoffPoint: requestTransfer?.dropoffPoint,
  
  //     // note: '',
  
  //     // cardNumber: '',
  //     // cardHolder: '',
  //     // expiryDate: '',
  //     // cvv: '',
  
  //     // status: '',
  //   });

  // console.log("Form Data on Main Booking Page: ", formData);

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Car Transfer Booking</title>
        <meta name="description" content="Car Transfer Booking on Koh Samui" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="py-10">
        <BookingForm bookingData={requestTransfer}/>
      </main>
    </div>
  );
}