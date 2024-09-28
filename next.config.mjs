import nextMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
