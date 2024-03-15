import { cn } from '@/lib/cn';

export default function HomePageTitle({ pageTitle, className }) {
  return (
    <h1
      className={cn('text-xl font-light md:text-4xl relative', className)}
      dangerouslySetInnerHTML={{ __html: `${pageTitle}` }}
    ></h1>
  );
}
