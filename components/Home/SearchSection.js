"use client"

import InputItem from './InputItem'

const SearchSection = () => {
  return (
    <div className='p-2 md:p-4 border-[2px] rounded-xl'>
        <p className='text-[20px] font-bold'>
            Location and Estimation
        </p>
        <InputItem type='source' />
        <InputItem type='destination' />    
        <button className='w-full p-3 mt-5 bg-orange-400 text-white rounded-lg'>Search</button>  
    </div>
  )
}

export default SearchSection