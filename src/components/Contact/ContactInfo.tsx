import React from 'react';

const ContactInfo: React.FC = () => {
    return (
        <div className="flex flex-col items-start gap-8 max-w-[400px]">
            {/* Address */}
            <div className="flex flex-col gap-2">
                <h3 className="text-[#23A6F0] font-semibold text-sm uppercase">
                    Address
                </h3>
                <p className="text-[#123042] text-sm leading-relaxed">
                    VIC C/o RA Foundation, No: 664, 5th Cross, 4th Block, Koramangala,<br /> Bengaluru - 560034
                </p>
            </div>

            {/* Business Enquiry */}
            <div className="flex flex-col gap-2">
                <h3 className="text-[#23A6F0] font-semibold text-sm uppercase">
                    Business Enquiry
                </h3>
                <p className="text-[#123042] text-sm">
                    +91 9945 247 200
                </p>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
                <h3 className="text-[#23A6F0] font-semibold text-sm uppercase">
                    Email
                </h3>
                <a href="mailto:impact@vic.org.in" className="text-[#123042] text-sm hover:underline">
                    impact@vic.org.in
                </a>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-[200px] bg-[#F5F5F5] rounded-xl overflow-hidden mt-4 relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.47959092496!2d77.61905391299623!3d12.932174360340334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144ed839359f%3A0x629524458557ee39!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709736000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
            </div>

            <p className="text-[#23A6F0] text-xs text-center w-full mt-4">
                Or email us directly at impact@vic.org.in
            </p>
        </div>
    );
};

export default ContactInfo;
