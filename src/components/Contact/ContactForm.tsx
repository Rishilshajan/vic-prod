import React, { useState } from 'react';

const SCRIPT_URL = import.meta.env.VITE_GOOGLE_CONTACT_URL;

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        query: '',
        meetingDate: '',
        meetingTime: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (SCRIPT_URL === "1tlA6NQVlgo3gaawYST_m3KxjApk0_EgsejzNZ0JJgTI") {
            alert("Please configure the Google Script URL in the code!");
            setIsSubmitting(false);
            return;
        }

        try {
            // We use 'no-cors' mode or text/plain to avoid preflight OPTIONS request which Apps Script doesn't handle
            await fetch(SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify(formData),
                // Using text/plain prevents the browser from sending a preflight OPTIONS request
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
            });

            // Since we might be using no-cors or opaque responses, we assume success if no network error occurred.
            alert("Thank you! Your message has been sent successfully.");
            setFormData({
                name: '',
                email: '',
                phone: '',
                query: '',
                meetingDate: '',
                meetingTime: ''
            });

        } catch (error) {
            console.error("Contact form error:", error);
            alert("There was an error submitting your message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="w-full max-w-[380px] md:w-[700px] md:max-w-[900px] border-2 border-[#23A6F0]/30 rounded-[30px] p-8 md:p-10 bg-white flex flex-col">
            <h2 className="text-[#123042] font-semibold text-2xl md:text-3xl mb-8 text-center">
                Contact Us
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name */}
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full h-[55px] px-6 rounded-[30px] border-2 border-[#23A6F0]/30 bg-white text-[#123042] placeholder-[#23A6F0]/60 placeholder:italic outline-none focus:border-[#23A6F0] focus:ring-0 transition-all font-light text-[15px]"
                    />
                </div>

                {/* Business Email */}
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Business Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full h-[55px] px-6 rounded-[30px] border-2 border-[#23A6F0]/30 bg-white text-[#123042] placeholder-[#23A6F0]/60 placeholder:italic outline-none focus:border-[#23A6F0] focus:ring-0 transition-all font-light text-[15px]"
                    />
                </div>

                {/* Phone Number */}
                <div>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full h-[55px] px-6 rounded-[30px] border-2 border-[#23A6F0]/30 bg-white text-[#123042] placeholder-[#23A6F0]/60 placeholder:italic outline-none focus:border-[#23A6F0] focus:ring-0 transition-all font-light text-[15px]"
                    />
                </div>

                {/* Query/Inquiry */}
                <div>
                    <input
                        type="text"
                        name="query"
                        placeholder="Query/Inquiry"
                        value={formData.query}
                        onChange={handleChange}
                        required
                        className="w-full h-[55px] px-6 rounded-[30px] border-2 border-[#23A6F0]/30 bg-white text-[#123042] placeholder-[#23A6F0]/60 placeholder:italic outline-none focus:border-[#23A6F0] focus:ring-0 transition-all font-light text-[15px]"
                    />
                </div>

                {/* Virtual Meeting Date */}
                <div>
                    <label className="block text-[#23A6F0]/60 italic text-[13px] mb-2 ml-6">Virtual Meeting (Please Suggest) - Date</label>
                    <input
                        type="date"
                        name="meetingDate"
                        value={formData.meetingDate}
                        onChange={handleChange}
                        className="w-full h-[55px] px-6 rounded-[30px] border-2 border-[#23A6F0]/30 bg-white text-[#123042] outline-none focus:border-[#23A6F0] focus:ring-0 transition-all font-light text-[15px]"
                    />
                </div>

                {/* Virtual Meeting Time */}
                <div>
                    <label className="block text-[#23A6F0]/60 italic text-[13px] mb-2 ml-6">Virtual Meeting (Please Suggest) - Time</label>
                    <input
                        type="time"
                        name="meetingTime"
                        value={formData.meetingTime}
                        onChange={handleChange}
                        className="w-full h-[55px] px-6 rounded-[30px] border-2 border-[#23A6F0]/30 bg-white text-[#123042] outline-none focus:border-[#23A6F0] focus:ring-0 transition-all font-light text-[15px]"
                    />
                </div>

                <div className="flex items-center justify-center mt-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-[210px] h-[58px] bg-[#0C87BE] text-white rounded-[30px] font-medium text-[16px] hover:bg-[#0C87BE]/90 transition-colors flex items-center justify-center shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
