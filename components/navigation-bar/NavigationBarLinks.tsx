import Link from 'next/link';
import { useEffect, useMemo } from 'react';
import { usePathname } from 'next/navigation';

function NavigationBarLinks() {
  const pathname = usePathname();

  const selectedPath = (path: string): boolean => {
    return pathname === path;
  };

  return (
    <div className="nav-link-container">
      <Link href="/">
        <div
          className={
            'nav-link hover:text-amber-400 ' +
            (selectedPath('/') ? 'text-amber-400' : 'text-cyan-600')
          }
        >
          主页 Home
        </div>
      </Link>
      <Link href="/about">
        <div
          className={
            'nav-link hover:text-amber-400 ' +
            (selectedPath('/about') ? 'text-amber-400' : 'text-cyan-600')
          }
        >
          关于 About
        </div>
      </Link>
      <Link href="/teaching">
        <div
          className={
            'nav-link hover:text-amber-400 ' +
            (selectedPath('/teaching') ? 'text-amber-400' : 'text-cyan-600')
          }
        >
          教学 Teach
        </div>
      </Link>
      <Link href="/contact">
        <div
          className={
            'nav-link hover:text-amber-400 ' +
            (selectedPath('/contact') ? 'text-amber-400' : 'text-cyan-600')
          }
        >
          接触 Contact
        </div>
      </Link>
      {/* <Link href="/software">
        <div
          className={
            'nav-link hover:text-amber-400 ' +
            (selectedPath('/') ? 'text-amber-400' : 'text-cyan-600')
          }
        >
          Software
        </div>
      </Link> */}
    </div>
  );
}

export default NavigationBarLinks;
