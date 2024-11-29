import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventService from "../services/event.service";
import inscriptionService from "../services/inscription.service";
import AddParticipant from "../components/AddParticipant";

export default function Event() {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const [participants, setParticipants] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [addParticipant, setAddParticipant] = useState(false);

  const fetchEvent = async () => {
    try {
      const response = await EventService.getOne(id);
      setEvent(response.event);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchInscription = async () => {
    try {
      const response = await inscriptionService.getAll(id);
      setParticipants(response.Inscriptions);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEvent();
    fetchInscription();
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id]);

  const formatDate = (dateString) => {
    const dateOptions = { weekday: "short", day: "numeric", month: "short" };
    const timeOptions = { hour: "2-digit", minute: "2-digit" };

    const date = new Date(dateString);

    const formattedDate = new Intl.DateTimeFormat("fr-FR", dateOptions).format(
      date
    );
    const formattedTime = new Intl.DateTimeFormat("fr-FR", timeOptions).format(
      date
    );

    return { formattedDate, formattedTime };
  };

  const { formattedDate, formattedTime } = event.startDate
    ? formatDate(event.startDate)
    : { formattedDate: "", formattedTime: "" };

  return (
    <div className="min-h-screen bg-[#141A28] p-8">
      <section className="max-w-4xl mx-auto p-6 bg-[#16243E] shadow-lg rounded-lg mt-10 text-white">
        <div className="relative w-full h-64 overflow-hidden rounded-lg">
          <img
            src={event.image || "https://via.placeholder.com/800x400"}
            alt={event.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold  mb-4">{event.name}</h3>

          <p className="text-white text-lg mb-4">
            {event.description || "No description available."}
          </p>

          <div className="flex items-center text-md mb-4">
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
                d="M8 7V3m8 4V3m-9 8h10m-7 4h4m1 0a9 9 0 100-18 9 9 0 000 18z"
              />
            </svg>
            <p>
              <span className="font-medium">{formattedDate}</span> •{" "}
              {formattedTime}
            </p>
          </div>

          {event.local && (
            <div className="flex items-center text-md">
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
          )}
        </div>
        <div className="flex flex-row gap-5 text-white">
          <div className="bg-slate-700 w-[100px] h-9 flex items-center justify-center rounded-lg">
            <button onClick={() => handleUpdate(participant)}>Update</button>
          </div>
          <div className="bg-red-700 w-[100px] h-9 flex items-center justify-center rounded-lg">
            <button onClick={() => handleDelete(participant._id)}>
              Delete
            </button>
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-2xl text-white p-8">Participants : </h1>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {participants.map((participant) => (
              <div
                key={participant._id}
                className="w-[300px] px-6 py-6 text-center bg-gray-800 rounded-lg"
              >
                <div className="space-y-4">
                  <img
                    className="mx-auto rounded-full h-36 w-36"
                    src={participant.image}
                    alt={`${participant.name} avatar`}
                  />
                  <div className="space-y-2">
                    <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
                      <h3 className="text-white">{participant.name}</h3>
                      <p className="text-indigo-300">{participant.email}</p>
                      <div className="flex flex-row gap-5 text-white">
                        <div className="bg-red-700 w-[100px] h-9 flex items-center justify-center rounded-lg">
                          <button onClick={() => handleDelete(participant._id)}>
                            Delete
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-center mt-5 space-x-5">
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-gray-400"
                        >
                          <span className="sr-only">Twitter</span>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            className="w-6 h-6 text-gray-400 hover:text-gray-100"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                          </svg>
                        </a>
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-gray-400"
                        >
                          <span className="sr-only">Facebook</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                            className="w-6 h-6 text-gray-400 hover:text-gray-100"
                            fill="currentColor"
                          >
                            <path d="M279.14 288l14.22-92.66h-88.91V134.39c0-25.35 12.42-50.06 52.24-50.06H295V6.26S269.24 0 243.82 0C151.09 0 104.29 54.49 104.29 137.21V195.3H24v92.66h80.29V512h96.17V288z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {isScrolled && (
          <button
            className="fixed bottom-5 right-5 rounded-full bg-[#00b140] w-12 h-12 flex items-center justify-center shadow-lg"
            aria-label="Add Participant"
            onClick={() => {
              setAddParticipant(true);
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
        )}
      </section>
      <AddParticipant
        show={addParticipant}
        onClose={() => fetchInscription() && setAddParticipant(false)}
      />
    </div>
  );
}
