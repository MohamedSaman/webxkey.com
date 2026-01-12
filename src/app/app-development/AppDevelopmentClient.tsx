"use client";

import React, { useLayoutEffect } from "react";
import "../styles/home.css";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
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
        <PageHeader
          tagline="App Development Services"
          heading="Innovative Apps Tailored to Your"
          highlightedText="Business Vision"
          description="Empower your brand with modern, responsive, and high-performing apps built to engage users and accelerate your business growth."
          imageSrc="/Images/mobile-n.png"
          imageAlt="App Development Example"
        />

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
