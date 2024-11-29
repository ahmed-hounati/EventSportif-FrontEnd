import React, { useEffect, useState } from "react";
import EventService from "../services/event.service";
import AddEvent from "../components/AddEvent";
import { Link } from "react-router-dom";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [popup, setPopup] = useState(false);

  const formatDate = (dateString) => {
    const dateOptions = { weekday: "short", day: "numeric", month: "short" };
    const timeOptions = { hour: "2-digit", minute: "2-digit" };

    const date = new Date(dateString);

    const formattedDate = new Intl.DateTimeFormat("en-EN", dateOptions).format(
      date
    );
    const formattedTime = new Intl.DateTimeFormat("en-EN", timeOptions).format(
      date
    );

    return { formattedDate, formattedTime };
  };
  const fetchEvents = async () => {
    try {
      const response = await EventService.getAll();
      setEvents(response.events);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <section className="p-8 bg-[#141A28]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {events.map((event) => {
          const { formattedDate, formattedTime } = formatDate(event.startDate);
          return (
            <div
              key={event._id}
              className="bg-[#16243E] shadow-lg rounded-lg overflow-hidden"
            >
              <Link to={`/event/${event._id}`}>
                <div className="relative">
                  <img
                    src={event.image || "https://via.placeholder.com/500x300"}
                    alt={event.name}
                    className="w-full h-56 object-cover"
                  />
                </div>

                <div className="p-4">
                  <h2 className="text-lg font-semibold text-white pb-3">
                    {event.name}
                  </h2>

                  <div className="flex items-center text-white text-sm mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10m-7 4h4m1 0a9 9 0 100-18 9 9 0 000 18z"
                      />
                    </svg>
                    <p>
                      <span className="font-medium">{formattedDate}</span> •{" "}
                      {formattedTime}
                    </p>
                  </div>

                  <div className="flex items-center text-white text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16.88 3.549a9.25 9.25 0 11-9.75 0m9.75 0a9.25 9.25 0 01-9.75 0m9.75 0v11.382c0 .711-.401 1.352-1.027 1.668m-8.746 0c-.626-.316-1.027-.957-1.027-1.668V3.549"
                      />
                    </svg>
                    <p>{event.local}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <button
        className="fixed bottom-5 right-5 rounded-full bg-[#00b140] w-12 h-12 flex items-center justify-center shadow-lg"
        aria-label="Add Event"
        onClick={() => {
          setPopup(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
          viewBox="0 0 448 512"
        >
          <path
            fill="#ffffff"
            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
          />
        </svg>
      </button>

      <AddEvent show={popup} onClose={() => fetchEvents() && setPopup(false)} />
    </section>
  );
}
