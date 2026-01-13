import React from 'react';
import { teamMembers } from '../../data/teamData';


const AboutTeam: React.FC = () => {
    return (
        <section className="w-full flex justify-center pt-0 pb-[120px]">
            <div className="container mx-auto px-4">
                <h2 className="font-semibold text-3xl md:text-[42px] text-[#123042] text-center mb-[100px]">
                    Our Team
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[45px] justify-items-center w-fit mx-auto">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-[#E2F4FC] rounded-[30px] flex flex-col items-center justify-center p-6 text-center hover:shadow-lg transition-shadow duration-300 shrink-0"
                            style={{ width: '337px', height: '501px' }}
                        >
                            {/* Image Circle */}
                            <div className="w-[150px] h-[150px] mb-6 rounded-full overflow-hidden border-4 border-white shadow-sm">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Name */}
                            <h3 className="font-semibold text-xl text-[#123042] mb-2">
                                {member.name}
                            </h3>

                            {/* Role */}
                            <p className="font-light text-sm text-[#123042]/70 mb-8 max-w-[200px] leading-tight">
                                {member.role}
                            </p>

                            {/* LinkedIn Icon */}
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition-opacity"
                                aria-label={`LinkedIn of ${member.name}`}
                            >
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.6667 3C30.5507 3 31.3986 3.35119 32.0237 3.97631C32.6488 4.60143 33 5.44928 33 6.33333V29.6667C33 30.5507 32.6488 31.3986 32.0237 32.0237C31.3986 32.6488 30.5507 33 29.6667 33H6.33333C5.44928 33 4.60143 32.6488 3.97631 32.0237C3.35119 31.3986 3 30.5507 3 29.6667V6.33333C3 5.44928 3.35119 4.60143 3.97631 3.97631C4.60143 3.35119 5.44928 3 6.33333 3H29.6667ZM28.8333 28.8333V20C28.8333 18.559 28.2609 17.177 27.2419 16.1581C26.223 15.1391 24.841 14.5667 23.4 14.5667C21.9833 14.5667 20.3333 15.4333 19.5333 16.7333V14.8833H14.8833V28.8333H19.5333V20.6167C19.5333 19.3333 20.5667 18.2833 21.85 18.2833C22.4688 18.2833 23.0623 18.5292 23.4999 18.9668C23.9375 19.4043 24.1833 19.9978 24.1833 20.6167V28.8333H28.8333ZM9.46667 12.2667C10.2093 12.2667 10.9215 11.9717 11.4466 11.4466C11.9717 10.9215 12.2667 10.2093 12.2667 9.46667C12.2667 7.91667 11.0167 6.65 9.46667 6.65C8.71964 6.65 8.00321 6.94675 7.47498 7.47498C6.94675 8.00321 6.65 8.71964 6.65 9.46667C6.65 11.0167 7.91667 12.2667 9.46667 12.2667ZM11.7833 28.8333V14.8833H7.16667V28.8333H11.7833Z" fill="#123042" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutTeam;
