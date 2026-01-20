/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'instagram.fagp1-1.fna.fbcdn.net',
      },
    ],
  },
}

module.exports = nextConfig