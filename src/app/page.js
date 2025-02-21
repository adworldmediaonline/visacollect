import BannerMain from '@/components/main/BannerMain';
import ContactForm from '@/components/main/ContactForm';
import Header from '@/components/main/Header';
import HowItWorks from '@/components/main/HowItWorks';
import OurPopularDestination from '@/components/main/OurPopularDestination';
import WhyChooseUs from '@/components/main/WhyChooseUs';
import dynamic from 'next/dynamic';

// Lazy load components
const Testimonial = dynamic(() => import('@/components/main/Testimonial'), {
  loading: () => (
    <div className="min-h-[400px] bg-gray-100 animate-pulse"></div>
  ),
  ssr: true,
});

const OurServices = dynamic(() => import('@/components/main/OurServices'), {
  loading: () => (
    <div className="min-h-[500px] bg-gray-100 animate-pulse">
      <div className="container py-12 space-y-8 md:py-20">
        <div className="max-w-4xl mx-auto animate-pulse bg-gray-200 h-8 rounded"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-64 bg-gray-200 rounded-xl"></div>
          ))}
        </div>
      </div>
    </div>
  ),
  ssr: true,
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
