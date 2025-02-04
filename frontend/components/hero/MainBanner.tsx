import Image from 'next/image'
import React from 'react'
import Banner from '../../public/rrss-banner.png'

const MainBanner = () => {
  return (
    // use max-h-96 if need the search box show in the middle of the banner
    <div className='hidden md:block md:w-full md:h-[95%]'>
      <Image src={Banner} alt='RRSS main banner' />
    </div>
  )
}

export default MainBanner