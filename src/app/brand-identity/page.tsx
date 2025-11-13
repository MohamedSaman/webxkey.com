import React from "react";
import BrandIdentityClient from "./BrandIdentityClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Brand Identity Services - Webxkey",
    template: "%s | Webxkey", // For child routes
  },
  description:
    "Discover Webxkey's brand identity services to help businesses establish a strong, memorable presence. Let us craft your unique brand story.",
  keywords: [
    "brand identity",
    "branding services",
    "logo design",
    "brand strategy",
    "Webxkey branding solutions",
  ],
  metadataBase: new URL("https://webxkey.com"),
  alternates: {
    canonical: "/brand-identity",
  },
  openGraph: {
    title: "Brand Identity - Build Your Legacy with Webxkey",
    description:
      "Explore Webxkey's expertise in creating impactful brand identities for businesses to shine in the digital world.",
    url: "/brand-identity",
    siteName: "Webxkey",
    images: [
      {
        url: "https://webxkey.com/og-img.png",
        width: 1200,
        height: 630,
        alt: "Creative Team Designing Brand Logos",
      },
      {
        url: "https://webxkey.com/og-img.png",
        width: 1000,
        height: 1000,
        alt: "Webxkey Brand Logo Icon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Identity - Build Your Legacy with Webxkey",
    description:
      "Webxkey offers expert branding services to help businesses leave a lasting impression.",
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

const BrandIdentity = () => {
  return <BrandIdentityClient />;
};

export default BrandIdentity;
