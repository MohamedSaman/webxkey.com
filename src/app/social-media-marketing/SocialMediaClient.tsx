"use client";

import React, { useLayoutEffect } from "react";
import "../styles/home.css";
import { motion } from "framer-motion";
import ContactForm from "../../components/ContactForm";
import Faqs from "../../components/layouts/Faqs";
import CollapsibleSections from "../../components/layouts/CollapsibleSections";
import Image from "next/image";

const SocialMediaClient = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <section className="my-[60px] md:my-[80px] relative">
          {/* Decorative background shapes */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Side Content */}
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              {/* Tagline */}
              <motion.div
                className="inline-block bg-gradient-to-r from-[#013e84] to-[#0ea0c4] text-white font-semibold px-5 py-2 rounded-full shadow-lg"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                Social Media Marketing
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                Building Connections,{" "}
                <span className="text-transparent bg-gradient-to-r from-[#038ed3] to-[#72e3ff] bg-clip-text">
                  Driving Engagement
                </span>
              </motion.h2>

              {/* Supporting Paragraph */}
              <motion.p
                className="text-lg text-gray-300 max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                At <b>WebxKey</b>, we&#39;re passionate about helping you grow your digital presence through innovative social media marketing strategies. Whether you&#39;re looking to increase brand awareness, engage with your audience, or drive conversions, our expert team is here to craft personalized solutions that deliver results.
              </motion.p>
            </div>

            {/* Right Side Image with Glow & Blur Backgrounds */}
            <div className="lg:w-1/2 relative">
              <div className="absolute -right-10 -top-10 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl -z-10"></div>
              <div className="absolute -left-10 -bottom-10 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl -z-10"></div>

              <motion.div
                className="relative group"
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400/20 rounded-xl rotate-45 -z-10"></div>
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-cyan-400/20 rounded-full -z-10"></div>

                <div className="relative overflow-hidden rounded-2xl border border-gray-700/50 shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 -z-10"></div>
                  <Image
                    src="/Images/social1.jpg"
                    alt="Social Media Marketing"
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
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

        {/* Description Section */}
        <motion.section
          className="bg-transparent text-white py-6 md:py-10 w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center gap-4 mb-8">
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d86ff] to-[#3dd8ff]">
                WebxKey experts
              </span>{" "}
              growing your digital presence through engaging content and effective strategies.
            </motion.h2>

            
          </div>
        </motion.section>

        {/* Expertise Section */}
        <CollapsibleSections
          dataSet="SMM"
          headerIcon="💡"
          headerText="OUR EXPERTISE"
        />

        {/* Contact Form Section */}
        <section className="py-10">
          <motion.h1
            className="text-3xl sm:text-5xl md:text-7xl font-semibold mb-10 leading-snug sm:leading-tight text-center text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let Start your{" "}
            <span className="text-transparent bg-gradient-to-r from-[#038ed3] to-[#72e3ff] bg-clip-text">
              Project
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>
        </section>

        {/* Vision Section */}
        <motion.section
          className="flex flex-col items-center justify-center min-h-[60vh] md:h-screen bg-transparent text-white px-4 py-8 md:py-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 0.77, 0.47, 0.97] }}
        >
          <motion.div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs sm:text-sm md:text-base font-semibold tracking-wide text-white uppercase mb-3 md:mb-6">
            🔥 Vision & Mission
          </motion.div>

          <motion.h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight sm:leading-snug md:leading-relaxed max-w-3xl px-2">
            &quot;Your digital marketing experts, creating impactful campaigns that connect with your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-300 to-white font-bold">
              audience.
            </span>
            &quot;
          </motion.h2>
        </motion.section>

        {/* FAQs */}
        <Faqs />
      </div>
    </div>
  );
};

export default SocialMediaClient;
