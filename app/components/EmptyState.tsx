'use client'

import React from 'react'

import { useRouter} from "next/navigation"
import Heading from './Heading'
import Button from './Button'

interface EmptyState{
    title?: string,
    subtitle?: string,
    showReset?: string,
}
const EmptyState: React.FC <EmptyState>= ({
title= "No exact matches",
subtitle = "Try changing or removing some of your filters",
showReset
}) => {
    const router = useRouter()
  return (
    <div className='
    h-[60vh]
    flex
    flex-col
    gap-2
    justify-center
    items-center
    '>
        <Heading 
        title={title}
        subtitle={subtitle}
        />
        <div>
            {
                showReset && (
                    <Button
                    onClick={() => router.push('/')}
                    label='Remove all filters'
                    outline
                    />
                )
            }
        </div>
    </div>

  )
}

export default EmptyState