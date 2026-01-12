"use client";

import React, { useLayoutEffect } from "react";
import "../styles/home.css";
import { motion } from "framer-motion";
import ContactForm from "../../components/ContactForm";
import Faqs from "../../components/layouts/Faqs";
import CollapsibleSections from "../../components/layouts/CollapsibleSections";
import PageHeader from "@/components/PageHeader";

const SocialMediaClient = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          tagline="Social Media Marketing"
          heading="Building Connections,"
          highlightedText="Driving Engagement"
          description="At WebxKey, we're passionate about helping you grow your digital presence through innovative social media marketing strategies. Whether you're looking to increase brand awareness, engage with your audience, or drive conversions, our expert team is here to craft personalized solutions that deliver results."
          imageSrc="/Images/social1.jpg"
          imageAlt="Social Media Marketing"
        />

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
