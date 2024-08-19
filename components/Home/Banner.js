import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="relative h-[650px] p-5 m-5 w-full ml-5">
      <Image 
      src="/banner_en.png"  
      fill
        // width={0}
        // height={0}
        // sizes="100vw"
        // style={{ width: '100%', height: 'auto' }}     // optional 
        alt="rOs website banner" 
      /> 
     
    </div>
  )
}

export default Banner