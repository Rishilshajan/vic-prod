import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { resourceDetailIFCData } from '../data/resourceDetailIFCData';
import RCRCImage from '../assets/Resource2.png';
import IFCMobileImage from '../assets/Resource_IFC_mobile.png';
import RCRCDesktopImage from '../assets/Resource_RCRC_Desktop.png';

const ResourceDetailIFC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white font-poppins text-[#123042] pb-24">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8 flex justify-center">
        <div className="hidden md:block w-full max-w-[1190px]">
          <button
            onClick={() => navigate('/resources')}
            className="flex items-center gap-[10px] text-[#0C87BE] font-medium text-[16px] transition-all hover:opacity-80"
            style={{
              width: '122px',
              height: '58px',
              borderRadius: '30px',
              padding: '21px 25px',
              backgroundColor: '#C8E5F2',
            }}
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
        {/*
            Gradient Border Layout:
            Outer div acts as the border (p-[3px]) with gradient background.
            Inner div is the white card.
        */}
        <div
          className="relative w-full max-w-[1247px] rounded-[30px] p-[3px]"
          style={{
            background: 'linear-gradient(232.11deg, rgba(10, 90, 138, 0.8) -36.66%, rgba(12, 135, 190, 0.5) 119.48%)'
          }}
        >
          <div className="w-full h-full bg-white rounded-[27px] overflow-hidden flex flex-col md:flex-row shadow-sm">

            {/* Image Left */}
            <div className="w-full md:w-[480px] lg:w-[500px] h-[300px] md:h-auto relative shrink-0">
              <img
                src={RCRCImage}
                alt={resourceDetailIFCData.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content Right */}
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">

              {/* Author | Date */}
              <div className="flex items-center gap-2 mb-4 text-[14px] font-medium text-[#0C87BE]">
                <span>{resourceDetailIFCData.author}</span>
                <span>|</span>
                <span>{resourceDetailIFCData.date}</span>
              </div>

              {/* Title */}
              <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold text-[#123042] leading-tight">
                {resourceDetailIFCData.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-8 md:px-4 max-w-[841px] space-y-[45px]">

        {resourceDetailIFCData.sections.map((section, index) => (
          <div key={index}>
            {/* Mobile Image for 'On ground story' section */}
            {section.heading === "On ground story" && (
              <>
                <div className="md:hidden w-full flex justify-center mb-8">
                  <img
                    src={IFCMobileImage}
                    alt="On ground story"
                    className="w-[308px] h-[125px] object-cover rounded-[25px]"
                  />
                </div>
                {/* Desktop Image for 'On ground story' section */}
                <div className="hidden md:flex w-full justify-center mb-8">
                  <img
                    src={RCRCDesktopImage}
                    alt="On ground story"
                    className="w-[841px] h-[342px] object-cover rounded-[25px]"
                  />
                </div>
              </>
            )}

            <h2 className="font-poppins font-semibold text-[#123042] text-[28px] md:text-[42px] leading-[100%] mb-8">
              {section.heading}
            </h2>
            <p className="font-poppins font-light text-[#123042] text-[16px] leading-relaxed text-left whitespace-pre-line">
              {section.content}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default ResourceDetailIFC;
