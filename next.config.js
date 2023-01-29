const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [

      { 
        protocol:"https",
        port:"",
        hostname: "wikihow.com" ,
        pathname: '/images/**',
      },
      {
        protocol:"https",
        port:"",
        hostname: "cdn.pixabay.com",
        pathname:"/photo/**" 
      }
    ]
  }
}

module.exports = withContentlayer(nextConfig)
