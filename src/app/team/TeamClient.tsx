"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import DigitalBrandSection from "../../components/DigitalBrandSection";
import Banner from "../../components/Banner";
import TeamGrid from "../../components/layouts/TeamGrid";
import PageHeader from "@/components/PageHeader";
import "../styles/home.css";

const TeamClient = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          tagline="Meet Our Team"
          heading="Our Team, Your Digital"
          highlightedText="Partner"
          description="Meet the talented professionals behind Webxkey who are dedicated to transforming your digital vision into reality with expertise and innovation."
          imageSrc="/Images/Team1.webp"
          imageAlt="Webxkey Team"
        />

        {/* Team Grid Section */}
        <TeamGrid />
        
        {/* Digital Brand Section */}
        <DigitalBrandSection />
        
        {/* Banner */}
        <Banner />
      </div>
    </div>
  );
};

export default TeamClient;