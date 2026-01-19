import React from 'react';

const AboutStats: React.FC = () => {
    const stats = [
        { value: "40+", label: "Grantee Assessed" },
        { value: "INR 150Cr+", label: "Funded Projects Assessed" },
        { value: "6+", label: "States Covered" },
    ];

    return (
        <section className="w-full pb-[100px] flex justify-center">
            <div className="container mx-auto px-4 text-center">
                <div className="flex flex-wrap justify-center gap-10 md:gap-24 mb-10 w-full max-w-[732px] mx-auto">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <span className="font-medium text-[48px] leading-none tracking-normal mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                {index === 1 ? (
                                    <>
                                        <span className="text-[#52A264]">INR </span>
                                        <span className="text-vic-navy">150Cr</span>
                                        <span className="text-[#52A264]">+</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="text-vic-navy">{stat.value.replace('+', '')}</span>
                                        <span className="text-[#52A264]">+</span>
                                    </>
                                )}
                            </span>
                            <span className="font-medium text-sm md:text-base text-vic-navy/70 font-poppins">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutStats;
