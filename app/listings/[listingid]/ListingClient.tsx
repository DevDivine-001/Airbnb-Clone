"use client"
import React, { useCallback, useEffect, useMemo, useState } from 'react'


import {Reservation} from "@prisma/client"

import { SafeListing, SafeUser } from '@/app/types/inex'
import { categories } from '@/app/components/navbar/Categories'
import Container from '@/app/components/Container'
import ListingHead from '@/app/components/Lisitings/ListingHead'
import ListingInfo from '@/app/components/Lisitings/ListingInfo'
import useLoginModal from '@/app/components/hooks/useLoginModal'
import { useRouter } from 'next/navigation'
import { differenceInCalendarDays,eachDayOfInterval } from 'date-fns'
import axios from 'axios'
import toast from 'react-hot-toast'
import ListingReservation from '@/app/components/Lisitings/ListingReservation'

const initialDateRange ={
startDate: new Date(),
endDate: new Date(),
key:"selection"
}
interface ListingClientProps{
    reservations?: Reservation[]
    listing:  | any| SafeListing &{
        user: SafeUser
    }
currentUser?: SafeUser | null
}

const ListingClient: React.FC<ListingClientProps> = ({listing,
    reservations= [],
    currentUser
}) => {

    const loginModal = useLoginModal()
    const router = useRouter()

    const disabledDates = useMemo(() =>{

        let dates: Date[] = []

        reservations.forEach((reservations:any) =>{
            const range = eachDayOfInterval({
                start: new Date(reservations.startDate),
                end:new Date(reservations.endDate)
            })
            dates = [... dates, ...range]

        })

        return dates

    }, [reservations])

    const [isLoading, setIsLoading] = useState(false)
    const [totalPrice, setTotalPrice] = useState(listing.price)
    const [dateRange, setdateRange] = useState(initialDateRange)

    const onCreateReservation = useCallback(() =>{

        if(!currentUser){
            return loginModal.onOpen()

        }

        setIsLoading(true)
        axios.post('/api/reservations',{
            totalPrice,
            startDate: dateRange.endDate,
            endDate: dateRange.endDate,
            listingId: listing?.id
        })

        .then(() =>{
toast.success("Listing reserved!")
setdateRange(initialDateRange)

// Redirect to  trips

router.refresh()
        }).catch(() =>{
            toast.error('Something went wrong')
        }).finally(() =>{
            setIsLoading(false)
        })
    }, [

        totalPrice,
        dateRange,
        listing?.id,
        router,
        currentUser,
        loginModal
    ])

    useEffect(() =>{
        if(dateRange.startDate && dateRange.endDate){
            const dayCount = differenceInCalendarDays(
                dateRange.endDate,
                dateRange.startDate 
            )

            if(!dayCount && listing.price){
                setTotalPrice(dayCount * listing.price)
            }else{
                setTotalPrice(listing.price)
            }
        }
    }, [dateRange, listing.price])



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
<div className='
order-first
mb-10
md:order-last
md:col-span-3'>
    <ListingReservation
    price={listing.price}
    totalPrice={totalPrice}
    onChangeDate={(value) => setdateRange(value)}
    dateRange={dateRange}
    onSubmit={onCreateReservation}
    disabled={isLoading}
    disabledDates={disabledDates}
    />

</div>

            {/* <h1>{listing.title}</h1>
            <p>{listing.description}</p>
            <p>Listed by: {listing.user.name}</p> */}
    </div>
    </div>
  </Container>
  )
}

export default ListingClient