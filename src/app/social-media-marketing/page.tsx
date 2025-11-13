import React from "react";
import SocialMediaClient from "./SocialMediaClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Social Media Marketing Services - Webxkey",
    template: "%s | Webxkey", // For child routes
  },
  description:
    "Boost your brand's online presence with Webxkey's social media marketing services. Drive engagement and grow your audience effectively.",
  keywords: [
    "social media marketing",
    "SMM services",
    "digital marketing",
    "online branding",
    "Webxkey social media solutions",
  ],
  metadataBase: new URL("https://webxkey.com"),
  alternates: {
    canonical: "/social-media-marketing",
  },
  openGraph: {
    title: "Social Media Marketing - Elevate Your Brand with Webxkey",
    description:
      "Webxkey specializes in social media marketing strategies that increase engagement and drive results for your business.",
    url: "/social-media-marketing",
    siteName: "Webxkey",
    images: [
      {
        url: "https://webxkey.com/og-img.png",
        height: 630,
        alt: "Social Media Campaign in Action",
      },
      {
        url: "https://webxkey.com/og-img.png",
        width: 1000,
        height: 1000,
        alt: "Webxkey Social Media Icon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing - Elevate Your Brand with Webxkey",
    description:
      "Harness the power of social media with Webxkey's expert marketing services.",
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

const SocialMediaMarketing = () => {
  return <SocialMediaClient />;
};

export default SocialMediaMarketing;
