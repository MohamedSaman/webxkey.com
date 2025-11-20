import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OtherPosts from "@/components/otherPosts";
import { urlFor } from "@/sanity/lib/image";
import { getOtherPosts, getPost } from "@/sanity/queries";
import dayjs from "dayjs";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Params {
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  return {
    title: post?.title || "Post not found",
    description: post?.excerpt,
  };
}

export default async function SinglePostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: `${slug}`, href: `/blog/post/${slug}` },
  ];

  const otherPosts = await getOtherPosts(slug, 3);

  return (
    <>
      <Navbar />
      <article className="max-w-7xl mx-auto py-8 md:py-12 px-4 sm:px-6 lg:px-8 text-gray-800 dark:text-gray-200">
        <Breadcrumbs items={breadcrumbs} />

        {/* Article Header */}
        <header className="mb-12 md:mb-16">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4 md:mb-6">
            {post._createdAt
              ? dayjs(post._createdAt).format("MMMM D, YYYY")
              : "Date not available"}
            {post._updatedAt &&
              !dayjs(post._createdAt).isSame(post._updatedAt, "day") && (
                <span className="normal-case ml-2">
                  (updated {dayjs(post._updatedAt).format("MMMM D")})
                </span>
              )}
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 md:gap-4 mt-6 md:mt-8">
            {post.author?.image && (
              <Image
                src={urlFor(post.author.image).url()}
                alt={post.author.name}
                width={48}
                height={48}
                className="rounded-full w-10 h-10 md:w-12 md:h-12 object-cover"
              />
            )}
            <div>
              {post.author?.name && (
                <p className="font-medium text-sm md:text-base">
                  {post.author.name}
                </p>
              )}
              {post._createdAt && (
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                  {dayjs(post._createdAt).format("MMMM D, YYYY")}
                  <span className="mx-1 md:mx-2">•</span>
                  {Math.ceil((post.body?.length || 0) / 1500) || 5} min read
                </p>
              )}
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.mainImage && (
          <div className="mb-12 md:mb-16 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.mainImage.alt || post.title}
              width={1200}
              height={630}
              className="w-full h-auto object-cover"
              priority
            />
            {post.mainImage.caption && (
              <figcaption className="text-center text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-3">
                {post.mainImage.caption}
              </figcaption>
            )}
          </div>
        )}

        {/* Excerpt */}
        {post.excerpt && (
          <div className="mb-12 md:mb-16 p-4 md:p-6 bg-blue-50 dark:bg-gray-800 rounded-xl border-l-4 border-blue-500">
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-800 dark:text-blue-300">
              Key Takeaways
            </h2>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
              {post.excerpt}
            </p>
          </div>
        )}

        {/* Article Content */}
        <div
          className="prose prose-sm sm:prose-base lg:prose-lg max-w-none dark:prose-invert 
                      prose-headings:font-serif prose-headings:font-normal
                      prose-a:text-blue-600 hover:prose-a:text-blue-800 dark:prose-a:text-blue-400 dark:hover:prose-a:text-blue-300
                      prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-gray-800
                      prose-img:rounded-xl prose-img:shadow-md
                      prose-ul:list-disc prose-ol:list-decimal
                      prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-12 sm:prose-h2:mt-16 prose-h2:mb-6 sm:prose-h2:mb-8
                      prose-h3:text-lg sm:prose-h3:text-xl prose-h3:mt-8 sm:prose-h3:mt-10 prose-h3:mb-4 sm:prose-h3:mb-6
                      prose-p:my-4 sm:prose-p:my-6 prose-p:leading-relaxed
                      prose-li:my-2 sm:prose-li:my-3
                      prose-pre:my-6 sm:prose-pre:my-8
                      prose-blockquote:my-6 sm:prose-blockquote:my-8
                      mx-auto sm:mx-0"
        >
          <PortableText
            value={post.body || []}
            components={{
              types: {
                image: ({ value }) => (
                  <div className="my-6 sm:my-10">
                    <Image
                      src={urlFor(value).url()}
                      alt={value.alt || ""}
                      width={800}
                      height={400}
                      className="rounded-xl shadow-md"
                    />
                    {value.caption && (
                      <figcaption className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-3">
                        {value.caption}
                      </figcaption>
                    )}
                  </div>
                ),
                code: ({ value }) => (
                  <pre className="bg-gray-100 dark:bg-gray-800 p-3 sm:p-4 rounded-lg overflow-x-auto my-6 sm:my-8">
                    <code>{value.code}</code>
                  </pre>
                ),
                separator: ({ value }) => {
                  switch (value.style) {
                    case "line":
                      return (
                        <hr className="my-6 sm:my-8 border-t border-gray-600" />
                      );
                    case "space":
                      return <div className="my-6 sm:my-8" />;
                    default:
                      return null;
                  }
                },
              },
              block: {
                h2: ({ children }) => (
                  <h2 className="group relative text-xl sm:text-2xl md:text-3xl font-semibold mt-12 sm:mt-16 mb-6 sm:mb-8">
                    <span className="block">{children}</span>
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="group relative text-lg sm:text-xl md:text-2xl font-medium mt-8 sm:mt-10 mb-4 sm:mb-6">
                    <span className="block">{children}</span>
                  </h3>
                ),
                normal: ({ children }) => (
                  <p className="leading-relaxed mb-4 sm:mb-6">{children}</p>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-blue-500 bg-blue-50 dark:bg-gray-800 pl-4 sm:pl-6 py-4 sm:py-5 my-6 sm:my-8 rounded-r-lg">
                    {children}
                  </blockquote>
                ),
              },
              list: {
                bullet: ({ children }) => (
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 sm:space-y-3">
                    {children}
                  </ul>
                ),
                number: ({ children }) => (
                  <ol className="list-decimal pl-5 sm:pl-6 space-y-2 sm:space-y-3">
                    {children}
                  </ol>
                ),
              },
              marks: {
                link: ({ children, value }) => {
                  const rel = !value.href.startsWith("/")
                    ? "noreferrer noopener"
                    : undefined;
                  return (
                    <Link
                      href={value.href}
                      rel={rel}
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                    >
                      {children}
                    </Link>
                  );
                },
                strong: ({ children }) => (
                  <strong className="font-semibold">{children}</strong>
                ),
                em: ({ children }) => <em className="italic">{children}</em>,
                code: ({ children }) => (
                  <code className="bg-gray-100 dark:bg-gray-700 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm font-mono">
                    {children}
                  </code>
                ),
              },
            }}
          />
        </div>

        {/* Article Footer */}
        {post.author && (
          <footer className="mt-16 sm:mt-20 pt-8 sm:pt-12 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8">
              {post.author.image && (
                <Image
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  width={80}
                  height={80}
                  className="rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover"
                />
              )}
              <div>
                <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-4">
                  About {post.author.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  {post.author.bio ||
                    "The author is a contributor to our blog."}
                </p>
              </div>
            </div>
          </footer>
        )}
      </article>

      <OtherPosts otherPosts={otherPosts} />
      <Footer />
    </>
  );
}
