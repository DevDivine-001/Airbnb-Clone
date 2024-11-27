'use client'
import React from 'react'
// import {BounceLoader, PuffLoader} from "react-spinners"
import { BallTriangle } from "react-loader-spinner"

const Loader = () => {
  return (
    <div
      className='h-[70vh] flex flex-col justify-center items-center'
    >
        {/* <PuffLoader /> */}
        {/* <ClapSpinner size={100} color="red" /> */}
        <BallTriangle 
          height={100}
          width={100}
          radius={5}
          color="#F43F5E"
        />
    </div>
  )
}

export default Loader


