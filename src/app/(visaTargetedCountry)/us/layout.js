import { Inter } from 'next/font/google';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import { FormProvider } from '@/context/formContext';
import ReactQueryProvider from '@/components/ReactQueryProvider';
import Navbar from '@/components/australia/common/Navbar';
import Footer from '@/components/australia/common/Footer';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Apply For Australia Visa Online | E-visa',
  description:
    'Apply for Australia visa online effortlessly with E-visa through our user-friendly platform. Let our team simplify the journey to your dream destination.',
  metadataBase: new URL('https://visacollect.com'),

  alternates: {
    canonical: '/apply-for-sri-lanka-visa/',
  },
  keywords:
    'australia visa,apply for australian visa,australia tourist visa,visitor visa australia,australia tourist visa application,australian visa application,australia visa requirements,australia visa application online,australian visa application form,apply for australia visa online,apply e visa for australia',

  openGraph: {
    url: '/',
  },
};
export default function RootLayout({ children }) {
  return <>{children}</>;
}
