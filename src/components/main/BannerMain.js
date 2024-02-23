'use client';

import { useRouter } from 'next/navigation';
import BannerInlineForm from '../ui/banner-inline-form';
import ExperienceStatsSection from '../ui/experience-stats-section';
import HighlightedText from '../ui/highlighted-text';

const BannerMain = () => {
  return (
    <div className="relative w-full pt-32">
      <div className="container">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col justify-center space-y-3">
            <h1 className="text-primary text-center md:text-[55px] text-[40px] font-bold leading-[1.2]">
              24x7 online visa services started anytime, anywhere.
            </h1>
            <p className="text-center mx-auto md:w-[50%] py-2">
              Fast and secure: Trust our secure online visa services platform to
              handle your sensitive information with care.
            </p>
          </div>
        </div>
        <div className="my-10">
          <BannerInlineForm />
        </div>
        <ExperienceStatsSection />
      </div>
    </div>
  );
};

export default BannerMain;
