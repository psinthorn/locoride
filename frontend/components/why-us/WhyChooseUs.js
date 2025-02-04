import React from 'react'
import WhyChooseUsItem from '@/components/why-us/WhyChooseUsItem'

const WhyChooseUs = () => {
  const items = [
    {
    id: 1,
    title: 'Comfort & Safety',
    description: 'Well-maintained vehicles with professional drivers.',
    },
    {
    id: 2,
    title: 'Affordable Pricing',
    description: 'No hidden fees, just transparent rates.',
    },
    {
    id: 3,
    title: '24/7 Availability',
    description: 'Book anytime, we operate day and night.',
    },
    {
    id: 4,
    title: 'Fast & Convenient',
    description: 'Direct, door-to-door service with no waiting.',
    },
    // {
    //   id: 5,
    //   title: 'Group & VIP Transfers',
    //   description: 'Options for families, business travelers, and luxury services.',
    //   },
      
  ];

  return (
    <div className='my-16 relative'>
      <h1 className='text-7xl text-center font-semibold'>Why Choose Us</h1>
      <div className="grid grid-cols-1 w-full sm:grid-cols-2 sm:p-8 sm:bg-none  md:grid-cols-3 md:p-16 lg:grid-cols-4 lg:p-24  gap-8">
          
          {items.map((item) => (
            <div key={item.id}>
              <WhyChooseUsItem title={item.title} description={item.description} />
            </div>
            )
          )}
          
          {/* <div>
            <WhyChooseUsItem />
          </div>
          <div>
            <WhyChooseUsItem />
          </div>
          <div>
            <WhyChooseUsItem />
          </div> */}
        </div>
    </div>
  )
}
export default WhyChooseUs