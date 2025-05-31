import { cn } from '@/lib/cn';

export default function Button({
  children,
  className,
  type = 'button',
  ariaLabel,
  isValid,
  props,
}) {
  return (
    <button
      {...props}
      type={type}
      aria-label={ariaLabel}
      className={cn(
        `text-white bg-gradient-to-r from-[#1998C7] to-[#007FAE]  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none ${
          !isValid ? 'cursor-not-allowed opacity-50' : ''
        }`,
        className
      )}
      role="button"
      tabIndex={0}
    >
      {children}
    </button>
  );
}
