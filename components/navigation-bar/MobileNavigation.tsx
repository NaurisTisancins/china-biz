import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

type Props = {
  isTabletWidth: boolean;
};

const MobileNavigation = (isTabletWidth: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const selectedPath = (path: string): boolean => {
    return pathname === path;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="hamburger-navigation ">
      <div
        className={`menu-icon ${isOpen && isTabletWidth ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className="bar bg-cyan-600"></div>
        <div className="bar bg-cyan-600"></div>
        <div className="bar bg-cyan-600"></div>
      </div>
      <ul className={`menu ${isOpen && isTabletWidth ? 'open' : ''}`}>
        <Link href="/" onClick={closeMenu}>
          <div
            className={
              'nav-link-mobile hover:text-amber-400 ' +
              (selectedPath('/') ? 'text-amber-400' : 'text-cyan-600')
            }
          >
            主页 Home
          </div>
        </Link>
        <Link href="/about" onClick={closeMenu}>
          <div
            className={
              'nav-link-mobile hover:text-amber-400 ' +
              (selectedPath('/about') ? 'text-amber-400' : 'text-cyan-600')
            }
          >
            关于 About
          </div>
        </Link>
        <Link href="/teaching" onClick={closeMenu}>
          <div
            className={
              'nav-link-mobile hover:text-amber-400 ' +
              (selectedPath('/teaching') ? 'text-amber-400' : 'text-cyan-600')
            }
          >
            教学 Teach
          </div>
        </Link>

        <Link href="/contact" onClick={closeMenu}>
          <div
            className={
              'nav-link-mobile hover:text-amber-400 ' +
              (selectedPath('/contact') ? 'text-amber-400' : 'text-cyan-600')
            }
          >
            联系 Contact
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default MobileNavigation;
