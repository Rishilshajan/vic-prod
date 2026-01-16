import React from 'react';

const CareersValues: React.FC = () => {
    return (
        <section className="container mx-auto px-8 md:px-4 pt-4 md:pt-6 pb-8 md:pb-12">

            {/* Main Content Box - Border removed */}
            <div className="w-full max-w-[841px] mx-auto relative">

                {/* Mission Driven Team Intro */}
                <div className="w-full mb-12 md:mb-16">
                    <h2 className="text-[#123042] font-bold text-3xl md:text-[40px] mb-6 font-['Poppins']">
                        Join Our Mission-Driven Team
                    </h2>
                    <div className="font-['Poppins'] font-light text-[#123042] text-[16px] leading-relaxed text-justify space-y-4">
                        <p>
                            We are a team of visionaries, innovators, and problem-solvers, united by a shared purpose: to create measurable, lasting impact.
                        </p>
                        <p>
                            At our core, we’re a boutique advisory firm specialising in impact measurement across sectors like education, livelihoods, health, sustainability, and transformation. We empower changemakers to turn action into tangible outcomes.
                        </p>
                    </div>
                </div>

                {/* Why Work With Us */}
                <div className="w-full mb-12 md:mb-16">
                    <h3 className="text-[#123042] font-bold text-3xl md:text-[40px] mb-8 md:mb-12 font-['Poppins']">
                        Why Work With Us?
                    </h3>

                    <div className="space-y-8 md:space-y-12 pl-0">
                        <div>
                            <h4 className="text-[#123042] font-semibold text-xl md:text-2xl mb-2 font-['Poppins']">
                                Purpose-Driven Work
                            </h4>
                            <p className="text-[#123042] text-[16px] font-light leading-relaxed text-justify font-['Poppins']">
                                Be part of projects that contribute directly to the UN Sustainable Development Goals (SDG 2030), driving change across CSR, philanthropy, non-profits, social enterprises, and government bodies.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-[#123042] font-semibold text-xl md:text-2xl mb-2 font-['Poppins']">
                                Collaborative Culture
                            </h4>
                            <p className="text-[#123042] text-[16px] font-light leading-relaxed text-justify font-['Poppins']">
                                We believe the best solutions come from collaboration. You’ll work alongside experts, clients, and partners to co-create strategies that truly matter.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-[#123042] font-semibold text-xl md:text-2xl mb-2 font-['Poppins']">
                                Diverse Impact Sectors
                            </h4>
                            <p className="text-[#123042] text-[16px] font-light leading-relaxed text-justify font-['Poppins']">
                                From grassroots health interventions to national-level education strategies, your work will touch lives and communities in meaningful ways.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-[#123042] font-semibold text-xl md:text-2xl mb-2 font-['Poppins']">
                                Growth & Learning
                            </h4>
                            <p className="text-[#123042] text-[16px] font-light leading-relaxed text-justify font-['Poppins']">
                                Join a space where curiosity is valued. We encourage continuous learning, mentorship, and shared growth within our nimble and passionate team.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Work With Us Section */}
                <div className="w-full">
                    <h3 className="text-[#123042] font-bold text-3xl md:text-[40px] mb-6 font-['Poppins']">
                        Work With Us
                    </h3>
                    <div className="font-['Poppins'] font-light text-[#123042] text-[16px] leading-relaxed text-justify space-y-4">
                        <p>
                            If you’re ready to build something meaningful and work at the intersection of strategy, social change, and innovation—we’d love to hear from you.
                        </p>
                        <p>
                            Send your CV and a short note about why you’re interested to <a href="mailto:impact@vic.org.in" className="text-[#188628] font-medium hover:underline">impact@vic.org.in</a>
                        </p>
                        <p>
                            Or apply directly through the form below.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default CareersValues;
