import React from "react";
import useFormData from "../hooks/useFormData";
import EventService from "../services/event.service";

export default function AddEvent({ show, onClose }) {
  const { formData, onSubmit, handleChange } = useFormData({
    name: "",
    description: "",
    poster: "",
    startDate: "",
    local: "",
  });
  const { name, poster, description, startDate, local } = formData;

  const handleSubmit = () => {
    onSubmit(async (data) => {
      await EventService.add(data);
      onClose();
    });
  };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 text-white p-6 rounded-md w-[500px]">
        <h2 className="text-xl font-bold mb-4">Add New Event</h2>
        <form>
          <div className="flex flex-row items-center justify-between gap-6 ">
            <div>
              <div className="mb-4">
                <div className="mb-4 text-white">
                  <label className="block">Image</label>
                  <input
                    type="file"
                    onChange={(e) => handleChange(e.target)}
                    className="w-full px-4 text-white py-2 border rounded-md"
                    name="poster"
                  />
                </div>
                <label className="block ">Title</label>
                <input
                  type="text"
                  placeholder="Title"
                  
                  onChange={(e) => handleChange(e.target)}
                  className="w-full px-4 text-black py-2 border rounded-md"
                  name="name"
                />
              </div>
              <div className="mb-4">
                <label className="block ">Description</label>
                <input
                  placeholder="description"
                  type="text"
                  
                  onChange={(e) => handleChange(e.target)}
                  className="w-full px-4 text-black py-2 border rounded-md"
                  name="description"
                />
              </div>
              <div className="mb-4">
                <label className="block ">Local</label>
                <input
                  placeholder="Local"
                  type="text"
                  
                  onChange={(e) => handleChange(e.target)}
                  className="w-full px-4 text-black py-2 border rounded-md"
                  name="local"
                />
              </div>
              <div className="mb-4">
                <label className="block ">Date</label>
                <input
                  placeholder="Date"
                  type="datetime-local"
                  
                  onChange={(e) => handleChange(e.target)}
                  className="w-full px-4 text-black py-2 border rounded-md"
                  name="startDate"
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
              onClick={handleSubmit}
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
