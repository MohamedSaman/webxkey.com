import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import "@/app/styles/home.css";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center bg-transparent text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-xl">
            The page you&#39;re looking for doesn&#39;t exist.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors cursor-pointer"
          >
            Return Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
