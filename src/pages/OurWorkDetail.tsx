import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { workServices } from '../data/ourWorkData';
import { ourWorkDetails } from '../data/ourWorkDetails';

const OurWorkDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const serviceId = Number(id);

    const serviceData = workServices.find(s => s.id === serviceId);
    const detailData = ourWorkDetails[serviceId];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!serviceData || !detailData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Service not found</p>
            </div>
        );
    }

    return (
        <div className="w-full bg-white font-poppins text-[#123042]">
            {/* Back Button */}
            <div className="container mx-auto px-4 pt-8 flex justify-center">
                <div className="w-full max-w-[1190px]">
                    <button
                        onClick={() => navigate('/our-work')}
                        className="flex items-center gap-[10px] text-[#0C87BE] font-medium text-[16px] transition-all hover:opacity-80"
                        style={{
                            width: '122px',
                            height: '58px',
                            borderRadius: '30px',
                            padding: '21px 25px',
                            backgroundColor: '#C8E5F2',
                            // border: 'none' // Removing border if present before, as not specified in new design
                        }}
                    >
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.66665 9.16672L3.01857 9.8148L2.37048 9.16672L3.01857 8.51864L3.66665 9.16672ZM19.25 16.5001C19.25 16.7432 19.1534 16.9763 18.9815 17.1482C18.8096 17.3201 18.5764 17.4167 18.3333 17.4167C18.0902 17.4167 17.857 17.3201 17.6851 17.1482C17.5132 16.9763 17.4166 16.7432 17.4166 16.5001H19.25ZM7.6019 14.3981L3.01857 9.8148L4.31473 8.51864L8.89807 13.102L7.6019 14.3981ZM3.01857 8.51864L7.6019 3.9353L8.89807 5.23147L4.31473 9.8148L3.01857 8.51864ZM3.66665 8.25005H12.8333V10.0834H3.66665V8.25005ZM19.25 14.6667V16.5001H17.4166V14.6667H19.25ZM12.8333 8.25005C14.5351 8.25005 16.1672 8.92609 17.3706 10.1295C18.5739 11.3328 19.25 12.9649 19.25 14.6667H17.4166C17.4166 13.4511 16.9338 12.2854 16.0742 11.4258C15.2147 10.5663 14.0489 10.0834 12.8333 10.0834V8.25005Z" fill="#0C87BE" />
                        </svg>
                        Back
                    </button>
                </div>
            </div>

            {/* Hero Image */}
            <div className="container mx-auto px-4 mt-8 mb-32 flex justify-center">
                <div
                    className="w-full max-w-[1073px] h-[403px] rounded-[30px] bg-cover bg-center relative overflow-hidden"
                    style={{ backgroundImage: `url(${serviceData.image})` }}
                >
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-8">
                        <h1 className="text-white text-4xl md:text-5xl font-medium text-center">
                            {detailData.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 max-w-[1022px] mb-40 space-y-20">

                {/* Main Description */}
                <div>
                    <h2 className="text-[42px] font-semibold text-[#123042] leading-[120%] mb-6 flex items-center gap-3">
                        {detailData.title}
                    </h2>
                    <p className="text-[16px] leading-relaxed font-light text-justify whitespace-pre-line">
                        {detailData.description}
                    </p>
                </div>

                {/* Sections */}
                {detailData.sections.map((section, index) => (
                    <div key={index} className="space-y-6">
                        <h2 className="text-4xl font-semibold text-[#123042] leading-[120%]">
                            {section.title}
                        </h2>
                        <ul className="space-y-6">
                            {section.items.map((item, i) => (
                                <li key={i} className="text-[16px] leading-relaxed font-light">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurWorkDetail;
