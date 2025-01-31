"use client"

import React, { useContext, useCallback, useEffect, useState, memo } from 'react';
import SourceContext from '@/context/SourceContext'
import DestinationContext from '@/context/DestinationContext'
import { DirectionsRenderer, GoogleMap, MarkerF, OverlayView, OverlayViewF, useJsApiLoader } from '@react-google-maps/api';

const GoogleMapsSection = () => {
  const {source, setSource} = useContext(SourceContext);
  const {destination, setDestination} = useContext(DestinationContext); 
  const [directionRoutePoints, setDirectionRoutePoints] = useState([]);
  const containerStyle = {
    width: '100%',
    height: '600px'
  };
  
  const [center,setCenter ] = useState({
    // diamond pool villa samui 
    lat: 9.550519, 
    lng: 100.0662909
  
    // // coffee farm samui 
    // lat: 9.5321372, 
    // lng: 100.0438586
   
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
    }

    if(source.length != [] && destination.length != []){
      directionRoute();
    }

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
  }
    
    const onLoad = useCallback(function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
      setMap(null)
    }, [])


  return (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
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
                {/* Show location label */}
                {/* <div>
                  <p>{destination.label}</p>
                </div> */}
              </OverlayViewF>

            </MarkerF> : null }

            {/* render route on the maps  */}
            
            <DirectionsRenderer 
              directions={directionRoutePoints}
              options={{
              polylineOptions:{
                strokeColor: "#FFA500",
                strokeWeight: 3,
                draggable: false,
              },
                suppressMarkers: true
              }}
            />

        </GoogleMap>
      ) 
}

export default GoogleMapsSection;
// export default memo(GoogleMapsSection);