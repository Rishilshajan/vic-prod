import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { teamMembers, type TeamMember } from '../data/teamData';
import BranchImg from '../assets/Branch.png';

// Social Icon Components
const FacebookIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12.06C22 6.53 17.5 2.05 12 2.05C6.5 2.05 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06Z" fill="#0C87BE" />
    </svg>
);

const InstagramIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8.75C11.138 8.75 10.3114 9.09241 9.7019 9.7019C9.09241 10.3114 8.75 11.138 8.75 12C8.75 12.862 9.09241 13.6886 9.7019 14.2981C10.3114 14.9076 11.138 15.25 12 15.25C12.862 15.25 13.6886 14.9076 14.2981 14.2981C14.9076 13.6886 15.25 12.862 15.25 12C15.25 11.138 14.9076 10.3114 14.2981 9.7019C13.6886 9.09241 12.862 8.75 12 8.75Z" fill="#0C87BE" />
        <path fillRule="evenodd" clipRule="evenodd" d="M6.77012 3.08177C10.2462 2.6967 13.7541 2.6967 17.2301 3.08177C19.1291 3.29377 20.6601 4.78877 20.8831 6.69477C21.2951 10.2194 21.2951 13.7801 20.8831 17.3048C20.6601 19.2108 19.1291 20.7058 17.2311 20.9188C13.7548 21.3039 10.2465 21.3039 6.77012 20.9188C4.87112 20.7058 3.34012 19.2108 3.11712 17.3058C2.7051 13.7808 2.7051 10.2198 3.11712 6.69477C3.34012 4.78877 4.87112 3.29377 6.77012 3.08177ZM17.0001 5.99977C16.7349 5.99977 16.4805 6.10513 16.293 6.29267C16.1055 6.4802 16.0001 6.73456 16.0001 6.99977C16.0001 7.26499 16.1055 7.51934 16.293 7.70688C16.4805 7.89441 16.7349 7.99977 17.0001 7.99977C17.2653 7.99977 17.5197 7.89441 17.7072 7.70688C17.8948 7.51934 18.0001 7.26499 18.0001 6.99977C18.0001 6.73456 17.8948 6.4802 17.7072 6.29267C17.5197 6.10513 17.2653 5.99977 17.0001 5.99977ZM7.25012 11.9998C7.25012 10.74 7.75056 9.53181 8.64136 8.64102C9.53216 7.75022 10.7403 7.24977 12.0001 7.24977C13.2599 7.24977 14.4681 7.75022 15.3589 8.64102C16.2497 9.53181 16.7501 10.74 16.7501 11.9998C16.7501 13.2596 16.2497 14.4677 15.3589 15.3585C14.4681 16.2493 13.2599 16.7498 12.0001 16.7498C10.7403 16.7498 9.53216 16.2493 8.64136 15.3585C7.75056 14.4677 7.25012 13.2596 7.25012 11.9998Z" fill="#0C87BE" />
    </svg>
);

const TwitterIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.71429 3C4.21719 3 3 4.21719 3 5.71429V19.2857C3 20.7828 4.21719 22 5.71429 22H19.2857C20.7828 22 22 20.7828 22 19.2857V5.71429C22 4.21719 20.7828 3 19.2857 3H5.71429ZM18.3145 6.5625L13.9123 11.5924L19.0906 18.4375H15.0362L11.8638 14.2855L8.22924 18.4375H6.21473L10.9223 13.0556L5.95603 6.5625H10.1123L12.9835 10.3583L16.3 6.5625H18.3145ZM16.7114 17.233L9.5058 7.70335H8.30558L15.5917 17.233H16.7071H16.7114Z" fill="#0C87BE" />
    </svg>
);

const LinkedInIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.7778 2C20.3671 2 20.9324 2.23413 21.3491 2.65087C21.7659 3.06762 22 3.63285 22 4.22222V19.7778C22 20.3671 21.7659 20.9324 21.3491 21.3491C20.9324 21.7659 20.3671 22 19.7778 22H4.22222C3.63285 22 3.06762 21.7659 2.65087 21.3491C2.23413 20.9324 2 20.3671 2 19.7778V4.22222C2 3.63285 2.23413 3.06762 2.65087 2.65087C3.06762 2.23413 3.63285 2 4.22222 2H19.7778ZM19.2222 19.2222V13.3333C19.2222 12.3727 18.8406 11.4513 18.1613 10.772C17.482 10.0927 16.5607 9.71111 15.6 9.71111C14.6556 9.71111 13.5556 10.2889 13.0222 11.1556V9.92222H9.92222V19.2222H13.0222V13.7444C13.0222 12.8889 13.7111 12.1889 14.5667 12.1889C14.9792 12.1889 15.3749 12.3528 15.6666 12.6445C15.9583 12.9362 16.1222 13.3319 16.1222 13.7444V19.2222H19.2222ZM6.31111 8.17778C6.80618 8.17778 7.28098 7.98111 7.63104 7.63104C7.98111 7.28098 8.17778 6.80618 8.17778 6.31111C8.17778 5.27778 7.34444 4.43333 6.31111 4.43333C5.81309 4.43333 5.33547 4.63117 4.98332 4.98332C4.63117 5.33547 4.43333 5.81309 4.43333 6.31111C4.43333 7.34444 5.27778 8.17778 6.31111 8.17778ZM7.85556 19.2222V9.92222H4.77778V19.2222H7.85556Z" fill="#0C87BE" />
    </svg>
);

const TeamMemberDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [member, setMember] = useState<TeamMember | null>(null);

    useEffect(() => {
        const found = teamMembers.find(m => m.id === id);
        if (found) {
            setMember(found);
        }
    }, [id]);

    if (!member) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    return (
        <main className="w-full relative bg-white pb-10 pt-[60px] lg:pt-[120px] overflow-hidden min-h-screen">
            <div className="container mx-auto px-4 lg:px-0 lg:ml-0 lg:max-w-none relative z-10">
                <div className="flex flex-col lg:flex-row items-start justify-center lg:justify-start mobile-stack-gap lg:gap-[137px] lg:pl-[204px]">


                    {/* Left Side: Image Card + Decor */}
                    <div className="relative shrink-0 mx-auto lg:mx-0 mt-[-6px] lg:mt-0 lg:-translate-x-6">
                        {/* Decorative Branch Image */}
                        <img
                            src={BranchImg}
                            alt="Decorative Branch"
                            className="absolute pointer-events-none z-0 lg:z-20 w-[688.13px] h-[823.99px] lg:w-[488.13px] lg:h-[623.99px] left-[calc(50%-380px)] top-[-200px] rotate-[40deg] lg:left-[-310px] lg:top-[-108.65px] lg:[transform:rotate(-163.21deg)_scaleY(-1)]"
                        />

                        {/* Card */}
                        <div
                            className="relative rounded-[30px] overflow-hidden shadow-xl z-10 w-full max-w-[300px] aspect-[337/450] mx-auto lg:mx-0 lg:w-[337px] lg:h-[501px] lg:max-w-none lg:aspect-auto"
                            style={{
                                backgroundColor: '#E2F4FC',
                            }}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover object-top"
                            />

                            {/* Name Overlay with Blur */}
                            <div
                                className="absolute bottom-0 left-0 w-full flex flex-col items-center justify-center text-center"
                                style={{
                                    width: '100%',
                                    height: '111px',
                                    background: 'linear-gradient(180deg, rgba(43, 43, 43, 0.1) 0%, rgba(43, 43, 43, 0.5) 100%)',
                                    backdropFilter: 'blur(26.3px)',
                                    WebkitBackdropFilter: 'blur(26.3px)',
                                    borderBottomRightRadius: '30px',
                                    borderBottomLeftRadius: '30px',
                                }}
                            >
                                <h1 className="text-white text-[24px] font-bold mb-0 font-poppins">{member.name}</h1>
                                <p className="text-white/90 text-[14px] font-light font-poppins">{member.role}</p>
                            </div>
                        </div>

                        {/* Social Icons below card */}
                        <div className="flex justify-center gap-[10px] mt-10 relative z-10">
                            <a href={member.facebook || "#"} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                <FacebookIcon />
                            </a>
                            <a href={member.instagram || "#"} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                <InstagramIcon />
                            </a>
                            <a href={member.twitter || "#"} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                <TwitterIcon />
                            </a>
                            <a href={member.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                <LinkedInIcon />
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="max-w-[500px] pt-10 lg:pt-[100px]">
                        {/* Education / Heading */}
                        {member.education && (
                            <h2 className="font-poppins font-light text-[16px] leading-[100%] text-[#123042] mb-6 whitespace-pre-line leading-relaxed">
                                {member.education}
                            </h2>
                        )}

                        {/* Bio */}
                        <div className="font-poppins font-light text-[16px] leading-[100%] text-[#123042] text-justify space-y-4">
                            {/* Handling pre-line for bio to respect newlines if necessary, or just p tags */}
                            {member.bio ? (
                                <p className="leading-relaxed">{member.bio}</p>
                            ) : (
                                <p>No biography available.</p>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default TeamMemberDetail;
