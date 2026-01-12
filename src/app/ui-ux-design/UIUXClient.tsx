"use client";

import React, { useLayoutEffect } from "react";
import "../styles/home.css";
import { motion } from "framer-motion";
import ContactForm from "../../components/ContactForm";
import CollapsibleSections from "../../components/layouts/CollapsibleSections";
import Faqs from "../../components/layouts/Faqs";
import PageHeader from "@/components/PageHeader";

const UIUXClient = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          tagline="UI/UX Design"
          heading="Designs that connect, engage, and"
          highlightedText="inspire"
          description="At WebxKey, we create intuitive designs that enhance user engagement and deliver seamless digital experiences. Our expert team combines creativity and technology to deliver designs that are both functional and beautiful, helping you connect with your users in meaningful ways."
          imageSrc="/Images/ui-ux.jpg"
          imageAlt="UI/UX Design Example"
        />

        {/* Collapsible Sections */}
        <CollapsibleSections
          dataSet="uiUx"
          headerIcon="💡"
          headerText="OUR EXPERTISE"
        />

        {/* Contact Section */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl font-semibold mt-16 text-center text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Let’s Start Your{" "}
          <span className="text-transparent bg-gradient-to-r from-[#038ed3] to-[#72e3ff] bg-clip-text">
            Project
          </span>
        </motion.h1>

        <motion.div
          className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <ContactForm />
        </motion.div>

        <Faqs />
      </div>
    </div>
  );
};

export default UIUXClient;
