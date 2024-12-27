/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
    ];
  },
  sassOptions: {
    quietDeps: true,
  },
};

export default nextConfig;
