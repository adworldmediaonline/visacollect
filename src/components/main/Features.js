import React from 'react';

export default function Features() {
  const smallIcon = [
    {
      id: 1,
      imgSrc: '/assets/images/main/happy.png',
      title: '10k+ Happy Customers',
    },
    {
      id: 2,
      imgSrc: '/assets/images/main/time.png',
      title: '99% On Time Delivery',
    },
    {
      id: 3,
      imgSrc: '/assets/images/main/experience.png',
      title: '5+ Years of Experience',
    },
    {
      id: 4,
      imgSrc: '/assets/images/main/rating.png',
      title: 'Ratings By Customers',
    },
  ];
  return (
    <div className="relative w-full overflow-y-auto md:h-80 ">
      <div className="container items-center justify-center grid-cols-4 gap-6 pt-20 space-y-8 md:grid md:space-y-0">
        {smallIcon.map((e, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center py-8 space-y-2 text-white duration-200 border-2 rounded-md shadow-md bg-black/50 border-primary/80 hover:brightness-150 hover:drop-shadow-2xl hover:shadow-lg hover:-translate-y-4 "
          >
            <img src={e.imgSrc} className="w-16 h-[3.5rem]" />
            <h5 className="font-semibold text-center ">{e.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
