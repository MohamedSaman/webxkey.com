import React from "react";
import { Metadata } from "next";
import WebScrapingAPIClient from "./WebScrapingAPIClient";

export const metadata: Metadata = {
  title: {
    default: "Best Web Scraping Solutions - Webxkey",
    template: "%s | Webxkey", // For child routes
  },
  description:
    "Explore Webxkey's advanced web scraping services for seamless data extraction, processing, and analysis. Stay ahead with efficient automated data solutions.",
  keywords: [
    "Web Scraping Solutions",
    "data extraction services",
    "automated scraping tools",
    "structured web data collection",
    "Webxkey data scraping technology",
  ],
  metadataBase: new URL("https://webxkey.com"),
  alternates: {
    canonical: "/web-scraping-api",
  },
  openGraph: {
    title: "Web Scraping - Automate & Extract Actionable Data",
    description:
      "Boost your decision-making with Webxkey’s powerful web scraping technology, enabling structured and scalable data extraction.",
    url: "/web-scraping-api",
    siteName: "Webxkey",
    images: [
      {
        url: "https://webxkey.com/og-img.png",
        width: 1200,
        height: 630,
        alt: "Automated web data extraction illustration",
      },
      {
        url: "https://webxkey.com/og-img.png",
        width: 1000,
        height: 1000,
        alt: "Webxkey Web Scraping Icon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Scraping API Services - Automate Data Collection",
    description:
      "Unlock insights with Webxkey's expert web scraping services—efficient, scalable, and tailored for businesses.",
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

const WebScrapingAPIServices = () => {
  return <WebScrapingAPIClient />;
};

export default WebScrapingAPIServices;
