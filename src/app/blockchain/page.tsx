import React from "react";
import BlockChainClient from "./BlockChainClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Blockchain Solutions - Webxkey",
    template: "%s | Webxkey", // For child routes
  },
  description:
    "Discover Webxkey's blockchain solutions that enhance security, transparency, and innovation. Learn how we empower businesses with decentralized technologies.",
  keywords: [
    "blockchain services",
    "decentralized solutions",
    "blockchain technology",
    "distributed ledger",
    "Webxkey blockchain",
  ],
  metadataBase: new URL("https://webxkey.com"),
  alternates: {
    canonical: "/blockchain-solutions",
  },
  openGraph: {
    title: "Blockchain Solutions - Decentralized Innovation by Webxkey",
    description:
      "Explore Webxkey's blockchain solutions to unlock new possibilities with secure and innovative technologies.",
    url: "/blockchain-solutions",
    siteName: "Webxkey",
    images: [
      {
        url: "https://webxkey.com/og-img.png",
        width: 1200,
        height: 630,
        alt: "Blockchain Network Visualization",
      },
      {
        url: "https://webxkey.com/og-img.png",
        width: 1000,
        height: 1000,
        alt: "Webxkey Blockchain Icon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blockchain Solutions - Decentralized Innovation by Webxkey",
    description:
      "Webxkey provides cutting-edge blockchain solutions for secure and transparent business operations.",
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

const BlockChain = () => {
  return <BlockChainClient />;
};

export default BlockChain;
