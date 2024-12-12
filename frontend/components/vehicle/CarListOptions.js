import Image from 'next/image';
import {CarListData} from '../../data/CarListData'
import CarItem from './CarItem'
import { useEffect, useState } from 'react';


const CarListOptions = (distance) => {

  const [selectedCar, setSelectedCar] = useState();
  const [activeIndex, setActiveIndex] = useState();
  const [rateEstimate, setRateEstimate] = useState(0);

 

  // useEffect(() => {
  //   //setRateEstimate(0);
  //   // rateCalculate(distance,rate);
  // }, (distance));


  return ( 
        <div className='p-4 overflow-auto h-[480px]'>
          { CarListData.map((car, index) => (    
            <div className='cursor-pointer p-2'
            onClick={() => { setActiveIndex(index); setSelectedCar(car); console.log(selectedCar); }} 
            >
              <CarItem  car={car} distance={distance} />  
            </div>       
          ))}

          {selectedCar?
           <div className='flex justify-between bottom-8 fixed items-center font-bold text-center w-full text-slate-700 p-4 shadow-xl bg-white  md:w-[30%] sm:w-full border-[1px] rounded-sm '>
              <h2>Make Payment for {selectedCar.type}</h2>
              <button className='bg-black text-white rounded-lg text-center p-4'>Book Now</button>
              {/* <Booking /> */}
            </div> 
            : null
          }
        </div>       
   

    // <div className='mt-10 mb-10'>
    //   <h2 className='font-bold'>Choose Car Type and Book Now</h2>
    //   <div className='flex justify-between p-4'>
    //   { CarListData.map((car) => (
    //     <CarItem  car={car} />
    //   ))}
    //   </div> 
    // </div>
  )
}

export default CarListOptions