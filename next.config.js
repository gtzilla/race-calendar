/** @type {import('next').NextConfig} */
// import withOptimizedImages from 'next-optimized-images';
export const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' }
    }
  }  
}

