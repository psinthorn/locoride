import React from 'react'

const AboutUs = () => {
  return (
    <div className='p-32 sm:p-16 md:24'>
      <h1 className='text-7xl text-center py-16'>About Us</h1>
      <div className="grid grid-cols-1 w-full sm:grid-cols-1 sm:p-8  md:grid-cols-2 md:p-16 lg:grid-cols-2 lg:p-24  gap-8">
          {/* <div>
            Image here
          </div> */}
          <div>
            <h2 className='text-4xl'>Vision</h2>
            <p className='text-lg'>Our mission is to provide the best possible service to our customers. We strive to make sure that our customers are satisfied with our service.</p>
          </div>
          <div>
            <h2 className='text-4xl'>Our Mission</h2>
            <p className='text-lg'>Our mission is to provide the best possible service to our customers. We strive to make sure that our customers are satisfied with our service.</p>
          </div>
        </div>
    </div>
  )
}

export default AboutUs