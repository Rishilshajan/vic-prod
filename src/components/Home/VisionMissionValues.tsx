import React from 'react';

const VisionMissionValues: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center gap-16 max-w-[303px] md:max-w-none">


        {/* --- Vision Section --- */}
        <div className="flex flex-col items-center gap-6 w-full">

          <h2 className="font-semibold text-[32px] md:text-[42px] leading-none text-center text-[#123042] w-full max-w-[863px]">
            Vision
          </h2>
          {/* Content */}
          <p className="font-light text-[16px] md:text-[20px] leading-relaxed text-center text-[#1D6D29] w-full max-w-[580px]">
            Empowered development ecosystem with evidence-based decisions that drive deeper impact
          </p>
        </div>


        {/*  Mission Section  */}
        <div className="flex flex-col items-center gap-6 w-full">
          <h2 className="font-semibold text-[32px] md:text-[42px] leading-none text-center text-[#123042] w-full max-w-[863px]">
            Mission
          </h2>
          {/* Content */}
          <p className="font-light text-[16px] md:text-[20px] leading-relaxed text-center text-[#1D6D29] w-full max-w-[580px]">
            We partner with changemakers to deliver rigorous impact measurement and evaluations for creating lasting impact.
          </p>
        </div>


        {/*  Core Values Section  */}
        <div className="flex flex-col items-center gap-8 w-full">
          <h2 className="font-semibold text-[32px] md:text-[42px] leading-none text-center text-[#123042] w-full max-w-[863px] mb-4">
            Our Core Values
          </h2>

          <div className="flex flex-col gap-8">

            {/* Value 1 */}
            <p className="max-w-[580px] text-center md:text-justify font-light text-[16px] md:text-[20px] leading-relaxed text-[#1D6D29] mx-auto">
              <span className="font-semibold">Rigour with Purpose: </span>
              We commit to depth, precision, and thoughtful inquiry in everything we do. To generate data and surface insights that empower meaningful decisions.
            </p>

            {/* Value 2 */}
            <p className="max-w-[580px] text-center md:text-justify font-light text-[16px] md:text-[20px] leading-relaxed text-[#1D6D29] mx-auto">
              <span className="font-semibold">Collaborative Curiosity: </span>
              We bring an open mind, deep listening, and co-creative spirit to each engagement. We learn with our partners and adapt to each unique context.
            </p>

            {/* Value 3 */}
            <p className="max-w-[580px] text-center md:text-justify font-light text-[16px] md:text-[20px] leading-relaxed text-[#1D6D29] mx-auto">
              <span className="font-semibold">Integrity and Accountability: </span>
              We uphold the highest ethical standards, respect privacy, and ensure our work remains honest, transparent, and accountable to the communities it serves.
            </p>

          </div>
        </div>

      </div>

      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-64 h-96 bg-[#4CD964]/10 rounded-blob blur-3xl -z-10 pointer-events-none"></div>
    </section>
  );
};

export default VisionMissionValues;
