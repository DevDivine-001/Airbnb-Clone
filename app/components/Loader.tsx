'Use client'
import React from 'react'
import {BounceLoader, PuffLoader} from "react-spinners"

const Loader = () => {
  return (
    <div
    className='h-[70vh]
    flex
    flex-col
    justify-center
    items-center'
    >
        {/* <PuffLoader
        
        
        /> */}
        <BounceLoader
        size={100}
        color="red"
         />
    </div>
  )
}

export default Loader