"use client"

import { useContext, useEffect, useState } from 'react';
import InputItem from './InputItem'
import SourceContext from '@/context/SourceContext';
import DestinationContext from '@/context/DestinationContext';

const SearchSection = () => {
  const {source, setSource} = useContext(SourceContext);
  const {destination, setDestination} = useContext(DestinationContext); 
  const [routeDistance, setRouteDistance] = useState();
  const [routeDistanceInMile, setRouteDistanceInMile] = useState();
  const [routeDistanceInKiloMeter, setRouteDistanceInKiloMeter] = useState();

  // useEffect(() => {
  //   console.log(source);
  //   console.log(destination)
  // },[source, destination]);

  
  const milesToKiloMeters = (miles) => {
    const conversionFactor = 1.60934
    const km = miles * conversionFactor
    setRouteDistanceInKiloMeter(km)
  };

  const calculateDistance = () => {
    const distanceTotal = google.maps.geometry.spherical.computeDistanceBetween(
      {lat: source.lat, lng:source.lng},
      {lat: destination.lat, lng: destination.lng}
    )

    console.log(distanceTotal);
    setRouteDistance(distanceTotal)
    console.log(routeDistance);
    const miles = distanceTotal*0.000621374;
    setRouteDistanceInMile(miles);
    console.log("Distance: " + routeDistanceInMile);
    // setRouteDistanceInKiloMeter(milesToKiloMeters(routeDistanceInMile));
    console.log(routeDistanceInMile);
    console.log(routeDistanceInKiloMeter);

  };

  return (
    <div className='p-2 md:p-4 border-[2px] rounded-xl'>
        <p className='text-[20px] font-bold'>
            Location and Estimation
        </p>
        <InputItem type='source' />
        <InputItem type='destination' />    
        <button 
          className='w-full p-3 mt-5 bg-orange-400 text-white rounded-lg' 
          onClick={()=>calculateDistance()}
        >Search</button>  
    </div>
  )
}

export default SearchSection