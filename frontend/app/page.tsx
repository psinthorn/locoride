"use client"

import GoogleMapsSection from '@/components/Home/GoogleMapsSection'
import SearchSection from '@/components/Home/SearchSection'
import SourceContext from '@/context/SourceContext'
import DestinationContext from '@/context/DestinationContext'
import WhyChooseUs from '@/components/why-us/WhyChooseUs'
// import GoogleApiKeyContext from '@/context/GoogleApiKeyContext'
import { useState, useEffect, useContext } from "react";
import { LoadScript } from '@react-google-maps/api'
import MainBanner from '@/components/hero/MainBanner'
import AboutUs from '@/components/AboutUs/AboutUs'
// import CarListOptions from '../components/vehicle/CarListOptions'

export default function Home() {

  const [source, setSource] = useState<any[]>([]);
  const [destination, setDestination] = useState<any[]>([]);   
  
  const googleAPiKeyContext = process.env.NEXT_PUBLIC_GOOGLE_API_KEY

  useEffect(() => {
    console.log('source', source)
    console.log('destination', destination)
  }, [source, destination])

  return (
    <SourceContext.Provider 
    value={{
      source, 
      setSource
      }}>
      <DestinationContext.Provider 
      value={{
        destination, 
        setDestination
        }}>       
          <LoadScript 
            libraries={['places']}
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ''}
          >
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 py-2 gap-0 bg-slate-200">
              <div >
                <SearchSection />
              </div>
              <div className="col-span-2 relative">
                { source.length == 0 || destination.length == 0 ? <MainBanner />  : <GoogleMapsSection /> }
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 p-6 gap-5 ">
              <div >
                  {/* <SearchSection /> */}
              </div>
            </div>
            <div className='w-full mx-auto p-6 gap-5'>
              <WhyChooseUs />
            </div>
            {/* <div id="faqs" className='w-full min-h-96 mb-32'>
              <Faq />
            </div> */}
            <div className='w-full min-h-96'>
              <AboutUs />
            </div>
          </LoadScript>    
      </DestinationContext.Provider>
    </SourceContext.Provider>
  );
}
