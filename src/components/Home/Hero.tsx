import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import heroWaveImg from '../../assets/hero_image_update.png';
import heroWaveMobileImg from '../../assets/hero_wave_mobile.png';

//Hero
const Hero: React.FC = () => {
  return (
    <section className="w-full flex justify-center pt-0 md:pt-10 pb-6 md:pb-10 relative px-0 md:px-4">

      {/* Mobile Layout */}
      <div className="md:hidden w-full relative bg-white flex flex-col items-center overflow-hidden">
        <div className="relative mt-[25px] w-full h-[350px] flex justify-center">
          <img
            src={heroWaveMobileImg}
            alt="Team Strategy"
            className="w-full h-full object-cover"
          />

          {/* Overlay Text Mobile */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-8">
            <h1 className="font-semibold text-[20px] leading-[24px] text-white text-center tracking-normal mb-6 drop-shadow-md">
              Turning Data into Decisions,<br />
              And Decisions into Impact.
            </h1>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <Button
                variant="vicGreen"
                className="w-[142px] h-[48px] rounded-[24px] px-[25px] py-[21px] text-[16px] leading-none flex items-center justify-center cursor-pointer"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block relative w-full max-w-[1297px]">
        <div className="relative group w-full h-auto">
          <img
            src={heroWaveImg}
            alt="Team Strategy"
            className="w-full h-auto object-contain"
          />

          {/* Text Overlay Desktop */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4">
            <h1 className="font-semibold text-[48px] leading-[65px] text-white text-center tracking-normal mb-16 drop-shadow-lg gap-4">
              Turning Data into Decisions,<br />
              And Decisions into Impact.
            </h1>

            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <Button
                variant="vicGreen"
                className="w-[142px] h-[48px] rounded-[24px] px-[25px] py-[21px] text-[16px] leading-none flex items-center justify-center cursor-pointer"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;