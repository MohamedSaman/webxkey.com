"use client";

import React, { useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import InfiniteLogos from "./InfiniteLogos";
import { motion, useScroll, useTransform } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center h-[100vh]">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-cyan-500"></div>
    </div>
  );
};

const Hero: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const handleNavigation = (e: React.MouseEvent, route: string) => {
    e.preventDefault();
    if (pathname !== route) {
      setLoading(true);
      router.push(route);
    }
  };

  return (
    <>
      <section
        ref={heroRef}
        className="bg-transparent text-white pt-2 md:pt-8 pb-0 md:pb-4 px-6 md:px-20 relative overflow-hidden mt-8 md:mt-0"
      >
        {/* Critical CSS for LCP element */}
        <style jsx global>{`
          .lcp-heading {
            opacity: 1 !important;
            transform: none !important;
          }
        `}</style>

        {/* Mobile background with overlay - loaded after main content */}
        <div className="md:hidden absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/600 to-black/300 z-10"></div>
          <div className="absolute inset-0 flex justify-center items-center opacity-20">
            <div className="animate-spin-slow relative w-full max-w-[600px] aspect-square">
              <Image
                src="/Images/hero-img-mobile.webp"
                fill
                alt="Webxkey Hero Image"
                className="object-contain"
                priority
                quality={75}
                sizes="(max-width: 768px) 100vw, 600px"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center relative z-10">
          {/* Left Section with text content - LCP optimized */}
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center md:text-left lcp-heading">
              Unlock Your Limitless{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
                Digital Potential
              </span>{" "}
              <br />
              With Us!
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-300 text-base md:text-lg"
            >
              Harness the power of WebxKey&#39;s comprehensive expertise in
              software engineering, blockchain technology, and innovative web
              development to transform your vision into reality.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4"
            >
              <motion.button
                onClick={(e) => handleNavigation(e, "/services")}
                className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                 Our Services
              </motion.button>
              {/* <motion.button
                onClick={(e) => handleNavigation(e, "/project")}
                className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-black transition cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Works
              </motion.button> */}
            </motion.div>
          </div>

          {/* Right Section - 3D Art - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:flex justify-center items-center relative w-full"
          >
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[650px] h-[40px]">
              <div
                className="w-full h-full blur-xl rounded-full"
                style={{
                  background:
                    "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
                  transform: "scaleY(0.6)",
                  filter: "blur(20px)",
                }}
              />
            </div>

            <motion.div
              style={{ y: yBg }}
              className="animate-spin-slow relative z-10 w-[80%] max-w-[600px] aspect-square"
            >
              <Image
                src="/Images/hero-img-desktop.webp"
                fill
                alt="Webxkey Hero Image"
                className="object-contain"
                priority
                quality={75}
                sizes="(min-width: 768px) 50vw, 600px"
                fetchPriority="low"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      {loading && <Loading />}

      {/* Infinite Logo section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden py-0 md:py-1 bg-gradient-to-b from-transparent to-gray-900/20"
      >
        <div className="flex flex-col items-center justify-center mb-0 md:mb-1 px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white text-center text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl leading-snug max-w-3xl mb-3 md:mb-4"
          >
            The Tech That Drives Us Forward
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-20 md:w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"
          />
        </div>
        <InfiniteLogos />
      </motion.div>
    </>
  );
};

export default Hero;
