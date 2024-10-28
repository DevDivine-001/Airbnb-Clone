'use client'

import {DateRange, Range, RangeKeyDict } from "react-date-range"

import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"




import React from 'react'

interface CalendarProps{
    value: Range,
    onChange:(value: RangeKeyDict) => void,
    disabledDates?: Date[],
}


const Calendar:React.FC<CalendarProps> = ({
    value,
    onChange,
    disabledDates
}) => {
  return (
  <DateRange/>
  )
}

export default Calendar


// 'use client'

// import { DateRange, Range, RangeKeyDict } from "react-date-range";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
// import React, { useState } from 'react';

// interface CalendarProps {
//     value: Range;
//     onChange: (value: RangeKeyDict) => void;
//     disabledDates?: Date[];
// }

// const Calendar: React.FC<CalendarProps> = ({
//     value,
//     onChange,
//     disabledDates
// }) => {
//     return (
//         <DateRange
//             ranges={[value]} // Pass the range as an array
//             onChange={onChange} // Pass the onChange handler
//             minDate={new Date()} // Optional: set minimum date
//             disabledDates={disabledDates} // Optional: pass disabled dates
//         />
//     );
// };

// export default Calendar;


// 'use client'

// import { DateRange, Range, RangeKeyDict } from "react-date-range";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
// import React from 'react';

// interface CalendarProps {
//     value: Range; // Define the shape of the date range
//     onChange: (value: RangeKeyDict) => void; // Function to handle changes
//     disabledDates?: Date[]; // Optional: Array of dates that should be disabled
// }

// const Calendar: React.FC<CalendarProps> = ({
//     value,
//     onChange,
//     disabledDates
// }) => {
//     return (
//         <DateRange
//             ranges={[value]} // Provide the current range as an array
//             onChange={onChange} // Handle date range changes
//             minDate={new Date()} // Optional: prevent selecting past dates
//             // disabledDates={disabledDates} // Pass disabled dates if any
//             months={2} // Optional: number of months to display
//             direction="horizontal" // Optional: display direction of the calendar
//         />
//     );
// };

// export default Calendar;
