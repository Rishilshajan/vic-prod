import React from 'react';
import heroBlob from '../../assets/about-hero-blob.png';
import aboutHeroMobile from '../../assets/about_hero_mobile.png';

const AboutHero: React.FC = () => {
  return (
    <section className="w-full flex justify-center pt-0 md:pt-8 pb-0">

      {/* Mobile Layout  */}
      <div className="md:hidden w-full relative bg-white flex flex-col items-center overflow-hidden">
        <div className="relative mt-[25px] group w-full h-[350px] flex justify-center">
          <img
            src={aboutHeroMobile}
            alt="Who We Are"
            className="absolute left-[-27px] top-0 w-[437px] h-[350px] max-w-none object-cover rounded-[58px]"
          />

          {/* Text Overlay Mobile */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 pt-10">
            <h1 className="font-semibold text-[20px] leading-[24px] text-white text-center tracking-normal mb-3 font-poppins">
              Who We Are
            </h1>
            <p className="font-normal italic text-[14px] leading-relaxed text-white/90 text-center max-w-[280px] font-poppins">
              We help organisations turn purpose into measurable progress, creating lasting impact across the sector
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex container mx-auto px-4 justify-center">
        <div className="relative w-full max-w-[1273px]">

          {/* Main Image */}
          <img
            src={heroBlob}
            alt="Who We Are - Team Meeting"
            className="w-full h-auto object-contain"
          />

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-16 text-white pt-4">
            <h1 className="font-semibold text-3xl md:text-[48px] leading-none mb-8 font-poppins">
              Who We Are
            </h1>
            <p className="font-normal italic text-sm md:text-[16px] leading-relaxed max-w-[336px] text-white/90 font-poppins">
              We help organisations turn purpose into measurable progress, creating lasting impact across the sector
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;