"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import "../styles/home.css";

// Lazy load heavier components
const Banner = dynamic(() => import("../../components/Banner"), {
  loading: () => <div className="h-32 bg-gray-800/20 rounded-lg animate-pulse" />
});

const Process = dynamic(() => import("../../components/Process"), {
  loading: () => <div className="h-64 bg-gray-800/20 rounded-lg animate-pulse" />
});

const GridCard = dynamic(() => import("../../components/layouts/GridCard"), {
  loading: () => <div className="h-96 bg-gray-800/20 rounded-lg animate-pulse" />
});

const ServicesCards = dynamic(() => import("@/components/ServicesCards"), {
  loading: () => <div className="h-64 bg-gray-800/20 rounded-lg animate-pulse" />
});

// Loading skeleton for images
const ImageSkeleton = () => (
  <div className="w-full h-64 bg-gray-800/30 rounded-2xl animate-pulse" />
);

const ServicesClient = () => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
  };

  return (
    <section className="bg-transparent px-0 md:px-2">
      {/* ===== Main Heading Section with Image ===== */}
      <div className="max-w-7xl mx-auto my-[40px] md:my-[60px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content on the left */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            {/* Gradient small tag */}
            <div className="inline-block bg-gradient-to-r from-[#013e84] to-[#0ea0c4] text-white font-semibold px-5 py-2 rounded-full shadow-lg">
              Services
            </div>

            {/* Main heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white max-w-4xl">
              Transform Your Brand with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#038ed3] to-[#72e3ff]">
                Expert Digital
              </span>{" "}
              Marketing Solutions.
            </h2>

            {/* Paragraph */}
            <p className="text-white text-lg max-w-2xl mt-4">
              Our comprehensive digital marketing services are designed to elevate your online presence, 
              drive targeted traffic, and convert visitors into loyal customers through data-driven strategies.
            </p>
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
                <React.Suspense fallback={<ImageSkeleton />}>
                  <Image
                    src="/Images/services-n.png"
                    alt="Digital Marketing Services"
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    width={800}
                    height={600}
                    quality={85}
                    priority
                    fetchPriority="high"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9faSGPA=="
                  />
                </React.Suspense>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Cards with lazy loading */}
      <React.Suspense fallback={<div className="h-64 bg-gray-800/20 rounded-lg animate-pulse" />}>
        <ServicesCards />
      </React.Suspense>

      {/* PROCESS SECTION */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Reduced trigger amount for faster appearance
        className="flex flex-col items-center justify-center min-h-[50vh] md:min-h-screen bg-transparent text-white px-4 py-4 md:py-0"
      >
        <Process />
      </motion.section>

      {/* Grid Card Section */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Reduced trigger amount
        className="flex flex-col items-center justify-center min-h-[50vh] md:min-h-screen bg-transparent text-white px-4 py-4 md:py-0"
      >
        <GridCard />
      </motion.section>

      {/* Banner */}
      <React.Suspense fallback={<div className="h-32 bg-gray-800/20 rounded-lg animate-pulse" />}>
        <Banner />
      </React.Suspense>
    </section>
  );
};

export default ServicesClient;