import { urlFor } from "@/sanity/lib/image";
import { getFeaturedPosts } from "@/sanity/queries";
import Image from "next/image";
import React from "react";
import dayjs from "dayjs";
import Link from "next/link";

// Define Post and Author interfaces
interface Author {
  name: string;
  image?: any;
}

interface Post {
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt: string;
  mainImage?: any;
  author?: Author;
}

export default async function FeaturedPosts() {
  const featuredPosts = await getFeaturedPosts(3);
  if (featuredPosts?.length === 0) {
    return null;
  }

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-medium tracking-wide text-white">
        Featured <span className="text-blue-400">Posts</span>
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {featuredPosts?.map((post: Post) => (
          <Link key={post?.slug} href={`/blog/post/${post.slug}`}>
            <div className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
              {/* Image container with gradient overlay */}
              <div className="relative h-48 w-full overflow-hidden">
                {post?.mainImage && (
                  <>
                    <Image
                      alt={post?.mainImage?.alt ?? post.title ?? ""}
                      src={urlFor(post?.mainImage).url()}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-80" />
                  </>
                )}
              </div>

              {/* Content container */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-sm text-gray-400">
                  {post?._createdAt
                    ? dayjs(post._createdAt).format("MMMM D, YYYY")
                    : "Date not available"}
                </p>
                <h2 className="text-xl font-bold mt-2 text-white group-hover:text-blue-400 transition-colors">
                  {post?.title}
                </h2>
                <p className="text-gray-300 mt-3 mb-4 flex-1">
                  {post?.excerpt}
                </p>

                {/* Author and read more */}
                <div className="mt-auto flex items-center justify-between">
                  {post?.author && (
                    <div className="flex items-center gap-3">
                      {post?.author?.image && (
                        <Image
                          src={urlFor(post?.author?.image).url()}
                          alt="authorImage"
                          width={50}
                          height={50}
                          className="aspect-square size-6 rounded-full object-cover"
                        />
                      )}
                      <p className="text-gray-400 text-sm">
                        {post?.author?.name}
                      </p>
                    </div>
                  )}

                  <span className="inline-flex items-center text-blue-400 group-hover:text-white group-hover:bg-blue-600 px-4 py-2 rounded-full text-sm font-medium transition-all border border-blue-400 group-hover:border-transparent">
                    Read more
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
