"use client"


// import GoogleMapsSection from '@/components/home/GoogleMapsSection'
// import SearchSection from '@/components/home/SearchSection'
import SourceContext from '@/context/SourceContext'
import DestinationContext from '@/context/DestinationContext'
// import GoogleApiKeyContext from '@/context/GoogleApiKeyContext'
import { useState, useEffect, useContext } from "react";
import { LoadScript } from '@react-google-maps/api'
// import CarListOptions from '../components/vehicle/CarListOptions'

export default function Home() {

  const [source, setSource] = useState<any[]>([]);
  const [destination, setDestination] = useState<any[]>([]);   
  

  const googleAPiKeyContext = process.env.NEXT_PUBLIC_GOOGLE_API_KEY

  // useEffect(() => {
  //   // setApiKey({apiKey: googleAPiKeyContext})
  // },[])
  

  return (
    <SourceContext.Provider value={{source, setSource}}>
      <DestinationContext.Provider value={{destination, setDestination}}>
      <LoadScript 
        libraries={['places']}
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ''}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 p-6 gap-5 ">
          <div >
            {/* <SearchSection /> */}
          </div>
          <div className="col-span-2">
            {/* <GoogleMapsSection />  */}
          </div>
        </div>
      </LoadScript>
      </DestinationContext.Provider>
    </SourceContext.Provider>
  );
}
