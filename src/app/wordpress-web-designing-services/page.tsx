import { redirect } from "next/navigation";

export default function WebScrapingPage() {
  redirect("/wordpress-website-designing-services");
}

export const dynamic = "force-static";
