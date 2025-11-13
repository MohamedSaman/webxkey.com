import { motion } from "framer-motion";
import React from "react";

const VisionMission: React.FC = () => {
  return (
    <>
      <motion.div
        className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold tracking-wide text-white uppercase"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, type: "spring" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        🔥{" "}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: false }}
        >
          Vision & Mission
        </motion.span>
      </motion.div>

      <motion.h2
        className="mt-3 md:mt-6 text-center text-xl md:text-3xl lg:text-4xl font-light leading-relaxed max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        At{" "}
        <motion.span
          className="font-semibold"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
        >
          WebxKey
        </motion.span>
        , our mission is to provide innovative solutions with vision, attention to detail, and a passion for a flawless{" "}
        <motion.span
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          final product
        </motion.span>
        .
      </motion.h2>
    </>
  );
};

export default VisionMission;