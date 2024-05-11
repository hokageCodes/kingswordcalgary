"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';

const EventsSection = () => {
  const events = [
    { title: 'Supernatural Canada', subtitle: 'Annual Worship Meeting', imageUrl: '/assets/Supernatural.png' },
    { title: 'Limitless', subtitle: 'Worship Meeting', imageUrl: '/assets/Limitless.png' },
    { title: 'Easter Sunday', subtitle: 'Easter Service', imageUrl: '/assets/Easter-Sunday-Service.png' },
    { title: 'Mr. & Mrs', subtitle: 'Love Series', imageUrl: '/assets/mr-mrs.png' },
    { title: 'His & Hers', subtitle: 'Love Series', imageUrl: '/assets/his-hers.png' },
    { title: 'Carol Service', subtitle: 'Christmas Carol Service', imageUrl: '/assets/Carol-Service.png' },
    { title: 'Cross Over Service', subtitle: 'New Years Eve', imageUrl: '/assets/Cross-Over-service.png' },
  ];

  return (
    <div className="bg-yellow-100">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 mb-4 sm:mb-0 text-center sm:text-left">
            Catch up on our past monthly and annual events
          </h2>
          <a href="https://www.youtube.com/@kingswordcalgary8172/streams" className="bg-black text-white py-2 px-6 sm:px-8 text-sm sm:text-base rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            View all events
          </a>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="rounded overflow-hidden shadow-lg bg-white">
                <Image
                  src={event.imageUrl}
                  alt={`Event ${event.title}`}
                  width={500} // Adjust according to your actual aspect ratio
                  height={380} // Adjust according to your actual aspect ratio
                  objectFit="cover"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{event.title}</div>
                  <p className="text-gray-700 text-base">{event.subtitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default EventsSection;
