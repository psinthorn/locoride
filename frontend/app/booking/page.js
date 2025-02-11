"use client"

import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import BookingForm from '../../components/form/BookingForm';

export default function Booking() {
  const searchParams = useSearchParams();
  const rateEstimate = searchParams.get('rateEstimate');
  const source = JSON.parse(searchParams.get('source'));
  const destination = JSON.parse(searchParams.get('destination'));
  const carType = searchParams.get('carType');
  const carModel = searchParams.get('carModel');
  // const name = searchParams.get('name');
  const pickupPoint = source?.label;
  const destinationPoint = destination?.label;
  
  // console.log(source);
  // console.log(destination);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    flightNo: '',
    arrivalTime: '',
    carType: carType? carType : '',
    carModel: carModel? carModel : '',
    rate: rateEstimate,
    pickupPoint: pickupPoint,
    dropoffPoint: destinationPoint,
  });

  //console.log(formData);

  useEffect(() => {
    console.log(pickupPoint);
    console.log(destinationPoint);
    console.log(rateEstimate);
    console.log(carType);
    console.log(carModel);
    // if (searchParams) {
    //   console.log('searchParams: ', searchParams);
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