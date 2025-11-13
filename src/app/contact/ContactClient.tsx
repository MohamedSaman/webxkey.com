"use client";

import React, { useState } from "react";
import ContactForm from "../../components/ContactForm";
import StudioSection from "../../components/StudioSection";
import Image from "next/image";
import "../styles/home.css";

const ContactClient = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with Image */}
        <section className="my-[40px] md:my-[60px] relative">
          {/* Decorative elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Content on the left */}
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              {/* Tagline */}
              <div className="inline-block bg-gradient-to-r from-[#013e84] to-[#0ea0c4] text-white font-semibold px-5 py-2 rounded-full shadow-lg">
                Contact
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white max-w-4xl">
                Let&#39;s{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#038ed3] to-[#72e3ff]">
                  Talk Business
                </span>{" "}
                But You First.
              </h2>

              {/* Supporting text */}
              <p className="text-white text-lg max-w-2xl mt-4">
                Get in touch with us to discuss your project and discover how we can help bring your digital vision to life.
              </p>

            
            </div>

            {/* Image on the right with decorative shapes */}
            <div className="lg:w-1/2 relative">
              {/* Decorative shape behind image */}
              <div className="absolute -right-10 -top-10 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl -z-10"></div>
              <div className="absolute -left-10 -bottom-10 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl -z-10"></div>

              {/* Image container with modern styling */}
              <div className="relative group">
                {/* Floating decorative elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400/20 rounded-xl rotate-45 -z-10"></div>
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-cyan-400/20 rounded-full -z-10"></div>

                {/* Main image with hover effects */}
                <div className="relative overflow-hidden rounded-2xl border border-gray-700/50 shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 -z-10"></div>
                  <Image
                    src="/Images/contact1.webp"
                    alt="Contact Webxkey"
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    width={800}
                    height={600}
                    quality={100}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal */}
        {isOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="bg-white rounded-lg p-4 w-[90%] h-[95%] relative"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
              <button
                className="absolute top-2 right-2 text-lg font-bold text-gray-600 hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                X
              </button>
              <iframe
                src="https://calendly.com/webxkey-info/30min"
                title="Calendly Meeting"
                className="w-full h-full rounded-lg"
                frameBorder="0"
              />
            </div>
          </div>
        )}

        {/* Container for ContactForm and StudioSection */}
        <div className="w-full mx-auto">
          <ContactForm />
          <StudioSection />
        </div>
      </div>
    </div>
  );
};

export default ContactClient;