import Link from 'next/link';

export default function CustomButton({ link, btnText, children }) {
  return (
    <Link
      href={link}
      className="flex items-center justify-center gap-2 px-5 py-2 text-base font-semibold text-white duration-150 ease-in-out rounded-full shrink-0 bg-primary hover:scale-105"
    >
      {btnText}
      {children}
    </Link>
  );
}
