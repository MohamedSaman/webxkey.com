"use client";

import Image from "next/image";
import React, { useState } from "react";
import dayjs from "dayjs";
import Link from "next/link";
import { getRecentPosts } from "@/data/mockPosts";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center h-[100vh]">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-cyan-500"></div>
    </div>
  );
};

export default function RecentPosts() {
  const [loading, setLoading] = useState(false);
  const recentPosts = getRecentPosts(6);

  if (!recentPosts || recentPosts.length === 0) {
    return null;
  }

  const handleNavigation = () => {
    setLoading(true);
  };

  return (
    <div className="mt-20">
      {loading && <Loading />}
      <h2 className="text-2xl font-medium tracking-wide text-white">
        Recent <span className="text-blue-400">Posts</span>
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recentPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            onClick={handleNavigation}
          >
            <div className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
              {/* Image container - smaller than featured posts */}
              <div className="relative h-40 w-full overflow-hidden">
                {post.mainImage && (
                  <>
                    <Image
                      alt={post.mainImage.alt || post.title}
                      src={post.mainImage.url}
                      width={600}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      priority={recentPosts.indexOf(post) < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-70" />
                  </>
                )}
              </div>

              {/* Content container */}
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-xs text-gray-400">
                  {dayjs(post._createdAt).format("MMMM D, YYYY")}
                  {/* Only show updated date if _updatedAt exists and is different */}
                  {post._updatedAt &&
                    !dayjs(post._createdAt).isSame(post._updatedAt, "day") && (
                      <span className="normal-case ml-2">
                        (updated {dayjs(post._updatedAt).format("MMMM D")})
                      </span>
                    )}
                </p>
                <h2 className="text-lg font-semibold mt-1 text-white group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-300 mt-2 text-sm line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Only show author if it exists */}
                {post.author && (
                  <div className="mt-4 flex items-center gap-2">
                    {post.author.image && (
                      <Image
                        src={post.author.image}
                        alt={post.author.name}
                        width={50}
                        height={50}
                        className="aspect-square size-5 rounded-full object-cover"
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
