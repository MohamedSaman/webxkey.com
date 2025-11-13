"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/app/styles/home.css";

export default function GlobalNotFound() {
  const pathname = usePathname();

  useEffect(() => {
    console.error(`Path not found: ${pathname}`);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg">
          The page at{" "}
          <code className="bg-gray-100 p-1 rounded">{pathname}</code>{" "}
          doesn&#39;t exist.
        </p>
      </div>
      <Footer />
    </>
  );
}
