import { Inter } from 'next/font/google';
import './global.css';
import Header from '@/components/thailand/common/Header';
import Footer from '@/components/thailand/common/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Apply Thailand Visa Online | E-visa',
  description:
    'Planning a trip to Thailand? Save time and energy – apply Thailand visa online in just a few clicks! Enjoy a seamless experience with E-vise.',
  metadataBase: new URL('https://visacollect.com'),

  alternates: {
    canonical: '/apply-for-sri-lanka-visa/',
  },
  keywords:
    'thailand visa,thailand visa on arrival,thailand tourist visa,e visa thailand,thailand visa online,thailand visa application form,apply thailand visa online,thailand e visa on arrival,e visa for thailand,apply e visa for thailand',

  openGraph: {
    url: '/',
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
