// app/layout.tsx (Server Component)
import type { Metadata } from "next";
import "@/app/styles/home.css";
import ClientLayout from "./ClientLayout";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Webxkey - Unlock Your Digital Potential",
  description:
    "Webxkey helps businesses unlock their digital potential through cutting-edge web development, app creation, and digital marketing solutions.",
  keywords: [
    "website development",
    "app development",
    "UI/UX design",
    "SEO",
    "digital marketing",
    "blockchain",
  ],
  openGraph: {
    title: "Webxkey - Unlock Your Digital Potential",
    description: "Comprehensive digital solutions for your business growth",
    url: "https://webxkey.com",
    siteName: "Webxkey",
    images: [
      {
        url: "https://webxkey.com/og-img.png", // Absolute URL is important
        width: 1200,
        height: 630,
        alt: "Webxkey - Digital Solutions for Your Business",
        type: "image/png", // Explicitly declare the image type
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webxkey - Unlock Your Digital Potential",
    description: "Comprehensive digital solutions for your business growth",
    creator: "@webxkey", // Add your Twitter handle
    images: {
      url: "https://webxkey.com/og-img.png",
      alt: "Webxkey - Digital Solutions for Your Business",
      width: 1200,
      height: 630,
    },
  },
  alternates: {
    canonical: "https://webxkey.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "HHhh2bBY0HtKmQv9xkHoG5dTYMjaSolBtLAzTpn2H8g",
  },
  metadataBase: new URL("https://webxkey.com"), // Important for absolute URLs
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Google Analytics and Structured Data can be rendered here */}
      <GoogleAnalytics />
      <StructuredData
        type="organization"
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Webxkey",
          url: "https://webxkey.com",
          logo: "https://webxkey.com/Images/logo.png",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+94 755 299721",
            contactType: "customer service",
          },
          sameAs: [
            "https://linkedin.com/company/webxkey",
            "https://x.com/webxkey",
          ],
        }}
      />
      <ClientLayout>{children}</ClientLayout>
    </>
  );
}
