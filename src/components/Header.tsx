import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { cn } from '../lib/utils';
import vicLogo from '../assets/VICLOGO.png';

const Header: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Navigation paths
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Our Work', path: '/our-work' },
    { label: 'Careers', path: '/careers' },
    { label: 'Resources', path: '/resources' },
  ];

  return (
    <header className="w-full py-5 px-6 md:px-10 bg-white sticky top-0 z-50">
      <div className="w-full flex items-center justify-between">

        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3" onClick={() => window.scrollTo(0, 0)}>
          <img
            src={vicLogo}
            alt="VIC Logo"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;

            return (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => window.scrollTo(0, 0)}
                className={cn(
                  "px-6 py-2.5 rounded-full transition-all duration-200 font-sans font-normal text-[16px] leading-none tracking-normal",
                  isActive
                    ? "bg-[#6BC778] text-[#123042]"
                    : "bg-transparent text-[#123042] hover:text-[#6BC778]"
                )}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Contact Us Button */}
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
            <Button
              className={cn(
                "ml-4 rounded-full font-sans font-normal text-[16px] leading-none tracking-normal transition-colors",
                currentPath === '/contact'
                  ? "bg-[#6BC778] text-[#123042] hover:bg-[#6BC778]/90"
                  : "bg-[#123042] text-[#6AC777] hover:bg-[#123042]/90 hover:text-[#6AC777]"
              )}
            >
              Contact Us
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;