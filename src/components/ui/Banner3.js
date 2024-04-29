import { cn } from '@/lib/cn';
import HomePageTitle from '../common/countryHomePage/HomePageTitle';
import Breadcrumb from '../Breadcrumbs';

export default function Banner3({
  breadcrumb,
  pageTitle,
  pageTitleDescription,
  className,
}) {
  return (
    <div>
      <div className="mt-24">
        <Breadcrumb
          homeElement={'Home'}
          separator={<span> &gt; </span>}
          activeClasses="text-amber-500"
          // containerClasses="flex py-5 bg-gradient-to-r from-purple-600 to-blue-600"
          containerClasses="flex py-0 text-sm"
          listClasses="mx-2"
          capitalizeLinks
        />
      </div>
      <div className={cn('container pt-8 pb-16', className)}>
        <HomePageTitle pageTitle={pageTitle ?? ''} />
        <p className="mt-1 text-base">{pageTitleDescription ?? ''}</p>
      </div>
    </div>
  );
}
