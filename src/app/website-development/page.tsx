import React from "react";
import WebsiteClient from "./WebsiteClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Website Development Services - Webxkey",
    template: "%s | Webxkey", // For child routes
  },
  description:
    "Empower your online presence with Webxkey's professional website development services. Tailored, innovative, and scalable solutions for your business.",
  keywords: [
    "website development",
    "website development services",
    "custom website design",
    "responsive website development",
    "Webxkey website solutions",
  ],
  metadataBase: new URL("https://webxkey.com"),
  alternates: {
    canonical: "/website-development",
  },
  openGraph: {
    title: "Website Development - Build Your Online Presence with Webxkey",
    description:
      "Explore Webxkey's expertise in creating custom, responsive, and scalable websites that meet business needs.",
    url: "/website-development",
    siteName: "Webxkey",
    images: [
      {
        url: "https://webxkey.com/og-img.png",
        width: 1200,
        height: 630,
        alt: "Professional Website Development at Webxkey",
      },
      {
        url: "https://webxkey.com/og-img.png",
        width: 1000,
        height: 1000,
        alt: "Webxkey Website Icon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development - Build Your Online Presence with Webxkey",
    description:
      "Leverage Webxkey's web development services for tailored and innovative business solutions.",
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

const WebSiteDevelopment = () => {
  return <WebsiteClient />;
};

export default WebSiteDevelopment;
