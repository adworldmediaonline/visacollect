import { GoogleTagManager } from '@next/third-parties/google';

import { Be_Vietnam_Pro } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import { FormProvider } from '@/context/formContext';
import ReactQueryProvider from '@/components/ReactQueryProvider';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
import Header from '@/components/main/Header';
import Footer from '@/components/main/Footer';

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata = {
  // robots: {
  //   index: false,
  //   googleBot: {
  //     index: false,
  //   },
  // },
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
      <body
        className={`${beVietnamPro.className} antialiased flex flex-col min-h-screen`}
      >
        <FormProvider>
          <ReactQueryProvider>
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
            <ToastContainer />
          </ReactQueryProvider>
        </FormProvider>
        <GoogleTagManager gtmId="G-FRMR0BTRLH" />
      </body>
    </html>
  );
}
