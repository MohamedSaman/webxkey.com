import React from "react";
import { motion } from "framer-motion";
import ProcessCard from "./ProcessCard";

const Process: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="flex items-center gap-2 px-4 py-0 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold tracking-wide text-white uppercase"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, type: "spring" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        ⏳{" "}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: false }}
        >
          Our PROCESS
        </motion.span>
      </motion.div>

      {/* Heading - No scroll animation */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-[#1eb4ff] to-[#b9f1ff] bg-clip-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        PROCESS
      </motion.h1>

      <motion.h2
        className="mb-10 text-center text-lg md:text-2xl lg:text-3xl font-light leading-relaxed max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        We work at the intersection of strategy, creativity, and technology to
        help our clients digitally reinvent their businesses.
      </motion.h2>

      <ProcessCard />
    </div>
  );
};

export default Process;
