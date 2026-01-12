"use client";

import React, { useState } from "react";
import ContactForm from "../../components/ContactForm";
import StudioSection from "../../components/StudioSection";
import PageHeader from "@/components/PageHeader";
import "../styles/home.css";

const ContactClient = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          tagline="Contact Us"
          heading="Let's Talk Business"
          highlightedText="But You First."
          description="Get in touch with us to discuss your project and discover how we can help bring your digital vision to life. Our team is ready to listen to your needs, understand your challenges, and provide tailored solutions that accelerate your business growth and success."
          imageSrc="/Images/contact1.webp"
          imageAlt="Contact Webxkey"
        />

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