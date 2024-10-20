import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import slack from '@/assets/slack.png'; // Import the image

export default function IntegrationCarousel() {
  const cards = Array.from({ length: 10 }).map((_, index) => (
    <div
      key={index}
      className="relative border  border-slate-500 flex flex-col rounded-2xl transition-opacity duration-500 group min-w-[250px] mx-2 bg-pink-600 min-h-72"
    >
      <div className='mx-5 py-5'>

      <span className="relative w-full my-10" > 
        <Image 
          src={slack} 
          alt={`Slack Image ${index + 1}`} 
          className='bg-white p-1 rounded-xl'
          layout="" // Makes the image responsive
        />
      </span>

      <div className='my-5'>
      <h2 className="text-2xl font-bold text-white mb-2">Slack</h2>
      <div className='font-bold text-base text-white'>Create and manage ClickUp tasks from within your Slack conversations.</div>
      </div>
      </div>

    </div>
  ));

  return (
    <div className="overflow-x-auto my-10">
      <div className="flex space-x-4 p-4">{cards}</div>
    </div>
  );
}
