export default function handler(req, res) {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/xml");

	res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <url>
        <loc>https://www.zackariasl.dev/</loc>
        <lastmod>2023-12-16</lastmod>
        <changefreq>always</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://www.zackariasl.dev/about/</loc>
        <lastmod>2023-12-16</lastmod>
        <changefreq>always</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://www.zackariasl.dev/projects/</loc>
        <lastmod>2023-12-16</lastmod>
        <changefreq>always</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://www.zackariasl.dev/contact/</loc>
        <lastmod>2023-12-16</lastmod>
        <changefreq>always</changefreq>
    </url>
    </urlset>`;

	res.end(xml);
}
