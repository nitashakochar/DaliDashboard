import React from 'react';
import EventsListItem from './events_list_item';


const EventList = (props) => {
  const eventsItems = props.events.map((event) => {
    return <EventsListItem />;
  });

  return (
    <div className="main_card">
      <h4 id="title"> Upcoming Events </h4>
      <p id="subtitle"> Here's what's happening in the lab </p>
      <ul id="events">
        {eventsItems}
      </ul>
    </div>
  );
};

export default EventList;