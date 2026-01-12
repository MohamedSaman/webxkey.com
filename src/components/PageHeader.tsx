"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeaderProps {
  tagline: string;
  heading: string;
  highlightedText: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  tagline,
  heading,
  highlightedText,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <section className="my-[40px] md:my-[60px] relative min-h-[400px] md:min-h-[450px] lg:min-h-[400px]">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-12 h-full">
        {/* Content on the left */}
        <div className="lg:w-1/2 text-center lg:text-left flex flex-col justify-start">
          {/* Tagline */}
          <motion.div
            className="inline-block bg-gradient-to-r from-[#013e84] to-[#0ea0c4] text-white font-semibold px-5 py-2 rounded-full shadow-lg w-fit mx-auto lg:mx-0 mb-4"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {tagline}
          </motion.div>

          {/* Main Heading - Flexible height */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-4"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {heading}{" "}
            <span className="text-transparent bg-gradient-to-r from-[#038ed3] to-[#72e3ff] bg-clip-text">
              {highlightedText}
            </span>
          </motion.h2>

          {/* Supporting text - Fixed height container */}
          <motion.p
            className="text-lg text-gray-300 max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {description}
          </motion.p>
        </div>

        {/* Image on the right with decorative shapes */}
        <div className="lg:w-1/2 relative h-[300px] sm:h-[350px] md:h-[400px] w-full">
          {/* Decorative shape behind image */}
          <div className="absolute -right-10 -top-10 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl -z-10"></div>
          <div className="absolute -left-10 -bottom-10 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl -z-10"></div>

          {/* Image container with modern styling */}
          <motion.div
            className="relative group h-full"
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Floating decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400/20 rounded-xl rotate-45 -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-cyan-400/20 rounded-full -z-10"></div>

            {/* Main image with hover effects */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-700/50 shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-300 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 -z-10"></div>
              <Image
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 brightness-90"
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
  );
};

export default PageHeader;
