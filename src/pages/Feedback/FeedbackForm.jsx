// Developer: Boddupally Charitha – BEF Main WebApp
// Feature: Created Feedback Form UI with Name, Email, and Message fields
// Note: Includes basic alert on form submit, no validation logic yet

import { useState } from "react";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback submitted! Thank you 💙");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-[#F9FAFB] rounded shadow-md">
      <h2 className="text-xl font-bold text-[#1E3A8A] mb-4">Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-medium text-[#1E3A8A]">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Your name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium text-[#1E3A8A]">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium text-[#1E3A8A]">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Your message"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#1E3A8A] text-white px-4 py-2 rounded hover:bg-[#06B6D4] transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
