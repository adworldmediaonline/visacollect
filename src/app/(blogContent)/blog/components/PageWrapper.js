import { cn } from '@/lib/cn';

export default function PageWrapper({ children, className }) {
  return (
    <div className={cn('flex flex-col  md:flex-row px-5', className)}>
      {children}
    </div>
  );
}
