import React from 'react';
import resourcesHero from '../../assets/resources-hero.png';

import resourceMobile from '../../assets/Resource_mobile.png';

const ResourcesHero: React.FC = () => {
    return (
        <section className="w-full flex justify-center pt-0 md:pt-20 pb-6 md:pb-10 relative px-0 md:px-4">

            {/* Mobile Layout */}
            <div className="md:hidden w-full relative bg-white flex flex-col items-center overflow-hidden">
                <div className="relative mt-8 w-full h-[350px] flex justify-center">
                    <img
                        src={resourceMobile}
                        alt="Stories From The Field"
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay Text Mobile */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-8">
                        <h1 className="font-bold text-3xl text-white mb-6 drop-shadow-md leading-tight">
                            Stories From The Field
                        </h1>
                        <p className="font-light text-base text-white italic drop-shadow-md max-w-[280px] leading-relaxed">
                            Bringing ideas to life—together.
                        </p>
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block relative w-full max-w-[1246px]">
                {/* Image Container */}
                <div className="w-full relative z-0">
                    <img
                        src={resourcesHero}
                        alt="Stories From The Field"
                        className="w-full h-auto object-cover"
                        style={{
                            filter: "brightness(0.9)"
                        }}
                    />

                    {/* Overlay Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
                        <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-8 drop-shadow-md">
                            Stories From The Field
                        </h1>
                        <p className="font-light text-base md:text-xl text-white italic drop-shadow-md">
                            Bringing ideas to life—together.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResourcesHero;
