import { SafeUser } from '@/app/types/inex'
import React from 'react'
import useCountries from '../hooks/useCountries'
import Heading from '../Heading'
import Image from 'next/image'
import HeartButton from '../HeartButton'
import ListingInfo from './ListingInfo'

interface ListingHeadProps{
    title: string
    locationValue: string,
    imageSrc: string,
    id: string,
    currentUser?: SafeUser | null | any
} 


const ListingHead: React.FC<ListingHeadProps> = ({
    title,
    locationValue,
    imageSrc,
    id,
    currentUser,
}) => {
    const { getByValue} = useCountries()

    const location = getByValue(locationValue)
  return (
    <>
    <Heading
    title={title}
subtitle={`${location?.region},${location?.label}`}
    />
    <div className='flex
    w-full
    h-[60vh]
    overflow-hidden
    rounded-xl
    relative'>
        <Image
        alt=""
        src={imageSrc}
        fill
        className='object-cover w-full h-[60vh] flex cursor-pointer'
        />
        <div className='absolute top-5 right-5'>
            <HeartButton
            listingId={id}
            currentUser={currentUser}
           
            />

           <div></div>
        </div>

    </div>
    </>
  )
}

export default ListingHead
