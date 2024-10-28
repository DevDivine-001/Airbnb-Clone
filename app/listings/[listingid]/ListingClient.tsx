"use client"
import React, { useMemo } from 'react'


import {Reservation} from "@prisma/client"

import { SafeListing, SafeUser } from '@/app/types/inex'
import { categories } from '@/app/components/navbar/Categories'
import Container from '@/app/components/Container'
import ListingHead from '@/app/components/Lisitings/ListingHead'
import ListingInfo from '@/app/components/Lisitings/ListingInfo'

interface ListingClientProps{
    reservations?: Reservation[]
    listing:  | any| SafeListing &{
        user: SafeUser
    }
currentUser?: SafeUser | null
}

const ListingClient: React.FC<ListingClientProps> = ({listing,
    currentUser
}) => {
    const category = useMemo(() =>{
return categories.find((item) => item.label == listing.category)
    }, [listing.category])

    console.log(category)
  return (
  <Container>
      <div className='max-w-screen-lg mx-auto'>
    <div className='flex flex-col gap-6'>
        <ListingHead
        title={listing.title}
        imageSrc={listing.imageSrc}
        locationValue={listing.locationValue}
        id={listing.id}
        currentUser={currentUser}
        
        />
        <div className='grid
        grid-cols-1
        md:grid-cols-7
        md:grid-10
        mt-6'>

        </div>
        <ListingInfo
        
        user={listing.user}
        category={category}
        description={listing.description}
        roomCount={listing.roomCount}
        guestCount={listing.guestCount}
        bathroomCount={listing.bathroomCount}
        locationValue={listing.locationValues }
        
        />


            {/* <h1>{listing.title}</h1>
            <p>{listing.description}</p>
            <p>Listed by: {listing.user.name}</p> */}
    </div>
    </div>
  </Container>
  )
}

export default ListingClient