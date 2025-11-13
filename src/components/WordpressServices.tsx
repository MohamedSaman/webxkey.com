"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import {
  FiMonitor,
  FiShoppingCart,
  FiCode,
  FiShield,
  FiSmartphone,
  FiTrendingUp,
} from "react-icons/fi";

const services = [
  {
    icon: <FiMonitor className="w-8 h-8" />,
    title: "Custom WordPress Website Design",
    description:
      "Our WordPress design agency creates bespoke WordPress websites that reflect your brand identity while delivering exceptional user experiences.",
  },
  {
    icon: <FiShoppingCart className="w-8 h-8" />,
    title: "WooCommerce Development",
    description:
      "As a top WordPress eCommerce agency, we build powerful online stores with WooCommerce that drive sales and conversions.",
  },
  {
    icon: <FiCode className="w-8 h-8" />,
    title: "WordPress Plugin Development",
    description:
      "Need custom functionality? Our WordPress developer services include creating tailored plugins to meet your specific business requirements.",
  },
  {
    icon: <FiShield className="w-8 h-8" />,
    title: "WordPress Security & Maintenance",
    description:
      "Our WordPress support agency provides ongoing maintenance, security updates, and performance optimization to keep your site running smoothly.",
  },
  {
    icon: <FiSmartphone className="w-8 h-8" />,
    title: "Responsive WordPress Design",
    description:
      "As a professional WordPress development agency, we ensure your website looks perfect on all devices, from desktops to smartphones.",
  },
  {
    icon: <FiTrendingUp className="w-8 h-8" />,
    title: "WordPress SEO Optimization",
    description:
      "Our WordPress web development services include on-page SEO optimization to help your site rank higher in search results.",
  },
];

const WordpressServices = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
  };

  return (
    <section className="py-16 bg-transparent relative">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#1d86ff] to-[#3dd8ff] mb-8 md:mb-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ margin: "0px 0px -25% 0px" }}
        >
          Our Comprehensive WordPress Development Services
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "0px 0px -20% 0px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-blue-200/50"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="text-blue-600 mb-4 p-3 bg-white rounded-lg w-fit">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-gray-100">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WordpressServices;
