import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const onChange = newDate => {
    setDate(newDate);
  };

  return (
    <div className="calendar-container">
      <Calendar
        onChange={onChange}
        value={date}
        next2Label={null}
        prev2Label={null}
      />
    </div>
  );
};

export default CalendarComponent;
