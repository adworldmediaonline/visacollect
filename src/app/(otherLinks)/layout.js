import BreadcrumbWrapper from '@/components/BreadcrumbWrapper';
import MainWrapper from '../(blogContent)/blog/components/MainWrapper';
import PageWrapper from '../(blogContent)/blog/components/PageWrapper';

export default function RootLayout({ children }) {
  return (
    <>
      <BreadcrumbWrapper className="mt-24 [&_ul]:px-0 [&_ul]:list-none [&_li]:flex [&_li]:items-center" />

      <div className="container py-0">{children}</div>
    </>
  );
}
