import Image from 'next/image';
import ThalesiansLogo from '../../public/Logo/thalesians-logo.png';
import Link from 'next/link';

function NavigationBarLogo() {
  return (
    <Link href="/" className="nav-bar-logo-container">
      <Image src={ThalesiansLogo} alt="company logo" width={50} height={50} />{' '}
      <h2 className="nav-logo-thalesians">Thalesians</h2>
    </Link>
  );
}

export default NavigationBarLogo;
