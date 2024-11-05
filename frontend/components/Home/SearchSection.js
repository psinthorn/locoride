"use client"

import { useContext, useEffect, useState } from 'react';
import InputItem from './InputItem'
import SourceContext from '@/context/SourceContext';
import DestinationContext from '@/context/DestinationContext';
import { calculateOverrideValues } from 'next/dist/server/font-utils';
import CarListOptions from './CarListOptions';

const SearchSection = () => {
  const {source, setSource} = useContext(SourceContext);
  const {destination, setDestination} = useContext(DestinationContext); 
  const [routeDistance, setRouteDistance] = useState(0);
  const [routeDistanceInMile, setRouteDistanceInMile] = useState(0);
  const [routeDistanceInKiloMeter, setRouteDistanceInKiloMeter] = useState(0);

  const calculateDistance  = () => {
    const distance = google.maps.geometry.spherical.computeDistanceBetween(
      { lat: source.lat, lng: source.lng },
      { lat: destination.lat, lng: destination.lng }
    )
    setRouteDistance(distance);
    const miles = (distance*0.000621374).toFixed(2)
    const km = (miles * 1.60934).toFixed(2)
    setRouteDistanceInMile(miles)
    setRouteDistanceInKiloMeter(km)
    
    console.log("raw distance: ", routeDistance );
    console.log("Miles: ", miles);
    console.log("KM: ", km);
  }

  return (
    <div>
      <div className='p-2 md:p-4 border-[2px] rounded-xl'>
          <p className='text-[20px] font-bold'>
              From - To Rate Estimation
          </p>
          <InputItem type='source' />
          <InputItem type='destination' />    
          <button 
            className='w-full p-3 mt-5 bg-orange-400 text-white rounded-lg' 
            onClick={()=>calculateDistance()}
          >Search</button>  
      </div>
        <div className='p-4'>
            <p className='text-[20px] font-semibold items-center'>
              {routeDistance? "Available Book Now" : <p className='items-center text-center'>Click Search for Availibility Check</p>}
            </p>
              {routeDistance?  <p className='text-sm'>Estimate Distance: { routeDistanceInKiloMeter } KM</p> : null }
              { routeDistance? <CarListOptions/> : null }
        </div>
      </div>
  )
}

export default SearchSection