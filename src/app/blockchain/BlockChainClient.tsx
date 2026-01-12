"use client";
import React, { JSX, useLayoutEffect } from "react";
import "../styles/home.css";
import { motion } from "framer-motion";
import ContactForm from "../../components/ContactForm";
import CollapsibleSections from "../../components/layouts/CollapsibleSections";
import PageHeader from "@/components/PageHeader";

const BlockChainClient = (): JSX.Element => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          tagline="Blockchain Development Services"
          heading="Blockchain Aligns With Your"
          highlightedText="Business Needs"
          description="At WebxKey, we specialize in transforming your vision into secure, transparent, and efficient blockchain solutions that redefine trust and innovation for your business."
          imageSrc="/Images/block-nn.webp"
          imageAlt="Blockchain Example"
        />

        {/* Description Section */}
        <motion.section
          className="bg-transparent text-white py-6 md:py-10 w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="flex flex-col items-center gap-4 mb-8">
  <motion.h2
    className="text-3xl md:text-5xl font-bold text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
  >
    A team of{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d86ff] to-[#3dd8ff]">
      web design experts
    </span>{" "}
    that can help you design and build a website you&#39;re proud of
  </motion.h2>

  <motion.p
    className="text-base md:text-lg text-gray-400 text-center max-w-3xl"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    At <b>WebxKey</b>, we are dedicated to transforming your vision into a
    powerful online presence. Whether you need a stunning website,
    effective branding, or a user-friendly app, our expert team is here
    to provide tailored solutions that elevate your digital potential.
  </motion.p>
</div>

        </motion.section>

        {/* Expertise Section */}
        <CollapsibleSections
          dataSet="blockchain"
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
      </div>
    </div>
  );
};

export default BlockChainClient;
