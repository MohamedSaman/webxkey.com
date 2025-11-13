import React from "react";
import { FaStar } from "react-icons/fa";
import WorldMap from "./WorldMap";
import { motion } from "framer-motion";

const Testimonials: React.FC = () => {
  return (
    <motion.div 
      className="bg-transparent text-white pt-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Styled Title */}
      <div className="text-center mb-18">
        <motion.div 
          className="flex justify-center items-center mb-3 md:mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.span 
            className="bg-[#10355A] text-sm md:text-lg text-white px-3 py-1 rounded-full flex items-center gap-2 shadow-md"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <FaStar className="text-yellow-400" /> TESTIMONIALS
          </motion.span>
        </motion.div>

        <motion.h1 
          className="text-5xl sm:text-6xl md:text-5xl lg:text-7xl font-semibold px-4 sm:px-0 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          First impression,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            our clients
          </span>
        </motion.h1>
      </div>

      {/* World Map */}
      <motion.div 
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] mt-8 rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <WorldMap />
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;