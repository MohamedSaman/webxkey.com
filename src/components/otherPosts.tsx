"use client";

import React, { useState } from "react";
import Container from "./container";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import { urlFor } from "@/sanity/lib/image";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center h-[100vh]">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-cyan-500"></div>
    </div>
  );
};

interface Author {
  name: string;
  image?: any;
}

interface OtherPost {
  _id?: string;
  slug: string;
  title: string;
  excerpt?: string;
  _createdAt?: string;
  _updatedAt?: string;
  author?: Author;
  mainImage?: any;
}

interface OtherPostsProps {
  otherPosts: OtherPost[];
  currentPostSlug?: string;
}

export default function OtherPosts({
  otherPosts,
  currentPostSlug,
}: OtherPostsProps) {
  const [loading, setLoading] = useState(false);
  const postsToDisplay = currentPostSlug
    ? otherPosts.filter((post) => post.slug !== currentPostSlug)
    : otherPosts;

  if (!postsToDisplay || postsToDisplay.length === 0) {
    return null;
  }

  const handleNavigation = () => {
    setLoading(true);
  };

  return (
    <Container className="mb-10 text-white">
      {loading && <Loading />}
      <p className="text-3xl font-semibold mb-5">You may also like</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {postsToDisplay.map((post) => (
          <div
            key={post.slug}
            className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col"
          >
            {/* Image container */}
            <div className="relative h-40 w-full overflow-hidden">
              {post.mainImage && (
                <>
                  <Image
                    src={urlFor(post.mainImage).url()}
                    width={600}
                    height={300}
                    alt={post.mainImage?.alt || post.title || ""}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-70" />
                </>
              )}
            </div>

            {/* Content container */}
            <div className="p-5 flex-1 flex flex-col">
              <p className="text-xs text-gray-400">
                {post._createdAt
                  ? dayjs(post._createdAt).format("MMMM D, YYYY")
                  : "Date not available"}
                {post._updatedAt &&
                  post._createdAt &&
                  !dayjs(post._createdAt).isSame(post._updatedAt, "day") && (
                    <span className="normal-case ml-2">
                      (updated {dayjs(post._updatedAt).format("MMMM D")})
                    </span>
                  )}
              </p>
              <Link href={`/blog/post/${post.slug}`} onClick={handleNavigation}>
                <p className="text-lg font-semibold mt-1 text-white group-hover:text-blue-400 transition-colors">
                  {post.title}
                </p>
              </Link>
              <p className="text-gray-300 mt-2 text-sm line-clamp-2">
                {post.excerpt}
              </p>

              {/* Only show author if it exists */}
              {post.author && (
                <div className="mt-4 flex items-center gap-2">
                  {post.author.image && (
                    <Image
                      src={urlFor(post.author.image).url()}
                      alt={post.author.name || ""}
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
        ))}
      </div>
    </Container>
  );
}
