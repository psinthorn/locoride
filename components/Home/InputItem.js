import Image from 'next/image'
import React from 'react'

const InputItem = ({type}) => {
  return (
    <div className='flex items-center p-3 gap-4 mt-3 bg-slate-200 rounded-lg'>
        <Image src={ type == 'source' ? '/source.png' : '/destination.png'} width={15} height={15}/>
        <input type='text' placeholder={ type == 'source' ? 'Pickup Location' : 'Destination'}  className='w-full bg-transparent outline-none' />
    </div>
  )
}

export default InputItem