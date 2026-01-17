import React, { useState } from 'react';
import ResourcesHero from '../components/Resources/ResourcesHero';
import ResourceCard from '../components/Resources/ResourceCard';
import { resources } from '../data/resourcesData';

const Resources: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);


    return (
        <div className="w-full bg-white">
            <ResourcesHero />

            {/* Resources List Section */}
            <section className="container mx-auto px-4 py-8 md:py-16 flex flex-col items-center">
                <div className="flex flex-col gap-8 w-full items-center mb-16">
                    {resources.map((resource) => (
                        <ResourceCard key={resource.id} resource={resource} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex flex-wrap md:flex-nowrap items-center justify-between w-full max-w-[868px] mt-8 gap-y-6 md:gap-y-0">
                    <button
                        className="order-2 md:order-1 w-[153px] h-[58px] rounded-[30px] bg-[#C8E5F2] text-[#0C87BE] font-['Poppins'] font-medium text-[16px] flex items-center justify-center gap-[10px] hover:bg-[#b8daea] transition-colors"
                        disabled
                    >
                        <span>&larr;</span> Previous
                    </button>

                    <div className="flex gap-[5px] md:gap-[10px] order-1 md:order-2 w-full md:w-auto justify-center overflow-x-auto px-2 md:px-0">
                        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                            <button
                                key={num}
                                onClick={() => setCurrentPage(num)}
                                className={`w-[35px] h-[35px] md:w-[40px] md:h-[40px] flex-shrink-0 rounded-[5px] flex items-center justify-center text-[12px] md:text-[14px] font-['Poppins'] font-medium transition-colors border ${currentPage === num
                                    ? 'bg-[#0C87BE] border-[#0C87BE] text-white'
                                    : 'bg-white border-[#0C87BE] text-[#0C87BE] hover:bg-[#f0f9fc]'
                                    }`}
                            >
                                {num}
                            </button>
                        ))}
                    </div>

                    <button
                        className="order-3 md:order-3 w-[120px] h-[58px] rounded-[30px] bg-[#C8E5F2] text-[#0C87BE] font-['Poppins'] font-medium text-[16px] flex items-center justify-center gap-[10px] hover:bg-[#b8daea] transition-colors"
                    >
                        Next <span>&rarr;</span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Resources;
