import React from 'react';
import type { Resource } from '../../data/resourcesData';

interface ResourceCardProps {
    resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
    return (
        <div
            className="relative w-[867px] h-[261px] flex-shrink-0 rounded-[30px] p-[3px]"
            style={{
                background: "linear-gradient(232.11deg, rgba(10, 90, 138, 0.8) -36.66%, rgba(12, 135, 190, 0.5) 119.48%)"
            }}
        >
            <div className="w-full h-full bg-white rounded-[27px] flex overflow-hidden">
                {/* Image Section */}
                <div className="w-[286px] h-full flex-shrink-0">
                    <img
                        src={resource.image}
                        alt={resource.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Section */}
                <div className="flex-1 pt-[38px] pl-[43px] pr-[40px] flex flex-col items-start text-left">
                    <p className="font-['Poppins'] font-medium text-[13px] leading-[100%]  mb-[20px]">
                        {resource.author}
                    </p>

                    <div className="w-[501px] mb-[24px]">
                        <h3 className="font-['Poppins'] font-medium text-[20px] text-[#123042] leading-tight">
                            {resource.title}
                        </h3>
                    </div>

                    <div className="w-[501px]">
                        <p className="font-['Poppins'] font-light text-[15px] leading-relaxed text-[#0C87BE]">
                            {resource.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourceCard;
