"use client"

import { useContext, useEffect, useState } from 'react';
import InputItem from './InputItem'
import SourceContext from '@/context/SourceContext';
import DestinationContext from '@/context/DestinationContext';
import CarListOptions from '../vehicle/CarListOptions';
import Services from '../services/Services';

const SearchSection = () => {
  const {source, setSource} = useContext(SourceContext);
  const {destination, setDestination} = useContext(DestinationContext); 
  const [routeDistance, setRouteDistance] = useState(0);
  const [routeDistanceInKiloMeter, setRouteDistanceInKiloMeter] = useState(0);
  
  
  const calculateDistance  = () => {
    if (source && destination) {
        const service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
          {
            origins: [new google.maps.LatLng(source.lat, source.lng)],
            destinations: [new google.maps.LatLng(destination.lat, destination.lng)],
            travelMode: google.maps.TravelMode.DRIVING,
          },
          (response, status) => {
            if (status === google.maps.DistanceMatrixStatus.OK) {
              const distanceInMeters = response.rows[0].elements[0].distance.value;
              const distanceInKilometers = distanceInMeters / 1000;

              setRouteDistance(distanceInMeters);
              setRouteDistanceInKiloMeter(distanceInKilometers);
        
            } else {
              console.error('Error calculating distance:', status);
            }
          }
        );
    } else {
      console.error('Google Maps JavaScript API is not loaded or geometry library is not available.');
    };
};

  useEffect(() => {
    console.log("source: ", source);
    console.log("destination: ", destination);
    setSource(source);
    setDestination(destination);
    calculateDistance();
  }, [source, destination]);

  return (
    <div className='space-y-6 p-4 bg-white rounded-none h-full md:p-6'>
      <div className='p-4 md:p-6 border-2 rounded-t-xl rounded-b-none'>
          <p className='text-2xl font-light mb-2 sm:text-1xl'>
              From where to where? Let us know youre route.
          </p>
          <p>
              to check availibility and fare rate now.
          </p>
          <InputItem type='source' />
          <InputItem type='destination' />    
          {/* <button 
            className='w-full p-3 mt-5 bg-orange-400 text-white rounded-lg' 
            onClick={()=>calculateDistance()}
          >Search</button>   */}
      </div>
      <div className='p-4 md:p-5 border-2 rounded-none'>
            <p className='text-2xl font-light items-center'>
              {routeDistance ? 
              <span className='text-green-700 font-bold'>Available Book Now</span> 
              : 
              <p className="items-center text-center font-bold text-orange-500">" Transfers Made Simple"</p>}
            </p>
              {routeDistance ?  
                <p className='text-sm'>Distance: <span>{ routeDistanceInKiloMeter.toFixed(2)}</span>KM</p> 
                : 
                null }
        </div>
        <div className='mt-2'>
          { routeDistance ? 
            <p className='p-1'> Select car type for your comfortable</p> 
            : 
            null }            
          { routeDistance ? 
            <CarListOptions distance={routeDistanceInKiloMeter.toFixed(2)} source={source} destination={destination}  /> 
            : 
            null }
        </div>
        <Services />
      </div>
  )
}

export default SearchSection;