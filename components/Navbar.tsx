'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    if (!isHomePage) {
      e.preventDefault();
      window.location.href = `/${section}`;
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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
          <button 
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu, show/hide based on menu state */}
        {mobileMenuOpen && (
          <div className="md:hidden py-2 px-2 space-y-3 bg-gray-900/90 rounded-lg mb-3">
            <Link 
              href={isHomePage ? "#about" : "/#about"}
              className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
              onClick={(e) => handleSectionClick(e, '#about')}
            >
              About
            </Link>
            <Link 
              href={isHomePage ? "#portfolio" : "/#portfolio"}
              className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
              onClick={(e) => handleSectionClick(e, '#portfolio')}
            >
              Portfolio
            </Link>
            <Link 
              href="/resume"
              className="block px-3 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/20 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume
            </Link>
            <Link 
              href="/projects"
              className="block px-3 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/20 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}