import React, { useState } from 'react';
import CalendarComponent from './Calendar';
import EventsComponent from './EventsComponent';
import { format } from 'date-fns';
import './App.css';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState({});

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div className="App">
      <div className="Cal">
        <h1>{format(selectedDate, 'd MMMM yyyy')}</h1>
        <CalendarComponent onDateChange={handleDateChange} events={events} />
      </div>
      <EventsComponent
        selectedDate={selectedDate}
        events={events}
        setEvents={setEvents}
      />
    </div>
  );
};

export default App;
