"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import dynamic from "next/dynamic";
import PageHeader from "@/components/PageHeader";
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          tagline="Services"
          heading="Transform Your Brand with Expert Digital"
          highlightedText="Marketing Solutions."
          description="Our comprehensive digital marketing services are designed to elevate your online presence, drive targeted traffic, and convert visitors into loyal customers through data-driven strategies."
          imageSrc="/Images/services-n.png"
          imageAlt="Digital Marketing Services"
        />
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