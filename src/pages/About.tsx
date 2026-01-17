import React from 'react';
import AboutHero from '../components/About/AboutHero';
import AboutDescription from '../components/About/AboutDescription';
import AboutSectors from '../components/About/AboutSectors';
import AboutStats from '../components/About/AboutStats';
import AboutTeam from '../components/About/AboutTeam';

const About: React.FC = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <AboutHero />
      <AboutDescription />
      <AboutSectors />
      <AboutStats />
      <AboutTeam />
    </main>
  );
};

export default About;
