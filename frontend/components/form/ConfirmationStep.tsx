import React, { useActionState, useState } from 'react';
import { Label } from '../ui/label';
import { CreateRequest } from '../actions/actions';
import { parseWithZod } from '@conform-to/zod';
import { requestSchema } from '../utilities/ZodSchemas';
import { useForm } from '@conform-to/react';
import SubmitButton from './SubmitButton';
// import { useRequestTransferContext } from '@/context/RequestTransferContext';

const ConfirmationStep = ({ formData, handleSendmail, prevStep, nextStep }: any) => {
  //const { requestTransfer, setRequestTransfer } = useRequestTransferContext()
  const [ isFormValid, setIsFormValid ] = useState(false)
  console.log("Data on confirmation page", formData);

  // Agee to terms and conditions
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

  // // Use action state to create a new request
  // const [lastResult, actionForm] = useActionState(CreateRequest, undefined);
  // // validate form with zod schema
  // const [form, fields] = useForm({
  //       //lastResult,
  //   onValidate({ formData }: { formData: FormData }){
  //     return parseWithZod(formData, {
  //         schema: requestSchema
  //     });
  //   },
  //         shouldValidate: "onBlur",
  //         shouldRevalidate: "onInput"
  //   });

  // Use the formData to display the booking details
  return (
    <div className="bg-white p-8 shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Confirm Your Booking</h2>
      <p className='border-b-2'>Please confirm your booking details below:</p>
      <p><strong>First Name:</strong> {formData.firstName}</p>
      <p><strong>Last Name:</strong> {formData.lastName}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Mobile:</strong> {formData.mobile}</p>
      
      <p><strong>Date/Time:</strong> {formData.date}</p>
      <p><strong>Flight No:</strong> {formData.flightNo}</p>
      {/* <p><strong>Pax:</strong> {formData.pax}</p> */}
      <p><strong>Car Type:</strong> {formData.carType}</p>
      <p><strong>Pickup Point:</strong> {formData.pickupPoint}</p>
      <p><strong>Dropoff Point:</strong> {formData.dropoffPoint}</p>
      <p><strong>Note:</strong> {formData.note}</p>

      <div className='flex justify-between border-t-2 border-b-2 py-2 my-2'>
        <p className=''><strong>Total: </strong></p> 
        <p className='font-semibold'>{ formData.rate } THB</p>
      </div>
      
      {/* Terms and Conditions */}
      <div className='mt-4'>
        <label className="block text-gray-700 mt-4">
          <Label className='font-semibold text-md'>Terms and Conditions</Label>
          <p className="text-sm text-gray-600 mb-1">Please read and agree to the terms and conditions before proceeding.</p>
          <Label className='font-semibold text-md'>Conditions for booking</Label>
          <p className='text-sm'><strong></strong>1. When booking, pay 50% of the total travel price.</p>
          <p className='text-sm'><strong></strong>2. Cancel before 7 days of departure, we will refund 100% of the deposit.</p>
          <p className='text-sm'><strong></strong>3. Cancel before 3 days of departure. We refund 50% of the deposit within 5-7 business days.</p>
      
          {/* Agree to terms and conditions form */}
          <form
            //action={actionForm}
            // id={form.id}
            // onSubmit={form.onSubmit}
            noValidate
            className="mb-4"
          >
            {/* <input type="hidden" name={ fields.requestNumber.name } key={ fields.requestNumber.key } value={formData?.requestNumber} />
            <input type="hidden" name={ fields.firstName.name } key={ fields.firstName.key } value={formData.firstName} />
            <input type="hidden" name="lastName" value={formData.lastName} />
            <input type="hidden" name="email" value={formData.email} />
            <input type="hidden" name="mobile" value={formData.mobile} />
            <input type="hidden" name="date" value={formData.date} />
            <input type="hidden" name="time" value={formData.time} />
            <input type="hidden" name="arrival" value={formData?.arrival} />
            <input type="hidden" name="departure" value={formData?.departure} />
            <input type="hidden" name="flightNo" value={formData?.flightNo} />
            <input type="hidden" name="carType" value={formData.carType} />
            <input type="hidden" name="carModel" value={formData.carModel} />
            <input type="hidden" name="rate" value={formData.rate} />
            <input type="hidden" name="quantity" value={formData?.quantity} />
            <input type="hidden" name="total" value={formData?.total} />
            <input type="hidden" name="pickupPoint" value={formData.pickupPoint} />
            <input type="hidden" name="dropoffPoint" value={formData.dropoffPoint} />
            <input type="hidden" name="note" value={formData?.note} />
            <input type="hidden" name="status" value={formData?.status} />
            <input type="hidden" name="userId" value={formData?.userId} />
            <input type="hidden" name="vendorId" value={formData?.vendorId} />
            <input type="hidden" name="organizationId" value={formData?.organizationId} />  */}

            <input type="checkbox" id="agree" name="agree" className="mr-2" onChange={onAgree} />
            I agree to the Terms and Conditions
            <div className="flex justify-between mt-4">
                <button type="button" onClick={prevStep} className="bg-gray-500 text-white py-2 px-4 rounded">
                  Back
                </button>
                { agree ?
                  <button type="submit" onClick={ handleSendmail } className="bg-blue-500 text-white py-2 px-4 rounded">
                    Confirm
                  </button> 
                  //<SubmitButton text='Confirm' />
                  :
                  <button type="submit" disabled className="bg-blue-200 text-white py-2 px-4 rounded">
                    Confirm
                  </button>
                } 
            </div>
          </form> 

        </label>
      </div>
      
    </div>
  );
};

export default ConfirmationStep;