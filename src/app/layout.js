import { Inter, Poppins } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import { FormProvider } from '@/context/formContext';
import ReactQueryProvider from '@/components/ReactQueryProvider';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
// import Head from 'next/head';
// import HeadClient from './HeadClient';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  robots: {
    index: false,
    googleBot: {
      index: false,
    },
  },
  title: '24X7 Online Visa Services | Get Your Visa Apply Today',
  description:
    'Plan your stress-free travel with our 24/7 online visa services. Enjoy quick and reliable visa processing at any time. Apply Visa Today.',
  metadataBase: new URL('https://visacollect.com'),

  alternates: {
    canonical: '/',
  },
  keywords:
    'visa application, apply for visa, online visa application, visa services, apply visa online, online visa, online visa services, e visa services, apply for e visa, Online visa services apply Today',

  openGraph: {
    url: '/',
  },
  verification: {
    google: 'qsi8k0I-otMOh5FASZcM5X9KLygQS5gqWtSD9H4Qnxc',
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <HeadClient /> */}
      <body className={`${poppins.className} antialiased`}>
        <FormProvider>
          <ReactQueryProvider>
            <div>{children}</div>
            <ToastContainer />
          </ReactQueryProvider>
        </FormProvider>
      </body>
    </html>
  );
}
