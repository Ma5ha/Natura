const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: true,
    buildActivityPosition: "bottom-right",
  },
};

module.exports = withNextIntl(nextConfig);
