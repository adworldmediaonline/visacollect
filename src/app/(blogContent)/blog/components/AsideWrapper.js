import { cn } from '@/lib/cn';

export default function AsideWrapper({ children, className }) {
  return (
    <aside
      className={cn(
        'basis-[300px] py-5 px-8 md:py-12 space-y-4 bg-crystal rounded-lg self-start font-semibold sticky top-24',
        className
      )}
    >
      {children}
    </aside>
  );
}
