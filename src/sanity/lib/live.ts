// Note: defineLive is not available in next-sanity v11.x
// This file is currently unused in the project.
// If you need live content updates, consider using the clientFetch function from './client' instead.

// import { defineLive } from "next-sanity";
// import { client } from './client'

// export const { sanityFetch, SanityLive } = defineLive({ 
//   client: client.withConfig({ 
//     apiVersion: 'vX' 
//   }) 
// });

// For now, re-export the client for compatibility
export { client, clientFetch } from './client';
