'use client'
import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'
// import { User } from '@prisma/client'
// import { SafeUser } from '@/app/types/inex'
// import { User } from '@prisma/client'
import Categories from './Categories'
import { SafeUser } from '@/app/types/inex'

interface NavbarProps{
  currentUser?: SafeUser | null
}

const Navbar: React.FC<NavbarProps> = ({
  currentUser
}) => {
  currentUser
  return (
    <div className='fixed w-full bg-[#ffff] z-10 shadow-sm'>
      <div className='py-0
      border-b-[1px]'>
        <Container>
            <div className='
            flex
            flex-row
            items-center
            justify-between
            gap-3
            md:gap-0'>
                <Logo/>
                <Search/>
                <UserMenu currentUser={currentUser}/>
            </div>

        </Container>

      </div>
      <Categories/>
    </div>
  )
}

export default Navbar
