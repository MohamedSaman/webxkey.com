import React from "react";
import { Metadata } from "next";
import DataScrapingClient from "./DataScrapingClient";

export const metadata: Metadata = {
  title: {
    default: "Advanced Data Scraping Solutions - Webxkey",
    template: "%s | Webxkey", // For child routes
  },
  description:
    "Unlock the full potential of online data with Webxkey’s data scraping services. Extract, analyze, and leverage structured web data efficiently.",
  keywords: [
    "Data scraping services",
    "web data extraction",
    "automated data collection",
    "structured data scraping",
    "Webxkey data mining solutions",
    "big data processing",
  ],
  metadataBase: new URL("https://webxkey.com"),
  alternates: {
    canonical: "/data-scraping-services",
  },
  openGraph: {
    title: "Data Scraping - Automate & Extract Valuable Insights",
    description:
      "Leverage Webxkey’s advanced data scraping technology to gather, process, and analyze structured web data for actionable insights.",
    url: "/data-scraping-services",
    siteName: "Webxkey",
    images: [
      {
        url: "https://webxkey.com/og-img.png",
        width: 1200,
        height: 630,
        alt: "Illustration of automated data extraction",
      },
      {
        url: "https://webxkey.com/og-img.png",
        width: 1000,
        height: 1000,
        alt: "Webxkey Data Scraping Services Icon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Scraping Services - Extract & Analyze Web Data",
    description:
      "Harness the power of Webxkey’s data scraping technology to automate data collection and drive strategic decision-making.",
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

const DataScrapingServices = () => {
  return <DataScrapingClient />;
};

export default DataScrapingServices;
