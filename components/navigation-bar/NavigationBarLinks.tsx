import Link from 'next/link';
import { useEffect, useMemo } from 'react';
import { usePathname } from 'next/navigation';

function NavigationBarLinks() {
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  const selectedPath = (path: string): boolean => {
    console.log(pathname === path);
    return pathname === path;
  };

  return (
    <div className="nav-link-container">
      <Link href="/">
        <div
          className={
            'nav-link text-cyan-600 hover:text-amber-300 ' +
            (selectedPath('/') ? 'text-amber-300' : '')
          }
        >
          Home
        </div>
      </Link>
      <Link href="/about">
        <div
          className={
            'nav-link text-cyan-600 hover:text-amber-300 ' +
            (selectedPath('/about') ? 'text-amber-300' : '')
          }
        >
          About
        </div>
      </Link>
      <div className="nav-link text-cyan-600 hover:text-amber-300">
        Education
      </div>
      <div className="nav-link text-cyan-600 hover:text-amber-300">
        Software
      </div>
      <div className="nav-link text-cyan-600 hover:text-amber-300">
        Consulting
      </div>
    </div>
  );
}

export default NavigationBarLinks;
