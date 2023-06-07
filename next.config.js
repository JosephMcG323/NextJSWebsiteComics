/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  optimizeFonts: false,
  images: {
  domains: [
    'images.unsplash.com', 'plus.unsplash.com'
  ]
}}
