import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import type { ResourceData } from '../../types/admin';

interface ResourcePreviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: ResourceData;
}

const ResourcePreviewModal: React.FC<ResourcePreviewModalProps> = ({ isOpen, onClose, data }) => {

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
            console.log("Preview Modal Cleanup");
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-in fade-in duration-200">

            {/* Admin Overlay Header */}
            <div className="sticky top-0 z-50 bg-[#123042] text-white px-4 py-3 flex justify-between items-center shadow-md">
                <div className="flex items-center gap-2">
                    <span className="font-bold tracking-wide uppercase text-sm bg-white/10 px-3 py-1 rounded-full border border-white/20">
                        Preview Mode
                    </span>
                    <span className="text-sm text-slate-300 hidden sm:inline">
                        This is how your post will look to the public.
                    </span>
                </div>
                <button
                    onClick={onClose}
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                >
                    <X size={18} />
                    Close Preview
                </button>
            </div>

            {/* Public View Prototype */}
            <div className="w-full bg-white font-poppins text-[#123042] pb-24">

                {/* Back Button */}
                <div className="container mx-auto px-4 pt-8 flex justify-center">
                    <div className="hidden md:block w-full max-w-[1190px]">
                        <button
                            onClick={onClose}
                            className="flex items-center gap-[10px] text-[#0C87BE] font-medium text-[16px] transition-all hover:opacity-80"
                            style={{ width: '122px', height: '58px', borderRadius: '30px', padding: '21px 25px', backgroundColor: '#C8E5F2' }}
                        >
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.66665 9.16672L3.01857 9.8148L2.37048 9.16672L3.01857 8.51864L3.66665 9.16672ZM19.25 16.5001C19.25 16.7432 19.1534 16.9763 18.9815 17.1482C18.8096 17.3201 18.5764 17.4167 18.3333 17.4167C18.0902 17.4167 17.857 17.3201 17.6851 17.1482C17.5132 16.9763 17.4166 16.7432 17.4166 16.5001H19.25ZM7.6019 14.3981L3.01857 9.8148L4.31473 8.51864L8.89807 13.102L7.6019 14.3981ZM3.01857 8.51864L7.6019 3.9353L8.89807 5.23147L4.31473 9.8148L3.01857 8.51864ZM3.66665 8.25005H12.8333V10.0834H3.66665V8.25005ZM19.25 14.6667V16.5001H17.4166V14.6667H19.25ZM12.8333 8.25005C14.5351 8.25005 16.1672 8.92609 17.3706 10.1295C18.5739 11.3328 19.25 12.9649 19.25 14.6667H17.4166C17.4166 13.4511 16.9338 12.2854 16.0742 11.4258C15.2147 10.5663 14.0489 10.0834 12.8333 10.0834V8.25005Z" fill="#0C87BE" />
                            </svg>
                            Back
                        </button>
                    </div>
                </div>

                {/* Hero Card Container */}
                <div className="container mx-auto px-4 mt-2 mb-20 md:mb-28 flex justify-center">
                    <div className="relative w-full max-w-[1247px] rounded-[30px] p-[3px]" style={{ background: 'linear-gradient(232.11deg, rgba(10, 90, 138, 0.8) -36.66%, rgba(12, 135, 190, 0.5) 119.48%)' }}>
                        <div className="w-full h-full bg-white rounded-[27px] overflow-hidden flex flex-col md:flex-row shadow-sm">
                            {/* Image Left */}
                            <div className="w-full md:w-[480px] lg:w-[500px] h-[300px] md:h-auto relative shrink-0">
                                {data.coverImage ? (
                                    <img
                                        src={data.coverImage}
                                        alt={data.title}
                                        className="w-full h-full object-cover"
                                        style={{ objectPosition: data.coverPosition }}
                                    />
                                ) : (
                                    <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400">
                                        No Cover Image
                                    </div>
                                )}
                            </div>

                            {/* Text Content Right */}
                            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">

                                {/* Author | Date */}
                                <div className="flex items-center gap-2 mb-4 text-[14px] font-medium text-[#0C87BE]">
                                    <span>{data.author || 'Author Name'}</span>
                                    <span>|</span>
                                    <span>
                                        {data.date ? new Date(data.date).toLocaleDateString('en-GB', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        }).replace(/(\d+)/, (match) => {
                                            const day = parseInt(match);
                                            const suffix = ["th", "st", "nd", "rd"][(day % 10 > 3 || [11, 12, 13].includes(day % 100)) ? 0 : day % 10];
                                            return day + suffix;
                                        }) : 'Date'}
                                    </span>
                                </div>

                                {/* Title */}
                                <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold text-[#123042] leading-tight break-words">
                                    {data.title || 'Your Post Title Goes Here'}
                                </h1>

                                {data.excerpt && (
                                    <p className="mt-4 text-slate-500 text-lg leading-relaxed">
                                        {data.excerpt}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="container mx-auto px-8 md:px-4 max-w-[841px]">
                    <div
                        className="prose max-w-none font-poppins prose-headings:font-poppins prose-headings:font-semibold prose-headings:text-[#123042] prose-headings:text-[28px] md:prose-headings:text-[42px] prose-headings:leading-[100%] prose-p:font-poppins prose-p:text-[#123042] prose-p:text-[16px] prose-p:font-light prose-p:leading-relaxed prose-img:rounded-[25px] prose-a:text-[#0C87BE]"
                        dangerouslySetInnerHTML={{ __html: data.content || '<p>Start writing your content...</p>' }}
                    />
                </div>

            </div>
        </div>
    );
};

export default ResourcePreviewModal;
