"use client"

import Image from 'next/image';
import { use, useState, useEffect } from 'react';
import { HiUser } from 'react-icons/hi';

const CarItem = ({car, distance}) => {
  const [activeID, setActiveID] = useState();
  const [buttonID, setButtonID] = useState();
  const [rateEstimate, setRateEstimate] = useState(0);

  // Set active car ID and button ID
  const handleClick = (carID) => {
    setActiveID(carID);
    console.log("Car ID: ", activeID);
    setButtonID(carID);
    console.log("Button ID: ", buttonID);
    setRateEstimate(rateEstimate);
    console.log("distance: ", distance);
    console.log("Rate: ", car.rate);
    
  }

  // Calculate rate based on distance 
  const rateCalculate = ({distance}, rate) => {
    console.log("Distance: ", distance);
    if (distance <= 5) {
      console.log(rate[0]);
      setRateEstimate((rate[0]).toFixed(0))
    }else if (distance >5 && distance <= 15) {
      console.log(rate[1]);
      setRateEstimate(((distance-5)*rate[1]+rate[0]).toFixed(0))
    }else if (distance > 15) {
      console.log("Rate: ", rate[2]);
      setRateEstimate(((distance-15)*rate[2]+(10*rate[1])+rate[0]).toFixed(0))
    }
  };

  // if distance or car rate changes, then recalculate rate
  useEffect(() => {
      rateCalculate(distance, car.rate);
  }, [distance, car]);


  return (
    <div className='flex p-3  m-1 gap-2 rounded-sm  hover:bg-slate-200 active:bg-slate-400 focus:outline-2px focus:ring focus:ring-slate-200'
      onClick={() => { handleClick(car.ID); rateCalculate(distance, car.rate); console.log("rate:", car.rate) } }
    > 
        <div className='hidden w-full lg:block' >
          <Image layout="responsive" src={car.image}alt="car type" width={100} height={60} />
        </div>
        <div>
          <div className='flex items-center gap-3'>
              <h2 className='font-semibold items-center gap-2 '>{car.type}</h2> 
              <span className='flex items-center font-normal text-center'><HiUser/><p className='items-center mt-1'>{ car.seat }</p></span>
          </div>
          <p>{car.desc}</p>
        </div>
        <div className='font-bold'>
           { activeID? rateEstimate : null } 
            <br/>
        </div>   
        {/* { activeID === car.ID ? <button className='bg-black text-white rounded-lg text-center p-3'>Book Now</button> : null}      */}
    </div>
  )
}

export default CarItem