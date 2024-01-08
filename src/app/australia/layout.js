import { Inter } from 'next/font/google';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import { FormProvider } from '@/context/formContext';
import ReactQueryProvider from '@/components/ReactQueryProvider';
import Navbar from '@/components/australia/common/Navbar';
import Footer from '@/components/australia/common/Footer';
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
