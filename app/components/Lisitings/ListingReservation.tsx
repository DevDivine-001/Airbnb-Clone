"use client"
import React from 'react'
import Calendar from '../input/Calendar'
import Button from '../Button'

interface IListingReservationProps{
    price: number,
    dateRange: Range |any,
    totalPrice: number,
    onChangeDate:(value: Range | any)  => void | any
    onSubmit: () => void
    disabled?:  boolean 
    disabledDates: Date[]
}

const ListingReservation:React.FC<IListingReservationProps> = ({
    price,
    dateRange,
    totalPrice,
    onChangeDate,
    onSubmit,
    disabled,
    disabledDates,
}) => {
  return (
    <div className='bg-white
    rounded-xl
    border-[1px]
    border-neutral-200
    overflow-hidden'>
        <div className='flex flex-row items-center gap-1 p-4'>

            <div className='text-2xl font-semibold'>

${price}
            </div>
        <div className='font-light text-neutral-600'>night</div>
        </div>
        <hr/>
        <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
        />
        <div>
            <Button 
            disabled={disabled}
            label='Reserve'
            onClick={onSubmit}
            />
        </div>
        <hr/>
        <div className='p-4
        flex
        flex-row
        items-center
        justify-between
        font-semibold
        text-lg'>
<span>Total</span>
<span>${totalPrice}</span>
        </div>
    </div>
  )
}

export default ListingReservation