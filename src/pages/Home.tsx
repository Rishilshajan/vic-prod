import React from 'react';
import Hero from '../components/Home/Hero';
import VisionMissionValues from '../components/Home/VisionMissionValues';
import ProcessSection from '../components/Home/ProcessSection';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <VisionMissionValues />
      <ProcessSection />
    </main>
  );
};

export default Home;