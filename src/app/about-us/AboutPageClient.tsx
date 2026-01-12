"use client";

import React, { useLayoutEffect } from "react";
import "../styles/home.css";
import { motion, Variants, easeOut } from "framer-motion";
import Banner from "../../components/Banner";
import DigitalBrandSection from "../../components/DigitalBrandSection";
import Vision from "../../components/Vision";
import TeamGrid from "../../components/layouts/TeamGrid";
import GridCardAbout from "../../components/layouts/GridCardAbout";
import CertificationsSection from "@/components/CertificationsSection";
import PageHeader from "@/components/PageHeader";

const AboutPageClient = () => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          tagline="About Us"
          heading="Join With"
          highlightedText="Webxkey"
          description="Discover the story behind Webxkey and meet the passionate team dedicated to creating exceptional digital experiences. With years of expertise in digital transformation, we help businesses thrive through innovative solutions, cutting-edge technology, and strategic insights that drive real results."
          imageSrc="/Images/about.png"
          imageAlt="Webxkey team working together"
        />

        <DigitalBrandSection />
        <GridCardAbout />

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Tag with Animation */}
          <motion.div
            className="mt-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.span
              className="inline-flex items-center px-4 py-0 rounded-full text-sm font-semibold 
                      backdrop-blur-md bg-indigo-600/30 border border-indigo-400/30 
                      shadow-lg shadow-indigo-500/20 text-white"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="text-xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                😎
              </motion.span>{" "}
              MEET OUR TEAM
            </motion.span>
          </motion.div>

         

          <TeamGrid />
        </motion.section>

        {/* VISION SECTION */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center justify-center h-[50vh] md:min-h-[50vh] bg-transparent text-white px-4 py-4 md:py-0"
        >
          <Vision />
        </motion.section>

        <CertificationsSection />
      </div>
      <Banner />
    </div>
  );
};

export default AboutPageClient;