import React from "react";
import ServicesClient from "./ServicesClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Our Services - Webxkey",
    template: "%s | Webxkey", // For child routes
  },
  description:
    "Explore Webxkey's wide range of digital services, including app development, branding, SEO optimization, and more. Transform your business with our expertise.",
  keywords: [
    "our services",
    "digital agency services",
    "app development",
    "branding",
    "SEO optimization",
    "Webxkey solutions",
  ],
  metadataBase: new URL("https://webxkey.com"),
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services - Digital Solutions by Webxkey",
    description:
      "Discover Webxkey's services designed to elevate businesses through innovation and expertise. From app development to branding, we've got you covered.",
    url: "/services",
    siteName: "Webxkey",
    images: [
      {
        url: "https://webxkey.com/og-img.png",
        width: 1200,
        height: 630,
        alt: "Webxkey's Digital Services in Action",
      },
      {
        url: "https://webxkey.com/og-img.png",
        width: 1000,
        height: 1000,
        alt: "Webxkey Services Icon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - Digital Solutions by Webxkey",
    description:
      "Elevate your business with Webxkey's diverse range of digital services.",
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

const Services = () => {
  return <ServicesClient />;
};

export default Services;
