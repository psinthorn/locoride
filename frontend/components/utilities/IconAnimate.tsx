import { Loader, CircleChevronDown, Heart, Plane, Smile, SmilePlus, Snowflake, Sun, TreePalm, Waves, Car } from 'lucide-react';

const IconAnimate = () => {
  return (
    <span className='flex justify-center text-center items-center text-slate-400 gap-3'>
      <Snowflake className='animate-pulse'/>
      <Smile className='animate-pulse'/>
      <Plane className='animate-bounce'/>
      <Car className='animate-pulse'/>
      <Sun className='animate-spin'/>
      <TreePalm className='animate-pulse'/>
      <Waves className='animate-pulse'/>
      <Heart className='animate-ping'/>
      <SmilePlus className='animate-pulse'/>
    </span>
  )
}

export default IconAnimate