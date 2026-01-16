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
    { label: 'Careers', path: '/careers' },
    { label: 'Resources', path: '/resources' },
  ];

  const isActiveLink = (path: string) => {
    return path === '/' ? currentPath === '/' : currentPath.startsWith(path);
  };

  return (
    <>
      <header className="w-full py-5 px-6 md:px-10 bg-white relative z-40">
        <div className="w-full flex items-center justify-between">

          {/* Fixed Logo (Visible) */}
          <Link
            to="/"
            className={cn(
              "fixed top-5 left-6 md:left-10 z-[90] flex items-center gap-3 transition-opacity duration-200",
              !isMenuOpen ? "bg-white/70 backdrop-blur-md border border-white/20 shadow-sm rounded-[24px] p-2 pr-6 hover:bg-white/90 opacity-100" : "opacity-0 pointer-events-none"
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
              "md:hidden z-[90] p-0 relative transition-opacity duration-200",
              isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={isMenuOpen ? "open" : "closed"}
            >
              <foreignObject x="-26.3" y="-26.3" width="100.6" height="100.6">
                <div style={{ backdropFilter: 'blur(13.15px)', clipPath: 'url(#bgblur_0_6167_295_clip_path)', height: '100%', width: '100%' }}></div>
              </foreignObject>
              <rect width="48" height="48" rx="24" fill="url(#paint0_linear_6167_295)" />

              {/* Top Line */}
              <motion.line
                x1="14.4736" y1="20.0526" x2="33.5263" y2="20.0526"
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
                x1="14.4736" y1="28.4736" x2="33.5263" y2="28.4736"
                stroke="black" strokeWidth="2" strokeLinecap="round"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -4.2 }
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{ originX: "50%", originY: "50%" }}
              />

              <defs>
                <clipPath id="bgblur_0_6167_295_clip_path" transform="translate(26.3 26.3)"><rect width="48" height="48" rx="24" /></clipPath>
                <linearGradient id="paint0_linear_6167_295" x1="-0.614947" y1="55.2941" x2="49.0987" y2="54.9551" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" stopOpacity="0.8" />
                  <stop offset="1" stopColor="white" stopOpacity="0.7" />
                </linearGradient>
              </defs>
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
              className="bg-white w-full h-[95%] md:h-[85%] rounded-[32px] p-8 flex flex-col relative"
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