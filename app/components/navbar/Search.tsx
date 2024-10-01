'use client'

import { BiSearch } from "react-icons/bi"

const Search = () => {
  return (
    <div className="
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
            Anywhere
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
            Any Week
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
           <div className="hidden sm:block">Add Guests</div>
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
