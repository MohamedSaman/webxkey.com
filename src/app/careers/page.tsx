import React from "react";
import CareerClient from "./CareerClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Careers at Webxkey - Join Our Team",
    template: "%s | Webxkey", // For child routes
  },
  description:
    "Explore exciting career opportunities at Webxkey. Join our team of innovators and help shape the future of digital solutions.",
  keywords: [
    "careers",
    "job opportunities",
    "join our team",
    "digital agency jobs",
    "Webxkey career openings",
  ],
  metadataBase: new URL("https://webxkey.com"),
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers at Webxkey - Shape Your Future",
    description:
      "Find your next career at Webxkey. Be part of a dynamic team driving innovation in the digital world.",
    url: "/careers",
    siteName: "Webxkey",
    images: [
      {
        url: "https://webxkey.com/og-img.png",
        width: 1200,
        height: 630,
        alt: "Team Collaboration at Webxkey",
      },
      {
        url: "https://webxkey.com/og-img.png",
        width: 1000,
        height: 1000,
        alt: "Webxkey Career Icon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Webxkey - Shape Your Future",
    description:
      "Join Webxkey and make an impact in the digital solutions industry.",
    images: ["https://webxkey.com/og-img.png"],
    creator: "@webxkey",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "HHhh2bBY0HtKmQv9xkHoG5dTYMjaSolBtLAzTpn2H8g",
  },
};

const Careers = () => {
  return <CareerClient />;
};

export default Careers;
