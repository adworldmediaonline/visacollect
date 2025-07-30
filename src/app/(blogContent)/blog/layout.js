import './global.css';

export const metadata = {
  // robots: {
  //   index: false,
  //   googleBot: {
  //     index: false,
  //   },
  // },
  title: 'blogs | visa collect',
  description:
    'stay updated with visa collect get all the information you need about the latest visa requirements, immigration news, and visa application tips to make your travel dreams a reality.',
  metadataBase: new URL('https://www.visacollect.com'),

  alternates: {
    canonical: '/blog',
  },
  keywords:
    'visa application, apply for visa, online visa application, visa services, apply visa online, online visa, online visa services, e visa services, apply for e visa, online visa services apply today',

  openGraph: {
    url: '/blog',
  },
};
export default function RootLayout({ children }) {
  return <>{children}</>;
}
