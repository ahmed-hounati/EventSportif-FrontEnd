import React from "react";

const EventCard = ({ event }) => (
  <div className="bg-white shadow-md rounded p-4">
    <h3 className="text-lg font-bold">{event.title}</h3>
    <p>
      {event.date} - {event.time}
    </p>
    <p>{event.location}</p>
    <button className="mt-4 bg-orange-500 px-4 py-2 text-white rounded">
      View Details
    </button>
  </div>
);

export default EventCard;
