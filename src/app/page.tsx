"use client";

import React, { lazy, Suspense } from "react";
import type { Variants } from "framer-motion";
import dynamic from "next/dynamic";
import "./styles/home.css";

// Components that appear above the fold or are critical
//import CardLayout from "../components/layouts/CardLayouts";
import DigitalBrandSection from "../components/DigitalBrandSection";
import Banner from "../components/Banner";
import Vision from "../components/Vision";
import Hero from "../components/Hero";
import ServicesCards from "@/components/ServicesCards";

// Lazy load components that appear below the fold or are less critical
// const ProjectsSection = lazy(() => import("../components/ProjectsSection"));
const Testimonials = lazy(() => import("../components/Testimonials"));
// const TestimonialCard = lazy(() => import("../components/TestimonialsCard"));

// Optimized Framer Motion import
const MotionSection = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.section),
  {
    ssr: false,
    loading: () => <section />, // Fallback while loading
  }
);

// Loading skeleton component
const LoadingSkeleton = () => (
  <div className="w-full h-64 bg-gray-800/50 rounded-lg animate-pulse" />
);

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HomePage = () => {
  return (
    <div className="space-y-2">
      {/* HERO SECTION */}
      {/*       <section>
        <div className="text-center py-10 bg-transparent">
          <div
            className="inline-block text-white px-4 py-4 pb-4 rounded-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{
              background:
                "linear-gradient(90deg,rgb(7, 42, 137),rgb(17, 156, 226))",
            }}
          >
            Welcome to Webxkey
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-4 text-white">
            Unlock Your <span className="text-blue-400">Digital Potential</span>
          </h1>

          <p className="mt-4 text-white mx-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed px-4 sm:px-0 font-semibold">
            With WebxKey&#39;s expert software, blockchain, and web development
            services.
          </p>

          <button
            className="mt-6 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-lg font-medium px-3 py-1 rounded-lg shadow-md hover:from-cyan-500 hover:to-teal-500 transition flex items-center justify-center gap-2 mx-auto sm:hidden"
            onClick={() => setShowMeetingPopup(true)}
          >
            Schedule a Meeting
            <FaArrowRight className="text-xl mt-1" />
          </button>

          {showMeetingPopup && (
            <MeetingPopup onClose={() => setShowMeetingPopup(false)} />
          )}

          <p className="mt-12 mb-10 text-white text-xl xs:text-2xl sm:text-3xl md:text-2xl lg:text-3xl leading-snug px-4 sm:px-0">
            Trusted by technologies, creatives, and suits alike
          </p>

          <Suspense fallback={<LoadingSkeleton />}>
            <InfiniteLogos />
          </Suspense>
        </div>
      </section> */}
      <Hero />
      {/* CARDS SECTION */}
      {/*       <MotionSection>
        <CardLayout />
      </MotionSection> */}
      <MotionSection
        className="text-3xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 mb-8 md:mb-12 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ margin: "0px 0px -25% 0px" }}
      >
        The Services We Provide
      </MotionSection>
      <ServicesCards />

      {/* VISION SECTION */}
      <MotionSection
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col items-center justify-center h-[50vh] md:min-h-[50vh] bg-transparent text-white px-4 py-4 md:py-0"
      >
        <Vision />
      </MotionSection>

      {/* DIGITAL BRAND SECTION */}
      <MotionSection
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <DigitalBrandSection />
      </MotionSection>

      {/* PROJECT SECTION
      <MotionSection
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Suspense fallback={<LoadingSkeleton />}>
          <ProjectsSection hideMoreProjects={false} showOnlyTwoRows={true} />
        </Suspense>
      </MotionSection> */}

      {/* TESTIMONIALS */}
      <MotionSection
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Suspense fallback={<LoadingSkeleton />}>
          <Testimonials />
        </Suspense>
      </MotionSection>

      {/* TESTIMONIAL CARDS
      <MotionSection
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Suspense fallback={<LoadingSkeleton />}>
          <TestimonialCard />
        </Suspense>
      </MotionSection> */}

      {/* BANNER */}
      <MotionSection
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Banner />
      </MotionSection>
    </div>
  );
};

export default HomePage;
