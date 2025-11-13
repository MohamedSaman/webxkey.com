import { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: {
    default: "About Us - Webxkey",
    template: "%s | Webxkey", // For child routes
  },
  description:
    "Learn about Webxkey's mission, vision, and team of digital experts helping businesses grow online since 2023.",
  keywords: [
    "about us",
    "company history",
    "our team",
    "digital agency",
    "web development company",
  ],
  metadataBase: new URL("https://webxkey.com"),
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Webxkey - Our Story & Team",
    description:
      "Discover the people and values behind Webxkey's success in digital solutions",
    url: "/about-us",
    siteName: "Webxkey",
    images: [
      {
        url: "https://webxkey.com/og-img.png",
        width: 1200,
        height: 630,
        alt: "Webxkey Team Working Together",
      },
      {
        url: "https://webxkey.com/og-img.png",
        width: 1000,
        height: 1000,
        alt: "Webxkey Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Webxkey - Our Story & Team",
    description: "Discover the people behind Webxkey's digital solutions",
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

export default function AboutPage() {
  return <AboutPageClient />;
}
