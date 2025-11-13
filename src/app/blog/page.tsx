import Breadcrumbs from "@/components/Breadcrumbs";
import Container from "@/components/container";
import FeaturedPosts from "@/components/featuredPosts";
import RecentPosts from "@/components/RecentPosts";

export default async function BlogPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <div className="overflow-hidden text-white mt-2 md:mt-8 lg:mt-12 xl:mt-16">
      <Container>
        <Breadcrumbs items={breadcrumbs} />
        <FeaturedPosts />
        <RecentPosts />
      </Container>
    </div>
  );
}
