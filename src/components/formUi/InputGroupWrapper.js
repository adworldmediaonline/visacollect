import { cn } from '@/lib/cn';
export default function InputGroupWrapper({ children, className }) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-6 sm:grid-cols-2 mb-6 md:grid-cols-3',
        className
      )}
    >
      {children}
    </div>
  );
}
