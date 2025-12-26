"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import MeetingPopup from "./MeetingPopup";

const Banner = () => {
  const [showMeetingPopup, setShowMeetingPopup] = useState(false);

  return (
    <>
      <motion.div
        className="bg-transparent flex justify-center items-center py-4 px-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div
          className="bg-blue-300 rounded-2xl max-w-7xl w-full p-10 md:p-16 flex flex-col relative min-h-[300px] overflow-hidden"
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
              className="text-center md:text-left z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false }}
            >
              <motion.h1
                className="text-white text-4xl md:text-5xl font-semibold leading-tight"
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
              >
                Transform your <br />
                <motion.span
                  className="text-blue-700 font-bold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: false }}
                >
                  brand today!
                </motion.span>
              </motion.h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
                <motion.button
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-800 transition flex items-center gap-2 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: false }}
                  onClick={() => setShowMeetingPopup(true)}
                  aria-label="Schedule a meeting"
                >
                  Let&#39;s Discuss a project <FaArrowRight />
                </motion.button>
              </div>
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

export default Banner;
