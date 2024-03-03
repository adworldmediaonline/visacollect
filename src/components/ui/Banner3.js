import { cn } from '@/lib/cn';
import HomePageTitle from '../common/countryHomePage/HomePageTitle';

export default function Banner3({
  breadcrumb,
  pageTitle,
  pageTitleDescription,
  className,
}) {
  return (
    <div>
      <div className={cn('container py-16', className)}>
        <div>
          <p className="py-8">Home &gt; {breadcrumb ?? ''}</p>
        </div>
        <HomePageTitle pageTitle={pageTitle ?? ''} />
        <p className="mt-1 text-base">{pageTitleDescription ?? ''}</p>
      </div>
    </div>
  );
}
