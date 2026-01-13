import React from 'react';
import ContactHero from '../components/Contact/ContactHero';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';

const Contact: React.FC = () => {
    return (
        <div className="w-full bg-white">
            <ContactHero />

            <div className="w-full max-w-[841px] mx-auto text-center px-4 mt-12 mb-16">
                <p className="font-poppins font-light text-[16px] text-[#123042] leading-relaxed tracking-normal">
                    We believe the best ideas are built through collaboration. Whether you&rsquo;re starting something new or scaling something big, let&rsquo;s join forces to create meaningful, impactful solutions that last.
                </p>
            </div>

            <section className="container mx-auto px-4 py-12 md:py-20 mb-4">
                <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-20">
                    {/* Left Side: Contact Form */}
                    <div className="w-full md:w-auto flex justify-end">
                        <ContactForm />
                    </div>

                    {/* Right Side: Contact Info */}
                    <div className="w-full md:w-auto pt-4">
                        <ContactInfo />
                    </div>
                </div>
            </section>

            <div className="w-full text-center pb-12">
                <p className="font-poppins font-light italic text-[13px] text-[#23A6F0] leading-none tracking-normal">
                    Or email us directly at <a href="mailto:impact@vic.org.in" className="underline">impact@vic.org.in</a>
                </p>
            </div>
        </div>
    );
};

export default Contact;
