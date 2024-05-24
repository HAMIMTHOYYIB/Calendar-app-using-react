import React, { useState } from "react";
import { format } from "date-fns";
import "./EventsComponent.css";

const EventsComponent = ({ selectedDate, events, setEvents }) => {
  const [eventText, setEventText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentEventIndex, setCurrentEventIndex] = useState(null);
  const [editedEventText, setEditedEventText] = useState("");

  const AddEvent = (event) => {
    event.preventDefault();
    if (eventText) {
      const dateKey = format(selectedDate, "yyyy-MM-dd");
      setEvents((prevEvents) => ({
        ...prevEvents,
        [dateKey]: [...(prevEvents[dateKey] || []), eventText],
      }));
      setEventText("");
    }
  };

  const handleEditEvent = (index) => {
    const dateKey = format(selectedDate, "yyyy-MM-dd");
    setIsEditing(true);
    setCurrentEventIndex(index);
    setEditedEventText(events[dateKey][index]);
  };

  const SaveEdit = (event) => {
    event.preventDefault();
    if(editedEventText){
        const dateKey = format(selectedDate, "yyyy-MM-dd");
        const updatedEvents = [...events[dateKey]];
        updatedEvents[currentEventIndex] = editedEventText;
        setEvents((prevEvents) => ({
            ...prevEvents,
            [dateKey]: updatedEvents,
          }));
        setIsEditing(false);
        setEditedEventText("");
        setCurrentEventIndex(null);
    }
  };

  const DeleteEvent = (index) => {
    const dateKey = format(selectedDate, "yyyy-MM-dd");
    const updatedEvents = [...events[dateKey]];
    updatedEvents.splice(index,1);

    setEvents((prevEvents) => ({
      ...prevEvents,
      [dateKey]: updatedEvents,
    }));
  };

  let styledelete = {
    color :  "red"
  }
  let styleedit = {
    color:"black"
  }

  return (
    <div className="Eve">
      <form className="addEvent" onSubmit={isEditing ? SaveEdit : AddEvent}>
        <input
          type="text"
          value={isEditing ? editedEventText : eventText}
          onChange={(e) => isEditing ? setEditedEventText(e.target.value) : setEventText(e.target.value)}
          placeholder="Your event here"
        />
        <button type="submit">{isEditing ? "Save" : "Add Event"}</button>
      </form>

      
      <ul>
        {(events[format(selectedDate, "yyyy-MM-dd")]||[]).map(
          (event, index) => (
            <li key={index}>
              <span>{format(selectedDate, "d MMMM yyyy")} - {event}</span>
              <div>
                <button className="editbtn" onClick={() => handleEditEvent(index)}><i class="fa-solid fa-pen-to-square " style={styleedit}></i></button>
                <button className="deletebtn" onClick={() => DeleteEvent(index)}><i class="fa-solid fa-square-minus" style={styledelete}></i></button>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default EventsComponent;