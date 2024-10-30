'use client'
import React from 'react'
import Heading from '../components/Heading'
import { SafeReservation, SafeUser } from '../types/inex'
import Container from '../components/Container'
import { useRouter } from 'next/navigation'

interface TripsClientProps{
  reservations: SafeReservation[]
  currentUser?: SafeUser | null
} 

const TripsClient: React.FC<TripsClientProps> = ({
  reservations,
  currentUser
}) => {
  return (
    <Container>
      <Heading
      title='Trips'
      subtitle="Where you've been and where you're going"
      />
      <div className='
      mt-10
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5
      2xl:grid-cols-6
      gap-8'>
TripsPages
      </div>
    </Container>
  )
}

export default TripsClient