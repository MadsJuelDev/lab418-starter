/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
  rewrites: () => [
    {
      source: '/studio/:path*',
      destination:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3333/studio/:path*'
          : '/studio/index.html',
    },
  ],
}

module.exports = nextConfig
