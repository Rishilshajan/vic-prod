import React, { useState, useRef } from 'react';
import { Paperclip, X, Loader2 } from 'lucide-react';

const SCRIPT_URL = import.meta.env.VITE_GOOGLE_CAREERS_URL;

const CareersForm: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        qualification: '',
        experience: '',
        profileInterest: [] as string[],
        interestAreas: ''
    });
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const fileInputRef = useRef<HTMLInputElement>(null);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev: typeof formData) => ({ ...prev, [id]: value }));
    };


    const handleCheckboxChange = (position: string) => {
        setFormData((prev: typeof formData) => ({
            ...prev,
            profileInterest: prev.profileInterest.includes(position)
                ? prev.profileInterest.filter((p: string) => p !== position)
                : [...prev.profileInterest, position]
        }));
    };


    const handleAttachClick = () => {
        fileInputRef.current?.click();
    };


    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;

            if (!allowedExtensions.exec(file.name)) {
                alert('Please upload file having extensions .pdf, .doc or .docx only.');
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
                setSelectedFile(null);
                return;
            }

            setSelectedFile(file);
        }
    };


    const handleRemoveFile = () => {
        setSelectedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    // Helper to convert file to Base64
    const fileToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const result = reader.result as string;
                // Remove the Data-URL declaration (e.g., "data:application/pdf;base64,")
                const base64 = result.split(',')[1];
                resolve(base64);
            };
            reader.onerror = error => reject(error);
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        if (!SCRIPT_URL) {
            alert("Google Script URL is missing in .env file (VITE_GOOGLE_CAREERS_URL)");
            setIsSubmitting(false);
            return;
        }

        try {
            let resumeData = null;

            if (selectedFile) {
                const base64Content = await fileToBase64(selectedFile);
                resumeData = {
                    name: selectedFile.name,
                    mimeType: selectedFile.type,
                    data: base64Content
                };
            }

            const payload = {
                type: 'career',
                ...formData,
                resume: resumeData
            };

            await fetch(SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
            });

            setSubmitStatus("success");

            // Reset form fields
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                qualification: '',
                experience: '',
                profileInterest: [],
                interestAreas: ''
            });

            // Remove uploaded file
            handleRemoveFile();
        } catch (error) {
            console.error("Submission Error:", error);
            setSubmitStatus("error");
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

                        {/* Profile Looking For - Checkboxes */}
                        <div className="relative">
                            <label className="block text-[#23A6F0] font-normal text-base mb-3 px-1">
                                Profile looking for (Interest area of work)
                            </label>
                            <div className="space-y-2.5 px-1">
                                {['Intern', 'Analyst', 'Associate', 'Researcher', 'Senior Researcher', 'Other'].map((position) => (
                                    <label key={position} className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            checked={formData.profileInterest.includes(position)}
                                            onChange={() => handleCheckboxChange(position)}
                                            className="w-4 h-4 rounded border-2 border-[#23A6F0] text-[#0077B6] focus:ring-2 focus:ring-[#23A6F0] focus:ring-offset-0 cursor-pointer checked:bg-[#0077B6] checked:border-[#0077B6]"
                                            style={{
                                                accentColor: '#0077B6'
                                            }}
                                        />
                                        <span className="text-[#23A6F0] text-[15px] select-none">
                                            {position}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Interest Areas */}
                        <div className="relative">
                            <input
                                type="text"
                                id="interestAreas"
                                value={formData.interestAreas}
                                onChange={handleInputChange}
                                placeholder="Interest areas"
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
