'use client'

import {DateRange, Range, RangeKeyDict } from "react-date-range"

import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"




import React from 'react'

interface CalendarProps{
    value: Range,
    onChange:(value: RangeKeyDict) => void,
    disabledDates?:any |Date[],
}


const Calendar:React.FC<CalendarProps> = ({
    value,
    onChange,
    disabledDates
}) => {
  return (
  <DateRange
  rangeColors={["#226fc2"]}
  ranges={[value]}
  date={new Date()}
  onChange={onChange}
  showDateDisplay={false}
  minDate={new Date()}
  disabledDates={disabledDates}
  
  />
  )
}

export default Calendar
