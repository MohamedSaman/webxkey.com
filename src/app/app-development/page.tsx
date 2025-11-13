import React from "react";
import AppDevelopmentClient from "./AppDevelopmentClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "App Development Services - Webxkey",
    template: "%s | Webxkey", // For child routes
  },
  description:
    "Explore Webxkey's app development services that drive innovation and deliver results. Learn how we create tailored solutions for businesses.",
  keywords: [
    "app development",
    "mobile app development",
    "custom app solutions",
    "digital transformation",
    "Webxkey app services",
  ],
  metadataBase: new URL("https://webxkey.com"),
  alternates: {
    canonical: "/app-development",
  },
  openGraph: {
    title: "App Development - Tailored Solutions by Webxkey",
    description:
      "Discover how Webxkey's app development services help businesses achieve their goals with custom digital solutions.",
    url: "/app-development",
    siteName: "Webxkey",
    images: [
      {
        url: "https://webxkey.com/og-img.png",
        width: 1200,
        height: 630,
        alt: "Developers Collaborating on an App Project",
      },
      {
        url: "https://webxkey.com/og-img.png",
        width: 1000,
        height: 1000,
        alt: "Webxkey App Icon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App Development - Tailored Solutions by Webxkey",
    description:
      "Webxkey offers expert app development services for your business.",
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

const AppDevelopment = () => {
  return <AppDevelopmentClient />;
};

export default AppDevelopment;
