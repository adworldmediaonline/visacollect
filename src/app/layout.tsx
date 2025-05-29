import type { Metadata } from 'next';
import FooterTwo from '@/components/main/FooterTwo';

import HeaderTwo from '@/components/main/header-two';
import ReactQueryProvider from '@/components/ReactQueryProvider';
import { FormProvider } from '@/context/formContext';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Be_Vietnam_Pro } from 'next/font/google';
import Script from 'next/script';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer } from 'react-toastify';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  // robots: {
  //   index: false,
  //   googleBot: {
  //     index: false,
  //   },
  // },
  title: '24X7 Online Visa Services | Get Your Visa Apply Today - Visa Collect',
  description:
    'Visa Collect - Plan your stress-free travel with our 24/7 online visa services. Enjoy quick and reliable visa processing at any time. Apply Visa Today',
  metadataBase: new URL('https://www.visacollect.com'),

  alternates: {
    canonical: '/',
  },
  keywords:
    'visa application, apply for visa, online visa application, visa services, apply visa online, online visa, online visa services, e visa services, apply for e visa, Online visa services apply Today',

  openGraph: {
    url: '/',
  },
  verification: {
    google: 'YsTlOsZiwtGZbGt2tjHOKhd10CXrHKhEez-SUhmCDg0',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${beVietnamPro.className} antialiased flex flex-col min-h-screen`}
      >
        <FormProvider>
          <ReactQueryProvider>
            <HeaderTwo bgcolor={false} />
            <div className="flex-1">{children}</div>
            <FooterTwo />
            <ToastContainer />
          </ReactQueryProvider>
        </FormProvider>
        <GoogleTagManager gtmId="G-FRMR0BTRLH" />
        <GoogleAnalytics gaId="G-FRMR0BTRLH" />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org/',
                '@type': 'WebSite',
                name: 'Visa Collect',
                url: 'https://www.visacollect.com/',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: '{search_term_string}',
                  'query-input': 'required name=search_term_string',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'TouristInformationCenter',
                name: 'Visa Collect',
                image: 'https://www.visacollect.com/',
                '@id': '',
                url: 'https://www.visacollect.com/',
                telephone: '‎+91 82914 35253',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress:
                    'Plot No. 136, 3rd Floor, Rider House, Sector 44',
                  addressLocality: 'Gurugram',
                  postalCode: '122003',
                  addressCountry: 'IN',
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: 28.4514829,
                  longitude: 77.0751763,
                },
                openingHoursSpecification: {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                  ],
                  opens: '09:00',
                  closes: '18:00',
                },
                sameAs: [
                  'https://www.facebook.com/people/Visa-Collect/61556054082156/?mibextid=ZbWKwL',
                  'https://twitter.com/visacollect',
                  'https://www.instagram.com/visacollect/?igsh=MXFjbzFpZDJlNHZmaw%3D%3D',
                  'https://www.linkedin.com/in/visa-collect-9283752b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
                ],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'ProfessionalService',
                name: 'Visa Collect',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress:
                    'Plot No. 136, 3rd Floor, Rider House, Sector 44',
                  addressLocality: 'Gurgaon',
                  addressRegion: 'Haryana',
                  postalCode: '122003',
                  addressCountry: 'India',
                },
                image:
                  'https://www.visacollect.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhome-page-banner.48ca4340.webp&w=3840&q=75',
                telephone: '+91 8291435253',
                url: 'https://www.visacollect.com/',
                logo: 'https://www.visacollect.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Flogo.df219a3f.png&w=3840&q=75',
                sameAs: [
                  'https://twitter.com/visacollect',
                  'https://www.linkedin.com/in/visa-collect-9283752b9/',
                  'https://www.instagram.com/visacollect?igsh=MXFjbzFpZDJlNHZmaw==',
                  'https://www.facebook.com/profile.php?id=61556054082156&mibextid=ZbWKwL',
                ],
                description:
                  'Plan your stress-free travel with our 24/7 online visa services. Enjoy quick and reliable visa processing at any time. Apply Visa Today.',
                openingHours: 'Mo,Tu,We,Th,Fr,Sat 09:00-18:00',
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: '28.45148344478403',
                  longitude: '77.07517561712757',
                },
                priceRange: 'Best Price Guaranteed',
              },
            ]),
          }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
