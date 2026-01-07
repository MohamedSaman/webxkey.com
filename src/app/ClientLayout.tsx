"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
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
    "/services/",
    "/brand-identity/",
    "/app-development/",
    "/website-development/",
    "/blockchain/",
    "/ui-ux-design/",
    "/social-media-marketing/",
    "/seo-services/",
    "/ai-services/",
    "/careers/",
    // "/team/",
    "/about-us/",
    "/contact/",
    "/project/",
    "/web-data-scraping-services/",
    "/data-scraping-services/",
    "/ecommerce-data-scraping/",
    "/web-scraping-api/",
    "/price-monitoring-scraping/",
    "/wordpress-website-designing-services/",
    "/blog/",
    "/pricing/",
  ];

  /*   useEffect(() => {
    const titleMap: Record<string, string> = {
      "/": "Webxkey - Unlock Your Digital Potential",
      "/project": "Projects - Webxkey",
      "/services": "Services - Webxkey",
      "/brand-identity": "Brand Identity - Webxkey",
      "/app-development": "App Development - Webxkey",
      "/website-development": "Web Development - Webxkey",
      "/blockchain": "Blockchain - Webxkey",
      "/ui-ux-design": "UI/UX Design - Webxkey",
      "/social-media_marketing": "Social Media Marketing - Webxkey",
      "/seo-optimization": "SEO Optimization - Webxkey",
      "/careers": "Careers - Webxkey",
      "/team": "Our Team - Webxkey",
      "/about-us": "About Us - Webxkey",
      "/contact": "Contact Us - Webxkey",
    };
    

    document.title = titleMap[pathname] || "Webxkey";

    // Update meta description dynamically
    const descriptionMap: Record<string, string> = {
      "/": "Comprehensive digital solutions for your business growth",
      "/project": "Explore our portfolio of successful digital projects",
      // Add descriptions for other routes
    };

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        descriptionMap[pathname] || "Unlock your digital potential with Webxkey"
      );
    }
  }, [pathname]); */

  // Check if path is valid or a dynamic blog post route
  const isBlogPost = pathname?.startsWith("/blog/post/");
  const shouldShowNavFooter = validRoutes.includes(pathname || "") || isBlogPost;

  return (
    <>
      {shouldShowNavFooter && <Navbar />}
      <main className="flex-grow">{children}</main>
      {shouldShowNavFooter && <Footer />}
      {shouldShowNavFooter && <WhatsAppChat />}
    </>
  );
}
