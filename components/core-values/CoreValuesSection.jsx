import React from 'react';
import { FaHeart, FaHandsHelping, FaPray, FaMedal, FaUsers, FaLightbulb } from 'react-icons/fa';

function CoreValuesSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { icon: <FaHeart />, title: 'Love' },
            { icon: <FaHandsHelping />, title: 'Honor' },
            { icon: <FaPray />, title: 'Prayer' },
            { icon: <FaMedal />, title: 'Excellence' },
            { icon: <FaUsers />, title: 'Soul-winning' },
            { icon: <FaLightbulb />, title: 'Creativity' },
          ].map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center justify-center">
              <div className="text-6xl mb-4 text-[#c27803]">{value.icon}</div>
              <h3 className="text-2xl font-semibold">{value.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValuesSection;
