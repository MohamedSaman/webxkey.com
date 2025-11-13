import React from "react";
import SEOClient from "./SEOClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "SEO Optimization Services - Webxkey",
    template: "%s | Webxkey", // For child routes
  },
  description:
    "Unlock the power of SEO with Webxkey. Boost your online visibility and drive organic traffic with our proven optimization strategies.",
  keywords: [
    "SEO services",
    "search engine optimization",
    "digital marketing",
    "increase website traffic",
    "Webxkey SEO services",
  ],
  metadataBase: new URL("https://webxkey.com"),
  alternates: {
    canonical: "/seo-services",
  },
  openGraph: {
    title: "SEO Optimization - Boost Your Online Presence",
    description:
      "Discover Webxkey's SEO services to improve your website's rankings and attract more organic visitors.",
    url: "/seo-services",
    siteName: "Webxkey",
    images: [
      {
        url: "https://webxkey.com/og-img.png",
        width: 1200,
        height: 630,
        alt: "SEO Strategy in Action",
      },
      {
        url: "https://webxkey.com/og-img.png",
        width: 1000,
        height: 1000,
        alt: "Webxkey SEO Icon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Optimization - Boost Your Online Presence",
    description:
      "Enhance your website's visibility and rankings with Webxkey's expert SEO optimization services.",
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

const SEO = () => {
  return <SEOClient />;
};

export default SEO;
