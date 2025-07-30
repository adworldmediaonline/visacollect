export const metadata = {
  // robots: {
  //   index: false,
  //   googleBot: {
  //     index: false,
  //   },
  // },
  title: 'about us | visa collect',
  description:
    'welcome to visa collect, your trusted partner for visa solutions worldwide. learn more about our team, values, and dedication to excellence, checkout for more information about the visa services.',
  metadataBase: new URL('https://www.visacollect.com'),

  alternates: {
    canonical: '/about-us',
  },
  keywords:
    'visa application, apply for visa, online visa application, visa services, apply visa online, online visa, online visa services, e visa services, apply for e visa, online visa services apply today',

  openGraph: {
    url: '/about-us',
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
