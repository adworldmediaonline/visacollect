import { cn } from '@/lib/cn';

export default function AsideWrapper({ children, className }) {
  return (
    <aside className={cn('basis-[300px] py-5 md:py-12 space-y-4', className)}>
      <div className="container">{children}</div>
    </aside>
  );
}
