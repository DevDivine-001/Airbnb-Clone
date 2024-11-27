


'use client';

import { DateRange } from 'react-date-range';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface CalendarProps {
  value: {
    startDate: Date;
    endDate: Date;
    key: string;
  };
  onChange: (ranges: { selection: { startDate: Date; endDate: Date; key: string } }) => void;
  disabledDates?: any| Date[];
}

const Calendar: React.FC<CalendarProps> = ({ value, onChange, disabledDates }) => {
  return (
    <DateRange
      ranges={[value]}
      onChange={onChange}
      minDate={new Date()}
      disabledDates={disabledDates}
      rangeColors={['#000']}
      showDateDisplay={false}
    />
  );
};

export default Calendar;

