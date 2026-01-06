import React from 'react';
import contactHero from '../../assets/contact-hero.png';

const ContactHero: React.FC = () => {
    return (
        <section className="w-full flex justify-center py-12 md:py-20 relative px-4">
            <div className="relative w-full max-w-[1200px]">
                {/* Image Container with Blob Shape */}
                <div className="w-full relative z-0">
                    <img
                        src={contactHero}
                        alt="Contact Us"
                        className="w-full h-auto object-cover"
                        style={{
                            // Assuming the image itself is the blob shape
                            // If not, we would need to add a mask here
                        }}
                    />

                    {/* Overlay Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
                        <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-4 drop-shadow-md leading-tight">
                            Let&rsquo;s Connect <br className="hidden md:block" />
                            & Build Something Great!
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

export default ContactHero;
