import React from 'react';
import { Card } from 'flowbite-react';

const residentPastors = [
  {
    name: 'Pastor Seun Oseni',
    title: 'KingsWord Calgary',
    imageUrl: '/assets/hero1.jpg',
  },
  {
    name: 'Pastor Kunle Mabadeje',
    title: 'KingsWord Calgary',
    imageUrl: '/assets/hero2.jpg',
  },
  {
    name: 'Pastor Hope Obaido',
    title: 'KingsWord Toronto',
    imageUrl: '/assets/hero1.jpg',
  },
  {
    name: 'Dr. Taiwo Asiwaju',
    title: 'KingsWord Vancouver',
    imageUrl: '/assets/hero2.jpg',
  },
];

const FoundersAndLeadershipSection = () => {

  return (
    <>
      {/* Founders Section */}
      <section className="text-gray-800 py-12 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2">
              <img
                src="/assets/pastors.webp"
                alt="Founders"
                className="rounded-lg shadow-lg mb-8 lg:mb-0"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <h2 className="text-3xl font-semibold mb-4">Meet our founders</h2>
              <p className="text-lg max-w-lg">
                <b>Dr. Kay and Pastor May Ijisesan</b> <br />provide apostolic oversight over KingsWord Ministries International, the umbrella covering of KingsWord International Churches and The New churches with installations spanning North America, Europe and Africa
              </p>
            </div>
          </div>
      </section>

      {/* Leadership Section */}
      <section className="text-gray-800 py-12 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2">
              <img
                src="/assets/pastey.webp"
                alt="Founders"
                className="rounded-lg shadow-lg mb-8 lg:mb-0"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <h2 className="text-3xl font-semibold mb-4">Meet our Canada Zonal Pastor</h2>
              <p className="text-lg max-w-lg">
                <b>Pastor Muyiwa Oseni</b> <br />is the Zonal Pastor for the KingsWord Ministries in Canada. KingsWord Ministries in Canada currently spans Calgary, Toronto and Vancouver.
              </p>
            </div>
          </div>
      </section>
      

      {/* Resident Section */}
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-left mb-12">Resident Pastors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {residentPastors.map((pastor, index) => (
              <Card key={index} imgAlt={pastor.name} className="max-w-sm mx-auto">
                <img src={pastor.imageUrl} alt={pastor.name} />
                <h5 className="text-2xl font-bold tracking-tight text-white">
                  {pastor.name}
                </h5>
                <p className="font-normal text-white">
                  {pastor.title}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FoundersAndLeadershipSection;