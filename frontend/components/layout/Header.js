import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Menu } from 'lucide-react'
import { Badge } from '../ui/badge'
import Link from 'next/link'




const Header = () => {
  return (
    <div className='flex items-center justify-between p-5 pb-3 pl-10 border-b-[4px] border-gray-200'>

        {/* desktop navbar  */}
        <div className='hidden md:flex md:gap-16 md:items-center'>
            <p className='text-3xl font-bold text-orange-500'>
              <Link href="/">rRSs</Link>
            </p>
            <div className='flex gap-6 items-center text-sm'>
                <Link href="/" >About Us</Link>
            </div>
            <div className='flex gap-6 items-center text-sm'>
                <Link href="/" >Why Choose Us</Link>
            </div>
            <div className='flex gap-6 items-center text-sm'>
                <a href="/faqs" >{`FAQ(s)`}</a>
            </div>
            {/* <div className='flex gap-6 items-center text-sm'>
                Package Rate
            </div> */}
            <div className='flex gap-6 items-center text-sm'>
                <a href="/contact">Contact</a> 
            </div>
        </div>    
          
        {/* mobile navbar */}
        <div className='flex md:hidden gap-5'>
            {/* <p className='text-3xl font-bold text-orange-500'>
              <a href="/">rRSs</a>
            </p> */}
            
            <DropdownMenu className="w-1/2">
              <DropdownMenuTrigger><Menu size='32' color='#f97316' /></DropdownMenuTrigger>
              <DropdownMenuContent className='w-1/2'>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>About Us</DropdownMenuItem>
                <DropdownMenuItem>Why? Us</DropdownMenuItem>
                <DropdownMenuItem>Contact</DropdownMenuItem>
                <DropdownMenuItem>...</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>


        </div>

        <div>
          <Badge className='px-4 py-2'>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </Badge>
          <SignedIn>
              <UserButton />
          </SignedIn>      
        </div>            
    </div>
  )
}

export default Header