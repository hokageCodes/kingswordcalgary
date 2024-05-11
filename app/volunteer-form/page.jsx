"use client"
import React, { useState } from 'react';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    team: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert("Thank you for volunteering!");
    setFormData({name: '', email: '', phone: '', team: ''});
  };

  return (
    <div className="flex flex-wrap min-h-screen">
      <div className="w-full md:w-1/2 bg-black text-white p-12 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">Volunteer With Us</h1>
        <p className="mb-3">
          Join our community of volunteers and make a difference with your talents and time. 
          Choose a team where you feel you can best contribute your skills and help us grow together.
        </p>
        <p>
          Whether you're interested in helping kids learn, managing events, or leading worship, 
          there's a place for you in our community.
        </p>
      </div>
      <div className="w-full md:w-1/2 p-12 flex justify-center items-center bg-white">
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="team" className="block text-gray-700 text-sm font-bold mb-2">Desired Team:</label>
            <select
              id="team"
              name="team"
              value={formData.team}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">--Please choose an option--</option>
              <option value="Choir">Choir</option>
              <option value="Ushering">Ushering</option>
              <option value="Protocol">Protocol</option>
              <option value="Communications">Communications</option>
              <option value="Media">Media</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Prayer">Prayer</option>
              <option value="Admin">Admin</option>
              <option value="Facility">Facility</option>
              <option value="Children’s Ministry">Children&#39;s Ministry</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerForm;
