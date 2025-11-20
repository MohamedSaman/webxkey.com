import Image from "next/image";
import React from "react";
import dayjs from "dayjs";
import Link from "next/link";
import { getAllPosts } from "@/sanity/queries";
import { urlFor } from "@/sanity/lib/image";

interface Post {
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt: string;
  _createdAt: string;
  mainImage?: any;
  author?: {
    name: string;
    image?: any;
  };
}

export default async function RecentPosts() {
  const recentPosts = await getAllPosts(6);

  if (!recentPosts || recentPosts.length === 0) {
    return null;
  }

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-medium tracking-wide text-white mb-8">
        Recent <span className="text-blue-400">Posts</span>
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recentPosts.map((post: Post) => (
          <Link key={post.slug} href={`/blog/post/${post.slug}`}>
            <div className="group bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col border border-gray-700">
              {/* Image container */}
              <div className="relative h-40 w-full overflow-hidden">
                {post.mainImage && (
                  <Image
                    alt={post.mainImage?.alt || post.title || ""}
                    src={urlFor(post.mainImage).url()}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={recentPosts.indexOf(post) < 3}
                  />
                )}
              </div>

              {/* Content container */}
              <div className="p-5 flex-1 flex flex-col">
                {/* Category tag */}
                <div className="mb-2">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
                    WebxKey
                  </span>
                </div>

                {/* Date - Improved with fallback */}
                <p className="text-xs text-gray-400 mb-2">
                  {post.publishedAt
                    ? dayjs(post.publishedAt).format("MMMM D, YYYY")
                    : post._createdAt
                    ? dayjs(post._createdAt).format("MMMM D, YYYY")
                    : "Date not available"}
                </p>

                {/* Title */}
                <h2 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-2 leading-tight">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed mb-3">
                  {post.excerpt}
                </p>

                {/* Author */}
                {post.author && (
                  <div className="mt-auto flex items-center gap-2 pt-3 border-t border-gray-700">
                    {post.author.image && (
                      <Image
                        src={urlFor(post.author.image).url()}
                        alt={post.author.name || ""}
                        width={24}
                        height={24}
                        className="rounded-full object-cover"
                      />
                    )}
                    <p className="text-gray-400 text-xs">{post.author.name}</p>
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