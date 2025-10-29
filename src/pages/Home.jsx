import React from "react";
import Header from "../components/Header";
import IntroSection from "../components/IntroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import SkillsSection from "../components/SkillsSection";
import ProjectSection from "../components/ProjectSection";
import ReviewSection from "../components/ReviewSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col gap-5 lg:gap-28">
      <Header />
      <div className="flex flex-col gap-23">
        <div className="px-8 sm:px-12 lg:px-17 py-2 sm:py-4 lg:py-7">
          <IntroSection />
        </div>
        <div className="px-8 sm:px-12 lg:px-17 py-2 sm:py-4 lg:py-7  ">
          <AboutSection />
        </div>
        <div className="px-8 sm:px-12 lg:px-17 py-2 sm:py-4 lg:py-7  ">
          <ServicesSection />
        </div>
        <div className="px-8 sm:px-12 lg:px-17 py-2 sm:py-4 lg:py-7  ">
          <SkillsSection />
        </div>
        <div className="px-8 sm:px-12 lg:px-17 py-2 sm:py-4 lg:py-7  ">
          <ProjectSection />
        </div>
        <div className="px-8 sm:px-12 lg:px-17 py-2 sm:py-4 lg:py-7  ">
          <ReviewSection />
        </div>
        <div className="px-8 sm:px-12 lg:px-17 py-2 sm:py-4 lg:py-7  ">
          <ContactSection />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
//  bg-[linear-gradient(to_bottom_left,_rgba(232,23,219,0.3)_0%,_#241b45_60%,_rgba(232,23,219,0.3)_100%)]
