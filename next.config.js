/** @type 
 * {import('next').NextConfig} 
 **/ 

const path = require('path')



const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["spring-creek-packages.s3.ap-southeast-2.amazonaws.com", "localhost:3000"],
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    
    return config
  },
}

module.exports = nextConfig
