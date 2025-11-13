import { redirect } from "next/navigation";

export default function WebDevelopmentPage() {
  redirect("/website-development");
}

export const dynamic = "force-static";
