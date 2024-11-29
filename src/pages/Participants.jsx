import React, { useEffect, useState } from "react";
import ParticipantService from "../services/participant.service";
import AddPart from "../components/AddPart";
import UpdatePart from "../components/UpdatePart";

export default function Participants() {
  const [participants, setParticipants] = useState([]);
  const [popup, setPopup] = useState(false);
  const [updatePopup, setUpdatePopup] = useState(false);
  const [selectedParticipant, setSelectedParticipant] = useState(null);

  useEffect(() => {
    fetchParticipants();
  }, []);

  const fetchParticipants = async () => {
    try {
      const response = await ParticipantService.getAll();
      setParticipants(response.participants);
    } catch (error) {
      console.error("Failed to fetch participants:", error);
    }
  };

  const handleUpdate = (participant) => {
    setSelectedParticipant(participant);
    setUpdatePopup(true);
  };

  const handleDelete = async (id) => {
    try {
      await ParticipantService.remove(id);
      fetchParticipants();
    } catch (error) {
      console.error("Failed to delete participant:", error);
    }
  };

  return (
    <section className="relative bg-[#141A28] p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {participants.map((participant) => (
          <div
            key={participant._id}
            className="w-full px-6 py-6 text-center bg-gray-800 rounded-lg"
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
                    <div className="bg-slate-700 w-[100px] h-9 flex items-center justify-center rounded-lg">
                      <button onClick={() => handleUpdate(participant)}>
                        Update
                      </button>
                    </div>
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
                    {/* <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-gray-400"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="w-6 h-6 text-gray-400 hover:text-gray-100"
                        fill="currentColor"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.2-114.9 114.6 0 63.6 51.2 114.9 114.9 114.9s114.9-51.2 114.9-114.9-51.2-114.6-114.9-114.6zm0 186.6c-39.6 0-71.9-32.2-71.9-71.9s32.2-71.9 71.9-71.9 71.9 32.2 71.9 71.9-32.3 71.9-71.9 71.9zm146.4-194.3c0 14.9-12 27-26.8 27s-26.8-12.1-26.8-27 12-27 26.8-27 26.8 12.1 26.8 27zm76.1 27.2c-.2-56.6-15.3-107-56.2-147.6C354 4.6 303.4-.1 246.6 0 190.3.1 138.9 15 99.6 55.2 60.3 95.5 45.5 147.2 45.5 203.4c0 47.3 11.2 89.5 31.6 127.6 17.5 32.7 42.1 61.1 72.7 86.4 30.6 25.3 66.6 45.4 104.4 60.6 15.4 6.3 31.5 11.8 48.2 16.6 8.7 2.5 17.6 4.8 26.6 7.2 9.1 2.4 18.3 4.6 27.4 6.8s18.1 4.2 27.1 6.1c9 .9 17.7 2.2 26.4 3.4.6 0 .7-.4.7-.6.3-13.1 1-26.3 1.4-39.4.4-13.1 1.2-26.2 1.5-39.2.2-13 .7-26.1 1.1-39.1.4-13 .7-25.9.8-38.8-.2-11.5-.7-22.8-2.4-34-.5-3.1-1.5-6.1-2.8-9-.8-1.8-2.2-3.4-4-4.7-.8-.6-1.6-1.2-2.6-1.8zM398.8 50.3c30.7 30.8 46.8 67.9 48.3 111.1.3 9.2-.3 18.5-.8 27.8-.5 9.3-1.1 18.5-1.6 27.8-.5 9.3-1.3 18.6-2.2 27.9s-1.7 18.5-2.7 27.8c-.5 4.6-1 9.2-1.5 13.7s-1.4 9.1-2.2 13.6c-.9 4.5-1.7 9-2.6 13.5s-2 8.9-3.1 13.4c-1 4.5-2 9-3 13.5s-2.1 8.9-3.2 13.4c-1.1 4.5-2.3 9-3.5 13.5s-2.4 8.8-3.7 13.2c-1.3 4.4-2.7 8.8-4.1 13.2s-2.8 8.8-4.3 13.2c-3.3 10.8-6.7 21.5-10.4 32.2-2 5.3-4 10.6-6 16-2 5.4-4.1 10.8-6.1 16.2-.4 1.1-.9 2.2-1.3 3.2-.2.6-.2 1.1.2 1.4s.9.2 1.3-.1c.4-.3.7-.7 1-1.1.2-.2.5-.3.7-.5z" />
                      </svg>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="fixed bottom-5 right-5 rounded-full bg-[#00b140] w-12 h-12 flex items-center justify-center shadow-lg"
        aria-label="Add Participant"
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
      <AddPart
        show={popup}
        onClose={() => fetchParticipants() && setPopup(false)}
      />
      <UpdatePart
        show={updatePopup}
        onClose={() => fetchParticipants() && setUpdatePopup(false)}
        participant={selectedParticipant}
      />
    </section>
  );
}
