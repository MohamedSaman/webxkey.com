import Breadcrumbs from "@/components/Breadcrumbs";
import Container from "@/components/container";
import FeaturedPosts from "@/components/featuredPosts";
import RecentPosts from "@/components/RecentPosts";

// Force dynamic rendering to always fetch fresh data
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function BlogPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <div className="overflow-hidden text-white">
      <Container className="space-y-4">
        <Breadcrumbs items={breadcrumbs} />
        <RecentPosts />
        <FeaturedPosts />
      </Container>
    </div>
  );
}