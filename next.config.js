/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePath: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.ap-northeast-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'gongpark-toyproject.s3.ap-northeast-2.amazonaws.com',
      },
    ],
    domains: ['https://s3.ap-northeast-2.amazonaws.com'],
  },
}

module.exports = nextConfig
