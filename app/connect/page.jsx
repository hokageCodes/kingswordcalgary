"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const ConnectPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState('');

  const groups = [
    { title: 'Small Groups', imageUrl: '/assets/conn1.png', buttonText: 'Join now', link: '/small-groups' },
    { title: 'Service Teams', imageUrl: '/assets/conn2.png', buttonText: 'Join now', link: '/service-teams' },
    { title: "Children's Ministry", imageUrl: '/assets/conn3.png', buttonText: 'Get Involved', link: '/childrens-ministry' },
    { title: 'KMI Partners', imageUrl: '/assets/conn4.png', buttonText: 'Get Involved', link: '/kmi-partners' },
    { title: 'Men\'s Group', imageUrl: '/assets/conn5.png', buttonText: 'Join now', link: '/mens-group' },
    { title: 'Women\'s Group', imageUrl: '/assets/conn6.png', buttonText: 'Join now', link: '/womens-group' },
    { title: 'His & Hers', imageUrl: '/assets/conn7.png', buttonText: 'More Details', link: '/his-hers' },
    { title: 'Mr. & Mrs.', imageUrl: '/assets/conn8.png', buttonText: 'More Details', link: '/mr-mrs' }
  ];

  const openModal = (groupTitle) => {
    setSelectedGroup(groupTitle);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Banner with Overlaid Text */}
      <div className="relative text-center py-24">
        <Image src="/assets/hero1.jpg" alt="Connect" layout="fill" objectFit="cover" className="opacity-50"/>
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-4xl font-bold text-white">Connect</h1>
        </div>
      </div>

      {/* Groups */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 py-8 mx-auto max-w-7xl">
        {groups.map(group => (
          <div key={group.title} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image src={group.imageUrl} alt={group.title} layout='responsive' width={500} height={300} className="w-full h-auto object-cover"/>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">{group.title}</h3>
              <button onClick={() => openModal(group.title)} className="mt-4 py-2 px-4 bg-black text-white rounded hover:bg-gray-800 transition duration-300">
                {group.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Join Form */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-xl font-bold mb-4">Join {selectedGroup}</h2>
            <form>
              <input type="text" placeholder="Name" className="block w-full mb-3 px-3 py-2 border rounded" />
              <input type="email" placeholder="Email" className="block w-full mb-3 px-3 py-2 border rounded" />
              <input type="tel" placeholder="Phone Number" className="block w-full mb-3 px-3 py-2 border rounded" />
              <button type="button" onClick={closeModal} className="mr-4 py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700">Cancel</button>
              <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConnectPage;
