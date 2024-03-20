import Breadcrumb from '@/components/Breadcrumbs';
import './global.css';

export const metadata = {
  // robots: {
  //   index: false,
  //   googleBot: {
  //     index: false,
  //   },
  // },
  title: 'Blogs | Visa Collect',
  description:
    'Stay updated with visa collect Get all the information you need about the latest visa requirements, immigration news, and visa application tips to make your travel dreams a reality.',
  metadataBase: new URL('https://visacollect.com'),

  alternates: {
    canonical: '/blog',
  },
  keywords:
    'visa application, apply for visa, online visa application, visa services, apply visa online, online visa, online visa services, e visa services, apply for e visa, Online visa services apply Today',

  openGraph: {
    url: '/blog',
  },
};
export default function RootLayout({ children }) {
  return <>{children}</>;
}
