import React from 'react';
import type { Resource } from '../../data/resourcesData';

interface ResourceCardProps {
    resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
    return (
        <div className="w-full max-w-[900px] bg-white rounded-[30px] border border-[#146D99] overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow duration-300">
            {/* Image Section */}
            <div className="w-full md:w-[320px] h-[240px] md:h-auto flex-shrink-0">
                <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                <p className="text-[#123042] font-semibold text-sm mb-2">
                    {resource.author}
                </p>

                <h3 className="text-[#123042] font-bold text-xl md:text-2xl mb-4 leading-tight">
                    {resource.title}
                </h3>

                <p className="text-[#14709F] font-light text-sm md:text-base leading-relaxed">
                    {resource.description}
                </p>
            </div>
        </div>
    );
};

export default ResourceCard;
