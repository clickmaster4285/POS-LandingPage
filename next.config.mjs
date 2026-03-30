/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/pos", destination: "/?pos=1", permanent: true },
      { source: "/pos/:slug*", destination: "/?pos=1", permanent: true },
    ]
  },
}

export default nextConfig
