"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoMail } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ContactItem {
  icon: React.ReactNode;
  text: string;
  action: () => void;
}

type FormData = {
  name: string;
  email: string;
  projectType: string;
  referralSource: string;
  projectDescription: string;
};

type SubmitStatus = {
  success: boolean;
  message: string;
} | null;

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-cyan-500"></div>
    </div>
  );
};

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (pathname !== "/") {
      setLoading(true);
      window.location.href = "/";
    }
  };

  const contactItems: ContactItem[] = [
    {
      icon: <IoMail />,
      text: "official@webxkey.com",
      action: () => (window.location.href = "mailto:official@webxkey.com"),
    },
  ];

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    projectType: "Social media marketing",
    referralSource: "Google",
    projectDescription: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://webxkey.com/mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ success: true, message: result.message });
        setFormData({
          name: "",
          email: "",
          projectType: "Social media marketing",
          referralSource: "Google",
          projectDescription: "",
        });
      } else {
        setSubmitStatus({ success: false, message: result.message });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message:
          "Network error. Please check your connection and try again." + error,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <motion.div
        className="w-full text-white py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col md:flex-row w-full rounded-lg">
          {/* Left: Contact Form */}
          <motion.div
            className="md:w-2/3 p-4 md:p-8"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              className="text-2xl font-semibold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Get in Touch
            </motion.h2>

            {submitStatus && (
              <motion.div
                className={`p-4 mb-4 rounded-md ${
                  submitStatus.success
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {submitStatus.message}
              </motion.div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm">Hello, my name is:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm">Here is my email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm">
                    Tell us about your project
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none"
                  >
                    <option>Social media marketing</option>
                    <option>Website Development</option>
                    <option>App Development</option>
                    <option>Brand Identity</option>
                    <option>SEO Optimization</option>
                    <option>Site Bugs Fixing</option>
                    <option>Blockchain Development</option>
                    <option>Web Scraping Services</option>
                    <option>WordPress Design Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm">
                    How did you hear about Webxkey
                  </label>
                  <select
                    name="referralSource"
                    value={formData.referralSource}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none"
                  >
                    <option>Google</option>
                    <option>Friend or Colleague</option>
                    <option>Instagram</option>
                    <option>Facebook</option>
                    <option>LinkedIn</option>
                    <option>Email NewsLetter</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm">About project:</label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  placeholder="Your project description"
                  className="w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none h-28"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full p-3 bg-gradient-to-r from-blue-500 to-blue-300 text-white rounded-md text-lg font-semibold cursor-pointer disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </motion.button>
            </form>
          </motion.div>

          {/* Right: Contact Info Card */}
          <motion.div
            className="md:w-1/3 flex justify-center items-center p-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 text-center border border-gray-600">
              <h2 className="text-2xl font-bold mb-6 underline">
                Connect with us
              </h2>

              <ul className="space-y-3 mb-6">
                {contactItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-center items-center gap-3 cursor-pointer hover:underline text-lg"
                    onClick={item.action}
                  >
                    <span>{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>

              <div className="flex justify-center">
                <Link href="/" onClick={handleLogoClick}>
                  <Image
                    src="/Images/logo.png"
                    width={180}
                    height={180}
                    alt="WebxKey Logo"
                    className="mx-auto hover:opacity-90 transition-opacity"
                    priority
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {loading && <Loading />}
    </>
  );
};

export default ContactForm;
