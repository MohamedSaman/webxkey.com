// app/sitemap.xml/route.ts
export const dynamic = 'force-static';

const BASE_URL = 'https://webxkey.com';
const LAST_MODIFIED = new Date().toISOString();

interface SitemapEntry {
  path: string;
  priority: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

export function GET() {
  const routes: SitemapEntry[] = [
    { path: '/', priority: '1.0', changefreq: 'daily', lastmod: LAST_MODIFIED },
    { path: '/services/', priority: '0.9', changefreq: 'weekly', lastmod: LAST_MODIFIED },
    { path: '/seo-services/', priority: '0.9', changefreq: 'weekly', lastmod: LAST_MODIFIED },
    { path: '/wordpress-website-designing-services/', priority: '0.9', changefreq: 'weekly', lastmod: LAST_MODIFIED },
    { path: '/social-media-marketing/', priority: '0.9', changefreq: 'weekly', lastmod: LAST_MODIFIED },
    { path: '/website-development/', priority: '0.9', changefreq: 'weekly', lastmod: LAST_MODIFIED },
    { path: '/app-development/', priority: '0.9', changefreq: 'weekly', lastmod: LAST_MODIFIED },
    { path: '/ui-ux-design/', priority: '0.9', changefreq: 'weekly', lastmod: LAST_MODIFIED },
    { path: '/pricing', priority: '0.9', changefreq: 'weekly', lastmod: LAST_MODIFIED },
    { path: '/web-data-scraping-services/', priority: '0.9', changefreq: 'weekly', lastmod: LAST_MODIFIED },
    { path: '/data-scraping-services/', priority: '0.85', changefreq: 'monthly', lastmod: LAST_MODIFIED },
    { path: '/ecommerce-data-scraping/', priority: '0.85', changefreq: 'monthly', lastmod: LAST_MODIFIED },
    { path: '/web-scraping-api/', priority: '0.85', changefreq: 'monthly', lastmod: LAST_MODIFIED },
    { path: '/price-monitoring-scraping/', priority: '0.85', changefreq: 'monthly', lastmod: LAST_MODIFIED },
    { path: '/about-us/', priority: '0.8', changefreq: 'monthly', lastmod: LAST_MODIFIED },
    { path: '/contact/', priority: '0.8', changefreq: 'monthly', lastmod: LAST_MODIFIED },
    { path: '/careers/', priority: '0.7', changefreq: 'monthly', lastmod: LAST_MODIFIED },
    { path: '/team/', priority: '0.7', changefreq: 'monthly', lastmod: LAST_MODIFIED },
    { path: '/brand-identity/', priority: '0.7', changefreq: 'monthly', lastmod: LAST_MODIFIED },
    { path: '/blockchain/', priority: '0.7', changefreq: 'monthly', lastmod: LAST_MODIFIED },
    { path: '/project/', priority: '0.6', changefreq: 'monthly', lastmod: LAST_MODIFIED },
    { path: '/blog', priority: '0.8', changefreq: 'daily', lastmod: LAST_MODIFIED },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${routes.map(({ path, priority, changefreq, lastmod }) => `
    <url>
      <loc>${BASE_URL}${path}</loc>
      ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
      ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ''}
      <priority>${priority}</priority>
    </url>
  `).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600'
    },
  });
}