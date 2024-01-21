/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	pageExtensions: ["jsx", "js"],
};

module.exports = nextConfig;
module.exports = {
	async rewrites() {
		return [
			{
				source: "/sitemap.xml",
				destination: "/api/sitemap",
			},
		];
	},
};
