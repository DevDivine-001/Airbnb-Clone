"use client"


import React, { useEffect } from 'react'
import EmptyState from './components/EmptyState'

interface ErrorStateProps{
    error: Error,
}

const ErrorState:React.FC<ErrorStateProps> = ({error}) => {

    useEffect(() =>{
        console.log(error)
    }, [error])
  return (
    <div>
        <EmptyState
        title='uh oh'
        subtitle='Something went wrong!'
        />
    </div>
  )
}

export default ErrorState