import React from "react";
import EventCard from "./EventCard";

const EventsList = () => {
  const events = [
    {
      id: 1,
      title: "Marathon Run",
      date: "12 Sep 2024",
      time: "6:00 PM",
      location: "Central Park, NY",
    },
    {
      id: 2,
      title: "Basketball Finals",
      date: "15 Sep 2024",
      time: "8:00 PM",
      location: "Staples Center, LA",
    },
    {
      id: 3,
      title: "Soccer Match",
      date: "20 Sep 2024",
      time: "7:00 PM",
      location: "Wembley Stadium, London",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventsList;
