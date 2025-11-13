// mockPosts.ts
import dayjs from "dayjs";

// Define a type for mark definitions
export interface PortableTextMarkDef {
  _type: string;
  [key: string]: unknown;
}

export interface PortableTextBlock {
  _type: "block";
  style: "normal" | "h2" | "h3" | "h4" | "blockquote";
  children: PortableTextSpan[];
  markDefs: PortableTextMarkDef[]; // Replaced any[] with specific type
  listItem?: "bullet" | "number";
}

export interface PortableTextSpan {
  _type: "span";
  text: string;
  marks?: string[];
}

export interface PortableTextImage {
  _type: "image";
  asset: {
    _type: "reference";
    _ref: string;
  };
  alt?: string;
  caption?: string;
}

export interface PortableTextCodeBlock {
  _type: "code";
  code: string;
  language?: string;
}

// Define a type for other portable text types
export interface OtherPortableTextType {
  _type: string;
  [key: string]: unknown; // Replaced any with unknown
}

export type PortableText = Array<
  PortableTextBlock | 
  PortableTextImage | 
  PortableTextCodeBlock | 
  OtherPortableTextType // Replaced the inline any with our defined type
>;

export interface Author {
  name: string;
  image: string;
}

export interface Image {
  url: string;
  alt: string;
  caption?: string;
}

export interface BlogPost {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  _createdAt: string;
  _updatedAt?: string;
  author: Author;
  mainImage: Image;
  body: PortableText; // Replaced any[] with PortableText type
  estimatedReadingTime: number;
}

export interface OtherPost {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  _createdAt: string;
  _updatedAt?: string; // Make optional
  author?: Author; // Make optional
  mainImage: Image;
  estimatedReadingTime: number;
}

// Mock data for authors
const authors: Author[] = [
  {
    name: "Farhan",
    image: "/Images/authors/farhan.png",
  },
  {
    name: "Saman",
    image: "/Images/authors/saman.png",
  },
  {
    name: "Akmal",
    image: "/Images/authors/akmal.png",
  },
];

// Mock images
const images: Record<string, Image> = {
  post1Main: {
    url: "/Images/blog/post-1.webp",
    alt: "Working on a laptop",
    caption: "Photo by John Doe on Unsplash",
  },
  post2Main: {
    url: "/Images/blog/post-2.png",
    alt: "Code editor with React code",
    caption: "Photo by Jane Smith on Unsplash",
  },
  post3Main: {
    url: "/Images/blog/post-3.png",
    alt: "Team meeting",
    caption: "Photo by Team X on Unsplash",
  },
  post4Main: {
    url: "/Images/blog/post-4.png",
    alt: "Mobile development",
    caption: "Photo by Dev Team on Unsplash",
  },
};

// PortableText mock content for posts
const portableTextContent = {
  paragraph: (text: string) => ({
    _type: "block",
    style: "normal",
    children: [{ _type: "span", text }],
    markDefs: [],
  }),
  heading2: (text: string) => ({
    _type: "block",
    style: "h2",
    children: [{ _type: "span", text }],
    markDefs: [],
  }),
  heading3: (text: string) => ({
    _type: "block",
    style: "h3",
    children: [{ _type: "span", text }],
    markDefs: [],
  }),
  image: (value: Image) => ({
    _type: "image",
    asset: {
      _type: "reference",
      _ref: "image-" + Math.random().toString(36).substring(7),
    },
    alt: value.alt,
    caption: value.caption,
  }),
  codeBlock: (code: string, language: string = "javascript") => ({
    _type: "code",
    code,
    language,
  }),
  bulletList: (items: string[]) => ({
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: items.map((item) => ({
      _type: "span",
      text: item,
    })),
    markDefs: [],
  }),
  numberedList: (items: string[]) => ({
    _type: "block",
    style: "normal",
    listItem: "number",
    children: items.map((item) => ({
      _type: "span",
      text: item,
    })),
    markDefs: [],
  }),
  blockquote: (text: string) => ({
    _type: "block",
    style: "blockquote",
    children: [{ _type: "span", text }],
    markDefs: [],
  }),
};

// Generate mock blog posts
export const mockPosts: BlogPost[] = [
  {
    _id: "post1",
    slug: "post-1",
    title: "Getting Started with Next.js and TypeScript",
    excerpt: "Learn how to set up a new Next.js project with TypeScript and explore its core features.",
    _createdAt: dayjs().subtract(5, "days").toISOString(),
    _updatedAt: dayjs().subtract(1, "day").toISOString(),
    author: authors[0],
    mainImage: images.post1Main,
    estimatedReadingTime: 8,
    body: [
      portableTextContent.heading2("Introduction to Next.js"),
      portableTextContent.paragraph(
        "Next.js is a React framework that enables server-side rendering and static site generation, which are essential for building modern web applications."
      ),
      portableTextContent.heading3("Why Use Next.js?"),
      portableTextContent.paragraph(
        "Next.js provides many benefits out of the box, including:"
      ),
      portableTextContent.bulletList([
        "Server-side rendering for better SEO",
        "Static site generation for blazing fast performance",
        "API routes for building backend functionality",
        "Built-in CSS and Sass support",
        "Image optimization",
      ]),
      portableTextContent.heading2("Setting Up TypeScript"),
      portableTextContent.paragraph(
        "TypeScript brings type safety to your JavaScript code, helping you catch errors early and improve developer experience."
      ),
      portableTextContent.codeBlock(
        `// Example TypeScript component
interface Props {
  title: string;
  count: number;
}

const MyComponent: React.FC<Props> = ({ title, count }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Count: {count}</p>
    </div>
  );
};`
      ),
      portableTextContent.blockquote(
        "TypeScript is JavaScript that scales. It adds optional static typing to the language, catching errors before they reach runtime."
      ),
    ],
  },
  {
    _id: "post2",
    slug: "post-2",
    title: "Advanced React Patterns for 2023",
    excerpt: "Explore advanced React patterns like compound components, render props, and hooks composition.",
    _createdAt: dayjs().subtract(10, "days").toISOString(),
    author: authors[1],
    mainImage: images.post2Main,
    estimatedReadingTime: 12,
    body: [
      portableTextContent.heading2("Modern React Patterns"),
      portableTextContent.paragraph(
        "React has evolved significantly over the years, and with it, the patterns we use to build applications."
      ),
      portableTextContent.heading3("Compound Components"),
      portableTextContent.paragraph(
        "Compound components allow you to create components that work together to form a complete UI."
      ),
      portableTextContent.codeBlock(
        `// Example of compound components
const Tabs = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      isActive: index === activeIndex,
      onSelect: () => setActiveIndex(index)
    });
  });
};

const Tab = ({ isActive, onSelect, children }) => (
  <button onClick={onSelect} className={isActive ? 'active' : ''}>
    {children}
  </button>
);`
      ),
    ],
  },
  {
    _id: "post3",
    slug: "post-3",
    title: "Building Accessible Web Applications",
    excerpt: "Learn the best practices for creating web applications that everyone can use, regardless of ability.",
    _createdAt: dayjs().subtract(15, "days").toISOString(),
    author: authors[2],
    mainImage: images.post3Main,
    estimatedReadingTime: 10,
    body: [
      portableTextContent.heading2("Why Accessibility Matters"),
      portableTextContent.paragraph(
        "Accessibility ensures that your website can be used by as many people as possible, including those with disabilities."
      ),
    ],
  },
  {
    _id: "post4",
    slug: "post-4",
    title: "The Future of Web Development: WASM and Beyond",
    excerpt: "Exploring WebAssembly and other emerging technologies that are shaping the future of the web.",
    _createdAt: dayjs().subtract(20, "days").toISOString(),
    author: authors[0],
    mainImage: images.post4Main,
    estimatedReadingTime: 15,
    body: [
      portableTextContent.heading2("WebAssembly Revolution"),
      portableTextContent.paragraph(
        "WebAssembly (WASM) allows code written in languages like C, C++, and Rust to run in the browser at near-native speed."
      ),
    ],
  },
];

// Get a single post by slug
export const getPost = (slug: string): BlogPost | undefined => {
  return mockPosts.find((post) => post.slug === slug);
};

// Get other posts (excluding the current one)
export const getOtherPosts = (currentSlug: string, limit: number = 3): OtherPost[] => {
  return mockPosts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, limit)
    .map((post) => ({
      _id: post._id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      _createdAt: post._createdAt,
      mainImage: post.mainImage,
      estimatedReadingTime: post.estimatedReadingTime,
    }));
};

// Get recent posts (sorted by date, newest first)
export const getRecentPosts = (limit: number = 3): OtherPost[] => {
  return [...mockPosts]
    .sort((a, b) => dayjs(b._createdAt).diff(dayjs(a._createdAt)))
    .slice(0, limit)
    .map((post) => ({
      _id: post._id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      _createdAt: post._createdAt,
      mainImage: post.mainImage,
      estimatedReadingTime: post.estimatedReadingTime,
    }));
};

// Get featured post (could be customized with a flag in real implementation)
export const getFeaturedPost = (): BlogPost | undefined => {
  return mockPosts[0]; // Just return the first post as featured for mock
};

// Add this to your mockPosts.ts
export const getAllPostSlugs = () => {
  return mockPosts.map(post => ({
    slug: post.slug
  }));
};