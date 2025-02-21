"use client"

import {CarListData} from '../../data/CarListData'
import CarItem from './CarItem'
import { useEffect, useState } from 'react';
import RateCalculate from '../utilities/RateCalculate';
import { useRequestTransferContext } from '@/context/RequestTransferContext';



const CarListOptions = ({ distance,  handleBookNow }) => {

  const [selectedCar, setSelectedCar] = useState();
  const [activeIndex, setActiveIndex] = useState();
  const [rateEstimate, setRateEstimate] = useState(0);
  const {requestTransfer, setRequestTransfer} = useRequestTransferContext();
  

  const handleClick = (index) => {
    setActiveIndex(index);
    const car = CarListData[index];
    setSelectedCar(car);
  };

  useEffect(() => { 
    if (activeIndex && selectedCar) {
      const rateAvrage = RateCalculate({distance}, selectedCar.rate);
      setRateEstimate(rateAvrage);
    }
    setRequestTransfer({...requestTransfer, carType: 'SUV', carModel: "Fortuner", rate: rateEstimate});
    console.log("Request Transfer is: ", requestTransfer);
  }, [activeIndex]);

  return ( 
    <div>
        <div className='p-4 overflow-auto h-[480px]'>
          { CarListData.map((car, index) => (    
            <div key={car.ID} className='cursor-pointer p-2'
            onClick={() => handleClick(index)}
            >
              <CarItem key={car.ID} car={car} distance={distance} rate={rateEstimate} />  
            </div>       
          ))}     
        </div>    

        { selectedCar?
          <div className='relative flex justify-between bottom-8 items-center font-bold text-center w-full text-slate-700 p-4 shadow-xl bg-white  md:w-full sm:w-full border-[1px] rounded-sm '>
             <h2>{selectedCar.type} Rate Avg. {rateEstimate} THB</h2>
             <button onClick={() => handleBookNow(selectedCar.type, selectedCar.model, rateEstimate)} className='bg-black text-white rounded-lg text-center p-4'>Book Now</button>
             {/* <Booking /> */}
           </div> 
           : null
        }

   </div>
  )
}

export default CarListOptions