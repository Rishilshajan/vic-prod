import React from 'react';
import bgImage from '../../assets/TechnologyIntegration.jpg';

const TechnologyIntegration: React.FC = () => {
    return (
        <section className="w-full pt-4 pb-12 md:pt-8 md:pb-20 bg-white">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center mb-24 max-w-[900px] mx-auto">
                    <h2 className="text-[#123042] font-bold text-3xl md:text-5xl mb-12">
                        Technology Integration
                    </h2>
                    <p className="text-[#6BC778] text-sm md:text-base text-center leading-relaxed max-w-[800px] mx-auto">
                        Empowered By cutting-edge technology, VIC delivers actionable insights, enabling organisations to enhance programme efficiency, foster accountability, and maximise their social impact.
                    </p>
                </div>

                {/* Desktop Layout */}
                <div
                    className="hidden lg:flex relative w-full max-w-[1246px] mx-auto rounded-[20px] flex-row items-center justify-center gap-0 h-[562px]"
                    style={{
                        backgroundImage: `linear-gradient(0deg, rgba(24, 134, 40, 0.3), rgba(107, 199, 120, 0.6)), url(${bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Left Card: Tools and Platforms */}
                    <div
                        className="flex-1 min-w-[487px] max-w-[487px] p-12 border-[3px] border-[#0C87BE] z-20 font-poppins rounded-[20px] bg-white h-[598px]"
                    >
                        <h3 className="text-[#0C87BE] font-medium text-[28px] mb-10">
                            Tools and Platforms
                        </h3>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-[#0C87BE] font-medium text-[20px] mb-3">Mobile Apps</h4>
                                <p className="text-[#0C87BE] text-[14px] leading-relaxed font-light text-justify">
                                    We collect data offline or in real-time with features like geo-tagging, time-stamping, and multimedia inputs.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-[#0C87BE] font-medium text-[20px] mb-3">Data Cleaning and Analysis</h4>
                                <p className="text-[#0C87BE] text-[14px] leading-relaxed font-light text-justify">
                                    We used latest tools like SPSS, Atlas.ti, etc for carrying out data cleaning and analysis for generating actionable insights.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-[#0C87BE] font-medium text-[20px] mb-3">Interactive Dashboards</h4>
                                <p className="text-[#0C87BE] text-[14px] leading-relaxed font-light text-justify">
                                    We help you visualise programme reach with geo-tagged maps, dynamic charts, and customisable filters.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Center Column: Icons - Desktop */}
                    <div
                        className="flex flex-col justify-between items-center py-12 px-6 relative z-10 w-[272px] self-stretch overflow-hidden"
                        style={{
                            background: `linear-gradient(101.12deg, #121E26CC 0%, #0C87BE80 155.44%),
                                         linear-gradient(101.12deg, rgba(24, 134, 40, 0.5) 0%, #6BC778 155.44%)`
                        }}
                    >
                        <div className="flex-1 flex flex-col justify-between items-center h-full w-full gap-8">
                            {/* Icon 1: Line Chart */}
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.57153 3.99976V35.9998H36.5715" stroke="white" strokeWidth="2.85714" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10.5715 18.3331L17.0715 24.9998L27.4715 8.99976L36.5715 15.6664" stroke="white" strokeWidth="2.85714" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            {/* Icon 2: Shield/Check */}
                            <svg width="40" height="40" viewBox="0 90 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 107.362C5 102.032 5 99.3666 5.63 98.4699C6.25833 97.5749 8.76333 96.7166 13.775 95.0016L14.73 94.6749C17.3417 93.7799 18.6467 93.3333 20 93.3333C21.3533 93.3333 22.6583 93.7799 25.27 94.6749L26.225 95.0016C31.2367 96.7166 33.7417 97.5749 34.37 98.4699C35 99.3666 35 102.033 35 107.362V109.985C35 119.382 27.935 123.943 23.5017 125.878C22.3 126.403 21.7 126.667 20 126.667C18.3 126.667 17.7 126.403 16.4983 125.878C12.065 123.942 5 119.383 5 109.985V107.362Z" stroke="white" strokeWidth="2.5" />
                                <path d="M26.6666 109.25L20.9999 105C20.7114 104.783 20.3605 104.667 19.9999 104.667C19.6393 104.667 19.2884 104.783 18.9999 105L13.3333 109.25M23.3333 113.417L19.9999 110.917L16.6666 113.417" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            {/* Icon 3: Zap/Doc */}
                            <svg width="40" height="40" viewBox="0 180 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.1788 204.542H18.9785V213.351C18.9785 214.176 18.9785 214.879 19.0337 215.383C19.0623 215.635 19.1134 215.934 19.2381 216.2C19.3215 216.392 19.4504 216.562 19.6144 216.696C19.7785 216.83 19.973 216.926 20.1822 216.974C20.3932 217.015 20.6112 217.007 20.8186 216.952C21.0259 216.896 21.2168 216.794 21.3757 216.654C21.5893 216.462 21.7713 216.24 21.9152 215.995C22.185 215.56 22.4895 214.923 22.8492 214.174L22.8778 214.117L28.4569 202.469L28.4937 202.396C29.068 201.197 29.5482 200.196 29.7976 199.381C30.0551 198.532 30.1409 197.642 29.6034 196.826C29.0659 196.013 28.1913 195.715 27.2859 195.584C26.4153 195.46 25.2729 195.46 23.9057 195.46H21.0222V186.651C21.0222 185.825 21.0222 185.122 20.967 184.619C20.9424 184.338 20.8735 184.062 20.7626 183.802C20.6793 183.61 20.5503 183.44 20.3863 183.306C20.2222 183.171 20.0277 183.076 19.8185 183.028C19.6076 182.985 19.3891 182.992 19.1815 183.047C18.9738 183.103 18.783 183.206 18.625 183.348C18.4114 183.539 18.2295 183.762 18.0855 184.007C17.8157 184.441 17.5112 185.079 17.1515 185.827L17.1229 185.884L11.5438 197.533L11.507 197.606C10.9327 198.804 10.4525 199.805 10.2032 200.621C9.94566 201.47 9.85778 202.36 10.3973 203.176C10.9348 203.989 11.8095 204.287 12.7148 204.417C13.5854 204.542 14.7278 204.542 16.095 204.542H16.1788Z" stroke="white" strokeWidth="1.66667" />
                            </svg>

                            {/* Icon 4: Pie/Time */}
                            <svg width="40" height="40" viewBox="0 270 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M35.6976 294.205C34.9597 296.96 33.5094 299.473 31.4926 301.49C29.4757 303.508 26.9634 304.959 24.2081 305.697C21.4528 306.436 18.5516 306.436 15.7962 305.698C13.0408 304.96 10.5282 303.509 8.51097 301.493C6.49377 299.476 5.04305 296.963 4.30462 294.208C3.5662 291.453 3.5661 288.551 4.30433 285.796C5.04256 283.041 6.49311 280.528 8.51017 278.511C10.5272 276.494 13.0397 275.043 15.7951 274.305M36.2501 290C36.2501 285.69 34.5381 281.557 31.4906 278.51C28.4431 275.462 24.3099 273.75 20.0001 273.75V288.75C20.0001 289.082 20.1318 289.399 20.3662 289.634C20.6006 289.868 20.9186 290 21.2501 290H36.2501Z" stroke="white" strokeWidth="2.5" />
                            </svg>

                            {/* Icon 5: Layers */}
                            <svg width="40" height="40" viewBox="0 360 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.66675 363.333H20.0001C21.3262 363.333 22.5979 363.86 23.5356 364.798C24.4733 365.735 25.0001 367.007 25.0001 368.333V373.333H30.0001C31.3262 373.333 32.5979 373.86 33.5356 374.798C34.4733 375.735 35.0001 377.007 35.0001 378.333V391.667C35.0001 392.993 34.4733 394.264 33.5356 395.202C32.5979 396.14 31.3262 396.667 30.0001 396.667H16.6667C15.3407 396.667 14.0689 396.14 13.1312 395.202C12.1935 394.264 11.6667 392.993 11.6667 391.667V386.667H6.66675C5.34067 386.667 4.0689 386.14 3.13121 385.202C2.19353 384.264 1.66675 382.993 1.66675 381.667V368.333C1.66675 367.007 2.19353 365.735 3.13121 364.798C4.0689 363.86 5.34067 363.333 6.66675 363.333ZM25.0001 381.667C25.0001 382.993 24.4733 384.264 23.5356 385.202C22.5979 386.14 21.3262 386.667 20.0001 386.667H13.3334V391.667C13.3334 392.551 13.6846 393.398 14.3097 394.024C14.9348 394.649 15.7827 395 16.6667 395H30.0001C30.8841 395 31.732 394.649 32.3571 394.024C32.9822 393.398 33.3334 392.551 33.3334 391.667V378.333C33.3334 377.449 32.9822 376.601 32.3571 375.976C31.732 375.351 30.8841 375 30.0001 375H25.0001V381.667ZM6.66675 365C5.78269 365 4.93485 365.351 4.30973 365.976C3.6846 366.601 3.33341 367.449 3.33341 368.333V381.667C3.33341 382.551 3.6846 383.398 4.30973 384.024C4.93485 384.649 5.78269 385 6.66675 385H11.6667V378.333C11.6667 377.007 12.1935 375.735 13.1312 374.798C14.0689 373.86 15.3407 373.333 16.6667 373.333H23.3334V368.333C23.3334 367.449 22.9822 366.601 22.3571 365.976C21.732 365.351 20.8841 365 20.0001 365H6.66675ZM20.0001 385C20.8841 385 21.732 384.649 22.3571 384.024C22.9822 383.398 23.3334 382.551 23.3334 381.667V375H16.6667C15.7827 375 14.9348 375.351 14.3097 375.976C13.6846 376.601 13.3334 377.449 13.3334 378.333V385H20.0001Z" fill="white" />
                            </svg>
                        </div>
                    </div>

                    {/* Right Card: Benefits */}
                    <div
                        className="flex-1 min-w-[487px] max-w-[487px] p-12 border-[3px] border-[#228B22] z-20 font-poppins rounded-[20px] bg-white h-[598px]"
                    >
                        <h3 className="text-[#228B22] font-medium text-[28px] mb-10">
                            Benefits
                        </h3>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-[#228B22] font-medium text-[20px] mb-3">Accurate Data</h4>
                                <p className="text-[#228B22] text-[14px] leading-relaxed font-light text-justify">
                                    Minimise errors with automated validations and centralised repositories.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-[#228B22] font-medium text-[20px] mb-3">Faster Decisions</h4>
                                <p className="text-[#228B22] text-[14px] leading-relaxed font-light text-justify">
                                    Access real-time insights to drive targeted interventions.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-[#228B22] font-medium text-[20px] mb-3">Transparent Reporting</h4>
                                <p className="text-[#228B22] text-[14px] leading-relaxed font-light text-justify">
                                    Showcase impact with visually engaging, stakeholder-friendly dashboards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden w-11/12 mx-auto flex flex-col gap-0 mt-6">
                    {/* Top Card: Tools and Platforms */}
                    <div className="w-full p-8 border-[3px] border-[#0C87BE] z-20 font-poppins rounded-t-[20px] bg-white">
                        <h3 className="text-[#0C87BE] font-medium text-2xl mb-10">
                            Tools and Platforms
                        </h3>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-[#0C87BE] font-medium text-[20px] mb-3">Mobile Apps</h4>
                                <p className="text-[#0C87BE] text-[14px] leading-relaxed font-light text-justify">
                                    We collect data offline or in real-time with features like geo-tagging, time-stamping, and multimedia inputs.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-[#0C87BE] font-medium text-[20px] mb-3">Data Cleaning and Analysis</h4>
                                <p className="text-[#0C87BE] text-[14px] leading-relaxed font-light text-justify">
                                    We used latest tools like SPSS, Atlas.ti, etc for carrying out data cleaning and analysis for generating actionable insights.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-[#0C87BE] font-medium text-[20px] mb-3">Interactive Dashboards</h4>
                                <p className="text-[#0C87BE] text-[14px] leading-relaxed font-light text-justify">
                                    We help you visualise programme reach with geo-tagged maps, dynamic charts, and customisable filters.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Middle Section: Background Image with Icons */}
                    <div
                        className="relative w-full h-[100px] flex items-center justify-center z-10"
                        style={{
                            backgroundImage: `linear-gradient(0deg, rgba(24, 134, 40, 0.3), rgba(107, 199, 120, 0.6)), url(${bgImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        {/* Icons Row */}
                        <div
                            className="flex flex-row justify-around items-center w-full h-full px-4"
                            style={{
                                background: `linear-gradient(101.12deg, #121E26CC 0%, #0C87BE80 155.44%),
                                             linear-gradient(101.12deg, rgba(24, 134, 40, 0.5) 0%, #6BC778 155.44%)`
                            }}
                        >
                            {/* Icon 1: Line Chart */}
                            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.57153 3.99976V35.9998H36.5715" stroke="white" strokeWidth="2.85714" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10.5715 18.3331L17.0715 24.9998L27.4715 8.99976L36.5715 15.6664" stroke="white" strokeWidth="2.85714" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            {/* Icon 2: Shield/Check */}
                            <svg width="32" height="32" viewBox="0 90 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 107.362C5 102.032 5 99.3666 5.63 98.4699C6.25833 97.5749 8.76333 96.7166 13.775 95.0016L14.73 94.6749C17.3417 93.7799 18.6467 93.3333 20 93.3333C21.3533 93.3333 22.6583 93.7799 25.27 94.6749L26.225 95.0016C31.2367 96.7166 33.7417 97.5749 34.37 98.4699C35 99.3666 35 102.033 35 107.362V109.985C35 119.382 27.935 123.943 23.5017 125.878C22.3 126.403 21.7 126.667 20 126.667C18.3 126.667 17.7 126.403 16.4983 125.878C12.065 123.942 5 119.383 5 109.985V107.362Z" stroke="white" strokeWidth="2.5" />
                                <path d="M26.6666 109.25L20.9999 105C20.7114 104.783 20.3605 104.667 19.9999 104.667C19.6393 104.667 19.2884 104.783 18.9999 105L13.3333 109.25M23.3333 113.417L19.9999 110.917L16.6666 113.417" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            {/* Icon 3: Zap/Doc */}
                            <svg width="32" height="32" viewBox="0 180 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.1788 204.542H18.9785V213.351C18.9785 214.176 18.9785 214.879 19.0337 215.383C19.0623 215.635 19.1134 215.934 19.2381 216.2C19.3215 216.392 19.4504 216.562 19.6144 216.696C19.7785 216.83 19.973 216.926 20.1822 216.974C20.3932 217.015 20.6112 217.007 20.8186 216.952C21.0259 216.896 21.2168 216.794 21.3757 216.654C21.5893 216.462 21.7713 216.24 21.9152 215.995C22.185 215.56 22.4895 214.923 22.8492 214.174L22.8778 214.117L28.4569 202.469L28.4937 202.396C29.068 201.197 29.5482 200.196 29.7976 199.381C30.0551 198.532 30.1409 197.642 29.6034 196.826C29.0659 196.013 28.1913 195.715 27.2859 195.584C26.4153 195.46 25.2729 195.46 23.9057 195.46H21.0222V186.651C21.0222 185.825 21.0222 185.122 20.967 184.619C20.9424 184.338 20.8735 184.062 20.7626 183.802C20.6793 183.61 20.5503 183.44 20.3863 183.306C20.2222 183.171 20.0277 183.076 19.8185 183.028C19.6076 182.985 19.3891 182.992 19.1815 183.047C18.9738 183.103 18.783 183.206 18.625 183.348C18.4114 183.539 18.2295 183.762 18.0855 184.007C17.8157 184.441 17.5112 185.079 17.1515 185.827L17.1229 185.884L11.5438 197.533L11.507 197.606C10.9327 198.804 10.4525 199.805 10.2032 200.621C9.94566 201.47 9.85778 202.36 10.3973 203.176C10.9348 203.989 11.8095 204.287 12.7148 204.417C13.5854 204.542 14.7278 204.542 16.095 204.542H16.1788Z" stroke="white" strokeWidth="1.66667" />
                            </svg>

                            {/* Icon 4: Pie/Time */}
                            <svg width="32" height="32" viewBox="0 270 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M35.6976 294.205C34.9597 296.96 33.5094 299.473 31.4926 301.49C29.4757 303.508 26.9634 304.959 24.2081 305.697C21.4528 306.436 18.5516 306.436 15.7962 305.698C13.0408 304.96 10.5282 303.509 8.51097 301.493C6.49377 299.476 5.04305 296.963 4.30462 294.208C3.5662 291.453 3.5661 288.551 4.30433 285.796C5.04256 283.041 6.49311 280.528 8.51017 278.511C10.5272 276.494 13.0397 275.043 15.7951 274.305M36.2501 290C36.2501 285.69 34.5381 281.557 31.4906 278.51C28.4431 275.462 24.3099 273.75 20.0001 273.75V288.75C20.0001 289.082 20.1318 289.399 20.3662 289.634C20.6006 289.868 20.9186 290 21.2501 290H36.2501Z" stroke="white" strokeWidth="2.5" />
                            </svg>

                            {/* Icon 5: Layers */}
                            <svg width="32" height="32" viewBox="0 360 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.66675 363.333H20.0001C21.3262 363.333 22.5979 363.86 23.5356 364.798C24.4733 365.735 25.0001 367.007 25.0001 368.333V373.333H30.0001C31.3262 373.333 32.5979 373.86 33.5356 374.798C34.4733 375.735 35.0001 377.007 35.0001 378.333V391.667C35.0001 392.993 34.4733 394.264 33.5356 395.202C32.5979 396.14 31.3262 396.667 30.0001 396.667H16.6667C15.3407 396.667 14.0689 396.14 13.1312 395.202C12.1935 394.264 11.6667 392.993 11.6667 391.667V386.667H6.66675C5.34067 386.667 4.0689 386.14 3.13121 385.202C2.19353 384.264 1.66675 382.993 1.66675 381.667V368.333C1.66675 367.007 2.19353 365.735 3.13121 364.798C4.0689 363.86 5.34067 363.333 6.66675 363.333ZM25.0001 381.667C25.0001 382.993 24.4733 384.264 23.5356 385.202C22.5979 386.14 21.3262 386.667 20.0001 386.667H13.3334V391.667C13.3334 392.551 13.6846 393.398 14.3097 394.024C14.9348 394.649 15.7827 395 16.6667 395H30.0001C30.8841 395 31.732 394.649 32.3571 394.024C32.9822 393.398 33.3334 392.551 33.3334 391.667V378.333C33.3334 377.449 32.9822 376.601 32.3571 375.976C31.732 375.351 30.8841 375 30.0001 375H25.0001V381.667ZM6.66675 365C5.78269 365 4.93485 365.351 4.30973 365.976C3.6846 366.601 3.33341 367.449 3.33341 368.333V381.667C3.33341 382.551 3.6846 383.398 4.30973 384.024C4.93485 384.649 5.78269 385 6.66675 385H11.6667V378.333C11.6667 377.007 12.1935 375.735 13.1312 374.798C14.0689 373.86 15.3407 373.333 16.6667 373.333H23.3334V368.333C23.3334 367.449 22.9822 366.601 22.3571 365.976C21.732 365.351 20.8841 365 20.0001 365H6.66675ZM20.0001 385C20.8841 385 21.732 384.649 22.3571 384.024C22.9822 383.398 23.3334 382.551 23.3334 381.667V375H16.6667C15.7827 375 14.9348 375.351 14.3097 375.976C13.6846 376.601 13.3334 377.449 13.3334 378.333V385H20.0001Z" fill="white" />
                            </svg>
                        </div>
                    </div>

                    {/* Bottom Card: Benefits */}
                    <div className="w-full p-8 border-[3px] border-[#228B22] z-20 font-poppins rounded-b-[20px] bg-white">
                        <h3 className="text-[#228B22] font-medium text-2xl mb-10">
                            Benefits
                        </h3>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-[#228B22] font-medium text-[20px] mb-3">Accurate Data</h4>
                                <p className="text-[#228B22] text-[14px] leading-relaxed font-light text-justify">
                                    Minimise errors with automated validations and centralised repositories.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-[#228B22] font-medium text-[20px] mb-3">Faster Decisions</h4>
                                <p className="text-[#228B22] text-[14px] leading-relaxed font-light text-justify">
                                    Access real-time insights to drive targeted interventions.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-[#228B22] font-medium text-[20px] mb-3">Transparent Reporting</h4>
                                <p className="text-[#228B22] text-[14px] leading-relaxed font-light text-justify">
                                    Showcase impact with visually engaging, stakeholder-friendly dashboards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologyIntegration;
