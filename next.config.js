const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n,
  images: { domains: ["i.scdn.co", "via.placeholder.com", "cdn.sanity.io"] },
};

module.exports = nextConfig;
