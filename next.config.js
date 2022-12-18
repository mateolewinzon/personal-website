/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  images: { domains: ["i.scdn.co"] },
};

module.exports = nextConfig;
