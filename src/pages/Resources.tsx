import React, { useState } from 'react';
import ResourcesHero from '../components/Resources/ResourcesHero';
import ResourceCard from '../components/Resources/ResourceCard';
import { resources } from '../data/resourcesData';

const Resources: React.FC = () => {
    // Pagination state (static for now as per design mockup)
    const [currentPage, setCurrentPage] = useState(1);

    // In a real app, we would slice the resources array based on items per page
    // For now, we just display all 3 items to match the design

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
                <div className="flex items-center gap-2 md:gap-4 mb-16">
                    <button
                        className="px-4 py-2 bg-[#DCEBF1] text-[#14709F] rounded-lg text-sm font-medium hover:bg-[#cbe0e9] transition-colors disabled:opacity-50"
                        disabled
                    >
                        ← Previous
                    </button>

                    <div className="flex gap-2">
                        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                            <button
                                key={num}
                                onClick={() => setCurrentPage(num)}
                                className={`w-8 h-8 rounded-md flex items-center justify-center text-sm transition-colors ${currentPage === num
                                        ? 'bg-[#14709F] text-white'
                                        : 'bg-white border border-[#DCEBF1] text-[#14709F] hover:border-[#14709F]'
                                    }`}
                            >
                                {num}
                            </button>
                        ))}
                    </div>

                    <button
                        className="px-6 py-2 bg-[#DCEBF1] text-[#14709F] rounded-lg text-sm font-medium hover:bg-[#cbe0e9] transition-colors"
                    >
                        Next →
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Resources;
