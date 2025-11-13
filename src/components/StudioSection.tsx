"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

interface SocialIcon {
  icon: React.ReactNode;
  color: string;
  href: string;
}

const StudioSection: React.FC = () => {
  const socialIcons: SocialIcon[] = [
    {
      icon: <FaFacebookF />,
      color: "bg-blue-600",
      href: "https://web.facebook.com/webxkey?_rdc=1&_rdr#",
    },
    { icon: <FaXTwitter />, color: "bg-black", href: "https://x.com/webxkey" },
    { icon: <FaYoutube />, color: "bg-red-600", href: "" },
    {
      icon: <FaInstagram />,
      color: "bg-pink-600",
      href: "https://www.instagram.com/webxkey/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#",
    },
    {
      icon: <FaLinkedin />,
      color: "bg-blue-700",
      href: "https://www.linkedin.com/company/webxkey/posts/?feedView=all",
    },
  ];

  return (
    <motion.div
      className="w-full bg-gray-800 text-white flex flex-col md:flex-row items-center md:items-stretch rounded-2xl p-6 md:p-8 shadow-lg border border-white mb-[50px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Left Section */}
      <motion.div
        className="md:w-1/2 flex flex-col justify-center p-4 md:p-6 text-center md:text-left"
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Our{" "}
          <motion.span
            className="text-transparent bg-gradient-to-r from-[#038ed3] to-[#72e3ff] bg-clip-text font-semibold"
            initial={{ backgroundPosition: "100% 50%" }}
            whileInView={{ backgroundPosition: "0% 50%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            Studio
          </motion.span>
        </motion.h2>

        <motion.p
          className="text-gray-400 mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Get in touch with us to discuss your project and discover how we can
          help you create engaging, user-friendly experiences that drive
          success.
        </motion.p>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="font-semibold">Follow us</p>
          <motion.div
            className="flex justify-center md:justify-start mt-2 space-x-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {socialIcons.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className={`${social.color} p-2 rounded-lg text-white`}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{
                  y: -5,
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 400 },
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="md:w-1/2 flex justify-center p-4"
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.img
          src="/Images/Webxkey_office.webp"
          alt="Studio"
          className="w-full max-w-[500px] rounded-lg object-cover"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.02 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default StudioSection;
