import { CircleChevronRight } from 'lucide-react'
import React from 'react'

const ServiceItem = ({service}: any) => {
  return (
    <div className='flex flex-row gap-4 px-4 py-1'>
      <CircleChevronRight size={32} className='text-orange-500' /> <span className='text-xl font-light text-slate-800'>{ service.title }</span>
    </div>
  )
}

export default ServiceItem