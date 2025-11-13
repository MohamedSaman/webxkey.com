import React from "react";
import UIUXClient from "./UIUXClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "UI/UX Design Services - Webxkey",
    template: "%s | Webxkey", // For child routes
  },
  description:
    "Transform your digital presence with Webxkey's UI/UX design services. Create intuitive, engaging, and user-friendly experiences tailored to your audience.",
  keywords: [
    "UI/UX design",
    "user experience",
    "interface design",
    "Webxkey design services",
    "digital design solutions",
  ],
  metadataBase: new URL("https://webxkey.com"),
  alternates: {
    canonical: "/ui-ux-design",
  },
  openGraph: {
    title: "UI/UX Design - Crafting Engaging Experiences with Webxkey",
    description:
      "Webxkey specializes in UI/UX design to help businesses connect with users through seamless and aesthetic digital experiences.",
    url: "/ui-ux-design",
    siteName: "Webxkey",
    images: [
      {
        url: "https://webxkey.com/og-img.png",
        width: 1200,
        height: 630,
        alt: "Creative UI/UX Design Process in Action",
      },
      {
        url: "https://webxkey.com/og-img.png",
        width: 1000,
        height: 1000,
        alt: "Webxkey UI/UX Design Icon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design - Crafting Engaging Experiences with Webxkey",
    description:
      "Leverage Webxkey's UI/UX expertise to create user-friendly digital solutions.",
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

const UiUxDesign = () => {
  return <UIUXClient />;
};

export default UiUxDesign;
