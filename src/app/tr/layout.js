import { Inter } from 'next/font/google';
import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '@/components/turkey/common/Navbar';
import Footer from '@/components/turkey/common/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Turkey Visa Online | E-visa',
  description:
    'Explore Turkey hassle-free! Get your Turkey visa online through our easy application process. Quick approvals and support from our E-visa experts.',
  metadataBase: new URL('https://visacollect.com'),

  alternates: {
    canonical: '/apply-for-sri-lanka-visa/',
  },
  keywords:
    'turkey visa,e visa turkey,turkey visa online,turkey visa application,turkey visa requirements,apply for turkish visa,turkey visa application form,turkey e visa application,turkey visa application form online',

  openGraph: {
    url: '/',
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
