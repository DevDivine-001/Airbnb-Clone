'use client'
import React from 'react'
import { SafeUser } from '../types/inex'

interface HeartButtonProps{
    listingId: string
    currentUser?: SafeUser | null
}
const HeartButton: React.FC<HeartButtonProps> = ({
    listingId,
    currentUser,
}) => {
  return (
    <div>
        
    </div>
  )
}

export default HeartButton