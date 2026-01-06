import React from 'react';

const ContactForm: React.FC = () => {
    return (
        <div className="w-full max-w-[500px] border border-[#23A6F0] rounded-[10px] p-6 md:p-10 bg-white">
            <h2 className="text-[#123042] font-semibold text-2xl md:text-3xl mb-8 text-center">
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

                <div className="flex flex-col md:flex-row items-center gap-4 mt-2">
                    <button
                        type="button"
                        className="flex-1 w-full h-[50px] bg-[#EEF8FC] text-[#23A6F0] rounded-[30px] font-medium hover:bg-[#dcebf1] transition-colors"
                    >
                        Schedule a Meeting
                    </button>
                    <button
                        type="submit"
                        className="flex-1 w-full h-[50px] bg-[#14709F] text-white rounded-[30px] font-medium hover:bg-[#105a80] transition-colors"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
