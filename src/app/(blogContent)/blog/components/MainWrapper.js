import { cn } from '@/lib/cn';

export default function MainWrapper({
  children,
  className,
  containerClassName,
  noContainer,
}) {
  return (
    <main
      className={cn(
        'flex-1  [&_h2]:text-[1.76rem] [&_h3]:text-[1.76rem] [&_h4]:text-[1.76rem] [&_h5]:text-[1.76rem] [&_h6]:text-[1.76rem] [&_strong]:text-tertiary [&_p]:font-normal [&_p]:text-[#343a40] [&_li]:text-[#343a40]',
        className
      )}
    >
      {noContainer ? (
        <div className={cn('', containerClassName)}>
          <div className="max-w-full space-y-4 prose my-0 [&_img]:m-0">
            {children}
          </div>
        </div>
      ) : (
        <div className={cn('container', containerClassName)}>
          <div className="max-w-full space-y-4 prose my-0 [&_img]:m-0">
            {children}
          </div>
        </div>
      )}
    </main>
  );
}
