/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.ibb.co",
      "my-store-ct-storage-aabd6fd7195834-staging.s3.us-east-1.amazonaws.com"
    ],
  },
};

module.exports = nextConfig;
