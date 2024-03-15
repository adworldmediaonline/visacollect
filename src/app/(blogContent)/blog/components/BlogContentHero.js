import { cn } from '@/lib/cn';

export default function BlogContentHero({ className, children }) {
  return (
    <div className={cn('', className)}>
      <div className="relative max-w-[612px] overflow-hidden">{children}</div>
    </div>
  );
}
