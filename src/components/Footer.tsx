"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaEnvelope,
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MeetingPopup from "./MeetingPopup";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-cyan-500"></div>
    </div>
  );
};

const Footer = () => {
  const [showMeetingPopup, setShowMeetingPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (pathname !== "/") {
      setLoading(true);
      window.location.href = "/";
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setEmailStatus("error");
      setTimeout(() => setEmailStatus("idle"), 3000);
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailStatus("error");
      setTimeout(() => setEmailStatus("idle"), 3000);
      return;
    }

    setEmailStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        setEmailStatus("success");
        setEmail("");
        // Auto reset success state after 5 seconds
        setTimeout(() => {
          setEmailStatus("idle");
        }, 5000);
      } else {
        throw new Error(result.error || "Failed to subscribe");
      }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      setEmailStatus("error");
      // Auto reset error state after 5 seconds
      setTimeout(() => {
        setEmailStatus("idle");
      }, 5000);
    }
  };

  const getStatusMessage = () => {
    switch (emailStatus) {
      case "success":
        return "✅ Thank you for subscribing! Welcome to our newsletter.";
      case "error":
        return "❌ Subscription failed. Please try again.";
      case "loading":
        return "⏳ Subscribing...";
      default:
        return null;
    }
  };

  return (
    <>
      <footer className="bg-gradient-to-b from-gray-900 to-blue-900 text-white p-5 w-full py-4 mt-14">
        <div className="max-w-full mx-0 grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {/* Left Section */}
          <div className="px-2 md:col-span-2">
            <div className="text-center md:text-left">
              <p className="text-base md:text-lg uppercase tracking-wide">
                Hello! We&#39;re listening
              </p>
              <h2 className="text-4xl md:text-6xl font-bold mt-6 md:mt-10">
                Let&#39;s talk about{" "}
                <span className="text-blue-400">your project</span>
              </h2>
            </div>
            <button
              className="mt-10 md:mt-20 cursor-pointer text-xl md:text-lg hover:underline hover:text-blue-400 transition-colors"
              onClick={() => setShowMeetingPopup(true)}
            >
              Sound good? Let&#39;s connect! →
            </button>
          </div>

          {/* Middle Section */}
          <div className="px-2 py-4">
            <button className="bg-gradient-to-r from-[#013e84] to-[#0ea0c4] text-white px-4 py-2 rounded-md font-medium w-fit md:w-auto hover:from-[#013e84] hover:to-[#0ea0c4] hover:shadow-lg transition-all">
              Connect with us
            </button>
            <div className="flex items-center gap-2 mt-4">
              <FaEnvelope className="text-blue-400" />
              <a
                href="mailto:contact@webxkey.com"
                className="hover:underline cursor-pointer hover:text-blue-400 transition-colors"
              >
                contact@webxkey.com
              </a>
            </div>
           
            <button className="bg-gradient-to-r from-[#013e84] to-[#0ea0c4] text-white px-4 py-2 mt-6 rounded-md font-medium w-fit md:w-auto hover:from-[#013e84] hover:to-[#0ea0c4] hover:shadow-lg transition-all">
              Follow us
            </button>
            <div className="mt-2 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
              <a
                href="https://web.facebook.com/webxkey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 hover:underline transition-colors"
              >
                <FaFacebook className="text-lg text-[#1877F2]" />
                <span>Facebook</span>
              </a>
              <a
                href="https://x.com/webxkey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 hover:underline transition-colors"
              >
                <FaXTwitter className="text-lg" />
                <span>Twitter</span>
              </a>
              <a
                href="https://www.instagram.com/webxkey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 hover:underline transition-colors"
              >
                <FaInstagram className="text-lg text-[#E4405F]" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/webxkey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 hover:underline transition-colors"
              >
                <FaLinkedin className="text-lg text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Section (Newsletter) */}
          <div className="px-2 py-4">
            <button className="bg-gradient-to-r from-[#013e84] to-[#0ea0c4] text-white px-6 py-3 rounded-md font-medium w-fit md:w-auto hover:from-[#013e84] hover:to-[#0ea0c4] hover:shadow-lg transition-all">
              Join our newsletter
            </button>
            <form onSubmit={handleEmailSubmit} className="relative mt-6">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-b border-white w-full py-3 px-1 outline-none placeholder-gray-300 focus:border-blue-400 transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={emailStatus === "loading"}
                required
              />
              <button
                type="submit"
                disabled={emailStatus === "loading"}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 text-white hover:text-blue-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ minWidth: "48px", minHeight: "48px" }}
                aria-label="Submit email to join newsletter"
              >
                {emailStatus === "loading" ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-cyan-500"></div>
                ) : (
                  <FaArrowRight className="text-blue-400 text-lg hover:text-blue-300 transition-colors" />
                )}
              </button>
            </form>
            {emailStatus !== "idle" && (
              <div className={`mt-2 p-2 rounded-md animate-pulse ${
                emailStatus === "success" 
                  ? "bg-green-900/30 border border-green-500" 
                  : emailStatus === "error"
                  ? "bg-red-900/30 border border-red-500"
                  : "bg-blue-900/30 border border-blue-500"
              }`}>
                <p className={`text-sm text-center ${
                  emailStatus === "success" 
                    ? "text-green-400" 
                    : emailStatus === "error"
                    ? "text-red-400"
                    : "text-blue-400"
                }`}>
                  {getStatusMessage()}
                </p>
              </div>
            )}
          </div>
        </div>

        <hr className="border-gray-300" />

        {/* Bottom Section */}
        <div className="mt-0 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4 text-sm px-2">
          <div className="mb-4 md:mb-0">
            <Link href="/" onClick={handleLogoClick} className="inline-block">
              <Image
                src="/Images/logo.png"
                alt="Webxkey Logo"
                width={260}
                height={110}
                className="hover:opacity-80 transition-opacity w-[180px] md:w-[220px]"
                priority
              />
            </Link>
          </div>
          <p className="text-center md:text-right">
            Copyright© {new Date().getFullYear()} Webxkey (Pvt) Ltd. All rights
            reserved.
          </p>
        </div>
      </footer>
      {loading && <Loading />}
      {showMeetingPopup && (
        <MeetingPopup onClose={() => setShowMeetingPopup(false)} />
      )}
    </>
  );
};

export default Footer;