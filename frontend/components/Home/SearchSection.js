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
            setRouteDistanceInMile(distanceInKilometers * 0.621371); // Convert kilometers to miles
          } else {
            console.error('Error calculating distance:', status);
          }
        }
      );
    } else {
      console.error('Google Maps JavaScript API is not loaded or geometry library is not available.');
    };

    // // Origin and destination variables
    // if (typeof google !== 'undefined' && google.maps && google.maps.geometry) {
    // if (source && destination) {
    // const origin = new google.maps.LatLng(source.lat, source.lng);
    // const dest = new google.maps.LatLng(destination.lat, destination.lng);

    // const distanceInMeters =  google.maps.geometry.spherical.computeDistanceBetween(origin, dest)
    //                           // google.maps.geometry.spherical.computeDistanceBetween(origin, dest);
    // const distanceInKilometers = distanceInMeters / 1000;

    // // setDistance(distanceInKilometers);
    // setRouteDistance(distanceInMeters);
    // setRouteDistanceInKiloMeter(distanceInKilometers);
    // //setRouteDistanceInMile(miles)
    // //setRouteDistanceInKiloMeter(distanceInKilometers)
    // } } else {
    //   console.error('Google Maps JavaScript API is not loaded or geometry library is not available.');
    // }
};

  useEffect(() => {
    calculateDistance();
  }, [source, destination]);

  console.log("raw distance: ", routeDistance);
  // console.log("Miles: ", miles);
  console.log("KM: ", routeDistanceInKiloMeter);


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
              {routeDistance?  <p className='text-sm'>Estimate Distance: { routeDistanceInKiloMeter.toFixed(2)} KM</p> : null }
              { routeDistance? <CarListOptions/> : null }
        </div>
      </div>
  )
}

export default SearchSection