import BannerMain from "@/components/main/BannerMain";
import Footer from "@/components/main/Footer";
import Header from "@/components/main/Header";
import HowItWorks from "@/components/main/HowItWorks";
import OurPopularDestination from "@/components/main/OurPopularDestination";
import WhyChooseUs from "@/components/main/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <Header />
      <BannerMain />
      <OurPopularDestination />
      <WhyChooseUs />
      <HowItWorks />
      <Footer />
    </div>
  );
}
