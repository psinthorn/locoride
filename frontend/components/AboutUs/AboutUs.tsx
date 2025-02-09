import React from 'react'

const AboutUs = () => {
  const AboutUs = [
    {
      id: 1,
      title: 'Welcome to Rungruang Sub Samui Co., Ltd.',
      description: `Reliable & Comfortable Airport Transfers in Koh Samui Planning your trip to Koh Samui? Let us take the stress out of your airport transfer! At Rungruang Sub Samui Co., Ltd., we provide safe, reliable, and hassle-free transportation from Samui International Airport to your hotel, villa, or any destination on the island.`,
    },
    {
      id: 2,
      title: 'Our Mission',
      description: 'Our mission is to provide the best possible service to our customers. We strive to make sure that our customers are satisfied with our service.',
    }
  ]
  return (
    <div className='p-16 bg-slate-50 sm:p-8 md:16'>
      
      <div className="grid grid-cols-1 w-full sm:grid-cols-1 sm:p-8  md:grid-cols-2 md:p-16 lg:grid-cols-2 lg:p-24  gap-10">
          {/* <div>
            Image here
          </div> */}
          <div className='m-auto'>
            <h1 className='text-7xl text-center text-slate-600'>
              About Us
            </h1>
              <span className='text-sm text-center text-muted-foreground'>Transfer Made Simple on Koh Samui, Thailand</span>
            
          </div>
          <div>
            <div className="py-4">
              <h2 className='text-3xl text-slate-600'>{AboutUs[0].title}</h2>
              <p className='text-lg text-muted-foreground'>{AboutUs[0].description}</p>
            </div>
            <div className="py-4">
              <h2 className='text-3xl text-slate-600'>{AboutUs[1].title}</h2>
              <p className='text-lg text-muted-foreground'>{AboutUs[1].description}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutUs