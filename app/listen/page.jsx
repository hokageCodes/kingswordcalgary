"use client"
import React, { useState, useEffect } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import Head from 'next/head'; // Import Head for setting page metadata
import SubscribeSection from '@/components/subscribe/SubscribeSection';

const VideoSection = () => {
  const videoIds = ['QPLW5tX4PG0', '66XwQq070LQ', 'iB64Q-_tFGI', 'xRigrfRh0Hw'];
  const [videos, setVideos] = useState(videoIds.map(id => ({
    id,
    title: 'Loading title...',
    pastor: 'Loading pastor...'
  })));
  const [currentVideoId, setCurrentVideoId] = useState(videoIds[0]);

  useEffect(() => {
    // Simulated fetching of video titles and pastor names
    const videoDetails = [
      { title: "Building Successful Relationships", pastor: "Pastor Mildred Okonkwo" },
      { title: "Supernatural Lifestyle", pastor: "Pastor Muyiwa Oseni" },
      { title: "Limitless - Living Unashamed", pastor: "Pastor May" },
      { title: "March Prayer Meeting", pastor: "Kingsword Church" }
    ];
    setVideos(videos.map((video, index) => ({
      ...video,
      title: videoDetails[index].title,
      pastor: videoDetails[index].pastor,
    })));
  });

  return (
    <>
      <Head>
        <title>Video Section</title>
        <meta name="description" content="Explore our video library with insightful sermons." />
      </Head>
      <div className="container mx-auto my-8 p-4">
        {/* Main Video Display */}
        <div className="w-full mb-8">
          <iframe
            className="w-full"
            style={{ height: '50vw', minHeight: '300px' }}
            src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1&mute=1`} // Enable autoplay and mute by default
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>

        {/* Video Thumbnails and Details */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {videos.map(video => (
            <div onClick={() => setCurrentVideoId(video.id)} key={video.id} className="bg-gray-200 hover:bg-gray-300 rounded-lg cursor-pointer p-2 flex flex-col md:flex-row items-center">
              <div className="w-full md:w-24 h-24 flex-none bg-cover rounded-lg overflow-hidden mb-2 md:mb-0 md:mr-4">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={`${video.title} by ${video.pastor}`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-grow text-center md:text-left">
                <p className="text-sm font-medium">{video.title}</p>
                <p className="text-xs text-gray-600">{video.pastor}</p>
              </div>
              <FaPlayCircle className="text-xl mt-2 md:mt-0" />
            </div>
          ))}
        </div>
      </div>
      <SubscribeSection />
    </>
  );
};

export default VideoSection;
