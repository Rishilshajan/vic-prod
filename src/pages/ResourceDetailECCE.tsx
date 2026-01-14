import { useNavigate } from "react-router-dom";
import Resource3 from '../assets/Resource3.png';

const ResourceDetailECCE = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white font-poppins">

      {/* Back Button – OUTSIDE content */}
      <div className="container mx-auto px-4 pt-8 flex justify-center">
        <div className="w-full max-w-[1190px]">
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

      {/* Page Content */}
      <div className="container mx-auto px-4 py-8">

        {/* Hero Section */}
        <div className="max-w-[1247px] mx-auto rounded-[30px] p-[3px] bg-gradient-to-r from-[#C45ABA] to-[#0C87BE]">
          <div className="bg-white rounded-[27px] flex flex-col md:flex-row h-full overflow-hidden md:h-[329px]">

            {/* Image */}
            <div className="md:w-1/3 h-full">
              <img
                src={Resource3}
                alt="ECCE Anganwadi"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Hero Text */}
            <div className="md:w-2/3 p-8 flex flex-col justify-center">
              <p className="text-sm text-[#0C87BE] mb-2">
                Tobey Marshall | 4th July 2025
              </p>

              <h1 className="text-[40px] font-medium text-black leading-[100%]">
                Early Childhood Care and Education (ECCE) and the Role of Anganwadis
              </h1>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mt-12">

          <h2 className="text-xl font-bold text-black mb-4">
            Project Background
          </h2>

          <p className="text-[#123042] leading-relaxed mb-6">
            The early years of a child's life are incredibly important; they lay
            the foundation for lifelong learning, health, and well-being. In
            India, Early Childhood Care and Education (ECCE) under the Integrated
            Child Development Services (ICDS) is designed to support this crucial
            phase.ECCE combines care, nutrition, health, play, and early learning
            to ensure children grow up in safe, nurturing, and stimulating
            environments.The focus of ECCE evolves with the age of the child:


          </p>

          <ul className="list-disc list-inside text-[#123042] mb-6 space-y-2">
            <li>
              From birth to 3 years, the emphasis is on care, stimulation, and
              responsive interaction.
            </li>
            <li>
              From 3 to 6 years, it shifts to early learning, structured play, and
              school readiness.
            </li>
          </ul>

          <p className="text-[#123042] leading-relaxed mb-8">
            Anganwadi Centres play a vital role in delivering ECCE in India.
            These community-based centres support children aged 0–6 with
            nutrition, healthcare, and pre-school education. With 13.99 lakh
            Anganwadi Centres currently operating across 36 States/UTs and 781
            districts, they form the backbone of India’s early childhood support
            system. The National Education Policy 2020 sets a clear vision: by
            2030, all children entering Grade 1 should be school-ready, and a
            strengthened Anganwadi network is key to achieving this.
          </p>

          <h2 className="text-xl font-bold text-black mb-4">
            Yuva Unstoppable – Transforming Anganwadis for a Brighter Future
          </h2>

          <p className="text-[#123042] leading-relaxed mb-6">
            At Yuva Unstoppable, Anganwadi Transformation Program is designed to turn
            existing centres into vibrant spaces where children can learn, grow, and thrive.
            Aligned with the government’s Saksham Anganwadi and Poshan 2.0 guidelines. The
            programme is bringing about lasting change across the Anganwadi of the states of
            Gujarat and Uttar Pradesh.
          </p>

          <p className="text-[#123042] leading-relaxed mb-8">
            The programme focused on transforming 65 Anganwadi Centres with the support of
            CSR funding. This partnership aims to improve not just the infrastructure but the
            overall experience for children, parents, and Anganwadi workers.
          </p>

          <h2 className="text-xl font-bold text-black mb-4">
            What’s Changing on the Ground
          </h2>

          <p className="text-[#123042] leading-relaxed mb-6">
            The transformation efforts are practical, meaningful,and tailored to
            the specific needs of Anganwadi Centres and the children they serve.
            Key upgrades include the renovation of infrastructure with separate,
            hygienic toilets for boys and girls, access to safe drinking water, and
            dedicated handwashing stations. To create a more engaging and supportive learning
            environment, the centres have also been equipped with bright, child-friendly furniture,
            educational and play materials, upgraded kitchen facilities, and improved storage
            solutions to ensure cleanliness and organisation.
          </p>

          <blockquote className="border-l-4 border-black pl-4 italic text-[#123042]">
            “We used to avoid sending our child to the Anganwadi because the centre was not well-maintained,
            and nothing much happened there. We only visited to collect supplies. But now, the centre has
            become beautiful, and everything is available—tools for measuring height, weighing scales, and
            play materials.” — Parent of an Anganwadi Student.The Anganwadi Transformation Program is more than
            a commitment to aligning with the goals of ECCE and responding directly to community needs.
          </blockquote>

        </div>
      </div>
    </div>
  );
};

export default ResourceDetailECCE;
