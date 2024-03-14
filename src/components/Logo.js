import Image from 'next/image';
import logo from '../../public/assets/images/brand/logo.png';
export default function Logo() {
  return (
    <div className="w-40">
      <Image src={logo} alt="Visa Collect logo" priority />
    </div>
  );
}
