"use client"

import { parseWithZod } from "@conform-to/zod";
import { useForm } from "@conform-to/react";
// import { useForm } from 'react-hook-form';
import { requestSchema } from "@/components/utilities/ZodSchemas";
import { useState, useEffect, useActionState } from "react";
import { useRequestTransferContext } from "@/context/RequestTransferContext";
import { CreateRequest } from "@/components/actions/actions";
import SubmitButton from "@/components/form/SubmitButton";
import { set } from "date-fns";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import { request } from "http";

const BookingStep = ({bookingData, handleChange, nextStep }: any) => {
  const { requestTransfer, setRequestTransfer } = useRequestTransferContext();
  const [formData, setFormData] = useState(undefined);
  const [isFormValid, setIsFormValid] = useState(false);

  console.log(requestTransfer);
  //const [lastResult, actionForm] = useActionState(CreateRequest, undefined);
  const [form, fields] = useForm({
      onValidate({ formData }: { formData: FormData }){
         const submission = parseWithZod(formData, {
            schema: requestSchema
          });

            // if submission success then setFormValid to true
            // set requestTransfer context with submit form data
            // go to confirmation step
            console.log("result: ", submission);
            if(submission.status === "success"){
              setIsFormValid(true)
              setRequestTransfer({
                ...bookingData
              })
              nextStep();
            };

        return submission;
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
          <input hidden 
          type="text" 
          name="requestNumber" 
          value={ Math.floor(Math.random() * 1000000000) } />
          <label className="block text-gray-700">First Name</label>
          <input
            name={fields.firstName.name}
            key={fields.firstName.key}
            defaultValue={requestTransfer?.firstName}
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
            defaultValue={requestTransfer?.lastName}
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
            defaultValue={requestTransfer?.email}
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
            defaultValue={requestTransfer?.mobile}
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
            defaultValue={requestTransfer?.date}
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
            defaultValue={requestTransfer?.flightNo}
            placeholder="Your Flight No."
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
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
          { 
          <button type="submit"  className="w-full bg-blue-500 text-white py-2 rounded">
            Next
          </button>   
          }    
      </form>
    </div>
  );
};
 
export default BookingStep;