/** @type {import('next').NextConfig} */
module.exports = {
  // publicRuntimeConfig: {
  //   FIREBASE_API_KEY: process.env.MY_API_KEY,
  // },
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  experimental: {
    appDir: true,
  },
};
