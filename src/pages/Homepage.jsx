import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import CommunitySection from '../components/CommunitySection';
import FAQSection from '../components/FAQSection';
import FooterHome from '../components/FooterHome';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      <Navbar />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <CommunitySection />
        <FAQSection />
        
      </main>

      <FooterHome />
    </div>
  );
};

export default HomePage;