/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['github.com', "fonts.googleapis.com", "fonts.gstatic.com", "cdnjs.cloudflare.com", "fonts.googleapis.com"],
  }
}


module.exports = nextConfig
