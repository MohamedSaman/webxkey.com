import { createClient, type QueryParams } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

const isDevelopment = process.env.NODE_ENV === "development";
const developerToken = process.env.SANITY_API_TOKEN;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disabled for immediate updates
  token: developerToken,
});

export const clientFetch = <const QueryString extends string>({
  query,
  params = {},
  tags = [],
}: {
  query: QueryString;
  params?: QueryParams;
  tags?: string[];
}) => {
  return client.fetch(query, params, {
    cache: 'no-store',
    next: {
      tags,
      revalidate: 0,
    },
  });
};
