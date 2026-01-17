import React from 'react';

const AboutDescription: React.FC = () => {
  return (
    <section className="w-full pt-8 pb-[60px] md:pt-10 md:pb-[100px] bg-white flex justify-center">
      <div className="w-full max-w-[702px] px-6 md:px-0 mx-auto">
        <p className="font-light text-[14px] md:text-[16px] leading-relaxed tracking-normal text-[#123042] text-justify font-poppins">
          We are a boutique advisory firm specialising in impact measurement. Our mission is to empower organisations to develop measurable and sustainable impact metrics, becoming their trusted partner in driving transformative change. So far, we have assessed over 40 organisations and bring a collective experience of more than 33 years.
        </p>
      </div>
    </section>
  );
};

export default AboutDescription;