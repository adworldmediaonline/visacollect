'use client';
import ExperienceStatsItem from './experience-stats-item';
import { FaStar } from 'react-icons/fa6';

const statistics = [
  {
    id: 1,
    number: 10,
    numberText: 'k+',
    title: 'Happy Customers',
  },
  {
    id: 2,
    imgSrc: '/assets/images/main/time.png',
    title: 'On Time Delivery',
    number: 99,
    numberText: '%',
  },
  {
    id: 3,
    imgSrc: '/assets/images/main/experience.png',
    title: 'Years of Experience',
    number: 5,
    numberText: '+',
  },
  {
    id: 4,
    title: 'Ratings By Customers',
    icon: <FaStar className="text-2xl text-yellow-500" />,
  },
];
export default function ExperienceStatsSection() {
  return (
    <div className="text-gray-600">
      <div className="container px-5 mx-auto mt-16">
        <div className="flex flex-wrap items-center -m-4 text-center">
          {statistics?.map(stats => (
            <ExperienceStatsItem
              key={stats.id}
              text={stats.title}
              number={stats.number}
              numberText={stats.numberText}
              icon={stats.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
