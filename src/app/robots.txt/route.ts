// app/robots.txt/route.ts
export const dynamic = 'force-static';
export const revalidate = 86400; // Revalidate once per day

export async function GET() {
  const env = process.env.NODE_ENV;
  const baseUrl = process.env.SITE_URL || 'https://webxkey.com';

  if (env !== 'production') {
    return new Response(`User-agent: *\nDisallow: /`, {
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  const content = `# Robots.txt for ${baseUrl}
User-agent: *
Allow: /
Disallow: /private/
Disallow: /admin/
Disallow: /dashboard/
Disallow: /api/
Disallow: /*?* # Avoid indexing URL parameters
Disallow: /search/

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay: 10 # Uncomment if you experience heavy server load

# Google-specific directives
User-agent: Googlebot
Allow: /*
Disallow: /private/

# Bing-specific directives
User-agent: bingbot
Allow: /*
Disallow: /private/

# Host directive (helps with canonicalization)
Host: ${baseUrl.replace(/^https?:\/\//, '')}`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600'
    },
  });
}