import { cn } from '@/lib/cn';

export default function AsideWrapperTitle({ children, className }) {
  return (
    <h2 className={cn('mb-3 text-2xl text-secondary', className)}>
      {children}
    </h2>
  );
}
