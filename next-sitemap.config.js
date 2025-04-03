/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://lewinzon.dev",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "monthly",
  priority: 0.7,
  exclude: ["/api/*"],
};
