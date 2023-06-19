/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	images: {
    // unoptimized: true,
    domains: [
      'res.cloudinary.com',
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
}

module.exports = nextConfig
