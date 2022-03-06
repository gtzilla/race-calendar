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

// module.exports = withPlugins([
//   [optimizedImages, {
//      config for next-optimized-images 
//   }],
//   reactStrictMode: true,
//   // your other plugins here
 
// ]);

// next.config.js


