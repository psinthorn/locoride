import React from 'react'
import ServiceItem from './ServiceItem'

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
    <div className='bg-blue-200 rounded-sm p-2'>
      {services.map((service) => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </div>
  )
}

export default Services