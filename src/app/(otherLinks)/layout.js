import MainWrapper from '../(blogContent)/blog/components/MainWrapper';
import PageWrapper from '../(blogContent)/blog/components/PageWrapper';

export default function RootLayout({ children }) {
  return (
    <PageWrapper className="mt-3 mb-10">
      <MainWrapper>{children}</MainWrapper>
    </PageWrapper>
  );
}
