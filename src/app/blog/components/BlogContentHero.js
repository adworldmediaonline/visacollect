import { cn } from '@/lib/cn';

export default function BlogContentHero({ children, className }) {
  return <div className={cn('mt-20', className)}>{children}</div>;
}
