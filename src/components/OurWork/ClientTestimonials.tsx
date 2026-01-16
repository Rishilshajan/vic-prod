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



    return (
        <section className="w-full py-12 md:py-20 bg-white relative">
            <div className="container mx-auto px-4">

                <div className="relative max-w-[500px] mx-auto border-[3px] border-[#23A6F0] rounded-[30px] px-6 py-8 md:p-12 bg-white">

                    <h2 className="text-[#123042] font-bold text-2xl md:text-[32px] text-center mb-8 leading-tight">
                        What Our Clients Say About Us
                    </h2>

                    <div className="relative">

                        {/* Testimonial Content */}
                        <div className="flex flex-col justify-between min-h-[300px] transition-all duration-300">
                            <p className="text-[#23A6F0] text-base md:text-lg leading-relaxed font-normal text-center mb-8">
                                "{testimonials[activeIndex].text}"
                            </p>

                            <div className="text-right mt-auto">
                                <h4 className="text-[#123042] font-bold text-lg md:text-xl mb-1">
                                    {testimonials[activeIndex].author}
                                </h4>
                                <p className="text-[#23A6F0] text-sm md:text-base font-medium">
                                    {testimonials[activeIndex].role} | {testimonials[activeIndex].organization}
                                </p>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute -left-10 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-[#6BC778] rotate-45 rounded-md flex items-center justify-center hover:bg-[#5ab567] transition-all shadow-md group"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft color="white" size={24} className="-rotate-45 group-hover:scale-110 transition-transform" />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute -right-10 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-[#6BC778] rotate-45 rounded-md flex items-center justify-center hover:bg-[#5ab567] transition-all shadow-md group"
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
