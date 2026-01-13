import React from 'react';

const ContactForm: React.FC = () => {
    return (
        <div className="w-[622px] border border-[#23A6F0] rounded-[30px] p-6 md:p-10 bg-white flex flex-col">
            <h2 className="text-[#123042] font-semibold text-2xl md:text-3xl mb-8">
                Contact Us
            </h2>

            <form className="flex flex-col gap-6">
                <div>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full h-[50px] px-6 rounded-[30px] border border-[#23A6F0] bg-white text-[#123042] placeholder-[#23A6F0] outline-none focus:ring-2 focus:ring-[#23A6F0]/50 transition-all font-light"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full h-[50px] px-6 rounded-[30px] border border-[#23A6F0] bg-white text-[#123042] placeholder-[#23A6F0] outline-none focus:ring-2 focus:ring-[#23A6F0]/50 transition-all font-light"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full h-[50px] px-6 rounded-[30px] border border-[#23A6F0] bg-white text-[#123042] placeholder-[#23A6F0] outline-none focus:ring-2 focus:ring-[#23A6F0]/50 transition-all font-light"
                    />
                </div>
                <div>
                    <textarea
                        placeholder="Message"
                        className="w-full h-[140px] px-6 py-4 rounded-[30px] border border-[#23A6F0] bg-white text-[#123042] placeholder-[#23A6F0] outline-none focus:ring-2 focus:ring-[#23A6F0]/50 transition-all font-light resize-none"
                    />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-[10px]">
                    <a
                        href="https://calendly.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[210px] h-[58px] bg-[#C8E5F2] text-[#0C87BE] rounded-[30px] font-medium hover:bg-[#bde0ef] transition-colors flex items-center justify-center cursor-pointer"
                    >
                        Schedule a Meeting
                    </a>
                    <button
                        type="submit"
                        className="w-[210px] h-[58px] bg-[#0C87BE] text-[#ffffff] rounded-[30px] font-medium hover:bg-[#105a80] transition-colors flex items-center justify-center"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
