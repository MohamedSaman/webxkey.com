"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "94755299721"; // Replace with your WhatsApp number
  const message = "Hi! I'm interested in your services.";
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 group"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="text-3xl group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
