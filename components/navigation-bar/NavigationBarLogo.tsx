import Image from 'next/image';
import ThalesiansLogo from '../../public/Logo/thalesians-logo.png';
import Link from 'next/link';

function NavigationBarLogo() {
  return (
    <Link href="/" className="nav-bar-logo-container">
      <Image src={ThalesiansLogo} alt="company logo" width={90} height={90} />
    </Link>
  );
}

export default NavigationBarLogo;
