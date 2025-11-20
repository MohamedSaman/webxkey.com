"use client";

import React, { useLayoutEffect } from "react";
import "../styles/home.css";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactForm from "../../components/ContactForm";
import CollapsibleSections from "../../components/layouts/CollapsibleSections";
import Faqs from "../../components/layouts/Faqs";
import CTA from "@/components/CTA";

const AppDevelopment = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <section className="my-[60px] md:my-[80px] relative">
          {/* Decorative Blurs */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
          </div>

          {/* Flex Container */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              {/* Tagline */}
              <motion.div
                className="inline-block bg-gradient-to-r from-[#013e84] to-[#0ea0c4] text-white font-semibold px-5 py-2 rounded-full shadow-lg"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                App Development Services
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                Innovative Apps Tailored to Your{" "}
                <span className="text-transparent bg-gradient-to-r from-[#038ed3] to-[#72e3ff] bg-clip-text">
                  Business Vision
                </span>
              </motion.h2>

              {/* Supporting text */}
              <motion.p
                className="text-lg text-gray-300 max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                Empower your brand with modern, responsive, and high-performing
                apps built to engage users and accelerate your business growth.
              </motion.p>
            </div>

            {/* Right Image */}
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
                    src="/Images/App1.jpg"
                    alt="App Development Example"
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

        {/* Service Highlights */}
        <section className="py-10">
          <motion.h2
            className="text-center text-3xl sm:text-5xl font-semibold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose{" "}
            <span className="text-transparent bg-gradient-to-r from-[#038ed3] to-[#72e3ff] bg-clip-text">
              Webxkey
            </span>{" "}
            for App Development?
          </motion.h2>

          <motion.p
            className="text-gray-300 text-center max-w-3xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our expert developers craft high-performing mobile and web apps with
            intuitive interfaces, robust functionality, and seamless
            performance. Whether Android, iOS, or cross-platform — we deliver
            innovative solutions that match your business goals.
          </motion.p>
        </section>

        {/* Expertise Section */}
        <CollapsibleSections
          dataSet="appDevelopment"
          headerIcon="💡"
          headerText="OUR EXPERTISE"
        />

        {/* CTA Section */}
        <CTA />

        {/* Contact Form */}
        <section className="py-10">
          <motion.h1
            className="text-3xl sm:text-5xl md:text-7xl font-semibold mb-10 text-center text-white leading-snug"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let’s Start your{" "}
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

        {/* FAQ Section */}
        <Faqs />
      </div>
    </div>
  );
};

export default AppDevelopment;
