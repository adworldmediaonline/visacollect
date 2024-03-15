import { cn } from '@/lib/cn';

export default function BlogPreview2PageHero({ children, className }) {
  return (
    <div className={cn('flex flex-col md:flex-row px-5', className)}>
      {children}
    </div>
  );
}
