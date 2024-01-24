import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/india/common/Header';
import Footer from '@/components/india/common/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'India Visa Apply Online Now | E-visa',
  description:
    'Get your India visa online now with E-visa and experience quick, secure, and hassle-free application process.',
  metadataBase: 'https://visacollect.com',
  alternates: {
    canonical: '/india-visa-apply-online-now/',
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
