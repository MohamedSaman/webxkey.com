import { urlFor } from "@/sanity/lib/image";
import { getFeaturedPosts } from "@/sanity/queries";
import Image from "next/image";
import React from "react";
import dayjs from "dayjs";
import Link from "next/link";

// Define Post and Author interfaces
interface AuthorImage {
  asset: {
    _ref: string;
  };
}

interface Author {
  name: string;
  image?: AuthorImage;
}

interface MainImage {
  alt?: string;
  asset: {
    _ref: string;
  };
}

interface Post {
  title: string;
  slug: string;
  excerpt?: string;
  keyTakeaways?: string[];
  publishedAt: string;
  _createdAt: string;
  mainImage?: MainImage;
  author?: Author;
}

export default async function FeaturedPosts() {
  const featuredPosts = await getFeaturedPosts(3);
  if (featuredPosts?.length === 0) {
    return null;
  }

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-medium tracking-wide text-white mb-8">
        Featured <span className="text-blue-400">Posts</span>
      </h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {featuredPosts?.map((post: Post) => (
          <Link key={post?.slug} href={`/blog/post/${post.slug}`}>
            <div className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-700">
              {/* Image container */}
              <div className="relative h-48 w-full overflow-hidden">
                {post?.mainImage && (
                  <Image
                    alt={post?.mainImage?.alt ?? post.title ?? ""}
                    src={urlFor(post?.mainImage).url()}
                    width={400}
                    height={240}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>

              {/* Content container */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Category tag */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
                    WebxKey
                  </span>
                </div>

                {/* Date - Improved with fallback */}
                <p className="text-sm text-gray-400 mb-2">
                  {post?.publishedAt
                    ? dayjs(post.publishedAt).format("MMMM D, YYYY")
                    : post?._createdAt
                    ? dayjs(post._createdAt).format("MMMM D, YYYY")
                    : "Date not available"}
                </p>

                {/* Title */}
                <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3 leading-tight">
                  {post?.title}
                </h2>

                {/* Key Takeaways */}
                {post?.keyTakeaways && post?.keyTakeaways?.length > 0 && (
                  <p className="text-white text-sm mb-3 leading-relaxed">
                    {post?.keyTakeaways[0]}
                  </p>
                )}

                {/* Excerpt */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
                  {post?.excerpt}
                </p>

                {/* Author */}
                {post?.author && (
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-700">
                    {post?.author?.image && (
                      <Image
                        src={urlFor(post?.author?.image).url()}
                        alt="authorImage"
                        width={32}
                        height={32}
                        className="rounded-full object-cover"
                      />
                    )}
                    <p className="text-gray-400 text-sm">
                      {post?.author?.name}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}