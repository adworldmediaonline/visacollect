import BannerMain from "@/components/main/BannerMain";
import ContactForm from "@/components/main/ContactForm";
import Features from "@/components/main/Features";
import Footer from "@/components/main/Footer";
import Header from "@/components/main/Header";
import HowItWorks from "@/components/main/HowItWorks";
import OurPopularDestination from "@/components/main/OurPopularDestination";
import OurServices from "@/components/main/OurServices";
import Testimonial from "@/components/main/Testimonial";
import WhyChooseUs from "@/components/main/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <Header />
      <BannerMain />
      <OurPopularDestination />
      <WhyChooseUs />
      <HowItWorks />
      <Features />
      <OurServices />
      <Testimonial />
      <ContactForm />
      <Footer />
    </div>
  );
}
