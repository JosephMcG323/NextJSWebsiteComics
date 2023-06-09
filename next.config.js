/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  optimizeFonts: false,
  
  images: {unoptimized: true,
  domains: [
    'images.unsplash.com', 'plus.unsplash.com'
  ]
}}
