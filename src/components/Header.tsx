import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { cn } from '../lib/utils';
import vicLogo from '../assets/VICLOGO.png';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Navigation paths
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Our Work', path: '/our-work' },
    { label: 'Resources', path: '/resources' },
    { label: 'Careers', path: '/careers' },
  ];

  const isActiveLink = (path: string) => {
    return path === '/' ? currentPath === '/' : currentPath.startsWith(path);
  };

  return (
    <>
      <header className="w-full py-5 px-6 md:px-10 bg-transparent md:bg-white relative z-40">
        <div className="w-full flex items-center justify-between">

          {/* Fixed Logo (Visible) */}
          <Link
            to="/"
            className={cn(
              "fixed top-5 left-6 md:left-10 z-[100] flex items-center gap-3 transition-opacity duration-200",
              !isMenuOpen ? "bg-white/70 backdrop-blur-md border border-black/5 shadow-sm rounded-[24px] p-2 pr-6 hover:bg-white/90 opacity-100" : "opacity-0 pointer-events-none"
            )}
            onClick={() => window.scrollTo(0, 0)}
          >
            <img
              src={vicLogo}
              alt="VIC Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Placeholder Logo (Invisible, for Layout) */}
          <div className="opacity-0 pointer-events-none flex items-center gap-3">
            <img
              src={vicLogo}
              alt="VIC Logo Placeholder"
              className="h-14 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => window.scrollTo(0, 0)}
                className={cn(
                  "px-6 py-2.5 rounded-full transition-all duration-200 font-sans font-normal text-[16px] leading-none tracking-normal",
                  isActiveLink(item.path)
                    ? "bg-[#6BC778] text-[#123042]"
                    : "bg-transparent text-[#123042] hover:text-[#6BC778]"
                )}
              >
                {item.label}
              </Link>
            ))}

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

          {/* Mobile Hamburger Button */}
          <button
            className={cn(
              "md:hidden fixed top-5 right-6 z-[100] flex items-center justify-center transition-opacity duration-200 bg-white/70 backdrop-blur-md border border-black/5 shadow-sm rounded-full w-12 h-12",
              isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.svg
              width="22"
              height="11"
              viewBox="0 0 22 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={isMenuOpen ? "open" : "closed"}
            >
              {/* Top Line */}
              <motion.line
                x1="1" y1="1" x2="20.0526" y2="1"
                stroke="black" strokeWidth="2" strokeLinecap="round"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 4.2 }
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{ originX: "50%", originY: "50%" }}
              />

              {/* Bottom Line */}
              <motion.line
                x1="1" y1="9.42102" x2="20.0526" y2="9.42102"
                stroke="black" strokeWidth="2" strokeLinecap="round"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -4.2 }
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{ originX: "50%", originY: "50%" }}
              />
            </motion.svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/60 flex items-end justify-center pb-6 px-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 20, mass: 1 }}
              className="bg-white w-full h-[95%] md:h-[85%] rounded-[32px] p-6 md:p-8 flex flex-col items-center relative"
              onClick={(e) => e.stopPropagation()}
            >

              {/* Internal Header: Logo + Close */}
              <div className="w-full flex items-center justify-between mb-8">
                <img src={vicLogo} alt="VIC Logo" className="h-8 md:h-10 w-auto object-contain" />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-1"
                >
                  <X size={32} className="text-[#123042]" />
                </button>
              </div>

              {/* Header: Logo + Close - REMOVED as per requirements to use the main header */}

              {/* Links */}
              <div className="flex flex-col items-center gap-6 w-full mb-12">
                {navItems.map((item) => {
                  const active = isActiveLink(item.path);
                  return (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={() => {
                        window.scrollTo(0, 0);
                        setIsMenuOpen(false);
                      }}
                      className={cn(
                        "px-8 py-2 rounded-full font-sans font-medium text-[18px] transition-colors",
                        active
                          ? "bg-[#6BC778] text-[#123042]"
                          : "text-[#123042] hover:text-[#6BC778]"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              {/* Contact Button */}
              <Link
                to="/contact"
                onClick={() => {
                  window.scrollTo(0, 0);
                  setIsMenuOpen(false);
                }}
                className="w-full max-w-xs"
              >
                <Button className="w-full rounded-full bg-[#123042] text-[#6BC778] font-sans text-[16px] px-8 py-6 hover:bg-[#123042]/90">
                  Contact Us
                </Button>
              </Link>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;