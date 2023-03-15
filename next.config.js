/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'syroco-hiring-public-assets.s3.eu-west-1.amazonaws.com'],
  },
};

module.exports = nextConfig;
