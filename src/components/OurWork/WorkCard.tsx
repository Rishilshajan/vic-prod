import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { WorkService } from '../../data/ourWorkData';

interface WorkCardProps {
    service: WorkService;
}

const WorkCard: React.FC<WorkCardProps> = ({ service }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/our-work/${service.id}`)}
            className="relative w-full h-[400px] rounded-[30px] border border-[#23A6F0] overflow-hidden p-8 transition-all duration-500 ease-in-out cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
            style={{
                boxShadow: isHovered ? '0px 20px 40px rgba(0, 0, 0, 0.3)' : 'none',
                backgroundColor: isHovered ? 'transparent' : 'white'
            }}
        >

            {/* Background Image on Hover */}
            <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                style={{ backgroundImage: `url(${service.image})` }}
            />

            <div
                className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between font-poppins">
                <h3 className={`font-medium text-[20px] transition-colors duration-300 ${isHovered ? 'text-white' : 'text-[#0C87BE]'}`}>
                    {service.title}
                </h3>

                <div
                    className={`transition-colors duration-300 overflow-hidden ${isHovered ? 'text-white' : 'text-[#0C87BE]'}`}
                >
                    {service.description ? (
                        <p className="text-[15px] leading-relaxed font-light">
                            {service.description}
                        </p>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {service.items?.map((item, index) => (
                                <div key={index} className="flex flex-col gap-1">
                                    <span className="font-semibold text-[15px] leading-tight">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
