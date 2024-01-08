import { Inter } from 'next/font/google';
import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '@/components/turkey/common/Navbar';
import Footer from '@/components/turkey/common/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'E-Visa ',
};

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
