"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay'; // Import the autoplay CSS

function TimelineSection() {
    return (
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our History</h2>
          <Swiper
            modules={[Autoplay]} // Register the Autoplay module
            spaceBetween={50}
            slidesPerView={1}
            loop={true} // Keep the swiper in a continuous loop
            autoplay={{
              delay: 2500, // Delay in ms before transitioning to the next slide
              disableOnInteraction: false // Continue autoplay when the swiper is interacted with
            }}
            breakpoints={{
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {[
              { year: '2017', event: 'Event description for 2017.' },
              { year: '2018', event: 'Event description for 2018.' },
              { year: '2019', event: 'Event description for 2019.' },
              { year: '2020', event: 'Event description for 2020.' },
              { year: '2021', event: 'Event description for 2021.' },
              { year: '2022', event: 'Event description for 2022.' },
              { year: '2023', event: 'Event description for 2023.' },
              { year: '2024', event: 'Event description for 2024.' },
            ].map((item, index) => (
              <SwiperSlide key={index}>
                <div className="text-center px-4">
                  <div className="mb-2">
                    <div className="inline-block border-t-4 border-[#c27803] w-24 mb-2"></div>
                  </div>
                  <div className="text-2xl font-bold mb-2">{item.year}</div>
                  <p className="text-gray-600">{item.event}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
}

export default TimelineSection;
