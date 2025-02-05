const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: true,
    buildActivityPosition: "bottom-right",
    output: "export",
  },
};

module.exports = withBundleAnalyzer(withNextIntl(nextConfig));
