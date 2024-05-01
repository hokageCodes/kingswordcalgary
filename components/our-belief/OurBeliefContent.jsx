import React from 'react';
import TimelineSection from '../timeline/TimelineSection';
import CoreValuesSection from '../core-values/CoreValuesSection';

function OurBeliefContent() {
  return (
    <>
      <section className="container mx-auto flex flex-wrap gap-24 items-center justify-center py-12 px-4 lg:px-0">
        <div className="flex-1 max-w-md text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-5xl max-w-xs font-bold mb-4">Raising A Supernatural Army</h2>
          <hr className="border-t-4 border-[#c27803] w-full lg:w-2/4 mb-8" />
          <p className="mb-8 text-xl">KingsWord International Church, Chicago is committed to raising a people of purpose.</p>
          <p className="mb-8 text-xl">To proclaim Jesus, the Anointed one and present him clearly to the world.</p>
          <p className="mb-8 text-xl">We emphasize victory is by the Word and the strategy that is in it.</p>
          <p className="mb-8 text-xl">We are ordained to raise up and expose Gods children into the fullness of their God-given purpose.</p>
          <button className="bg-white text-[#c27803] font-bold border border-[#c27803] border-2 py-4 px-4 rounded">
            CONTACT US
          </button>
        </div>
        <div className="flex-1 max-w-xl grid grid-cols-1 md:grid-cols-2 gap-4">
          {['/assets/about1.png', '/assets/about2.png', '/assets/about3.png', '/assets/about4.png', '/assets/about5.png', '/assets/about6.png'].map((src, index) => (
            <div key={index} className="mb-4">
              <img className="object-cover rounded-lg shadow-lg w-full h-48 md:h-64" src={src} alt={`Gallery ${index}`} />
            </div>
          ))}
        </div>
      </section>
      <TimelineSection />
      <CoreValuesSection />
    </>
  );
}

export default OurBeliefContent;