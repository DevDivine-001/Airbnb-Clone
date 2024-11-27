'use client'

import { BiSearch } from "react-icons/bi"
import useSearchModel from "../hooks/useLSearchModal"
import { useSearchParams } from "next/navigation"
import useCountries from "../hooks/useCountries"
import { useMemo } from "react"
import { differenceInDays } from "date-fns"


const Search = () => {
  const searchModel = useSearchModel()
  const params = useSearchParams()
  const { getByValue } = useCountries()

  const locationValue = params?.get("locationValue")
  const startDate = params?.get("startDate")
  const endDate = params?.get('endDate')
  const guestCount = params?.get('endDate')


  const locationLabel = useMemo(() =>{
    if(locationValue){
return getByValue(locationValue as string) ?.label
    }

    return 'Anywhere';
  }, [getByValue,locationValue]) 


  const durationLabel = useMemo(() =>{
    if(startDate && endDate){
      const start = new Date(startDate as string)
      const end = new Date(endDate as string)
      let diff = differenceInDays(end,start)

      if(diff == 0){
        diff = 1

      }
      return `${diff} Days`
    }

    return 'Any Week'
  },[startDate, endDate])


  const  guestLabel = useMemo(() =>{
    if(guestCount){
return `${guestCount} Guests`
    }

    return 'Add Guests'
  }, [guestCount])

  return (
    <div 
  onClick={searchModel.onOpen}
    
    className="
    border-[1px]
    w-full
    md:w-auto
    py-1
    rounded-full
    hover:shadow-md
    transition
    cursor-pointer
    shadow-sm

    ">
      <div
      className="flex
      flex-row
      items-center
      justify-between">
        <div
    className="text-sm
        font-semibold
        px-6"
        
        >
            {locationLabel}
        </div>
        <div
    className="text-sm
    hidden
    sm:block
    border-x-[1px]
    flex-1
    text-center
        font-semibold
        px-6"
        
        >
            {durationLabel}
        </div>
        <div
    className="text-sm
  pl-6
  pr-2
  text-gray-600
  flex
  flex-row
  items-center
  gap-3"
        
        >
           <div className="hidden sm:block">{guestLabel}</div>
        </div>
        <div
    className="text-sm
p-2
bg-rose-500
rounded-full
text-[#ffff]"
        
        >
           <BiSearch size={18}/>
        </div>
      </div>
    </div>
  )
}

export default Search
