"use client";

import React, { useLayoutEffect } from "react";
import { motion, Variants, easeOut } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Banner from "../../components/Banner";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import "../styles/home.css";

const jobListings = [
  { id: "01", title: "Web Project Manager", color: "bg-lime-500" },
  { id: "02", title: "Content Strategist", color: "bg-blue-500" },
  { id: "03", title: "Social Media Manager", color: "bg-blue-500" },
  { id: "04", title: "Data Analyst", color: "bg-blue-500" },
];

const CareerClient = () => {
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
          tagline="Careers"
          heading="Join Our Team and Grow Your Career"
          highlightedText="with Us."
          description="Discover exciting opportunities to work with innovative technologies, collaborate with talented professionals, and build your future at Webxkey."
          imageSrc="/Images/Career1.webp"
          imageAlt="Webxkey Career Opportunities"
        />

        {/* Company Description Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
          className="mb-16"
        >
          {/* Tag with Animation */}
          <motion.div
            className="mt-4 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold 
                      backdrop-blur-md bg-indigo-600/30 border border-indigo-400/30 
                      shadow-lg shadow-indigo-500/20 text-white"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="text-3xl"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                🪐
              </motion.span>{" "}
              INCLUSIVE TEAM
            </motion.span>
          </motion.div>

          {/* Main Content */}
          <motion.p
            className="mt-6 text-3xl md:text-4xl font-semibold text-white text-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span
              className="text-green-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Webxkey
            </motion.span>{" "}
            was born out of a desire to create lasting digital experiences with{" "}
            <motion.span
              className="text-green-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              exceptional usability.
            </motion.span>
          </motion.p>

          {/* Description - Single column */}
          <motion.div
            className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed space-y-6 text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              At Webxkey, we&apos;re a dynamic team of passionate{" "}
              <span className="font-semibold text-white">
                developers, designers, and freelancers
              </span>{" "}
              dedicated to delivering cutting-edge web solutions. We believe in
              innovation, creativity, and collaboration to create exceptional user
              experiences that drive success for our clients.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              As a growing company, we are always on the lookout for talented
              individuals who are excited about shaping the future of web design,
              development, SEO, and app development. If you&apos;re driven by a
              passion for technology and want to work in an environment that fosters
              creativity and growth, Webxkey is the place for you!
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Job Listings Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="mb-16"
        >
          {/* Job Listings Tag */}
          <motion.div
            className="text-center mb-8"
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
                      backdrop-blur-md bg-pink-600/30 border border-pink-400/30 
                      shadow-lg shadow-pink-500/20 text-white"
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
                💼
              </motion.span>{" "}
              OPEN POSITIONS
            </motion.span>
          </motion.div>

          {/* Job Listings */}
          <motion.div
            className="space-y-6 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              staggerChildren: 0.15,
              delayChildren: 0.6,
            }}
            viewport={{ once: false, amount: 0.1 }}
          >
            {jobListings.map((job, index) => (
              <motion.div
                key={job.id}
                className="flex justify-between items-center bg-gray-800 p-6 rounded-lg text-white border border-gray-700/50"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                  borderColor: "rgba(59, 130, 246, 0.5)",
                }}
              >
                <div className="group">
                  <span className="text-gray-400 text-sm">{job.id}</span>
                  <div className="flex items-center">
                    <motion.h2
                      className="text-2xl font-semibold mt-2 hover:text-green-400 transition-colors duration-300 cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      {job.title}
                    </motion.h2>
                  </div>
                  <motion.span
                    className="mt-2 inline-flex items-center px-3 py-1 bg-pink-500 text-white rounded-full text-sm font-semibold"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      delay: 0.2,
                      stiffness: 200,
                    }}
                  >
                    🔵 Full-time
                  </motion.span>
                </div>
                <motion.div
                  whileHover={{
                    x: 5,
                    color: "#4ade80",
                  }}
                  transition={{ type: "spring" }}
                >
                  <FaArrowRight className="text-white text-xl cursor-pointer" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Why Join Us Section */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center justify-center min-h-[50vh] bg-transparent text-white px-4 py-8 md:py-16 mb-16"
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              className="inline-flex items-center px-4 py-0 rounded-full text-sm font-semibold 
                      backdrop-blur-md bg-green-600/30 border border-green-400/30 
                      shadow-lg shadow-green-500/20 text-white mb-6"
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
                ⭐
              </motion.span>{" "}
              WHY JOIN WEBXKEY?
            </motion.div>
            
            <motion.h3 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Grow With Us
            </motion.h3>
            
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Join a team that values innovation, collaboration, and personal growth. 
              At Webxkey, you&apos;ll work on exciting projects, learn from industry experts, 
              and have the opportunity to shape your career path while making a real impact 
              in the digital world.
            </motion.p>
          </div>
        </motion.section>
      </div>
      <Banner />
    </div>
  );
};

export default CareerClient;