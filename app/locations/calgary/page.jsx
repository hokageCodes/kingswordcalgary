import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* First Section */}
      <div className="flex flex-wrap md:flex-nowrap mb-24">
        <div className="md:w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-4 mt-24">KingsWord Church, Calgary</h1>
          <p>KingsWord International Church, Calgary, is a one of the branches of KingsWord Ministries International.</p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="text-xl" />
            <FaTwitter className="text-xl" />
            <FaInstagram className="text-xl" />
            <FaYoutube className="text-xl" />
          </div>
        </div>
        <div className="md:w-1/2">
          <Image src="/assets/ima.png" alt="Church Image" width={600} height={400} />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="md:w-1/2">
          <Image src="/assets/ima.png" alt="Pastor Image" width={600} height={400} />
        </div>
        <div className="md:w-1/2 p-8 mt-24">
          <p className="mb-4">KingsWord International Church, Oko-Oba is a city church expression of KingsWord Ministries International located in the heart of New Oko-Oba in Ifako Ijaiye Local Govt Area, Lagos State. A vibrant community of men and women of the Word and the Spirit, living life on purpose.</p>
          <p>Pastors Acese and Joy Opuada along with the team of leaders and workers look forward to welcoming you when next you can join us for service.</p>
        </div>
      </div>

      {/* Third Section */}
      <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-left mb-4 mt-16">Church Images</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Image src="/assets/ima.png" alt="Church Event 1" width={500} height={300} className="w-full h-auto object-cover rounded-lg" />
        <Image src="/assets/ima.png" alt="Church Event 2" width={500} height={300} className="w-full h-auto object-cover rounded-lg" />
        <Image src="/assets/ima.png" alt="Church Event 3" width={500} height={300} className="w-full h-auto object-cover rounded-lg" />
        <Image src="/assets/ima.png" alt="Church Event 4" width={500} height={300} className="w-full h-auto object-cover rounded-lg" />
      </div>
    </div>


      {/* Fourth Section */}
      <div className="bg-black text-white text-center p-24 rounded-2xl mt-8">
        <h2 className="text-3xl font-bold">Worship With Us</h2>
        <button className="mt-4 bg-white text-black px-6 py-2 rounded-full font-bold">Contact Us</button>
      </div>
    </div>
  );
};

export default Page;
