'use client'

import React, { useCallback, useMemo, useState } from 'react'
import qs from 'query-string'
import Modal from './Modal'
import useSearchModel from '../hooks/useLSearchModal'
import { useRouter, useSearchParams } from 'next/navigation'
import dynamic from 'next/dynamic'
import { CountrySelectValue } from '../input/CountrySelect'
import { formatISO } from 'date-fns'

enum STEPS{
    LOCATION =0,
    DATE =1,
    INFO = 2,
}

const SearchModel = () => {
    const route = useRouter()
    const params = useSearchParams()
    const searchModal = useSearchModel()
    
    const [location, setLocation] = useState<CountrySelectValue>()
    const [step, setStep] = useState(STEPS.LOCATION)
    const [guestCount, setGuestCount] = useState(1)
    const [roomCount, setRoomCount] = useState(1)
    const [bathroomCount, setBathroomCount] = useState(1)
    const [dateRange, setDateRange] = useState<any>({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })

    const Map = useMemo(() => dynamic(() => import("../Map"),{
ssr: false
    }), [location])

    const onBack = useCallback(() =>{
        setStep((value) => value - 1)

    }, [])
    const onNext = useCallback(() =>{
        setStep((value) => value + 1)

    }, [])

    const onSubmit = useCallback( async() =>{

        if(step == STEPS.INFO){
            return onNext()
        }

        let currentQuery = {}

        if(params){
            currentQuery = qs.parse(params
                .toString()
            )
        }
        const updatedQuery: any ={
            ...currentQuery,
            locationValue: location?.value,
            guestCount,
            roomCount,
            bathroomCount
        }

        if(dateRange.startDate){
            updatedQuery.startDate = formatISO(dateRange.startDate)
        }
        if(dateRange.endDate){
            updatedQuery.endDate = formatISO(dateRange.endDate)
        }

        const url = qs.stringifyUrl({
            url:"/",
            query: updatedQuery
        }, {skipNull:true})

        setStep(STEPS.LOCATION)
        searchModal.onClose()

        route.push(url)
    }, [
        step,
        searchModal,
        location,
        route,
        guestCount,
        roomCount,
        bathroomCount,
        dateRange,
        onNext,
        params
    ])


  return (
    <Modal
    isOpen={searchModal.isOpen}
    onClose={searchModal.onClose}
    onSubmit={searchModal.onOpen}
    title='Filters'
    actionLabel='Search'
    />
  )
}

export default SearchModel