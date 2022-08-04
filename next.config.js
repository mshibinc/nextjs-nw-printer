/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer, node }) => {
    node = {
      ...node,
      fs: false,
      path: false,
      child_process: "empty",
      net: "empty",
      tls: "empty",
    };

    return config;
  },
};

module.exports = nextConfig;
