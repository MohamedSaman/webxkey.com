import React from "react";
import { Metadata } from "next";
import ECommerceScrapingClient from "./ECommerceScrapingClient";

export const metadata: Metadata = {
  title: {
    default: "E-Commerce Data Extraction - Webxkey",
    template: "%s | Webxkey", // For child routes
  },
  description:
    "Boost your business with Webxkey’s e-commerce scraping services. Extract product listings, prices, reviews, and competitor insights effortlessly.",
  keywords: [
    "E-commerce scraping services",
    "product data extraction",
    "automated price tracking",
    "market trend analysis",
    "competitor price monitoring",
    "Webxkey e-commerce data solutions",
  ],
  metadataBase: new URL("https://webxkey.com"),
  alternates: {
    canonical: "/ecommerce-data-scraping",
  },
  openGraph: {
    title: "E-Commerce Scraping - Unlock Business Insights",
    description:
      "Leverage Webxkey’s advanced web scraping technology to track product prices, analyze trends, and optimize your business strategy.",
    url: "/ecommerce-data-scraping",
    siteName: "Webxkey",
    images: [
      {
        url: "https://webxkey.com/og-img.png",
        width: 1200,
        height: 630,
        alt: "Illustration of automated e-commerce data extraction",
      },
      {
        url: "https://webxkey.com/og-img.png",
        width: 1000,
        height: 1000,
        alt: "Webxkey E-Commerce Scraping Icon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Scraping - Extract & Analyze Product Data",
    description:
      "Harness the power of Webxkey’s e-commerce scraping solutions to stay ahead of market trends and competitor pricing.",
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

const ECommerceScrapingServices = () => {
  return <ECommerceScrapingClient />;
};

export default ECommerceScrapingServices;
