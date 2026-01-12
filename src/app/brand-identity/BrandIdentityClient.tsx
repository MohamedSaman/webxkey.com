"use client";

import React, { useLayoutEffect, useState } from "react";
import "../styles/home.css";
import { motion } from "framer-motion";
import ContactForm from "../../components/ContactForm";
import CollapsibleSections from "../../components/layouts/CollapsibleSections";
import Faqs from "../../components/layouts/Faqs";
import PageHeader from "@/components/PageHeader";

const BrandIdentityClient: React.FC = () => {
  const [showMeetingPopup, setShowMeetingPopup] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          tagline="Brand Identity Services"
          heading="Elevate Your Brand To"
          highlightedText="The Next Level"
          description="Custom brand identity solutions that strengthen your business presence and make your brand unforgettable."
          imageSrc="/Images/brand-n.png"
          imageAlt="Brand Identity Example"
        />

        {/* Collapsible Sections */}
        <CollapsibleSections
          dataSet="branding"
          headerIcon="💡"
          headerText="OUR EXPERTISE"
        />

        {/* Contact CTA */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl font-semibold mt-16 text-center text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Let&apos;s Start Your{" "}
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

        {/* FAQs */}
        <Faqs />
      </div>

      {showMeetingPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        >
          <div className="bg-white rounded-xl p-6 relative max-w-lg w-full">
            <button
              className="absolute top-3 right-3 text-gray-700 hover:text-gray-900"
              onClick={() => setShowMeetingPopup(false)}
            >
              ✕
            </button>
            <p className="text-lg text-center font-semibold">
              Schedule Your Meeting
            </p>
            {/* You can reuse your MeetingPopup content here */}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default BrandIdentityClient;