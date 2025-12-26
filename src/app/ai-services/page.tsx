import React from "react";
import AIServicesClient from "./AIServicesClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "AI Services - Intelligent Solutions - Webxkey",
    template: "%s | Webxkey",
  },
  description:
    "Transform your business with Webxkey's end-to-end AI solutions. From AI chatbots and predictive analytics to computer vision and intelligent automation - we deliver custom AI systems tailored to your needs.",
  keywords: [
    "AI services",
    "artificial intelligence solutions",
    "AI chatbots",
    "predictive analytics",
    "machine learning",
    "computer vision",
    "NLP services",
    "AI automation",
    "custom AI development",
    "Webxkey AI solutions",
  ],
  metadataBase: new URL("https://webxkey.com"),
  alternates: {
    canonical: "/ai-services",
  },
  openGraph: {
    title: "AI Services - Intelligent AI Solutions That Drive Business Growth",
    description:
      "Discover Webxkey's comprehensive AI services including chatbots, predictive analytics, NLP, computer vision, and intelligent automation. Custom-built, scalable, and production-ready AI solutions.",
    url: "/ai-services",
    siteName: "Webxkey",
    images: [
      {
        url: "https://webxkey.com/og-img.png",
        width: 1200,
        height: 630,
        alt: "Webxkey AI Services - Intelligent Solutions",
      },
      {
        url: "https://webxkey.com/og-img.png",
        width: 1000,
        height: 1000,
        alt: "Webxkey AI Services Icon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Services - Intelligent Solutions by Webxkey",
    description:
      "Transform your business with end-to-end AI solutions - from chatbots to predictive analytics and intelligent automation.",
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

const AIServices = () => {
  return <AIServicesClient />;
};

export default AIServices;
