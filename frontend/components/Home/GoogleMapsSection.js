"use client"

import React, { useCallback, useEffect, useState, memo } from 'react';
import { useSourceContext } from '@/context/SourceContext'
import { useDestinationContext } from '@/context/DestinationContext'
import { DirectionsRenderer, GoogleMap, MarkerF, OverlayView, OverlayViewF, useJsApiLoader } from '@react-google-maps/api';
import { Divide } from 'lucide-react';

// rate per km
const GoogleMapsSection = () => {

  const {source, setSource} = useSourceContext();
  const {destination, setDestination} = useDestinationContext(); 

  const [directionRoutePoints, setDirectionRoutePoints] = useState([]);
  const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
  const [center,setCenter ] = useState({
    // diamond pool villa samui 
    lat: 9.550519, 
    lng: 100.0662909
  });

  const [map, setMap] = useState(null)

// Pickup location
  useEffect(() => {

    if(source?.length != [] && map){
      map.panTo(
        {
          lat: source.lat,
          lng: source.lng
        }
      )
      setCenter({
        lat: source.lat,
        lng: source.lng
      })
    };

    if(source.length != [] && destination.length != []){
      directionRoute();
    };

  },[source]);


// Destination drop off
  useEffect(() => {
    if(destination?.length != [] && map ){
      map.panTo(
        {
          lat: destination.lat,
          lng: destination.lng
        })
      setCenter({
        lat: destination.lat,
        lng: destination.lng
      })
    }
    if(source.length != [] && destination.length != []){
      directionRoute();
    }
  },[destination])

  const directionRoute = () => {
    const DirectionService = new google.maps.DirectionsService();
    DirectionService.route({
      origin:{lat: source.lat, lng: source.lng},
      destination:{lat: destination.lat, lng: destination.lng},
      travelMode: google.maps.TravelMode.DRIVING
    }, (result, status) => {
      if(status === google.maps.DirectionsStatus.OK){
        console.log('result: ' + result  );
        setDirectionRoutePoints(result)
      }else{
        console.error('Error: ' + Error);
      }
    })
  };
    
    const onLoad = useCallback(function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
      setMap(null)
    }, []);


  return (
    <div className='w-full h-full relative mx-auto bg-white'>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{mapId:'976a7c2e003306bf'}}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          { source?.length != []? <MarkerF
              position={{lat: source.lat, lng: source.lng}} 
              icon={{
                url: '/source-destination.png',
                scaledSize:{
                  width: 60,
                  height: 60
                }
              }}
            >

            <OverlayViewF
              position={{lat: source.lat, lng: source.lng}} 
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              {/* Show location label
              <div>
                <p className='text-orange-400'>{source.label}</p>
              </div> */}

            </OverlayViewF>
              </MarkerF>: null }

              { destination?.length != []? <MarkerF
                  position={{lat: destination.lat, lng: destination.lng }} 
                  icon={{
                    url: '/source-destination.png',
                    scaledSize:{
                      width: 60,
                      height: 60
                    }
                  }}
                >
              <OverlayViewF
                position={{lat: destination.lat, lng: destination.lng}} 
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              >
              </OverlayViewF>
            </MarkerF> : null }

            {/* render route on the maps  */}
            
            <DirectionsRenderer 
              directions={directionRoutePoints}
              options={{
              polylineOptions:{
                strokeColor: "#FFA500",
                strokeWeight: 4,
                draggable: false,
              },
                suppressMarkers: true
              }}
            />

        </GoogleMap>
    </div>
      ) 
}

export default GoogleMapsSection;