import Image from 'next/image';
import ThalesiansLogo from '../../public/Logo/thalesians-logo.png';

function NavigationBarLogo() {
  return (
    <div>
      <Image src={ThalesiansLogo} alt="company logo" width={50} height={50} />
    </div>
  );
}

export default NavigationBarLogo;
