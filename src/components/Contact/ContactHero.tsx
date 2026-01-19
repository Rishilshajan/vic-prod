import React from 'react';
import contactHero from '../../assets/contact-hero.png';
import contactMobile from '../../assets/contact_mobile.png';

const ContactHero: React.FC = () => {
    return (
        <section className="w-full flex justify-center pt-0 md:pt-20 pb-6 md:pb-10 relative px-0 md:px-4">

            {/* Mobile Layout */}
            <div className="md:hidden w-full relative bg-white flex flex-col items-center overflow-hidden">
                <div className="relative mt-8 w-full h-[350px] flex justify-center">
                    <img
                        src={contactMobile}
                        alt="Contact Us"
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay Text Mobile */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-8">
                        <h1 className="font-bold text-3xl text-white mb-6 drop-shadow-md leading-tight">
                            Let's Connect
                        </h1>
                        <p className="font-light text-base text-white italic drop-shadow-md max-w-[280px] leading-relaxed">
                            Collaborate, innovate, and accelerate your impact journey.
                        </p>
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block relative w-full max-w-[1200px]">
                {/* Image Container */}
                <div className="w-full relative z-0 rounded-[30px] overflow-hidden">
                    <img
                        src={contactHero}
                        alt="Contact Us"
                        className="w-full h-auto object-cover"
                    />

                    {/* Overlay Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4 gap-6">
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white drop-shadow-md leading-tight flex flex-col items-center gap-6">
                            <span>Let&rsquo;s Connect</span>
                        </h1>
                        <p className="font-light text-sm md:text-lg lg:text-xl text-white italic drop-shadow-md max-w-[600px] leading-relaxed">
                            Collaborate, innovate, and accelerate your impact journey.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;
