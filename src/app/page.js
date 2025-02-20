import BannerMain from '@/components/main/BannerMain';
import ContactForm from '@/components/main/ContactForm';

import Header from '@/components/main/Header';
import HowItWorks from '@/components/main/HowItWorks';
import OurPopularDestination from '@/components/main/OurPopularDestination';
import OurServices from '@/components/main/OurServices';
import Testimonial from '@/components/main/Testimonial';
import WhyChooseUs from '@/components/main/WhyChooseUs';

export default function Home() {
  return (
    <main>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-primary"
      >
        Skip to main content
      </a>
      <Header role="banner" />
      <div id="main-content" role="main">
        <BannerMain />
        <OurPopularDestination visitAllCountry={true} />
        <WhyChooseUs />
        <HowItWorks />
        <OurServices />
        <Testimonial />
        <ContactForm />
      </div>
    </main>
  );
}
