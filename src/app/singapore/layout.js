import Header from '@/components/main/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/main/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'E-Visa ',
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
