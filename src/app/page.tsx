import BannerMain from '@/components/main/BannerMain';
import ContactForm from '@/components/main/ContactForm';

import Header from '@/components/main/Header';
import HowItWorks from '@/components/main/HowItWorks';
import OurPopularDestination from '@/components/main/OurPopularDestination';
// import OurServices from '@/components/main/OurServices';
// import Testimonial from '@/components/main/Testimonial';
import WhyChooseUs from '@/components/main/WhyChooseUs';
import dynamic from 'next/dynamic';

const Testimonial = dynamic(() => import('@/components/main/Testimonial'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const OurServices = dynamic(() => import('@/components/main/OurServices'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-primary"
      >
        Skip to main content
      </a>
      <Header bgcolor={false} />

      <div id="main-content" role="main">
        <BannerMain />
        <OurPopularDestination />
        <WhyChooseUs />
        <HowItWorks />
        <OurServices />
        <Testimonial />
        <ContactForm />
      </div>
    </main>
  );
}
