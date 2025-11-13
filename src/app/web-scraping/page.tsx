import { redirect } from "next/navigation";

export default function WebScrapingPage() {
  redirect("/web-data-scraping-services");
}

export const dynamic = "force-static";
