import React from 'react';
import careersHero from '../../assets/careers-hero-new.png';

const CareersHero: React.FC = () => {
    return (
        <section className="w-full flex justify-center pt-12 md:pt-20 pb-6 md:pb-10 relative px-4">
            <div className="relative w-full max-w-[1246px]">
                {/* Image Container with Blob Shape */}
                <div className="w-full relative z-0  rounded-[30px] overflow-hidden">
                    <img
                        src={careersHero}
                        alt="Careers at VIC"
                        className="w-full h-auto object-cover"
                    />

                    {/* Overlay Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-8 md:px-20 lg:px-32">
                        <h1 className="font-bold text-3xl md:text-5xl lg:text-[64px] text-white mb-10 drop-shadow-md leading-tight">
                            Careers at VIC
                        </h1>
                        <p className="font-light text-sm md:text-lg lg:text-xl text-white italic drop-shadow-md max-w-[800px] leading-relaxed">
                            Bringing ideas to life—together.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareersHero;
