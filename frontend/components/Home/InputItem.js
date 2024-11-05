"use Client"

import DestinationContext from '@/context/DestinationContext'
import SourceContext from '@/context/SourceContext'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'


const InputItem = ({type, googleApiKey}) => {
  const [value, setValue] = useState(null);
  const [inputPlaceHolder, setInputPlaceHolder] = useState(null);
  const {source, setSource} = useContext(SourceContext);
  const {destination, setDestination} = useContext(DestinationContext); 

  useEffect(() => {
    type == 'source' ? setInputPlaceHolder('Pickup Location') : setInputPlaceHolder('Dropoff Location')
  },[])

  const getLatAndLng = (place, type) => {
    setValue(place);
    console.log(place);
    console.log(type);
    const placeId = place?.value.place_id;
    console.log("Place ID is: " + placeId);
    const service = new google.maps.places.PlacesService(document.createElement('div'));
    service.getDetails({placeId}, (place, status) => {
      if(status === "OK" && place.geometry && place.geometry.location){
        console.log(place.geometry.location.lat());
        
        if(type === 'source'){
          setSource({
            lat:place.geometry.location.lat(),
            lng:place.geometry.location.lng(),
            name:place.formatted_address,
            label:place.name
          })
        }else{
          setDestination({
            lat:place.geometry.location.lat(),
            lng:place.geometry.location.lng(),
            name:place.formatted_address,
            label:place.name
          })
        };

      }
    })
  };

  return (
    <div className='flex items-center p-3 gap-4 mt-3 bg-slate-200 rounded-lg'>
        <Image src={ type == 'source' ? '/source-destination.png' : '/source-destination.png'} width={40} height={40}/>
        {/* <input type='text' placeholder={ type == 'source' ? 'Pickup Location' : 'Destination'}  className='w-full bg-transparent outline-none' /> */}
        <GooglePlacesAutocomplete
          // apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
          selectProps={{
            value,
            onChange:(place)=>{getLatAndLng(place,type); setValue(place)}, 
            // onChange: setValue, 
            placeholder: inputPlaceHolder,
            isClearable: true,
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