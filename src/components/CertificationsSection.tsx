"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

type Certification = {
  title: string;
  image: string;
  description: string;
};

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
  };

  const certifications: Certification[] = [
    {
      title: "IRO",
      image: "/Images/webxkey br certificate-1.png",
      description: "Official business registration documents and licenses",
    },
  ];

  const openModal = (cert: Certification) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const openForm = () => {
    setIsFormOpen(true);
    setSubmitError(null);
    document.body.style.overflow = "hidden";
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setSubmitSuccess(false);
    setSubmitError(null);
    document.body.style.overflow = "auto";
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitError("All fields are required");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitError("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/submit-partnership', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // First check the content type
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("Received non-JSON response:", text);
        throw new Error("Server returned an unexpected response");
      }

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit form");
      }

      if (result.success) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      className="w-full bg-transparent py-16 px-4 sm:px-8 md:px-12 lg:px-20 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold 
                      backdrop-blur-md bg-indigo-600/30 border border-indigo-400/30 
                      shadow-lg shadow-indigo-500/20 text-white mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="text-xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              📜
            </motion.span>{" "}
            CERTIFICATIONS & VALIDATIONS
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-5xl font-semibold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our{" "}
            <span className="text-transparent bg-gradient-to-r from-[#038ed3] to-[#72e3ff] bg-clip-text">
              Credentials
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-300 max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Webxkey operates with full transparency and compliance. Here are our
            official documents and certifications that validate our business
            operations.
          </motion.p>
        </div>

        <div className="flex justify-center">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-[#013e84]/20 to-[#0ea0c4]/20 rounded-xl p-6 border border-[#038ed3]/30 shadow-lg shadow-[#038ed3]/10 backdrop-blur-sm hover:shadow-[#038ed3]/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-40 relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-white font-semibold text-xl">
                    {cert.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-300 text-sm">{cert.description}</p>
              <button
                onClick={() => openModal(cert)}
                className="mt-4 text-[#72e3ff] hover:text-white text-sm font-medium flex items-center group cursor-pointer"
              >
                View Document
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center bg-[#013e84]/10 border border-[#038ed3]/30 rounded-xl p-8 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Request Official Documents
          </h3>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            Need verified copies of our business documents for partnership or
            compliance purposes? Contact our legal team for official copies.
          </p>
          <button
            onClick={openForm}
            className="bg-gradient-to-r from-[#038ed3] to-[#72e3ff] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-[#038ed3]/30 cursor-pointer"
          >
            Join Partnership
          </button>
        </motion.div>
      </div>

      {isModalOpen && selectedCert && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-4xl w-full bg-gradient-to-b from-[#013e84]/30 to-[#0ea0c4]/30 rounded-xl border border-[#038ed3]/50 shadow-2xl shadow-[#038ed3]/20 p-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-[#72e3ff] transition-colors z-10 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative h-[80vh] w-full">
              <Image
                src={selectedCert.image}
                alt={selectedCert.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-white">
                {selectedCert.title}
              </h3>
              <p className="text-gray-300">{selectedCert.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {isFormOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeForm}
        >
          <motion.div
            className="relative max-w-md w-full max-h-[90vh] bg-gradient-to-b from-[#013e84]/30 to-[#0ea0c4]/30 rounded-xl border border-[#038ed3]/50 shadow-2xl shadow-[#038ed3]/20 p-6 flex flex-col"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeForm}
              className="absolute top-4 right-4 text-white hover:text-[#72e3ff] transition-colors z-10 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex-shrink-0">
              {!submitSuccess ? (
                <>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Partnership Inquiry
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Please fill out the form and we&apos;ll get back to you shortly.
                  </p>
                </>
              ) : (
                <div className="text-center py-4">
                  <div className="mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-green-400 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Request Submitted!
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Thank you for your interest. Our team will review your
                    request and get back to you soon.
                  </p>
                </div>
              )}
            </div>

            <div className="flex-grow overflow-y-auto">
              {!submitSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Request Type
                    </label>
                    <div className="w-full bg-[#013e84]/30 border border-[#038ed3]/50 rounded-lg px-4 py-2 text-white">
                      Partnership Inquiry
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#013e84]/30 border border-[#038ed3]/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#72e3ff]"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#013e84]/30 border border-[#038ed3]/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#72e3ff]"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-[#013e84]/30 border border-[#038ed3]/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#72e3ff]"
                      placeholder="Enter your company name (optional)"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Partnership Details*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full bg-[#013e84]/30 border border-[#038ed3]/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#72e3ff]"
                      placeholder="Tell us about your partnership proposal..."
                    ></textarea>
                  </div>

                  {submitError && (
                    <div className="text-red-400 text-sm p-2 bg-red-900/30 rounded-lg">
                      {submitError}
                    </div>
                  )}

                  <div className="flex-shrink-0 pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#038ed3] to-[#72e3ff] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-[#038ed3]/30 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Request"}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex justify-center">
                  <button
                    onClick={closeForm}
                    className="bg-gradient-to-r from-[#038ed3] to-[#72e3ff] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-[#038ed3]/30"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default CertificationsSection;