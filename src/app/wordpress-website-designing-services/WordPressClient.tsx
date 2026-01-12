"use client";
import React, { useLayoutEffect, useState } from "react";
import "../styles/home.css";
import { motion } from "framer-motion";
import ContactForm from "../../components/ContactForm";
import CollapsibleSections from "../../components/layouts/CollapsibleSections";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import WordpressServices from "@/components/WordpressServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import MeetingPopup from "@/components/MeetingPopup";

const WordPressClient = () => {
  const [showMeetingPopup, setShowMeetingPopup] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          tagline="WordPress Web Designing Services"
          heading="WordPress Design Aligns With Your"
          highlightedText="Business Needs"
          description="Custom WordPress solutions tailored to elevate your digital presence and drive business growth. We create powerful, flexible websites that adapt to your unique business requirements."
          imageSrc="/Images/wp 4.png"
          imageAlt="WordPress Website Example"
        />

        {/* WordPress Services */}
        <WordpressServices />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Portfolio */}
        <Portfolio />

        {/* Collapsible Sections */}
        <CollapsibleSections
          dataSet="WordPressFAQs"
          headerIcon="💡"
          headerText="OUR EXPERTISE"
        />

        {/* CTA Section */}
        <CTA />

        {/* Contact Form Section */}
        <section className="py-10">
          <motion.h1
            className="text-3xl sm:text-5xl md:text-7xl font-semibold mb-10 leading-snug sm:leading-tight text-center text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
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
            viewport={{ once: true, amount: 0.1 }}
          >
            <ContactForm />
          </motion.div>
        </section>
      </div>
      {showMeetingPopup && (
        <MeetingPopup onClose={() => setShowMeetingPopup(false)} />
      )}
    </div>
  );
};

export default WordPressClient;
