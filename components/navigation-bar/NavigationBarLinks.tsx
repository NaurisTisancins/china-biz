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
            'nav-link hover:text-amber-300 ' +
            (selectedPath('/') ? 'text-amber-300' : 'text-cyan-600')
          }
        >
          Home
        </div>
      </Link>
      <Link href="/about">
        <div
          className={
            'nav-link hover:text-amber-300 ' +
            (selectedPath('/about') ? 'text-amber-300' : 'text-cyan-600')
          }
        >
          About
        </div>
      </Link>
      <Link href="/education">
        <div className="nav-link text-cyan-600 hover:text-amber-300">
          Education
        </div>
      </Link>
      <Link href="/software">
        <div className="nav-link text-cyan-600 hover:text-amber-300">
          Software
        </div>
      </Link>
      <Link href="/consulting">
        <div className="nav-link text-cyan-600 hover:text-amber-300">
          Consulting
        </div>
      </Link>
    </div>
  );
}

export default NavigationBarLinks;
