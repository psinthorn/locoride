"use client"

import { useContext, useEffect, useState } from 'react';
import InputItem from './InputItem'
import SourceContext from '@/context/SourceContext';
import DestinationContext from '@/context/DestinationContext';
import CarListOptions from '../vehicle/CarListOptions';
import Services from '../services/Services';
import { Loader, CircleChevronDown, Heart, Plane, Smile, SmilePlus, Snowflake, Sun, TreePalm, Waves, Car } from 'lucide-react';
import IconAnimate from '../utilities/IconAnimate';

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
    <div className='space-y-4 p-4 bg-white rounded-none h-full md:p-6'>
        <div className='p-4 md:p-6 border-2 rounded-t-xl rounded-b-none'>
          <p className='text-2xl text-orange-600 font-bold mb-2 sm:text-1xl'>Book Your Transfer Now</p>
          <p>Arrive in Koh Samui. Click below to get an instant quote and secure your ride today!</p>
          <p className='text-2xl font-light mt-4 sm:text-1xl'>
              From where to where? Let us know youre route.
          </p>
          <InputItem type='source' />
          <InputItem type='destination' /> 
        </div>
        <div className=''>
            <div className='w-full text-2xl font-light items-center'>
              {routeDistance ? 
                  <div>
                  <h2 className='font-semibold text-2xl text-green-800 pt-8'>Available Book Now</h2>
                  <p className='text-sm text-muted-foreground'>Distance: <span>{ routeDistanceInKiloMeter.toFixed(2)}</span>KM</p>
                  </div>
              : 
                <IconAnimate />
              }
            </div>
        </div>
        <div className='mt-2'>
          { routeDistance ? 
            <p className='flex p-1 gap-2'> Select car type for your comfortable <CircleChevronDown /></p> 
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