import React from "react";
import { Metadata } from "next";
import PriceMonitoringScrapingClient from "./PriceMonitoringScrapingClient";

export const metadata: Metadata = {
  title: {
    default: "Smart Price Monitoring - Webxkey",
    template: "%s | Webxkey", // For child routes
  },
  description:
    "Enhance your business strategy with Webxkey's automated price monitoring scraping solutions. Stay competitive with real-time pricing insights.",
  keywords: [
    "Price monitoring services",
    "real-time price scraping",
    "competitive pricing analysis",
    "web scraping for pricing data",
    "automated price tracking",
    "Webxkey price scraping solutions",
  ],
  metadataBase: new URL("https://webxkey.com"),
  alternates: {
    canonical: "/price-monitoring-scraping",
  },
  openGraph: {
    title: "Price Monitoring - Track & Analyze Market Prices",
    description:
      "Leverage Webxkey’s powerful web scraping technology for accurate price tracking and competitive market insights.",
    url: "/price-monitoring-scraping",
    siteName: "Webxkey",
    images: [
      {
        url: "https://webxkey.com/og-img.png",
        width: 1200,
        height: 630,
        alt: "Illustration of automated price tracking",
      },
      {
        url: "https://webxkey.com/og-img.png",
        width: 1000,
        height: 1000,
        alt: "Webxkey Price Monitoring Icon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Price Monitoring Services - Stay Competitive",
    description:
      "Track and analyze pricing trends with Webxkey’s automated price monitoring scraping solutions.",
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

const PriceMonitoringScraping = () => {
  return <PriceMonitoringScrapingClient />;
};

export default PriceMonitoringScraping;
