import { cn } from '@/lib/cn';

export default function BlogContentHero({ className, children }) {
  return <div className={cn('mt-20', className)}>{children}</div>;
}
