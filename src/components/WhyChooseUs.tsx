"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiAward, FiCode, FiLayers } from "react-icons/fi";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FiAward className="w-6 h-6 text-blue-600" />,
      title: "Certified WordPress Developers",
      description:
        "Our team consists of experienced WordPress website developers who stay updated with the latest technologies and best practices.",
    },
    {
      icon: <FiCode className="w-6 h-6 text-blue-600" />,
      title: "Custom WordPress Solutions",
      description:
        "Unlike many WordPress development agencies, we don't use cookie-cutter templates. Every website we build is custom-designed for your unique needs.",
    },
    {
      icon: <FiLayers className="w-6 h-6 text-blue-600" />,
      title: "Full-Service WordPress Agency",
      description:
        "From initial design to ongoing maintenance, our WordPress web design services cover every aspect of your website's lifecycle.",
    },
  ];

  return (
    <section className="py-16 bg-transparent relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-transparent"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-200/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#1d86ff] to-[#3dd8ff] mb-0 pb-5">
            Why Choose Our WordPress Development Company
          </h2>
          <motion.p
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ amount: 0.5 }}
          >
            As a premier WordPress website development agency, we combine
            technical expertise with creative design to deliver exceptional
            results.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
          >
            <Image
              src="/Images/wp 2.png"
              alt="WordPress Development Experts"
              width={600}
              height={400}
              className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="mb-8 p-6 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-md transition-all duration-300 border border-white/20 hover:border-blue-200/50"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ amount: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-3 text-white flex items-center">
                  <span className="mr-3">{feature.icon}</span>
                  {feature.title}
                </h3>
                <p className="text-gray-100 pl-9">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
