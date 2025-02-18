"use client"

import { parseWithZod } from "@conform-to/zod";
import { useForm } from "@conform-to/react";
import { requestSchema } from "../utilities/ZodSchemas";
import { CreateRequest } from "../actions/actions";
import { useActionState, useState, useEffect } from "react";


const BookingStep = ({bookingData, handleChange, nextStep}: any) => {
  const [formData, setFormData] = useState({});

  // const [lastResult, actionForm] = useActionState(CreateRequest, undefined)

  const [form, fields] = useForm({
      // lastResult,
      onValidate({ formData }: { formData: FormData }){
        return parseWithZod(formData, {
          schema: requestSchema
        });
      },
        shouldValidate: "onBlur",
        shouldRevalidate: "onInput"
    });


 useEffect(() => {
    setFormData({
      ...bookingData,
    });
  }, [bookingData]);

  return (
    <div className="bg-white p-8 shadow-md rounded">
      <form 
      // action={actionForm} 
      id={form.id}
      onSubmit={form.onSubmit}
      noValidate
      className="flex flex-col space-y-4"
      >
        <div>
          <label className="block text-gray-700">First Name</label>
          <input
            name={fields.firstName.name}
            key={fields.firstName.key}
            defaultValue={fields.firstName.initialValue}
            type='text' 
            placeholder='First Name' 
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          <p className="text-sm text-red-500">{fields.firstName.errors}</p>
        </div>
        <div>
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            name={fields.lastName.name}
            key={fields.lastName.key}
            defaultValue={fields.lastName.initialValue}
            placeholder="Last Name"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          <p className="text-sm text-red-500">{fields.lastName.errors}</p>
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name={fields.email.name}
            key={fields.email.key}
            defaultValue={fields.email.initialValue}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-3 py-2 border rounded"
          />
          <p className="text-sm text-red-500">{fields.email.errors}</p>
        </div>
        <div>
          <label className="block text-gray-700">Mobile</label>
          <input
            type="tel"
            name={fields.mobile.name}
            key={fields.mobile.key}
            defaultValue={fields.mobile.initialValue}
            placeholder="Your Mobile"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          <p className="text-sm text-red-500">{fields.mobile.errors}</p>
        </div>
        <div>
          <label className="block text-gray-700">Arrival/Departure : Date/Time</label>
          <input
            type="datetime-local"
            name={fields.date.name}
            key={fields.date.key}
            defaultValue={fields.date.initialValue}
            // placeholder="Date"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Flight No</label>
          <input
            type="text"
            name={fields.flightNo.name}
            key={fields.flightNo.key}
            defaultValue={fields.flightNo.initialValue}
            placeholder="Your Flight No."
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        
        {/* <div>
          <label className="block text-gray-700">Car Type</label>
          <select
            type="text"
            name="carType"
            defaultValue={fields.carType == }
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            
          >
            <option defaultValue="">Select a car type</option>
            <option defaultValue="sedan">Sedan</option>
            <option defaultValue="suv">SUV</option>
            <option defaultValue="van">Van</option>
          </select>
        </div> */}
        <div>
          <label className="block text-gray-700">Car Type</label>
          <input
            type="text"
            name={fields.carType.name}
            key={fields.carType.key}
            defaultValue={bookingData.carType}
            // onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            readOnly
          />
        </div>
        <div>
          <label className="block text-gray-700">Pickup Point</label>
          <input
            type="text"
            name={fields.pickupPoint.name}
            key={fields.pickupPoint.key}
            defaultValue={bookingData.pickupPoint}
            //onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            readOnly
          />
        </div>
        <div>
          <label className="block text-gray-700">Dropoff Point</label>
          <input
            type="text"
            name={fields.dropoffPoint.name}
            key={fields.dropoffPoint.key}
            defaultValue={fields.dropoffPoint.initialValue || bookingData.dropoffPoint}
            //onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            readOnly
          />
        </div>
        <div>
          <label className="block text-gray-700">Car Model</label>
          <input
            type="text"
            name={fields.carModel.name}
            key={fields.carModel.key}
            defaultValue={fields.carModel.initialValue || bookingData.carModel}
            //onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            readOnly
            
          />
        </div>
        <div>
          <label className="block text-gray-700">Rate</label>
          <input
            type="text"
            name={fields.rate.name}
            key={fields.rate.key}
            defaultValue={fields.rate.initialValue || bookingData.rate}
            //onChange={handleChange}
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