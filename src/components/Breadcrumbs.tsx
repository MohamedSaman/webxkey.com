// components/Breadcrumbs.tsx
"use client";

import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-cyan-500"></div>
    </div>
  );
};

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Effect to clean up loading state if component unmounts
  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    // Only prevent default and show loader if we're navigating to a different page
    if (pathname !== href) {
      e.preventDefault();
      setLoading(true);
      router.push(href);
      // The loading state will be cleaned up either by the useEffect on unmount
      // or when the new route loads (which will re-render this component)
    }
  };

  return (
    <>
      <nav className="mb-6 flex items-center text-sm" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-white">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && <ChevronRightIcon className="mx-2 h-4 w-4" />}
              {index === items.length - 1 ? (
                <span>{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="text-white hover:text-gray-400 hover:underline"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      {loading && <Loading />}
    </>
  );
}
