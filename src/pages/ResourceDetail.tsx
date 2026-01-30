import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getResource, type ResourceDB } from '../lib/resources';
import { formatDate } from '../lib/utils';

const ResourceDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [resource, setResource] = useState<ResourceDB | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchResource = async () => {
      if (!id) {
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const data = await getResource(id);
        setResource(data);
      } catch (error) {
        console.error("Error fetching resource:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResource();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123042]"></div>
      </div>
    );
  }

  if (!resource) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-700">Resource not found</h2>
        <button onClick={() => navigate('/resources')} className="mt-4 text-[#0C87BE] hover:underline">
          Back to Resources
        </button>
      </div>
    );
  }

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
                src={resource.coverImage || 'https://placehold.co/800x600?text=No+Image'}
                alt={resource.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content Right */}
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">

              {/* Author | Date */}
              <div className="flex items-center gap-2 mb-4 text-[14px] font-medium text-[#0C87BE]">
                <span>{resource.author}</span>
                <span>|</span>
                <span>{formatDate(resource.date)}</span>
              </div>

              {/* Title */}
              <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold text-[#123042] leading-tight">
                {resource.title}
              </h1>
            </div>
          </div>
        </div>
      </div>


      {/* Content Sections */}
      <div className="container mx-auto px-8 md:px-4 max-w-[841px] pb-20">
        <div
          className="prose prose-lg prose-slate max-w-none font-poppins font-light text-[#123042] text-[16px] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: resource.content }}
        />
      </div>

    </div>
  );
};

export default ResourceDetail;