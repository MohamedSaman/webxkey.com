import type { Metadata } from "next";
import "../styles/home.css";

export const metadata: Metadata = {
  title: "Our - Blogs",
  description:
    "Stay informed with product updates, company news, and insights on how to sell smarter at your company.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
