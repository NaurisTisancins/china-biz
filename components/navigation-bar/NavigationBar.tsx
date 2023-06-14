import NavigationBarLogo from './NavigationBarLogo';
import NavigationBarLinks from './NavigationBarLinks';
import { useTabletWidth } from '@/hooks/screenHooks';
import MobileNavigation from './MobileNavigation';

function NavigationBar() {
  const isTabletWidth = useTabletWidth();
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-content-container">
        <NavigationBarLogo />
        {!isTabletWidth && <NavigationBarLinks />}
        {isTabletWidth && <MobileNavigation isTabletWidth={isTabletWidth} />}
      </div>
    </div>
  );
}

export default NavigationBar;
