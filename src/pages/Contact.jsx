import React from "react";

const Contact = () => {
  return (
    <div className="py-10 px-6">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        Have questions, suggestions, or feedback? We'd love to hear from you!
      </p>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border-gray-300 rounded px-4 py-2 focus:ring focus:ring-orange-300"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border-gray-300 rounded px-4 py-2 focus:ring focus:ring-orange-300"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full border-gray-300 rounded px-4 py-2 focus:ring focus:ring-orange-300"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
