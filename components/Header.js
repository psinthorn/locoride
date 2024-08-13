import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'


const Header = () => {
  return (
    <div className='flex items-center justify-between p-5 pb-3 pl-10 border-b-[4px] border-gray-200'>
        <div className='flex gap-16 items-center'>
            LOGO
            <div className='flex gap-6 items-center'>
                Menu
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