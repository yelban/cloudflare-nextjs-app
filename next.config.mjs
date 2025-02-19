/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // 由 Cloudflare 處理圖片優化
  },
  experimental: {
    // 將這裡的可能依賴 Node.js 的功能註解掉或關閉
    instrumentationHook: false,
  }
};

export default nextConfig;
