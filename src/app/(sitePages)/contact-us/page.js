import BreadcrumbWrapper from '@/components/BreadcrumbWrapper';
import ContactUs from '@/components/ui/contact-us';
export const metadata = {
  title: 'got queries | contact us | visa collect',
  description:
    "have questions? we're here to help! find quick and easy ways to reach our friendly customer support team. email us at info@visacollect.com.",
  metadataBase: new URL('https://www.visacollect.com'),

  alternates: {
    canonical: '/contact-us',
  },
  keywords:
    'visa application, apply for visa, online visa application, visa services, apply visa online, online visa, online visa services, e visa services, apply for e visa, online visa services apply today',

  openGraph: {
    url: '/contact-us',
  },
};
export default function Page() {
  return (
    <div>
      <BreadcrumbWrapper className="mt-24" />
      <ContactUs />
    </div>
  );
}
