if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: './.env' });
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [process.env.UPLOADS_DOMAIN ?? 'localhost'],
  },
});
