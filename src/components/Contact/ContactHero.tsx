import React from 'react';
import contactHero from '../../assets/contact-hero.png';

const ContactHero: React.FC = () => {
    return (
        <section className="w-full flex justify-center py-12 md:pt-20 md:pb-6 relative px-4">
            <div className="relative w-full max-w-[1200px]">
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
                            <span><span className="text-[#6BC778]">&</span> Build Something Great!</span>
                        </h1>
                        <p className="font-poppins font-small text-[14px] text-white italic drop-shadow-md leading-none tracking-normal">
                            Bringing ideas to life—together.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;
