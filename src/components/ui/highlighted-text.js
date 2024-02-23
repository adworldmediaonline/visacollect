import { cn } from '@/lib/cn';

export default function HighlightedText({ children, className }) {
  return <span className={cn('gradient-text', className)}>{children}</span>;
}
