"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import MeetingPopup from "./MeetingPopup";

const CTA = () => {
  const [showMeetingPopup, setShowMeetingPopup] = useState(false);

  return (
    <>
      <motion.div
        className="bg-transparent flex justify-center items-center py-10 px-5 mt-16 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div
          className="bg-blue-400 rounded-2xl max-w-7xl w-full p-10 md:p-16 flex flex-col relative min-h-[300px] overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Image - Top-left corner */}
          <motion.div
            className="absolute left-[-5px] top-[-5px] hidden sm:block"
            initial={{ x: -50, y: -50, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <Image
              src="/Images/banner.png"
              alt="Abstract Design Element"
              width={300}
              height={300}
              className="max-w-[200px] md:max-w-sm w-full transform rotate-180"
              quality={85}
            />
          </motion.div>

          {/* Content */}
          <div className="flex justify-center items-center">
            <motion.div
              className="text-center z-10 w-full" // Added w-full
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false }}
            >
              <motion.h2
                className="text-white text-3xl md:text-4xl font-bold mb-6"
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
              >
                Ready to Transform Your Online Presence?
              </motion.h2>

              <motion.p
                className="text-white text-xl mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: false }}
              >
                As a top-rated WordPress development company, we&#39;re ready to
                build the perfect website for your business.
              </motion.p>

              <motion.button
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition flex items-center gap-2 cursor-pointer mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: false }}
                onClick={() => setShowMeetingPopup(true)}
                aria-label="Get started today"
              >
                Get Started Today <FaArrowRight />
              </motion.button>
            </motion.div>
          </div>

          {/* Image - Bottom-right corner */}
          <motion.div
            className="absolute right-[-5px] bottom-[-5px]"
            initial={{ x: 50, y: 50, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <Image
              src="/Images/banner.png"
              alt="Abstract Design Element"
              width={300}
              height={300}
              className="max-w-[200px] md:max-w-sm w-full"
              quality={85}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {showMeetingPopup && (
        <MeetingPopup onClose={() => setShowMeetingPopup(false)} />
      )}
    </>
  );
};

export default CTA;
