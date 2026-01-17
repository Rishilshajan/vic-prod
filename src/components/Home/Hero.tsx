import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
// Updated import to your new file
import heroWaveImg from '../../assets/hero_image_update.png';
import heroWaveMobileImg from '../../assets/hero_wave_mobile.png';

const Hero: React.FC = () => {
  return (
    <section className="w-full relative bg-white flex flex-col items-center overflow-hidden">

      <div className="relative mt-[25px] md:mt-[40px] group w-full md:w-auto h-[350px] md:h-auto flex justify-center md:block">

        <picture>
          <source media="(min-width: 768px)" srcSet={heroWaveImg} />
          <img
            src={heroWaveMobileImg}
            alt="Team Strategy"
            className="absolute md:static left-[-27px] md:left-auto top-0 md:top-auto w-[437px] md:w-[1297px] h-[350px] md:h-[618.5px] max-w-none md:max-w-[95vw] object-cover md:object-contain rounded-[58px] md:rounded-none"
          />
        </picture>

        {/* Text Overlay  */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4">

          {/* Main Heading */}
          <h1 className="font-semibold text-[20px] md:text-[48px] leading-[24px] md:leading-[65px] text-white text-center tracking-normal w-full md:w-auto md:max-w-[900px] h-auto md:h-auto flex items-center justify-center mb-4 md:mb-16 drop-shadow-lg px-2 md:px-4 gap-4">
            Turning Data into Decisions,<br />
            And Decisions into Impact.
          </h1>

          {/* Get Started Button */}
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

    </section>
  );
};

export default Hero;