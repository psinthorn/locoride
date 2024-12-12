import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'


const Header = () => {
  return (
    <div className='flex items-center justify-between p-5 pb-3 pl-10 border-b-[4px] border-gray-200'>
        <div className='flex gap-16 items-center'>
            <p className='text-3xl font-bold text-orange-500'>
              <a href="/">rRs</a>
            </p>
            <div className='flex gap-6 items-center text-sm'>
                <a href="/booking" >Book Now</a>
            </div>
            <div className='flex gap-6 items-center text-sm'>
                <a href="/service-rate" >Service Rate</a>
            </div>
            {/* <div className='flex gap-6 items-center text-sm'>
                Package Rate
            </div> */}
            <div className='flex gap-6 items-center text-sm'>
                <a href="/contact">Contact</a> 
            </div>
        </div>      
        <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>      
        </div>            
    </div>
  )
}

export default Header