import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data/testimonialsData';

const ClientTestimonials: React.FC = () => {

    const [activeIndex, setActiveIndex] = React.useState(1);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Get 3 testimonials to display on desktop
    const getVisibleTestimonials = () => {
        const result = [];
        for (let i = 0; i < 3; i++) {
            const index = (activeIndex - 1 + i + testimonials.length) % testimonials.length;
            result.push(testimonials[index]);
        }
        return result;
    };

    const visibleTestimonials = getVisibleTestimonials();

    return (
        <section className="w-full py-12 md:py-20 bg-white relative">
            <div className="container mx-auto px-4">

                {/* Heading */}
                <h2 className="text-[#123042] font-bold text-2xl md:text-[32px] text-center mb-8 md:mb-12 leading-tight">
                    What Our Clients Say About Us
                </h2>

                {/* Desktop: 3 Cards Side by Side */}
                <div className="hidden md:block relative">
                    <div className="grid grid-cols-3 gap-6 max-w-[1200px] mx-auto">
                        {visibleTestimonials.map((testimonial, idx) => (
                            <div
                                key={idx}
                                className="border-[3px] border-[#23A6F0] rounded-[30px] p-8 bg-white flex flex-col justify-between min-h-[300px] relative overflow-hidden"
                            >
                                {/* Gradient overlay for first card (fade from left) */}
                                {idx === 0 && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent pointer-events-none z-10 rounded-[27px]" />
                                )}

                                {/* Gradient overlay for third card (fade from right) */}
                                {idx === 2 && (
                                    <div className="absolute inset-0 bg-gradient-to-l from-white via-white/60 to-transparent pointer-events-none z-10 rounded-[27px]" />
                                )}

                                <p className="text-[#23A6F0] text-base leading-relaxed font-normal text-left italic mb-6 relative z-20">
                                    "{testimonial.text}"
                                </p>

                                <div className="text-right mt-auto relative z-20">
                                    <h4 className="text-[#123042] font-bold text-lg mb-1">
                                        {testimonial.author}
                                    </h4>
                                    <p className="text-[#23A6F0] text-sm font-medium">
                                        {testimonial.role} | {testimonial.organization}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons for Desktop - Positioned inside/overlapping cards */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-[20px] z-30 w-12 h-12 bg-[#6BC778] rotate-45 rounded-md flex items-center justify-center hover:bg-[#5ab567] transition-all shadow-md group"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft color="white" size={24} className="-rotate-45 group-hover:scale-110 transition-transform" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-[20px] z-30 w-12 h-12 bg-[#6BC778] rotate-45 rounded-md flex items-center justify-center hover:bg-[#5ab567] transition-all shadow-md group"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight color="white" size={24} className="-rotate-45 group-hover:scale-110 transition-transform" />
                    </button>
                </div>

                {/* Mobile: Single Card Carousel */}
                <div className="md:hidden relative max-w-[500px] mx-auto border-[3px] border-[#23A6F0] rounded-[30px] px-6 py-8 bg-white">
                    <div className="relative">
                        {/* Testimonial Content */}
                        <div className="flex flex-col justify-between min-h-[300px] transition-all duration-300">
                            <p className="text-[#23A6F0] text-base leading-relaxed font-normal text-left italic mb-8">
                                "{testimonials[activeIndex].text}"
                            </p>

                            <div className="text-right mt-auto">
                                <h4 className="text-[#123042] font-bold text-lg mb-1">
                                    {testimonials[activeIndex].author}
                                </h4>
                                <p className="text-[#23A6F0] text-sm font-medium">
                                    {testimonials[activeIndex].role} | {testimonials[activeIndex].organization}
                                </p>
                            </div>
                        </div>

                        {/* Navigation Buttons for Mobile */}
                        <button
                            onClick={prevSlide}
                            className="absolute -left-10 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-[#6BC778] rotate-45 rounded-md flex items-center justify-center hover:bg-[#5ab567] transition-all shadow-md group"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft color="white" size={24} className="-rotate-45 group-hover:scale-110 transition-transform" />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute -right-10 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-[#6BC778] rotate-45 rounded-md flex items-center justify-center hover:bg-[#5ab567] transition-all shadow-md group"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight color="white" size={24} className="-rotate-45 group-hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ClientTestimonials;
