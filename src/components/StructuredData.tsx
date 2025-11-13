"use client";

import { usePathname } from "next/navigation";

interface StructuredDataProps {
  data: Record<string, unknown>;
  type?: "organization" | "service" | "website" | "article" | string | string[];
  pageTitle?: string;
}

const isString = (value: unknown): value is string => typeof value === "string";

export default function StructuredData({
  data,
  type = "website",
  pageTitle,
}: StructuredDataProps) {
  const pathname = usePathname();
  const isServicePage = pathname?.startsWith("/services");

  const dataName = isString(data.name) ? data.name : undefined;
  const dataDescription = isString(data.description)
    ? data.description
    : undefined;

  const baseSchema = {
    "@context": "https://schema.org",
    "@type": Array.isArray(type) ? type : [type],
    name: "Webxkey",
    url: "https://webxkey.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://webxkey.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const serviceSchema = isServicePage
    ? {
        "@type": "Service",
        serviceType: pageTitle || dataName,
        provider: {
          "@type": "Organization",
          name: "Webxkey",
        },
        description: dataDescription || `Professional ${pageTitle} services`,
      }
    : null;

  // Handle organization-specific properties
  const organizationSchema = (
    Array.isArray(type)
      ? type.includes("organization")
      : type === "organization"
  )
    ? {
        logo: "https://webxkey.com/Images/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+94 755 299721",
          contactType: "customer service",
        },
      }
    : {};

  const schemaData = {
    ...baseSchema,
    ...organizationSchema,
    ...(serviceSchema ?? {}),
    ...data,
  };

  const cleanSchema = JSON.parse(JSON.stringify(schemaData));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanSchema) }}
      key={`structured-data-${
        Array.isArray(type) ? type.join("-") : type
      }-${pathname}`}
    />
  );
}
