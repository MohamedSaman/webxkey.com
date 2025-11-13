import React from "react";
import ProjectClient from "./ProjectClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Our Projects - Webxkey",
    template: "%s | Webxkey", // For child routes
  },
  description:
    "Explore Webxkey's portfolio of successful projects. See how we deliver innovative digital solutions to businesses worldwide.",
  keywords: [
    "our projects",
    "portfolio",
    "case studies",
    "Webxkey success stories",
    "digital solutions projects",
  ],
  metadataBase: new URL("https://webxkey.com"),
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Our Projects - Webxkey's Portfolio of Success",
    description:
      "Dive into Webxkey's collection of completed projects that highlight our expertise in digital solutions and innovation.",
    url: "/projects",
    siteName: "Webxkey",
    images: [
      {
        url: "https://webxkey.com/og-img.png",
        width: 1200,
        height: 630,
        alt: "A showcase of Webxkey's projects",
      },
      {
        url: "https://webxkey.com/og-img.png",
        width: 1000,
        height: 1000,
        alt: "Webxkey Projects Icon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects - Webxkey's Portfolio of Success",
    description:
      "Browse through Webxkey's diverse projects that reflect our commitment to innovation and excellence.",
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

const Projects = () => {
  return <ProjectClient />;
};

export default Projects;
