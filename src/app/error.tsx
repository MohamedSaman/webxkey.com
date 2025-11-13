"use client";

import Navbar from "@/components/Navbar";
import "../app/styles/home.css";
import Footer from "@/components/Footer";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Try again
        </button>
      </div>
      <Footer />
    </>
  );
}
