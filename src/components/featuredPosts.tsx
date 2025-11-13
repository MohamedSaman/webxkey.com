"use client";

import Image from "next/image";
import React, { useState } from "react";
import dayjs from "dayjs";
import Link from "next/link";
import { getFeaturedPost, getRecentPosts } from "@/data/mockPosts";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center h-[100vh]">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-cyan-500"></div>
    </div>
  );
};

export default function FeaturedPosts() {
  const [loading, setLoading] = useState(false);

  // Get featured post and recent posts (as fallback)
  const featuredPost = getFeaturedPost();
  const recentPosts = getRecentPosts(3);

  // Use featured post if available, otherwise use recent posts
  const postsToDisplay = featuredPost
    ? [
        featuredPost,
        ...recentPosts
          .filter((post) => post.slug !== featuredPost.slug)
          .slice(0, 2),
      ]
    : recentPosts;

  if (postsToDisplay.length === 0) {
    return null;
  }

  const handleNavigation = () => {
    setLoading(true);
  };

  return (
    <div className="mt-10 mb-20">
      {loading && <Loading />}
      <h2 className="text-2xl font-medium tracking-wide text-white">
        Featured <span className="text-blue-400">Posts</span>
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {postsToDisplay.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            onClick={handleNavigation}
          >
            <div className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
              {/* Image container with gradient overlay */}
              <div className="relative h-48 w-full overflow-hidden">
                {post.mainImage && (
                  <>
                    <Image
                      alt={post.mainImage.alt || post.title}
                      src={post.mainImage.url}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      priority={featuredPost?.slug === post.slug}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-80" />
                  </>
                )}
              </div>

              {/* Content container */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-sm text-gray-400">
                  {dayjs(post._createdAt).format("MMMM D, YYYY")}
                  {/* Only show updated date if it exists and is different */}
                  {post._updatedAt &&
                    !dayjs(post._createdAt).isSame(post._updatedAt, "day") && (
                      <span className="normal-case ml-2">
                        (updated {dayjs(post._updatedAt).format("MMMM D")})
                      </span>
                    )}
                </p>
                <h2 className="text-xl font-bold mt-2 text-white group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-300 mt-3 mb-4 flex-1">{post.excerpt}</p>

                {/* Author and read more - only show if author exists */}
                <div className="mt-auto flex items-center justify-between">
                  {post.author && (
                    <div className="flex items-center gap-3">
                      {post.author.image && (
                        <Image
                          src={post.author.image}
                          alt={post.author.name}
                          width={50}
                          height={50}
                          className="aspect-square size-6 rounded-full object-cover"
                        />
                      )}
                      <p className="text-gray-400 text-sm">
                        {post.author.name}
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

              {/* Highlight featured post with a different decorative element */}
              {featuredPost?.slug === post.slug ? (
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
              ) : (
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
