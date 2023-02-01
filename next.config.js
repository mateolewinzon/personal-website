/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  images: { domains: ["i.scdn.co", "via.placeholder.com"] },
};

module.exports = nextConfig;
