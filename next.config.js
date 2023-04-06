/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env:{
    URL_BASE:"https://erp-api-dev-app.azurewebsites.net/akralogic/erp/api/"
  }
}

module.exports = nextConfig
