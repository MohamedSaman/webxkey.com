import { Metadata } from "next";
import WordPressClient from "./WordPressClient";

export const metadata: Metadata = {
  title: {
    default: "Professional WordPress Design & Development | Webxkey",
    template: "%s | Webxkey",
  },
  description:
    "Transform your online presence with Webxkey's expert WordPress design services. Custom solutions, faster load times, and higher conversions tailored to your business goals.",
  keywords: [
    "WordPress website design",
    "WordPress development services",
    "custom WordPress solutions",
    "WordPress eCommerce development",
    "responsive WordPress design",
    "high-performance WordPress",
    "WordPress SEO optimization",
    "WooCommerce experts",
    "WordPress maintenance",
    "WordPress security",
  ],
  metadataBase: new URL("https://webxkey.com"),
  alternates: {
    canonical: "/wordpress-website-designing-services",
  },
  openGraph: {
    title: "WordPress Experts - Custom Design & Development | Webxkey",
    description:
      "Get a WordPress site that converts visitors into customers. Our performance-optimized designs deliver results with 99.9% uptime.",
    url: "/wordpress-website-designing-services",
    siteName: "Webxkey",
    images: [
      {
        url: "https://webxkey.com/wordpress-og-img.png",
        width: 1200,
        height: 630,
        alt: "Webxkey WordPress Design Process",
      },
      {
        url: "https://webxkey.com/wordpress-og-square.png",
        width: 1000,
        height: 1000,
        alt: "WordPress Design Services by Webxkey",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Solutions That Drive Growth | Webxkey",
    description:
      "From custom themes to WooCommerce stores, we build WordPress sites that perform. See our portfolio of successful projects.",
    images: ["https://webxkey.com/wordpress-twitter-card.png"],
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

const WordPressDesignServices = () => {
  return <WordPressClient />;
};

export default WordPressDesignServices;
