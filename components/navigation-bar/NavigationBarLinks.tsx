import Link from 'next/link';
import { useEffect, useMemo } from 'react';
import { usePathname } from 'next/navigation';

function NavigationBarLinks() {
  const pathname = usePathname();

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
          主页 Home
        </div>
      </Link>
      <Link href="/about">
        <div
          className={
            'nav-link hover:text-amber-300 ' +
            (selectedPath('/about') ? 'text-amber-300' : 'text-cyan-600')
          }
        >
          关于 About
        </div>
      </Link>
      <Link href="/teaching">
        <div
          className={
            'nav-link hover:text-amber-300 ' +
            (selectedPath('/teaching') ? 'text-amber-300' : 'text-cyan-600')
          }
        >
          教学 Teach
        </div>
      </Link>
      <Link href="/consulting">
        <div
          className={
            'nav-link hover:text-amber-300 ' +
            (selectedPath('/consulting') ? 'text-amber-300' : 'text-cyan-600')
          }
        >
          咨询 Consult
        </div>
      </Link>
      {/* <Link href="/software">
        <div
          className={
            'nav-link hover:text-amber-300 ' +
            (selectedPath('/') ? 'text-amber-300' : 'text-cyan-600')
          }
        >
          Software
        </div>
      </Link> */}
    </div>
  );
}

export default NavigationBarLinks;
