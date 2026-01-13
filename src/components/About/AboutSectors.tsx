import React from 'react';
import SectorsBg from '../../assets/sectors-background.png';

const AboutSectors: React.FC = () => {
    const sectors = [
        ["Climate Action", "Food Security", "Education", "Gender"],
        ["Healthcare", "Livelihood", "Inclusion", "WASH"]
    ];

    return (
        <section className="w-full flex justify-center pb-[100px]">
            <div className="container mx-auto px-4">
                <div
                    className="w-full max-w-[1246px] min-h-[564px] mx-auto bg-[#186022] rounded-[50px] py-16 px-6 md:px-20 text-white text-center relative overflow-hidden flex flex-col justify-center shadow-[0px_4px_4px_0px_#00000040] backdrop-blur-[26.3px]"
                >

                    {/* Image Layer */}
                    <img
                        src={SectorsBg}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover z-0"
                    />

                    {/* Gradient Overlay Layer */}
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            background: 'linear-gradient(89.61deg, rgba(45, 105, 53, 0.8) -1.38%, rgba(24, 96, 34, 0.5) 101.5%)'
                        }}
                    ></div>

                    <div className="flex flex-col items-center justify-start h-full py-16 relative z-10 font-poppins text-white">
                        <h2 className="font-medium text-[42px] leading-[100%] mb-[76px] text-center max-w-[597px] w-full">
                            We Work Across The Sectors
                        </h2>

                        <p className="font-light text-[24px] leading-[140%] max-w-[1002px] w-full mx-auto mb-[50px] text-justify">
                            We are committed to the UN SDG 2030 mission and continue to expand our impact footprint through our growing network of clients and partners across CSR, philanthropy, non-profits, social enterprises, government bodies and multilateral agencies, converting action into outcomes across development goals.
                        </p>

                        <div className="flex flex-col gap-6 max-w-[664px] mx-auto w-full">
                            {sectors.map((row, rowIndex) => (
                                <div key={rowIndex} className="flex flex-wrap justify-between items-center text-[24px] leading-[140%] font-light">
                                    {row.map((item, itemIndex) => (
                                        <React.Fragment key={item}>
                                            <span className="whitespace-nowrap">{item}</span>
                                            {itemIndex < row.length - 1 && (
                                                <span className="hidden md:inline h-6 w-px bg-white/40 mx-2"></span>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSectors;