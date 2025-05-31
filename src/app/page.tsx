import BannerMainFour from '@/components/main/banner-main-four';
import BannerMainThree from '@/components/main/banner-main-three';
import BannerMainTwo from '@/components/main/banner-main-two';
import ContactFormTwo from '@/components/main/contact-form-two';
import HowItWorksTwo from '@/components/main/how-it-works-two';
import OurPopularDestinationTwo from '@/components/main/our-popular-destination-two';
import WhyChooseUsTwo from '@/components/main/why-choose-us-two';
import dynamic from 'next/dynamic';

const TestimonialTwo = dynamic(
  () => import('@/components/main/testimonial-two'),
  {
    loading: () => (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    ),
    ssr: false,
  }
);

const OurServicesTwo = dynamic(
  () => import('@/components/main/our-services-two'),
  {
    loading: () => (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    ),
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-primary focus:rounded-md focus:shadow-lg focus:top-4 focus:left-4"
      >
        Skip to main content
      </a>

      <div id="main-content" role="main" className="overflow-x-hidden">
        <BannerMainThree />
        <OurPopularDestinationTwo />
        <WhyChooseUsTwo />
        <HowItWorksTwo />
        <OurServicesTwo />
        <TestimonialTwo />
        <ContactFormTwo />
      </div>
    </main>
  );
}
