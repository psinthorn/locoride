"use client"

import {CarListData} from '../../data/CarListData'
import CarItem from './CarItem'
import { useContext, useEffect, useState } from 'react';
import RateCalculate from '../utilities/RateCalculate';
import { useRouter } from 'next/navigation';
import SourceContext from '@/context/SourceContext';
import DestinationContext from '@/context/DestinationContext';

const CarListOptions = (distance, sou, des) => {

  const [selectedCar, setSelectedCar] = useState();
  const [activeIndex, setActiveIndex] = useState();
  const [rateEstimate, setRateEstimate] = useState(0);
  const {source, setSource} = useContext(SourceContext);
  const {destination, setDestination} = useContext(DestinationContext); 
  const router = useRouter();

  const handleClick = async (index) => {
    setActiveIndex(index);
    const car = CarListData[index];
    setSelectedCar(car);

    if (car) {
      const rateAvrage = await RateCalculate(distance, car.rate);
      setRateEstimate(rateAvrage);
      //console.log(typeof(rateAvrage));
    }
  };

  // send data to booking page 
  const handleBookNow = () => {
    if (selectedCar) {
      rateEstimate.toString();
      router.push(`/booking?carType=${selectedCar.type}&carModel=${selectedCar.model}&rateEstimate=${rateEstimate}&source=${JSON.stringify(source)}&destination=${JSON.stringify(destination)}`);
    }
  };

  return ( 
    <div>
        <div className='p-4 overflow-auto h-[480px]'>
          { CarListData.map((car, index) => (    
            <div className='cursor-pointer p-2'
            onClick={() => handleClick(index)}
            >
              <CarItem key={car.ID} car={car} distance={distance} />  
            </div>       
          ))}     
        </div>    

        { selectedCar?
          <div className='relative flex justify-between bottom-8 items-center font-bold text-center w-full text-slate-700 p-4 shadow-xl bg-white  md:w-full sm:w-full border-[1px] rounded-sm '>
             <h2>{selectedCar.type}  Avg. {rateEstimate} THB</h2>
             <button onClick={handleBookNow} className='bg-black text-white rounded-lg text-center p-4'>Book Now</button>
             {/* <Booking /> */}
           </div> 
           : null
        }

   </div>
  )
}

export default CarListOptions