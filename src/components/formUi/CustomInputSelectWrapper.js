import { cn } from '@/lib/cn';

export default function CustomInputSelectWrapper({ children, className }) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-6 mb-10 sm:grid-cols-2 md:grid-cols-3',
        className
      )}
    >
      {children}
    </div>
  );
}
