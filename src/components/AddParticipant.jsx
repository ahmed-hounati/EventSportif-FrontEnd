import React, { useEffect, useState } from "react";
import ParticipantService from "../services/participant.service";
import inscriptionService from "../services/inscription.service";
import { useParams } from "react-router-dom";
import EventService from "../services/event.service";

export default function AddParticipant({ show, onClose }) {
  const { id } = useParams();
  const [participants, setParticipants] = useState([]);
  const [inscriptions, setInscriptions] = useState([]);

  const fetchInscriptions = async () => {
    try {
      const response = await EventService.getOne(id);
      const insc = response.event.inscriptions || [];
      setInscriptions(insc);
      return insc;
    } catch (error) {
      console.error("Failed to fetch inscriptions:", error);
      return [];
    }
  };

  const fetchParticipants = async (currentInscriptions) => {
    try {
      const res = await ParticipantService.getAll();
      const parts = res.participants || [];
      const filteredParticipants = parts.filter(
        (participant) => !currentInscriptions.includes(participant._id)
      );
      setParticipants(filteredParticipants);
    } catch (error) {
      console.error("Failed to fetch participants:", error);
    }
  };

  const fetchData = async () => {
    const currentInscriptions = await fetchInscriptions();
    await fetchParticipants(currentInscriptions);
  };

  const handleAdd = async (participantId) => {
    try {
      await inscriptionService.add(id, participantId);
      await fetchData();
      onClose();
    } catch (error) {
      console.error("Failed to add participant:", error);
    }
  };

  useEffect(() => {
    if (show) {
      fetchData();
    }
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 text-white p-6 rounded-md max-w-[80%] w-full">
        <h2 className="text-xl font-bold mb-4">Add Participant to the event</h2>
        <div className="flex overflow-x-auto space-x-4 p-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-200">
          {participants.map((participant) => (
            <div
              key={participant._id}
              className="w-[300px] px-6 py-6 text-center bg-black rounded-lg"
            >
              <div className="space-y-4">
                <img
                  className="mx-auto rounded-full h-36 w-36"
                  src={participant.image}
                  alt={`${participant.name} avatar`}
                />
                <div className="space-y-2">
                  <div className="flex justify-center items-center flex-col space-y-4 text-lg font-medium leading-6">
                    <h3 className="text-white">{participant.name}</h3>
                    <p className="text-indigo-300">{participant.email}</p>
                    <div className="flex flex-row gap-5 text-white">
                      <div className="bg-emerald-800 w-[100px] h-9 flex items-center justify-center rounded-lg">
                        <button onClick={() => handleAdd(participant._id)}>
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end p-4">
          <button
            type="button"
            onClick={onClose}
            className="mr-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
