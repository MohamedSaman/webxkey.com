import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OtherPosts from "@/components/otherPosts";
import { getOtherPosts, mockPosts } from "@/data/mockPosts";
import dayjs from "dayjs";
import Image from "next/image";

export const dynamic = "force-static";

// Define types for the block content
type BlockChild = {
  text: string;
};

type Block = {
  _type: "block";
  style?: string;
  children: BlockChild[];
};

type ImageBlock = {
  _type: "image";
  url: string;
  alt?: string;
  caption?: string;
};

type CodeBlock = {
  _type: "code";
  code: string;
};

type ContentBlock = Block | ImageBlock | CodeBlock;

export default function Post2() {
  const slug = "post-2";
  const post = mockPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title, href: `/blog/${slug}` },
  ];

  // Function to render portable text blocks
  const renderContent = () => {
    if (!post.body) return null;

    // If body is a string, just render it
    if (typeof post.body === "string") {
      return <div dangerouslySetInnerHTML={{ __html: post.body }} />;
    }

    // If body is an array (PortableText), render accordingly
    return (
      <div>
        {(post.body as ContentBlock[]).map((block, index) => {
          switch (block._type) {
            case "block":
              switch (block.style) {
                case "h1":
                  return (
                    <h1 key={index} className="text-3xl font-bold my-4">
                      {block.children[0].text}
                    </h1>
                  );
                case "h2":
                  return (
                    <h2 key={index} className="text-2xl font-bold my-3">
                      {block.children[0].text}
                    </h2>
                  );
                case "h3":
                  return (
                    <h3 key={index} className="text-xl font-bold my-2">
                      {block.children[0].text}
                    </h3>
                  );
                default:
                  return (
                    <p key={index} className="my-2">
                      {block.children[0].text}
                    </p>
                  );
              }
            case "image":
              return (
                <div key={index} className="my-6 sm:my-10">
                  <Image
                    src={block.url}
                    alt={block.alt || ""}
                    width={800}
                    height={400}
                    className="rounded-xl shadow-md"
                  />
                  {block.caption && (
                    <figcaption className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-3">
                      {block.caption}
                    </figcaption>
                  )}
                </div>
              );
            case "code":
              return (
                <pre
                  key={index}
                  className="bg-gray-100 dark:bg-gray-800 p-3 sm:p-4 rounded-lg overflow-x-auto my-6 sm:my-8"
                >
                  <code>{block.code}</code>
                </pre>
              );
            default:
              return null;
          }
        })}
      </div>
    );
  };

  // Rest of your component remains the same
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
                src={post.author.image}
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
              src={post.mainImage.url}
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
          {renderContent()}
        </div>
      </article>

      <OtherPosts otherPosts={getOtherPosts(slug, 3)} currentPostSlug={slug} />
      <Footer />
    </>
  );
}
