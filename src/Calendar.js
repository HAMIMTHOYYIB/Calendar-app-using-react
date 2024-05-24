import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import { format } from 'date-fns';

const CalendarComponent = ({ onDateChange, events }) => {
  const [date, setDate] = useState(new Date());

  const onChange = newDate => {
    setDate(newDate);
    onDateChange(newDate);
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const dateKey = format(date, 'yyyy-MM-dd');
      if (events[dateKey] && events[dateKey].length > 0) {
        return <div className="event-indicator"></div>;
      }
    }
    return null;
  };

  return (
    <div className="calendar-container">
      <Calendar
        onChange={onChange}
        value={date}
        next2Label={null}
        prev2Label={null}
        tileContent={tileContent}
      />
    </div>
  );
};

export default CalendarComponent;