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
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Home',
  description: 'otMOh5FASZcM5X9KLygQS5gqWtSD9H4Qnxc',
};
//
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
