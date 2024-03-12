'use client';
import CountUp from 'react-countup';
export default function ExperienceStatsItem({
  number,
  numberText,
  text,
  icon,
}) {
  return (
    <div className="w-1/2 p-4 sm:w-1/4">
      <h2 className="flex justify-center text-3xl font-medium text-white title-font sm:text-4xl">
        {/* <h2 className="flex justify-center text-3xl font-medium text-primary title-font sm:text-4xl"> */}
        {number ? (
          <CountUp start={0} end={number} duration={2.75} suffix={numberText} />
        ) : null}
        {icon ? Array.from({ length: 5 }, (_, index) => icon) : null}
      </h2>
      <p className="leading-relaxed text-white">{text ?? ''}</p>
    </div>
  );
}
