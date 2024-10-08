import { useRouter, useSearchParams } from 'next/navigation'
import React, { useCallback } from 'react'
import { IconType } from "react-icons"

interface CategoryBoxProps{
    icon: IconType,
    label: string, 
    selected: boolean,
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
    icon: Icon,
    label,
    selected
}) => {
    const router = useRouter()
    const params = useSearchParams()

    const handleClick = useCallback(() =>{

    }, [])
  return (
    <div
    className={`
        flex
        flex-col
        items-center
        justify-center
        gap-1
        p-0
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
        ${selected ? 'border-b-neutral-800': 'border-transparent'}
        ${selected ? 'text-neutral-800': 'text-neutral-500'}
      
    `}>
        <Icon size={20}/>
        <div>
            {label}
        </div>
        
        
        
    </div>
  )
}

export default CategoryBox