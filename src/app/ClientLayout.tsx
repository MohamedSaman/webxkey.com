"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/app/styles/home.css";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  console.log("Blog layout loaded");

  const validRoutes = [
    "/",
    "/services",
    "/brand-identity",
    "/app-development",
    "/website-development",
    "/blockchain",
    "/ui-ux-design",
    "/social-media-marketing",
    "/seo-services",
    "/careers",
    "/team",
    "/about-us",
    "/contact",
    "/project",
    "/web-data-scraping-services",
    "/data-scraping-services",
    "/ecommerce-data-scraping",
    "/web-scraping-api",
    "/price-monitoring-scraping",
    "/wordpress-website-designing-services",
    "/blog",
    "/pricing",
  ];

  const shouldShowNavFooter = validRoutes.includes(pathname);

  return (
    <>
      {shouldShowNavFooter && <Navbar />}
      <main className="flex-grow">{children}</main>
      {shouldShowNavFooter && <Footer />}
    </>
  );
}
