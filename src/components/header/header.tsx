import type { FC } from 'react';
import { useState, useEffect } from 'react';

export const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' }
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    document.getElementById(href.slice(1))?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${isScrolled ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} shadow-sm sticky top-0 z-50 transition-colors duration-300`}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex justify-between items-center py-4">

          <button
            onClick={() => handleNavClick('#about')}
            className={`text-xl font-light tracking-wide transition-colors ${isScrolled ? 'hover:text-gray-300' : 'hover:text-gray-700'}`}
          >
            Joanna Sierra-Mendoza
          </button>

          <nav className="hidden md:flex space-x-8">
            {navItems.filter(item => item.name !== 'Home').map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium uppercase tracking-wide transition-colors ${isScrolled ? 'hover:text-gray-300' : 'hover:text-gray-700'}`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className={`md:hidden ${isScrolled ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} shadow-lg mt-2 py-4`}>
            {navItems.filter(item => item.name !== 'Home').map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left px-6 py-3 transition-colors text-sm font-medium uppercase tracking-wide ${isScrolled ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
