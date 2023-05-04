import NavigationBarLogo from './NavigationBarLogo';
import NavigationBarLinks from './NavigationBarLinks';

function NavigationBar() {
  return (
    <div className="nav-bar-container">
      <div className='nav-bar-content-container'>
        <NavigationBarLogo />
        <NavigationBarLinks />
      </div>
    </div>
  );
}

export default NavigationBar;
