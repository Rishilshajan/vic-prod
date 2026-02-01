import React from 'react';
import ourWorkHero from '../../assets/our-work-hero.png';
import ourWorkHeroMobile from '../../assets/our_work_hero_mobile.png';

const OurWorkHero: React.FC = () => {
    return (
        <section className="w-full flex justify-center py-0 md:py-20 relative px-0 md:px-4">

            {/* Mobile Layout */}
            <div className="md:hidden w-full relative bg-white flex flex-col items-center overflow-hidden">
                <div className="relative mt-8 w-full h-[350px] flex justify-center">
                    <img
                        src={ourWorkHeroMobile}
                        alt="Our Work"
                        className="w-full h-full object-cover"
                    />

                    {/* Text Overlay Mobile */}
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 pt-10">
                        <h1 className="font-semibold text-[20px] leading-[24px] text-white text-center tracking-normal mb-3 font-poppins">
                            Our Work
                        </h1>
                        <p className="font-normal italic text-[14px] leading-relaxed text-white/90 text-center max-w-[280px] font-poppins">
                            "We <span className="text-[#6BC778]">work</span> with Corporations, Governments, Foundations, and Nonprofits to help them maximize, manage, measure, and communicate their social impact."
                        </p>
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex relative w-full max-w-[1246px]">
                {/* Image Container */}
                <div className="w-full relative z-0">
                    <img
                        src={ourWorkHero}
                        alt="Our Work"
                        className="w-full h-auto object-cover translate-x-[10px] md:translate-x-0"
                    />

                    {/* Overlay Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-8 md:px-20 lg:px-32">
                        <h1 className="font-poppins font-semibold italic text-3xl md:text-[48px] text-white mb-8 drop-shadow-md leading-tight">
                            Our Work
                        </h1>
                        <p className="font-light text-sm md:text-lg lg:text-xl text-white italic drop-shadow-md max-w-[600px] leading-relaxed">
                            "We <span className="text-[#6BC778]">work</span> with Corporations, Governments, Foundations, and Nonprofits to help them maximize, manage, measure, and communicate their social impact."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurWorkHero;
