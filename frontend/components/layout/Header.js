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
import RosLogo from '@/public/logo-ros-sm.png'
import Image from 'next/image'




const Header = () => {
  const MainMenu = [
    // {
    //   id: 1,
    //   title: 'Home',
    //   link: '/',
    // },
    {
      id: 2,
      title: 'About Us',
      link: '/about-us',
    },
    {
      id: 3,
      title: 'Why Choose Us',
      link: '/why-choose-us',
    },
    {
      id: 4,
      title: 'FAQ(s)',
      link: '/faqs',
    },
    {
      id: 5,
      title: 'Contact',
      link: '/contact',
    }
  ]
  return (
    <div className='flex items-center justify-between p-5 pb-3 pl-10 border-b-[4px] border-gray-200'>

        {/* desktop navbar  */}
        <div className='hidden md:flex md:gap-8 md:items-center'>
            {/* <p className='text-3xl font-bold text-orange-500'> */}
              <Link href="/">
                <Image src={RosLogo} alt='Ros Logo' width={100}/>
              </Link>
            {/* </p> */}
            {MainMenu.map((item) => (
              <div keu={item.id} className='flex gap-4 items-center text-md text-slate-600'>
              <Link href={item.link} >{item.title}</Link>
            </div>
            ))
          }
        </div>    
          
        {/* mobile navbar */}
        <div className='flex md:hidden gap-5'>
            {/* <p className='text-3xl font-bold text-orange-500'>
              <a href="/">rRSs</a>
            </p> */}
            
            <DropdownMenu className="">
              <DropdownMenuTrigger><Menu size='32' color='#f97316' /></DropdownMenuTrigger>
              <DropdownMenuContent className='w-300'>
                <DropdownMenuLabel>
                  <Link href="/" >Home</Link>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {MainMenu.map((item) => (
                  <DropdownMenuItem key={item.id}>
                    <Link href={item.link} >{item.title}</Link>
                  </DropdownMenuItem>
                ))
                } 
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