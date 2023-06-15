import Image from 'next/image';
import ThalesiansLogo from '../../public/Logo/thalesians-logo.png';

function NavigationBarLogo() {
  return (
    <div className="nav-bar-logo-container">
      <Image src={ThalesiansLogo} alt="company logo" width={90} height={90} />
    </div>
  );
}

export default NavigationBarLogo;
