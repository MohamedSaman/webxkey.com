import { PortableTextComponents } from "@portabletext/react";

export const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold my-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold my-2">{children}</h3>,
    normal: ({ children }) => <p className="my-2">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-5 my-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-5 my-2">{children}</ol>,
  },
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-blue-600 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
};