import React from 'react';
import { workServices } from '../../data/ourWorkData';
import WorkCard from './WorkCard';

const OurWorkGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {workServices.map((service) => (
                <WorkCard key={service.id} service={service} />
            ))}
        </div>
    );
};

export default OurWorkGrid;
