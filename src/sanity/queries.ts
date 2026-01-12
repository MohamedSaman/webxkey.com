import { defineQuery } from "next-sanity";
import { clientFetch } from "./lib/client";

const FEATURED_POSTS_QUERY =
  defineQuery(`*[_type=='post' && isFeatured==true] | order(_createdAt desc)[0...$quantity]{
    title,
    'slug':slug.current,
    _createdAt,
    _updatedAt,
    mainImage,
    excerpt,
    keyTakeaways,
    author->{
        name, 
        image
    }
}`);

export const getFeaturedPosts = async (quantity: number) => {
  return await clientFetch({
    query: FEATURED_POSTS_QUERY,
    params: { quantity },
  });
};

const ALL_POSTS_QUERY = defineQuery(`*[
  _type == "post"
]|order(_createdAt desc)[0...$quantity]{
  title,
  "slug": slug.current,
  _createdAt,
  _updatedAt,
  mainImage,
  excerpt,
  keyTakeaways,
  author->{
    name,
    image,
  },
}`);

export const getAllPosts = async (quantity: number) => {
  return await clientFetch({
    query: ALL_POSTS_QUERY,
    params: { quantity },
  });
};

const CATEGORIES_QUERY = defineQuery(`*[_type=='category']|order(title asc){
  title,
  "slug":slug.current
}`);

export const getCategories = async () => {
  return await clientFetch({
    query: CATEGORIES_QUERY,
  });
};

const POST_QUERY = defineQuery(`*[_type=='post' && slug.current == $slug][0]{
  _createdAt,
  _updatedAt,
  title,
  mainImage,
  excerpt,
  body,
  keyTakeaways,
  _id,
  "slug": slug.current,
  author->{
    name,
    image,
  },
  categories[]->{
    title,
    "slug": slug.current,
  }
}`);

export const getPost = async (slug: string) => {
  return await clientFetch({
    query: POST_QUERY,
    params: { slug },
  });
};

const CATEGORY_POST = defineQuery(`*[
  _type == "post"
  && select(defined($category) => $category in categories[]->slug.current, true)
]|order(_createdAt desc){
  title,
  "slug": slug.current,
  _createdAt,
  _updatedAt,
  excerpt,
  author->{
    name,
    image,
  },
}`);

export const getCategoryPost = async (category?: string) => {
  return await clientFetch({
    query: CATEGORY_POST,
    params: {
      category,
    },
  });
};

const GET_OTHERS_POSTS_QUERY = defineQuery(`*[
  _type == "post" &&
  defined(slug.current) &&
  slug.current != $currentSlug
]|order(_createdAt desc)[0...$quantity]{
  title,
  "slug": slug.current,
  _createdAt,
  _updatedAt,
  mainImage,
  excerpt,
  keyTakeaways,
  author->{
    name,
    image
  }
}`);

export const getOtherPosts = async (currentSlug: string, quantity: number) => {
  return await clientFetch({
    query: GET_OTHERS_POSTS_QUERY,
    params: {
      currentSlug,
      quantity
    },
  });
};