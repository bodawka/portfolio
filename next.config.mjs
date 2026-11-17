/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return [{ source: "/locket", destination: "/social-app", permanent: true }];
  },
};
export default nextConfig;
