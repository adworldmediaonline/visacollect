import { cn } from '@/lib/cn';
import Breadcrumb from './Breadcrumbs';

export default function BreadcrumbWrapper({ className, wrapperClasses }) {
  return (
    <div className={cn('mt-24', className)}>
      <Breadcrumb
        homeElement={'Home'}
        separator={<span> &gt; </span>}
        activeClasses="text-amber-500"
        wrapperClasses={wrapperClasses}
        // containerClasses="flex py-5 bg-gradient-to-r from-purple-600 to-blue-600"
        containerClasses="flex py-0 text-sm"
        listClasses="mx-2"
        capitalizeLinks
      />
    </div>
  );
}
