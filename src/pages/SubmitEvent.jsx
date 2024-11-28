import React from "react";

const SubmitEvent = () => {
  return (
    <div className="py-10 px-6">
      <h1 className="text-3xl font-bold mb-6">Submit Your Event</h1>
      <p className="text-lg text-gray-700 mb-6">
        Have an exciting sports event to share? Submit your event details, and
        we'll help promote it to sports enthusiasts everywhere!
      </p>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-bold mb-2">
            Event Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full border-gray-300 rounded px-4 py-2 focus:ring focus:ring-orange-300"
            placeholder="Event Title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-bold mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="w-full border-gray-300 rounded px-4 py-2 focus:ring focus:ring-orange-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-bold mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            className="w-full border-gray-300 rounded px-4 py-2 focus:ring focus:ring-orange-300"
            placeholder="Event Location"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            rows="4"
            className="w-full border-gray-300 rounded px-4 py-2 focus:ring focus:ring-orange-300"
            placeholder="Event Description"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
        >
          Submit Event
        </button>
      </form>
    </div>
  );
};

export default SubmitEvent;
