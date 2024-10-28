'use client'
import React from 'react'
import { SafeUser } from '../types/inex'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import useFavorite from './hooks/useFavorite'

interface HeartButtonProps{
    listingId: string
    currentUser?: SafeUser | null
}
const HeartButton: React.FC<HeartButtonProps> = ({
    listingId,
    currentUser,
}) => {
  // console.log(listingId,currentUser)
  //   const hasFavorited = false
  //   const toggleFavorite = () =>{}

  const { hasFavorited, toggleFavorite} = useFavorite({
    listingId,
    currentUser
  })
  return (
    <div
    onClick={toggleFavorite}
    className='relative
    hover:opacity-80
    transition
    cursor-pointer'
    >
        <AiOutlineHeart
        size={28}
        className='
        fill-white
        absolute
        -top-[2px]
        -right-[2px]'/>

        <AiFillHeart
        size={24}
        className={hasFavorited? 'fill-rose-500':'fill-neutral-500/70'}
        />

        
    </div>
  )
}

export default HeartButton