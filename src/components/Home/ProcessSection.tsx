import React from 'react';
import { Network, Target } from 'lucide-react';

// --- Custom Icon Definition ---
const Database02Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color={"#0c87be"}
    fill={"none"}
    {...props}
  >
    <ellipse cx="12" cy="5" rx="8" ry="3" stroke="#0c87be" strokeWidth="1.5"></ellipse>
    <path d="M20 12C20 13.6569 16.4183 15 12 15C7.58172 15 4 13.6569 4 12" stroke="#0c87be" strokeWidth="1.5"></path>
    <path d="M20 5V19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19V5" stroke="#0c87be" strokeWidth="1.5"></path>
    <path d="M8 8V10" stroke="#0c87be" strokeWidth="1.5" strokeLinecap="round"></path>
    <path d="M8 15V17" stroke="#0c87be" strokeWidth="1.5" strokeLinecap="round"></path>
  </svg>
);

const ProcessSection: React.FC = () => {
  return (
    <section className="w-full py-20 bg-white flex justify-center">

      {/* Main Container */}
      <div
        className="bg-[#E6F7FF] rounded-[50px] relative mx-4 md:mx-0 w-full md:w-auto"
        style={{
          maxWidth: '1187px',
          minHeight: '736px',
        }}
      >
        <div className="p-10 md:p-[80px_40px] h-full">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 h-full relative">

            {/* --- COLUMN 1: DATA --- */}
            <div className="flex flex-col items-center text-left px-6 relative">
              <div className="mb-6 text-[#0C87BE]">
                <Database02Icon width={112} height={112} />
              </div>

              <h3 className="font-semibold text-[20px] leading-[30px] text-[#123042] mb-8">
                Data
              </h3>

              <div className="flex flex-col gap-6 text-[15px] leading-normal max-w-[260px]">
                <p>
                  <span className="text-[#123042] font-semibold">Design:</span>{' '}
                  <span className="text-[#0C87BE] font-normal">
                    Develop frameworks for data collection that align with organisational goals.
                  </span>
                </p>

                <p>
                  <span className="text-[#123042] font-semibold">Develop:</span>{' '}
                  <span className="text-[#0C87BE] font-normal">
                    Build tools, surveys, and systems for efficient data collection and storage.
                  </span>
                </p>

                <p>
                  <span className="text-[#123042] font-semibold">Implement:</span>{' '}
                  <span className="text-[#0C87BE] font-normal">
                    Execute data collection processes, ensuring quality and consistency.
                  </span>
                </p>

                <p>
                  <span className="text-[#123042] font-semibold">Measure:</span>{' '}
                  <span className="text-[#0C87BE] font-normal">
                    Track and monitor data quality and integrity in real-time.
                  </span>
                </p>
              </div>

              <div className="hidden md:block absolute right-0 top-10 bottom-0 w-[2px] bg-[#9BBECE] h-[400px] opacity-70"></div>
              {/* Mobile Separator */}
              <div className="block md:hidden w-full h-[1px] border-t border-dashed border-[#9BBECE] my-8 relative"></div>
            </div>


            {/* --- COLUMN 2: DECISION --- */}
            <div className="flex flex-col items-center text-left px-6 relative">
              <div className="mb-6 text-[#0C87BE] -rotate-90">
                <Network strokeWidth={1.5} size={112} />
              </div>

              <h3 className="font-semibold text-[20px] leading-[30px] text-[#123042] mb-8">
                Decision
              </h3>

              <div className="flex flex-col gap-6 text-[15px] leading-normal max-w-[260px]">
                <p>
                  <span className="text-[#123042] font-semibold">Analyse:</span>{' '}
                  <span className="text-[#0C87BE] font-normal">
                    Interpret the collected data to derive insights and actionable findings.
                  </span>
                </p>

                <p>
                  <span className="text-[#123042] font-semibold">Communicate:</span>{' '}
                  <span className="text-[#0C87BE] font-normal">
                    Share insights with stakeholders through visualisations, reports, and presentations to inform decision-making.
                  </span>
                </p>
              </div>

              <div className="hidden md:block absolute right-0 top-10 bottom-0 w-[2px] bg-[#9BBECE] h-[400px] opacity-70"></div>

              {/* Mobile Separator */}
              <div className="block md:hidden w-full h-[1px] border-t border-dashed border-[#9BBECE] my-8 relative"></div>
            </div>


            {/* --- COLUMN 3: IMPACT --- */}
            <div className="flex flex-col items-center text-left px-6">
              <div className="mb-6 text-[#0C87BE]">
                <Target strokeWidth={1.5} size={112} />
              </div>

              <h3 className="font-semibold text-[20px] leading-[30px] text-[#123042] mb-8">
                Impact
              </h3>

              <div className="flex flex-col gap-6 text-[15px] leading-normal max-w-[260px]">
                <p>
                  <span className="text-[#123042] font-semibold">Grow:</span>{' '}
                  <span className="text-[#0C87BE] font-normal">
                    Use data-driven decisions to scale programmes, enhance outcomes, and expand reach.
                  </span>
                </p>

                <p>
                  <span className="text-[#123042] font-semibold">Measure:</span>{' '}
                  <span className="text-[#0C87BE] font-normal">
                    Continuously evaluate the impact of implemented decisions against defined objectives.
                  </span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;