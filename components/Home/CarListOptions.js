import Image from 'next/image';
import {CarListData} from './../../data/CarListData'
import CarItem from './CarItem'

const CarListOptions = () => {

  return ( 
        <div className='p-4 overflow-auto h-[350px]'>
          { CarListData.map((car) => (      
            <CarItem  car={car} />            
          ))}
           <div className='flex justify-between bottom-10 fixed items-center font-bold text-center text-slate-700 w-full p-4 shadow-xl bg-white  md:w-[30%] border-[1px] rounded-sm '>
              <h2>Make Payment for</h2>
              <button className='bg-black text-white rounded-lg text-center p-3'>LocoRide</button>
            </div>
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