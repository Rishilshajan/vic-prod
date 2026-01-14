import { Link } from "react-router-dom";

const ResourceDetailECCE = () => {
  return (
    <div className="w-full bg-[#F5F9FC]">

      {/* Back Button – OUTSIDE content */}
      <div className="container mx-auto px-4 pt-6">
        <Link
          to="/resources"
          className="inline-flex items-center text-[#14709F] text-sm hover:underline"
        >
          ← Back 
        </Link>
      </div>

      {/* Page Content */}
      <div className="container mx-auto px-4 py-8">

        {/* Hero Section */}
        <div className="max-w-6xl mx-auto bg-white border border-[#E5EEF5] rounded-xl p-6 flex flex-col md:flex-row gap-6">

          {/* Image */}
          <div className="md:w-1/3">
            <img
              src="/images/ecce.jpg"
              alt="ECCE Anganwadi"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Hero Text */}
          <div className="md:w-2/3">
            <p className="text-sm text-gray-500 mb-2">
              Tobey Marshall | 4th July 2025
            </p>

            <h1 className="text-2xl md:text-3xl font-bold text-black leading-snug">
              Early Childhood Care and Education (ECCE) and the Role of Anganwadis
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mt-12 bg-white rounded-xl p-8">

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
