import { useState } from 'react';

type Props = {
  isTabletWidth: boolean;
};

const MobileNavigation = (isTabletWidth: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-navigation">
      <div
        className={`menu-icon ${isOpen && isTabletWidth ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`menu ${isOpen && isTabletWidth ? 'open' : ''}`}>
        <li>
          <a href="#">Link 1</a>
        </li>
        <li>
          <a href="#">Link 2</a>
        </li>
        <li>
          <a href="#">Link 3</a>
        </li>
        <li>
          <a href="#">Link 4</a>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavigation;
