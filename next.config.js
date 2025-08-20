/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Required for static export
    images: {
      unoptimized: true, // InfinityFree can't handle Next.js image optimization
    },
  }
  
  module.exports = nextConfig
  