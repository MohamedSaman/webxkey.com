import React from "react";
import { Metadata } from "next";
import WebScrapingClient from "./WebScrapingClient";

export const metadata: Metadata = {
  title: {
    default: "Reliable Web Data Scraping Services - Webxkey",
    template: "%s | Webxkey", // For child routes
  },
  description:
    "Discover Webxkey's web data scraping solutions to extract, analyze, and leverage data efficiently. Unlock insights with cutting-edge scraping technology.",
  keywords: [
    "Web data Scraping Services",
    "data extraction",
    "scraping tools",
    "automated web data",
    "Webxkey web data scraping solutions",
  ],
  metadataBase: new URL("https://webxkey.com"),
  alternates: {
    canonical: "/web-data-scraping-services",
  },
  openGraph: {
    title: "Web Data Scraping - Automate & Extract Valuable Data",
    description:
      "Leverage Webxkey's expertise in web scraping to gather structured data efficiently and stay ahead in data-driven decision-making.",
    url: "/web-data-scraping-services",
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
        alt: "Webxkey Web Data Scraping Services Icon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Data Scraping Services - Automate & Extract Valuable Data",
    description:
      "Webxkey offers advanced web data scraping services for businesses looking to extract and analyze online data efficiently.",
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

const WebScrapingServices = () => {
  return <WebScrapingClient />;
};

export default WebScrapingServices;
