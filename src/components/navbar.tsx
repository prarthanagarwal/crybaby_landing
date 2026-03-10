'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

export const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (!pathname) return false;
    return pathname === path;
  };

  const linkClasses = (path: string) => `
    px-4 py-2.5 rounded-base font-bold transition-all w-full sm:w-auto text-center
    ${isActive(path)
      ? 'bg-black text-white shadow-light dark:shadow-dark'
      : 'hover:bg-black/10'
    }
  `;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute top-4 sm:top-6 left-0 right-0 mx-4 sm:mx-auto z-50 sm:max-w-fit">
      <div className="flex flex-col sm:flex-row items-center bg-bg/80 backdrop-blur-md dark:bg-darkBg/80 border-2 border-black shadow-light dark:shadow-dark px-4 sm:px-6 py-2 sm:py-3 rounded-base">
        <div className="w-full sm:w-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <Image
                src="/images/logo.png"
                alt="CryBaby"
                fill
                className="object-contain"
                sizes="48px"
              />
            </div>
          </Link>
          <button
            onClick={toggleMenu}
            className="sm:hidden p-2 hover:bg-black/10 rounded-base"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
        
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row items-center w-full sm:w-auto gap-2 sm:gap-4 mt-4 sm:mt-0`}>
          <div className="hidden sm:block h-8 w-[2px] bg-black/20 mx-3" />
          <Link
            href="/"
            className={linkClasses('/')}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className={linkClasses('/blog')}
            onClick={() => setIsMenuOpen(false)}
            prefetch={true}
          >
            Blog
          </Link>
          <Link
            href="/feedback"
            className={linkClasses('/feedback')}
            onClick={() => setIsMenuOpen(false)}
            prefetch={true}
          >
            Share Feedback
          </Link>
        </div>
      </div>
    </nav>
  );
}; 