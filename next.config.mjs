/** @type {import('next').NextConfig} */
import withOptimizedImages from 'next-optimized-images';

const nextConfig = {
  reactStrictMode: true,
  optimizeImages: true,
  handleImages: ['jpeg', 'png', 'svg', 'webp'],
};


export default nextConfig;
