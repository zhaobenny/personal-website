/** @type {import('next').NextConfig} */
const path = require('path')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  images: {
    domains: [],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
})
