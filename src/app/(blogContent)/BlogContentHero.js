import { cn } from '@/lib/cn';
import Image from 'next/image';

export default function BlogHeroImage({ src, className, alt }) {
  return (
    <div
      className={cn('mt-20 flex flex-col items-start justify-start', className)}
    >
      <Image src={src} alt={alt} className="mt-0 rounded-lg" />
    </div>
  );
}
