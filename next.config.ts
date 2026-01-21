/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Común para imágenes de perfiles/mapas
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'maps.google.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig