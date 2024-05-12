import React from 'react';

const SubscribeSection = () => {
  return (
    <div className="container mx-auto my-8 px-4">
      <div className="flex flex-wrap justify-center md:justify-between items-center">
        {/* Podcast Subscription Block */}
        <div className="w-full md:w-1/2 xl:w-5/12 p-4 flex flex-col items-center text-center bg-gray-200 rounded-lg m-2 shadow-lg">
          <img src="/assets/podcast.png" alt="Podcast" className="w-1/2 mb-4" />
          <h2 className="text-2xl font-bold">Subscribe to our Podcast</h2>
          <p className="mb-4">Listen to the most recent sermon content from Kingsword Calgary while you&#39;re on the go! Stay up to date on new content released by subscribing.</p>
          <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-900 transition-colors duration-200">
            <a href="#">Subscribe</a>
          </button>
        </div>
        
        {/* YouTube Subscription Block */}
        <div className="w-full md:w-1/2 xl:w-5/12 p-4 flex flex-col items-center text-center bg-yellow-300 rounded-lg m-2 shadow-lg">
          <img src="/assets/youtube.png" alt="YouTube" className="w-1/2 mb-4" />
          <h2 className="text-2xl font-bold">Subscribe to our Youtube channel</h2>
          <p className="mb-4">Catch up on all of our latest sermons or join us for service every Sunday at 9:30am (MST).</p>
          <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors duration-200">
            <a href="https://www.youtube.com/@kingswordcalgary8172/streams">Subscribe</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
