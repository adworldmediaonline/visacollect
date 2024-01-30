import Link from 'next/link';

export default function CustomButton({ link, btnText }) {
  return (
    <Link href={link}>
      <button className="w-full px-16 py-3 text-xl font-semibold text-white duration-150 ease-in-out rounded-full bg-primary hover:scale-105">
        {btnText}
      </button>
    </Link>
  );
}
