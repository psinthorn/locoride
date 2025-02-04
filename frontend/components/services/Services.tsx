import React from 'react'
import ServiceItem from './ServiceItem'
import { Label } from '../ui/label';

const Services = () => {
  const services = [
    
    {
      id: 1,
      title: 'Private Airport Transfers',
      description: 'We provide private airport transfers to and from the airport. Our drivers are professional and will make sure you get to your destination on time.',
      icon: 'CircleChevronRight'
    },
    {
      id: 2,
      title: 'Group & Family Transport',
      description: 'We provide group and family transport services. Our drivers are professional and will make sure you get to your destination on time.',
      icon: 'CircleChevronRight'
    },
    {
      id: 3,
      title: 'VIP & Luxury Car Services',
      description: 'We provide VIP and luxury car services. Our drivers are professional and will make sure you get to your destination on time.',
      icon: 'CircleChevronRight'
    },
    {
      id: 4,
      title: 'Custom Transport Solutions for Events & Tours',
      description: 'We provide custom transport solutions for events and tours. Our drivers are professional and will make sure you get to your destination on time.',
      icon: 'CircleChevronRight'
    },
];

  return (
    <div className='rounded-t-none rounded-b-xl border-2 p-4'>
    <Label className='font-semibold text-2xl'>Our Services</Label>
      <div className='bg-blue-200 p-2 mt-0'>
        {services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </div>
  )
}

export default Services