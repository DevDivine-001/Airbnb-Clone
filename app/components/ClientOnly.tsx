 'use client'

import {  useEffect, useState } from "react"
interface ClientOnlyProps{
Children: React.ReactNode
}

const ClientOnly: React.FC<ClientOnlyProps> = ({Children}) => {

    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() =>{
        setHasMounted(true!)
    }, [])


    if(!hasMounted){
        return null
    }
  return <>{Children}</>
  
}

export default ClientOnly
