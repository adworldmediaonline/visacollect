import { cn } from '@/lib/cn';
import Link from 'next/link';
export default function LinkButton({ children, className, href = '#' }) {
  return (
    <Link
      href={href}
      className={cn(
        'text-white bg-gradient-to-r from-[#ff5bae] to-[#D63484]  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none ',
        className
      )}
    >
      {children}
    </Link>
  );
}
