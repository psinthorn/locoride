"use client"

import Image from 'next/image';
import { use, useState, useEffect } from 'react';
import { HiUser } from 'react-icons/hi';
import RateCalculate  from './../utilities/RateCalculate';
import { useRequestTransferContext } from '@/context/RequestTransferContext';

const CarItem = ({car, distance }) => {
  const { requestTransfer, setRequestTransfer } = useRequestTransferContext();

  const [activeID, setActiveID] = useState();
  const [carId, setCarId] = useState();
  const [buttonID, setButtonID] = useState();
  const [rateEstimate, setRateEstimate] = useState(0);
  const [selectedCar, setSelectedCar] = useState();

  // Set active car ID and button ID
  const handleClick = (carID) => {
    setCarId(carID);
    setActiveID(carID);
    setButtonID(carID);
    setSelectedCar(car);
  };

  // if distance or car rate changes, then recalculate rate
  useEffect(() => {
      const rateAvrage = RateCalculate({distance}, car.rate);
      setRateEstimate(rateAvrage);
      setRequestTransfer({...requestTransfer, carType: car.type, carModel: car.model, rate: rateEstimate});
  }, [activeID, distance, car]); 

  return (
    <div className='flex p-3  m-1 gap-2 rounded-sm  hover:bg-slate-200 active:bg-slate-400 focus:outline-2px focus:ring focus:ring-slate-200'
      onClick={() => {handleClick(car.ID)} }
    > 
        <div className='hidden w-full lg:block' >
          <Image layout="responsive" src={car.image} alt={car.model} width={100} height={60}  />
        </div>
        <div>
          <div className='flex items-center gap-3'>
              <h2 className='font-semibold items-center gap-2 '>{car.type}</h2> 
              <span className='flex items-center font-normal text-center'><HiUser/><p className='items-center mt-1'>{ car.seat }</p></span>
          </div>
          <p className='p-1'>{car.desc}</p>
        </div>

        {/* {car.ID === activeID ? */}
          <div className='font-bold'>
          {/* Display rate estimate on click car item */}
           {/* { activeID ? Math.ceil(rateEstimate).toFixed(2) : null }  */}

          {/* Display rate estimate on all car items if distance is set */}

           { distance ? Math.ceil(rateEstimate).toFixed(2) :  0.0 } 
            <br/>
            THB
          </div>   
          {/* : null } */}  
        {/* { activeID === car.ID ? <button className='bg-black text-white rounded-lg text-center p-3'>Book Now</button> : null}      */}
    </div>
  )
}

export default CarItem