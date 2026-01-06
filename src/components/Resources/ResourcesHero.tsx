import React from 'react';
import resourcesHero from '../../assets/resources-hero.png';

const ResourcesHero: React.FC = () => {
    return (
        <section className="w-full flex justify-center py-12 md:py-20 relative px-4">
            <div className="relative w-full max-w-[1200px]">
                {/* Image Container with Blob Shape */}
                <div className="w-full relative z-0">
                    <img
                        src={resourcesHero}
                        alt="Stories From The Field"
                        className="w-full h-auto object-cover"
                        style={{
                            // Assuming the image itself is the blob shape as per previous turn
                            filter: "brightness(0.9)"
                        }}
                    />

                    {/* Overlay Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
                        <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-4 drop-shadow-md">
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
