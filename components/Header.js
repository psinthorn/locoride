import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'


const Header = () => {
  return (
    <div className='flex items-center justify-between p-5 pb-3 pl-10 border-b-[4px] border-gray-200'>
        <div className='flex gap-16 items-center'>
            <p className='text-3xl font-bold text-orange-500'>rOss</p>
            <div className='flex gap-6 items-center text-sm'>
                Static Rate
            </div>
            <div className='flex gap-6 items-center text-sm'>
                Why Us?
            </div>
            <div className='flex gap-6 items-center text-sm'>
                Contact
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