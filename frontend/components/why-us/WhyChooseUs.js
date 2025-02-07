import React from 'react'
import WhyChooseUsItem from '@/components/why-us/WhyChooseUsItem'
import { Car, Clock, DollarSign, ShieldCheck, Smile } from 'lucide-react';

const WhyChooseUs = () => {
  const items = [
    {
      id: 1,
      title: '24/7 Ready & Waiting',
      description: 'Book with us anytime—we are always prepared and ready for you!',
      icon: <Clock/>,
    },
    {
      id: 2,
      title: 'Affordable Pricing',
      description: 'No hidden fees, just transparent rates, with our best rate guarantee.',
      icon: <DollarSign />,
    },
    {
      id: 3,
      title: 'Comfort & Safety',
      description: 'Enjoy a smooth ride in well-maintained vehicles, driven by professional and reliable drivers.',
      icon: <ShieldCheck className='w-full' />,
    },
    {
      id: 4,
      title: 'Fast & Convenient',
      description: 'Enjoy a direct, door-to-door transfer service, smooth and seamless ride to your destination.',
      icon: <Smile/>,
    },
    // {
    //   id: 5,
    //   title: 'Group & VIP Transfers',
    //   description: 'Options for families, business travelers, and luxury services.',
    //   },
      
  ];

  return (
    <div className='my-4 relative'>
      <h1 className='text-5xl text-center font-semibold'>Why Choose Us</h1>
      <p className='text-center text-2xl font-light mt-1'>We are committed to providing you with</p>
      <div className="grid grid-cols-1 w-full sm:grid-cols-2 sm:p-8 sm:bg-none  md:grid-cols-3 md:p-16 lg:grid-cols-4 lg:p-24  gap-8">
          {items.map((item) => (
            <div key={item.id}>
              <WhyChooseUsItem title={item.title} description={item.description} icon={item.icon} />
            </div>
            )
          )}
        </div>
    </div>
  )
}
export default WhyChooseUs