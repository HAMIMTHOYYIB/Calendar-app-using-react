import React from 'react';
import CalendarComponent from './Calendar';
import { format } from 'date-fns';
import './App.css';

const App = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'd MMMM yyyy-EEEE');
  return (
    <div className="App">
      <h1>{formattedDate}</h1>
      <CalendarComponent />
    </div>
  );
};

export default App;
