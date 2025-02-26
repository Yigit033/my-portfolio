'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    if (!isHomePage) {
      e.preventDefault();
      window.location.href = `/${section}`;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            YT
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href={isHomePage ? "#about" : "/#about"}
              className="text-gray-300 hover:text-white transition-colors"
              onClick={(e) => handleSectionClick(e, '#about')}
            >
              About
            </Link>
            <Link 
              href={isHomePage ? "#portfolio" : "/#portfolio"}
              className="text-gray-300 hover:text-white transition-colors"
              onClick={(e) => handleSectionClick(e, '#portfolio')}
            >
              Portfolio
            </Link>
            <Link 
              href="/resume"
              className="px-4 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/20 transition-colors"
            >
              Resume
            </Link>
            <Link 
              href="/projects"
              className="px-4 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/20 transition-colors"
            >
              Projects
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}