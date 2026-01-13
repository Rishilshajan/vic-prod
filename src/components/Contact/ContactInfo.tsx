import React from 'react';

const ContactInfo: React.FC = () => {
    return (
        <div className="flex flex-col items-start gap-8 w-[308px]">

            {/* Address */}
            <div className="flex flex-col gap-2">
                <h3 className="text-[#23A6F0] font-semibold text-sm uppercase">
                    Address
                </h3>
                <p className="text-[#123042] text-sm leading-relaxed font-light">
                    VIC C/o RA Foundation, No: 664, 5th Cross, 4th Block, Koramangala,<br /> Bengaluru - 560034
                </p>
            </div>

            {/* Business Enquiry */}
            <div className="flex flex-col gap-2">
                <h3 className="text-[#23A6F0] font-semibold text-sm uppercase">
                    Business Enquiry
                </h3>
                <p className="text-[#123042] text-sm font-light">
                    +91 9945 247 200
                </p>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
                <h3 className="text-[#23A6F0] font-semibold text-sm uppercase">
                    Email
                </h3>
                <a href="mailto:impact@vic.org.in" className="text-[#123042] text-sm hover:underline font-light">
                    impact@vic.org.in
                </a>
            </div>

            {/* Map */}
            <div className="w-full h-[278px] bg-[#F5F5F5] rounded-xl overflow-hidden mt-4 relative group">
                <iframe
                    src="https://maps.google.com/maps?ll=19.1139537,72.8254566&z=17&t=m&hl=en&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                    className="group-hover:opacity-90 transition-opacity"
                ></iframe>

                {/* Custom Blue Pin Overlay - Clickable */}
                <a
                    href="https://www.google.com/maps/place/RA+Foundation/@19.1139536,72.8205857,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9e87b373315:0x7fa0a8dccde95805!8m2!3d19.1139537!4d72.8254566!16s%2Fg%2F11clths507?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-4 drop-shadow-lg cursor-pointer group"
                >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C7.58 0 4 3.58 4 8C4 13.54 12 24 12 24C12 24 20 13.54 20 8C20 3.58 16.42 0 12 0Z" fill="#23A6F0" />
                        <circle cx="12" cy="8" r="3" fill="white" />
                    </svg>

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-3 py-1 bg-white text-[#123042] text-xs font-medium rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        VIC - RA Foundation
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white"></div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default ContactInfo;
