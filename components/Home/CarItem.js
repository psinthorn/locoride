
import Image from 'next/image';
import { HiUser } from 'react-icons/hi';

const CarItem = ({car}) => {
  return (
    <div className='flex p-2 m-2 gap-4 rounded-sm  hover:bg-slate-300 active:bg-slate-400 focus:outline-2px focus:ring focus:ring-slate-200'>
          <Image src={car.image}alt="car type" width={100} height={60} />
       
        <div>
          <div className='flex items-center gap-3'>
              <h2 className='font-semibold items-center gap-2 '>{car.name}</h2> 
              <span className='flex items-center font-normal text-center'><HiUser/><p className='items-center mt-1'>{ car.seat }</p></span>
          </div>
          <p>{car.desc}</p>
        </div>
        <div className='font-bold'>
            $150.00
        </div>        
    </div>
  )
}

export default CarItem