import { Link } from "react-router-dom";
import { resourceDetailIFCData } from "../data/resourceDetailIFCData";

const ResourceDetailIFC = () => {
  return (
    <div className="w-full bg-white">

      {/* Back Button (outside card, top-left) */}
      <div className="container mx-auto px-4 pt-6">
        <Link
          to="/resources"
          className="inline-flex items-center text-sm text-[#14709F] hover:underline"
        >
          ← Back
        </Link>
      </div>

      {/* Header Card */}
      <div className="container mx-auto px-4 mt-4">
        <div className="max-w-5xl mx-auto border border-[#BFD7E5] rounded-xl p-6 flex flex-col md:flex-row gap-6">

          {/* Image */}
          <img
            src={resourceDetailIFCData.image}
            alt={resourceDetailIFCData.title}
            className="w-full md:w-64 h-48 object-cover rounded-lg"
          />

          {/* Title Section */}
          <div className="flex flex-col justify-center">
            <p className="text-xs text-gray-500 mb-2">
              {resourceDetailIFCData.author} | {resourceDetailIFCData.date}
            </p>

            <h1 className="text-2xl md:text-3xl font-bold text-black leading-snug">
              {resourceDetailIFCData.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-10">
          {resourceDetailIFCData.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-lg font-bold text-black mb-3">
                {section.heading}
              </h2>
              <p className="text-[#123042] leading-relaxed mb-4">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResourceDetailIFC;
