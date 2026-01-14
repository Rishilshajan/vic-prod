import React, { useState, useRef } from 'react';
import { Paperclip, X, Loader2 } from 'lucide-react';

const CareersForm: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        qualification: '',
        experience: '',
        profileInterest: ''
    });
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const fileInputRef = useRef<HTMLInputElement>(null);

    // This URL will be replaced by the user after they deploy their Google Script
    const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleAttachClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!GOOGLE_SCRIPT_URL) {
            alert("Please configure the Google Script URL in your .env file.");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Convert file to base64 if exists
            let fileData = "";
            let fileName = "";
            let mimeType = "";

            if (selectedFile) {
                const reader = new FileReader();
                fileData = await new Promise((resolve) => {
                    reader.onload = (e) => resolve(e.target?.result as string);
                    reader.readAsDataURL(selectedFile);
                });
                // Remove the "data:*/*;base64," part
                fileData = fileData.split(',')[1];
                fileName = selectedFile.name;
                mimeType = selectedFile.type;
            }

            // Prepare payload for Google Script
            // We use URLSearchParams or FormData depending on how the script is set up.
            // For simple JSON handling in Apps Script, sending raw JSON is often easiest if we handle CORS correctly,
            // but standard 'application/x-www-form-urlencoded' is more robust for simple scripts without complex CORS setup.
            // However, for large files, JSON body is better. Let's try standard JSON fetch no-cors (opaque) or standard text.

            // To ensure compatibility with most simple Apps Script setups, `text/plain` body with JSON content is a common trick to avoid CORS preflight,
            // or we accept the opaque response.

            const payload = {
                ...formData,
                fileName,
                mimeType,
                fileData
            };

            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                body: JSON.stringify(payload)
                // mode: "no-cors" // We might need this if we don't handle CORS in the script.
                // However, if we want to know if it success, we hope for CORS headers from the script.
            });

            // Assuming success if no network error (with no-cors we can't read response)
            // Or better, let's assume the user will deploy the script with proper CORS headers (instruction provided).

            setSubmitStatus('success');
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                qualification: '',
                experience: '',
                profileInterest: ''
            });
            handleRemoveFile();

        } catch (error) {
            console.error("Submission Error:", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="container mx-auto px-4 py-6 md:py-10">

            {/* Application Form */}
            <div className="w-full max-w-[841px] mx-auto bg-white border border-[#23A6F0] rounded-[30px] p-6 md:p-12 relative shadow-sm">
                <h3 className="text-[#123042] font-bold text-2xl md:text-3xl mb-8 text-center md:text-left">
                    Apply Here
                </h3>

                {submitStatus === 'success' ? (
                    <div className="text-center py-10">
                        <h4 className="text-2xl font-semibold text-green-600 mb-4">Application Sent!</h4>
                        <p className="text-gray-600">Thank you for applying. We will get back to you soon.</p>
                        <button
                            onClick={() => setSubmitStatus('idle')}
                            className="mt-6 text-[#0077B6] underline"
                        >
                            Submit another response
                        </button>
                    </div>
                ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Full Name */}
                        <div className="relative">
                            <input
                                type="text"
                                id="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                required
                                placeholder="Full Name"
                                className="w-full h-12 md:h-14 px-6 border border-[#23A6F0] rounded-full text-[#23A6F0] placeholder-[#23A6F0] placeholder:italic placeholder:font-light focus:outline-none focus:ring-1 focus:ring-[#23A6F0] bg-white text-sm"
                            />
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                placeholder="Email"
                                className="w-full h-12 md:h-14 px-6 border border-[#23A6F0] rounded-full text-[#23A6F0] placeholder-[#23A6F0] placeholder:italic placeholder:font-light focus:outline-none focus:ring-1 focus:ring-[#23A6F0] bg-white text-sm"
                            />
                        </div>

                        {/* Phone */}
                        <div className="relative">
                            <input
                                type="tel"
                                id="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                placeholder="Phone"
                                className="w-full h-12 md:h-14 px-6 border border-[#23A6F0] rounded-full text-[#23A6F0] placeholder-[#23A6F0] placeholder:italic placeholder:font-light focus:outline-none focus:ring-1 focus:ring-[#23A6F0] bg-white text-sm"
                            />
                        </div>

                        {/* Highest Qualification */}
                        <div className="relative">
                            <input
                                type="text"
                                id="qualification"
                                value={formData.qualification}
                                onChange={handleInputChange}
                                required
                                placeholder="Highest Qualification"
                                className="w-full h-12 md:h-14 px-6 border border-[#23A6F0] rounded-full text-[#23A6F0] placeholder-[#23A6F0] placeholder:italic placeholder:font-light focus:outline-none focus:ring-1 focus:ring-[#23A6F0] bg-white text-sm"
                            />
                        </div>

                        {/* Experience */}
                        <div className="relative">
                            <input
                                type="number"
                                id="experience"
                                value={formData.experience}
                                onChange={handleInputChange}
                                required
                                placeholder="Total work experience (in months)"
                                className="w-full h-12 md:h-14 px-6 border border-[#23A6F0] rounded-full text-[#23A6F0] placeholder-[#23A6F0] placeholder:italic placeholder:font-light focus:outline-none focus:ring-1 focus:ring-[#23A6F0] bg-white text-sm"
                            />
                        </div>

                        {/* Profile Looking For */}
                        <div className="relative">
                            <input
                                type="text"
                                id="profileInterest"
                                value={formData.profileInterest}
                                onChange={handleInputChange}
                                required
                                placeholder="Profile looking for (Interest area of work)"
                                className="w-full h-12 md:h-14 px-6 border border-[#23A6F0] rounded-full text-[#23A6F0] placeholder-[#23A6F0] placeholder:italic placeholder:font-light focus:outline-none focus:ring-1 focus:ring-[#23A6F0] bg-white text-sm"
                            />
                        </div>

                        {/* File Upload Area */}
                        <div className="relative">
                            <div className="flex justify-between items-center border border-[#23A6F0] rounded-full px-6 py-2 h-12 md:h-14">
                                <span className="text-[#23A6F0] italic font-light text-sm">
                                    {selectedFile ? selectedFile.name : "Upload Resume"}
                                </span>

                                <div className="flex items-center gap-2">
                                    {selectedFile && (
                                        <button type="button" onClick={handleRemoveFile} className="hover:text-red-500 mr-2">
                                            <X size={16} />
                                        </button>
                                    )}
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        className="hidden"
                                        onChange={handleFileChange}
                                        accept=".pdf,.doc,.docx"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleAttachClick}
                                        className="flex items-center gap-2 bg-[#E1F1F8] text-[#23A6F0] text-xs px-4 py-2 rounded-full hover:bg-[#d0e8f2] transition-colors"
                                    >
                                        Attach <Paperclip size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end pt-2">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-[#0077B6] text-white font-medium text-sm px-8 py-3 rounded-full hover:bg-[#026aa1] transition-colors shadow-lg shadow-[#0077B6]/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>

                        {submitStatus === 'error' && (
                            <p className="text-red-500 text-center text-sm">
                                Something went wrong. Please try again.
                            </p>
                        )}
                    </form>
                )}
            </div>
        </section>
    );
};

export default CareersForm;
