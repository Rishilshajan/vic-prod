import React from 'react';
import { Link } from 'react-router-dom';
import vicLogo from '../assets/VICLOGO.png';

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex justify-center pb-0 pt-10 bg-white">

      {/* Footer Pill */}
      <div
        className="relative rounded-t-[30px] md:rounded-[50px] px-6 py-10 md:px-16 flex flex-col xl:flex-row justify-between items-start xl:items-start text-white shadow-2xl gap-10 xl:gap-0 mx-0 md:mx-5 mb-0 md:mb-5 w-full md:w-auto"
        style={{
          minHeight: '192px',
          background: 'linear-gradient(102.08deg, rgba(10, 90, 138, 0.8) 14.03%, rgba(12, 135, 190, 0.5) 135.98%)',
        }}
      >

        {/* Logo Section  */}
        <div
          className="bg-white flex items-center justify-center shrink-0 mb-6 xl:mb-0 p-4 order-3 xl:order-1 self-center xl:self-auto"
          style={{
            width: '312px',
            height: '152px',
            borderRadius: '32px'
          }}
        >
          <img src={vicLogo} alt="VIC Logo" className="w-[75%] h-auto object-contain" />
        </div>


        {/* CENTER COLUMN */}
        <div className="flex flex-col gap-8 flex-grow justify-center px-4 md:px-20 text-left order-2 xl:order-2 w-full xl:w-auto max-w-[312px] mx-auto md:max-w-none md:mx-0">

          <div className="flex flex-col gap-3">
            <h4 className="font-medium text-[15px] leading-none font-poppins">
              Address
            </h4>
            <p className="font-light text-[15px] leading-relaxed font-poppins opacity-90 max-w-md md:mx-0">
              VIC c/o R4 Foundation, No. 664, 5th Cross,
              4th Block, Koramangala, Bengaluru - 560034
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-24 md:mx-0">

            <div className="flex flex-col gap-2">
              <h4 className="font-medium text-[15px] leading-none font-poppins">
                Email
              </h4>
              <a href="mailto:impact@vic.org.in" className="font-light text-[15px] leading-none font-poppins hover:underline opacity-90">
                impact@vic.org.in
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-medium text-[15px] leading-none font-poppins">
                Website
              </h4>
              <div className="flex items-center justify-between w-full">
                <a href="https://www.vic.org.in" target="_blank" rel="noreferrer" className="font-light text-[15px] leading-none font-poppins hover:underline opacity-90">
                  www.vic.org.in
                </a>

                {/* Mobile LinkedIn Icon */}
                <a
                  href="https://www.linkedin.com/company/vic-impact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:hidden text-white hover:opacity-80 transition-opacity"
                  aria-label="VIC LinkedIn"
                >
                  <svg width="48" height="48" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.6667 3C30.5507 3 31.3986 3.35119 32.0237 3.97631C32.6488 4.60143 33 5.44928 33 6.33333V29.6667C33 30.5507 32.6488 31.3986 32.0237 32.0237C31.3986 32.6488 30.5507 33 29.6667 33H6.33333C5.44928 33 4.60143 32.6488 3.97631 32.0237C3.35119 31.3986 3 30.5507 3 29.6667V6.33333C3 5.44928 3.35119 4.60143 3.97631 3.97631C4.60143 3.35119 5.44928 3 6.33333 3H29.6667ZM28.8333 28.8333V20C28.8333 18.559 28.2609 17.177 27.2419 16.1581C26.223 15.1391 24.841 14.5667 23.4 14.5667C21.9833 14.5667 20.3333 15.4333 19.5333 16.7333V14.8833H14.8833V28.8333H19.5333V20.6167C19.5333 19.3333 20.5667 18.2833 21.85 18.2833C22.4688 18.2833 23.0623 18.5292 23.4999 18.9668C23.9375 19.4043 24.1833 19.9978 24.1833 20.6167V28.8333H28.8333ZM9.46667 12.2667C10.2093 12.2667 10.9215 11.9717 11.4466 11.4466C11.9717 10.9215 12.2667 10.2093 12.2667 9.46667C12.2667 7.91667 11.0167 6.65 9.46667 6.65C8.71964 6.65 8.00321 6.94675 7.47498 7.47498C6.94675 8.00321 6.65 8.71964 6.65 9.46667C6.65 11.0167 7.91667 12.2667 9.46667 12.2667ZM11.7833 28.8333V14.8833H7.16667V28.8333H11.7833Z" fill="white" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>


        {/* RIGHT COLUMN */}
        <div className="contents md:flex flex-row gap-12 xl:gap-16 h-full items-start w-full xl:w-auto justify-between xl:justify-start xl:order-3">

          {/* Links Order on Mobile */}
          <div className="flex flex-col text-left gap-3 order-1 md:order-none px-4 md:px-0">
            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/about-us' },
              { name: 'Resources', path: '/resources' },
              { name: 'Contact Us', path: '/contact' }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => window.scrollTo(0, 0)}
                className="font-light text-[15px] leading-none font-poppins hover:text-white/80 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Social/Copy on Mobile */}
          <div className="flex flex-col justify-between items-center xl:items-end h-auto md:h-[152px] order-4 md:order-none self-center xl:self-auto">

            {/* Desktop LinkedIn Icon*/}
            <a
              href="https://www.linkedin.com/company/vic-impact"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block text-white hover:opacity-80 transition-opacity"
              aria-label="VIC LinkedIn"
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.6667 3C30.5507 3 31.3986 3.35119 32.0237 3.97631C32.6488 4.60143 33 5.44928 33 6.33333V29.6667C33 30.5507 32.6488 31.3986 32.0237 32.0237C31.3986 32.6488 30.5507 33 29.6667 33H6.33333C5.44928 33 4.60143 32.6488 3.97631 32.0237C3.35119 31.3986 3 30.5507 3 29.6667V6.33333C3 5.44928 3.35119 4.60143 3.97631 3.97631C4.60143 3.35119 5.44928 3 6.33333 3H29.6667ZM28.8333 28.8333V20C28.8333 18.559 28.2609 17.177 27.2419 16.1581C26.223 15.1391 24.841 14.5667 23.4 14.5667C21.9833 14.5667 20.3333 15.4333 19.5333 16.7333V14.8833H14.8833V28.8333H19.5333V20.6167C19.5333 19.3333 20.5667 18.2833 21.85 18.2833C22.4688 18.2833 23.0623 18.5292 23.4999 18.9668C23.9375 19.4043 24.1833 19.9978 24.1833 20.6167V28.8333H28.8333ZM9.46667 12.2667C10.2093 12.2667 10.9215 11.9717 11.4466 11.4466C11.9717 10.9215 12.2667 10.2093 12.2667 9.46667C12.2667 7.91667 11.0167 6.65 9.46667 6.65C8.71964 6.65 8.00321 6.94675 7.47498 7.47498C6.94675 8.00321 6.65 8.71964 6.65 9.46667C6.65 11.0167 7.91667 12.2667 9.46667 12.2667ZM11.7833 28.8333V14.8833H7.16667V28.8333H11.7833Z" fill="white" />
              </svg>
            </a>

            {/* Copyright */}
            <span className="font-light text-[13px] leading-none font-poppins opacity-80 whitespace-nowrap pt-4 md:pt-0">
              © 2026 by VIC.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;