import { redirect } from "next/navigation";

export default function WebScrapingPage() {
  redirect("/seo-services");
}

export const dynamic = "force-static";
