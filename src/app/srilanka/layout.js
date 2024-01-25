import { Inter } from 'next/font/google';
import './globals.css';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from '@/components/srilanka/common/Navbar';
import Footer from '@/components/srilanka/common/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Apply For Sri Lanka Visa | E-visa',
  description:
    'Simplify your travel plans with E-visa - the easiest way to apply for Sri Lanka visa. Quick, reliable, and stress-free application process awaits you',
  metadataBase: new URL('https://visacollect.com'),

  alternates: {
    canonical: '/apply-for-sri-lanka-visa/',
  },
  keywords:
    'sri lanka visa,sri lanka tourist visa,sri lanka visa online,sri lanka e visa,apply for sri lanka visa,sri lanka eta online',

  openGraph: {
    url: '/',
  },
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
