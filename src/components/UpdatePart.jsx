import React, { useEffect } from "react";
import useFormData from "../hooks/useFormData";
import ParticipantService from "../services/participant.service";

export default function UpdatePart({ show, onClose, participant }) {
  const { formData, onSubmit, handleChange, setFormData } = useFormData({
    name: "",
    email: "",
    poster: "",
  });

  useEffect(() => {
    if (participant) {
      setFormData({
        name: participant.name || "",
        email: participant.email || "",
        poster: "",
      });
    }
  }, [participant, setFormData]);

  const handleUpdate = () => {
    onSubmit(async (data) => {
      await ParticipantService.update(participant._id, data);
      onClose();
    });
  };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 text-white p-6 rounded-md w-[500px]">
        <h2 className="text-xl font-bold mb-4">Update Participant</h2>
        <form>
          <div className="flex flex-row items-center justify-between gap-6">
            <div>
              <div className="mb-4">
                <label className="block">Image</label>
                <input
                  type="file"
                  onChange={(e) => handleChange(e.target)}
                  className="w-full px-4 text-white py-2 border rounded-md"
                  name="poster"
                />
              </div>
              <div className="mb-4">
                <label className="block">Name</label>
                <input
                  type="text"
                  placeholder="Participant name"
                  value={formData.name}
                  onChange={(e) => handleChange(e.target)}
                  className="w-full px-4 text-black py-2 border rounded-md"
                  name="name"
                />
              </div>
              <div className="mb-4">
                <label className="block">Email</label>
                <input
                  placeholder="Participant Email"
                  type="text"
                  value={formData.email}
                  onChange={(e) => handleChange(e.target)}
                  className="w-full px-4 text-black py-2 border rounded-md"
                  name="email"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleUpdate}
              className="px-4 py-2 bg-[#337F5F] text-white rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
