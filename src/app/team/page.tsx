import React from "react";
import TeamClient from "./TeamClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Meet Our Team - Webxkey",
    template: "%s | Webxkey", // For child routes
  },
  description:
    "Get to know the talented individuals behind Webxkey's success. Meet our diverse team of experts driving innovation and excellence.",
  keywords: [
    "our team",
    "Webxkey team",
    "team of experts",
    "digital agency professionals",
    "Webxkey staff",
  ],
  metadataBase: new URL("https://webxkey.com"),
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: "Meet Our Team - The Faces of Webxkey",
    description:
      "Discover the people powering Webxkey's digital solutions. Meet our dedicated team of professionals.",
    url: "/team",
    siteName: "Webxkey",
    images: [
      {
        url: "https://webxkey.com/og-img.png",
        width: 1200,
        height: 630,
        alt: "Webxkey Team Collaborating",
      },
      {
        url: "https://webxkey.com/og-img.png",
        width: 1000,
        height: 1000,
        alt: "Webxkey Team Icon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Team - The Faces of Webxkey",
    description:
      "Learn about the passionate team behind Webxkey's innovative solutions.",
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

const Team = () => {
  return <TeamClient />;
};

export default Team;
