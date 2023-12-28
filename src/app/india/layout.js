
import './globals.css';
import { Inter } from 'next/font/google';
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/components/india/common/Header';
import Footer from '@/components/india/common/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'E-Visa',
};

export default function RootLayout({ children }) {
  return (
  <>
  <Header/>
  {children}
<Footer/>  
  </>
  );
}
