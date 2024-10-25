'use client'

import { SafeUser } from '@/app/types/inex';
import { Listing, Reservation } from '@prisma/client'
import { useRouter } from 'next/navigation';
import React from 'react'
import useCountries from '../hooks/useCountries';

interface ListingCardProps{
    data: Listing;
    reservation?: Reservation;
    onAction?: (id: string) => void
    disabled: boolean;
    actionLabel?: string;
    actionId?: string;
    currentUser?: SafeUser | null

}

const ListingCard: React.FC<ListingCardProps> = ({
    data,
    reservation,
    onAction,
    disabled,
    actionLabel,
    actionId = "",
    currentUser,
}) => {
    const router = useRouter()
    const { getByValue } = useCountries()
    // get
  return (
    <div>Listing Card</div>
  )
}

export default ListingCard