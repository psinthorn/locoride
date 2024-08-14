"use Client"

import Image from 'next/image'
import { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

const InputItem = ({type}) => {
  const [value, setValue] = useState(null);
  const [inputPlaceHolder, setInputPlaceHolder] = useState(null);

  useEffect(() => {
    type == 'source' ? setInputPlaceHolder('Pickup Location') : setInputPlaceHolder('Dropoff Location')
  },[])
  return (
    <div className='flex items-center p-3 gap-4 mt-3 bg-slate-200 rounded-lg'>
        <Image src={ type == 'source' ? '/source.png' : '/destination.png'} width={15} height={15}/>
        {/* <input type='text' placeholder={ type == 'source' ? 'Pickup Location' : 'Destination'}  className='w-full bg-transparent outline-none' /> */}
        <GooglePlacesAutocomplete
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
          selectProps={{
            value,
            onChange: setValue,
            placeholder:inputPlaceHolder,
            isClearable:true,
            className: 'w-full',
            components:{
              DropdownIndicator: false,
            },
            styles:{
              control: (provided) => ({
                ...provided,
                backgroundColor: '#00ffff00', //transparent code is #00ffff00
                border:'none',
              }),
            }
          }}
        />
    </div>
  )
}

export default InputItem