import Image from 'next/image';
import {CarListData} from './../../data/CarListData'
import CarItem from './CarItem'
import { useState } from 'react';

const CarListOptions = () => {

  const [selectedCar, setSelectedCar] = useState();
  const [activeIndex, setActiveIndex] = useState();
  
  return ( 
        <div className='p-4 overflow-auto h-[350px]'>
          { CarListData.map((car, index) => (    
            <div className='cursor-pointer p-4'
            // onclick={() => {setActiveIndex(index); setSelectedCar(car); console.log(selectedCar) }} 
            >  
            <CarItem  car={car} />  
            </div>       
          ))}
          {selectedCar ? 
           <div className='flex justify-between bottom-10 fixed items-center font-bold text-center text-slate-700 w-full p-4 shadow-xl bg-white  md:w-[30%] border-[1px] rounded-sm '>
              <h2>Make Payment for</h2>
              <button className='bg-black text-white rounded-lg text-center p-3'></button>
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