import React from 'react';
import CareersHero from '../components/Careers/CareersHero';
import CareersValues from '../components/Careers/CareersValues';
import CareersForm from '../components/Careers/CareersForm';

const Careers: React.FC = () => {
    return (
        <div className="w-full bg-white">
            <CareersHero />

            <CareersValues />

            <CareersForm />
        </div>
    );
};

export default Careers;
