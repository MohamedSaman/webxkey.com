"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Banner from "../../components/Banner";
import Image from "next/image";
import "../styles/home.css";

const jobListings = [
  { id: "01", title: "Web Project Manager", color: "bg-lime-500" },
  { id: "02", title: "Content Strategist", color: "bg-blue-500" },
  { id: "03", title: "Social Media Manager", color: "bg-blue-500" },
  { id: "04", title: "Data Analyst", color: "bg-blue-500" },
];

const CareerClient = () => {
  return (
    <div className="overflow-x-hidden">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Careers
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Join Our Team and Grow{" "}
                <span className="text-transparent bg-gradient-to-r from-[#038ed3] to-[#72e3ff] bg-clip-text">
                  Your Career
                </span>{" "}
                with Us.
              </motion.h2>

              {/* Supporting text */}
              <motion.p
                className="text-lg text-gray-300 max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Discover exciting opportunities to work with innovative technologies, 
                collaborate with talented professionals, and build your future at Webxkey.
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
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
              >
                {/* Floating decorative elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400/20 rounded-xl rotate-45 -z-10"></div>
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-cyan-400/20 rounded-full -z-10"></div>

                {/* Main image with hover effects */}
                <div className="relative overflow-hidden rounded-2xl border border-gray-700/50 shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 -z-10"></div>
                  <Image
                    src="/Images/Career1.webp"
                    alt="Webxkey Career Opportunities"
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    width={800}
                    height={600}
                    quality={100}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tag */}
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
          className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed space-y-6 text-center"
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
            At Webxkey, we&#39;re a dynamic team of passionate{" "}
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
            development, SEO, and app development. If you&#39;re driven by a
            passion for technology and want to work in an environment that fosters
            creativity and growth, Webxkey is the place for you!
          </motion.p>
        </motion.div>

        {/* Job Listings */}
        <motion.div
          className="mt-10 space-y-6"
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
              className="flex justify-between items-center bg-gray-800 p-6 rounded-lg text-white"
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
      </div>
      <Banner />
    </div>
  );
};

export default CareerClient;