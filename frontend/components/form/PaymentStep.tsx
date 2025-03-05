import Image from 'next/image';
import React from 'react';
import { Label } from '../ui/label';
import KrungsriLogo from '../../public/krungsri-bank-logo.png';
import KrungSriQrCode from '../../public/krungsri-bank-qrcode.png';
import KrungsriPromptpay from '../../public/krungsri-bank-promtpay-logo.png';

const PaymentStep = ({ formData, handleChange, nextStep, prevStep }: any) => {
  return (
    <div className="bg-white p-8 shadow-md rounded">
      <h1 className="flex justify-center items-center text-xl font-semibold pb-4">Payment Details</h1>
      {/* Bank Details */}
      <div className='p-4'>
        <div className='flex justify-center items-center text-center mb-4'>
          <Image src={KrungsriLogo} alt="Bank Name" width={100} height={100} className='flex justify-center items-center text-center' />
        </div>
        <div className='flex justify-between pb-1 border-b-2 '>
          <div className='text-left'>Bank Name:</div>
          <div className='gap-4'></div>
          <div>Krungsri Bank (Bank of Ayudhya Public Company Limited.)</div>
        </div>
        <div className='flex justify-between pb-1 border-b-2'>
          <div className='text-left'>Bank Type:</div>
          <div className='gap-4'></div>
          <div>Savings</div>
        </div>
        <div className='flex justify-between pb-1 border-b-2'>
          <div>Bank Account:</div>
          <div className='gap-4'></div>
          <div>478-1-07889-8</div>
        </div>
        <div className='flex justify-between pb-1 border-b-2'>
          <div>Account Name:</div>
          <div className='gap-4'></div>
          <div>Thanita Ngamsuppakorn</div>
        </div>
        <div className='flex justify-between pb-1 border-b-2'>
          <div>SWIFT Code:</div>
          <div className='gap-4'></div>
          <div>AYUDTHBK</div>
        </div>
      </div> 

      <div className='flex flex-col justify-center text-center mx-auto my-8'>
        <div>
          <Label>Scan QR-CODE for Payment</Label>
        </div>
        <div className='flex justify-center items-center'>
          <Image src={KrungSriQrCode} alt="Bank Name" width={200}  />
        </div>    
        <div>
          <Label>Promptpay Number</Label>
          <div className='text-md font-bold'>
            066-164-5987
          </div>  
          <Label>(น.ส. ฐานิตา งามศุภกร)</Label>
        </div> 
        <div className='flex justify-center items-center'>
          <Image src={KrungsriPromptpay} alt="Bank Name" width={100}  />
        </div> 
      </div>    
    </div>
  );
};

export default PaymentStep;