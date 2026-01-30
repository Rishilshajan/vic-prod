import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { ResourceDB } from '../../lib/resources';

interface ResourceCardProps {
    resource: ResourceDB;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/resources/${resource.id}`);
    };

    return (
        <div
            className="relative w-full max-w-[350px] md:max-w-[867px] h-auto flex-shrink-0 rounded-[30px] p-[3px] cursor-pointer transition-transform hover:scale-[1.01]"
            style={{
                background: "linear-gradient(232.11deg, rgba(10, 90, 138, 0.8) -36.66%, rgba(12, 135, 190, 0.5) 119.48%)"
            }}
            onClick={handleClick}
        >
            <div className="w-full h-full bg-white rounded-[27px] flex flex-col md:flex-row overflow-hidden">

                {/* Image Section */}
                <div className="w-full h-[200px] md:w-[286px] md:h-auto flex-shrink-0 relative">
                    <img
                        src={resource.coverImage || 'https://placehold.co/600x400?text=No+Image'}
                        alt={resource.title}
                        className="w-full h-full object-cover absolute inset-0"
                        loading="lazy"
                    />
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6 md:pt-[38px] md:pl-[43px] md:pr-[40px] flex flex-col items-start text-left">
                    <p className="font-['Poppins'] font-medium text-[13px] leading-[100%] text-[#123042] mb-4 md:mb-[20px]">
                        {resource.author}
                    </p>

                    <div className="w-full mb-4 md:mb-[24px]">
                        <h3 className="font-['Poppins'] font-medium text-[18px] md:text-[20px] text-[#123042] leading-tight">
                            {resource.title}
                        </h3>
                    </div>

                    <div className="w-full">
                        <p className="font-['Poppins'] font-light text-[14px] md:text-[15px] leading-relaxed text-[#0C87BE]">
                            {resource.excerpt}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourceCard;
