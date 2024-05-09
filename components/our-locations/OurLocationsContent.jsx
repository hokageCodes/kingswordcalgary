import React from 'react';
import Link from 'next/link'; // Import the Link component from Next.js

const locations = {
  CA: [
    {
      name: 'KingsWord Calgary',
      address: '5811 46th Street SE, Calgary, AB',
      services: [{ day: 'Sunday Service', time: '9:30AM' }],
      imageUrl: '/assets/calgary.png', // Image URL for Calgary
      link: '/locations/calgary' // Internal link for Calgary
    },
    {
      name: 'KingsWord Toronto',
      address: '380 Albion Road Etobicoke, Toronto, ON',
      services: [{ day: 'Sunday Service', time: '9:00AM' }],
      imageUrl: '/assets/toronto.png', // Image URL for Toronto
      link: '/locations/toronto' // Internal link for Toronto
    },
    {
      name: 'KingsWord Vancouver',
      address: 'Room 402, Surrey City Centre Library, Surrey, BC',
      services: [{ day: 'Sunday Service', time: '11:00AM' }],
      imageUrl: '/assets/toronto.png', // Image URL for Vancouver
      link: '/locations/vancouver' // Internal link for Vancouver
    },
    // Add more locations here if necessary...
  ],
  // ...other countries
};

const ServiceTime = ({ day, time }) => (
  <div className="flex justify-between items-center px-2 py-1 border-t">
    <p className="font-semibold text-sm sm:text-base">{day}</p>
    <p className="text-sm sm:text-base">{time}</p>
  </div>
);

const LocationCard = ({ name, address, services, imageUrl, link }) => (
  <Link href={link} passHref> {/* Add the Link component here with passHref for correct anchor behavior */}
    <a className="block bg-white rounded-lg shadow-lg overflow-hidden"> {/* Use an anchor tag to make the entire card clickable */}
      <img src={imageUrl} alt={`Location at ${name}`} className="w-full object-cover h-48" /> {/* Image displayed here */}
      <div className="p-4">
        <h3 className="text-xl sm:text-2xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm sm:text-base mb-4">{address}</p>
        {services.map((service, index) => (
          <ServiceTime key={index} day={service.day} time={service.time} />
        ))}
      </div>
    </a>
  </Link>
);

const Locations = () => (
  <div className="px-4 py-6">
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {locations.CA.map((location, index) => (
        <LocationCard key={index} {...location} />
      ))}
    </div>
  </div>  
);

export default Locations;
