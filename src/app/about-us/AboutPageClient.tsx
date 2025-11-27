"use client";

import React, { useLayoutEffect } from "react";
import "../styles/home.css";
import { motion, Variants, easeOut } from "framer-motion";
import Banner from "../../components/Banner";
import DigitalBrandSection from "../../components/DigitalBrandSection";
import Vision from "../../components/Vision";
import TeamGrid from "../../components/layouts/TeamGrid";
import GridCardAbout from "../../components/layouts/GridCardAbout";
import Image from "next/image";
import CertificationsSection from "@/components/CertificationsSection";

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
        {/* Header Section with Image */}
        <section className="my-[40px] md:my-[60px] relative">
          {/* Decorative elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Content on the left */}
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              {/* Tagline */}
              <motion.div
                className="inline-block bg-gradient-to-r from-[#013e84] to-[#0ea0c4] text-white font-semibold px-5 py-2 rounded-full shadow-lg"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                About Us
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                Join With{" "}
                <span className="text-transparent bg-gradient-to-r from-[#038ed3] to-[#72e3ff] bg-clip-text">
                  Webxkey
                </span>
              </motion.h2>

              {/* Supporting text */}
              <motion.p
                className="text-lg text-gray-300 max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                Discover the story behind Webxkey and meet the passionate team 
                dedicated to creating exceptional digital experiences.
              </motion.p>
            </div>

            {/* Image on the right with decorative shapes */}
            <div className="lg:w-1/2 relative">
              {/* Decorative shape behind image */}
              <div className="absolute -right-10 -top-10 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl -z-10"></div>
              <div className="absolute -left-10 -bottom-10 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl -z-10"></div>

              {/* Image container with modern styling */}
              <motion.div
                className="relative group"
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* Floating decorative elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400/20 rounded-xl rotate-45 -z-10"></div>
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-cyan-400/20 rounded-full -z-10"></div>

                {/* Main image with hover effects */}
                <div className="relative overflow-hidden rounded-2xl border border-gray-700/50 shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 -z-10"></div>
                  <Image
                    src="/Images/about.png"
                    alt="Webxkey team working together"
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500 brightness-90"
                    width={800}
                    height={600}
                    quality={85}
                    priority
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

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