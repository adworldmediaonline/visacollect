import BannerInlineForm from '../ui/banner-inline-form';
import ExperienceStatsSection from '../ui/experience-stats-section';
import Image from 'next/image';
import { homePagesBanner } from '@/constant/images';

const BannerMain = () => {
  return (
    <section className="relative w-full pt-32" aria-label="Main Banner">
      <div className="relative h-[1000px] sm:h-[800px] md:h-[700px] overflow-hidden -translate-y-28">
        <div
          className="absolute inset-0 bg-gradient-to-br from-black/80"
          aria-hidden="true"
        ></div>
        <Image
          alt="Apply for Visa - Stress free travel"
          src={homePagesBanner}
          className="object-cover w-full h-full"
          priority
        />
        <div className="container absolute top-0 w-full px-5 mt-32 -translate-x-1/2 left-1/2">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-center max-w-5xl mx-auto space-y-3">
              <h1
                className="text-white text-center md:text-[55px] text-[40px] font-bold leading-[1.2]"
                tabIndex="0"
              >
                24x7 online visa services started anytime, anywhere.
              </h1>
              <p
                className="text-center text-white mx-auto md:w-[50%] py-2"
                tabIndex="0"
                role="complementary"
              >
                Fast and secure: Trust our secure online visa services platform
                to handle your sensitive information with care.
              </p>
            </div>
          </div>
          <div className="my-10" role="search" aria-label="Visa search form">
            <BannerInlineForm />
          </div>
          <div role="complementary" aria-label="Experience statistics">
            <ExperienceStatsSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerMain;
