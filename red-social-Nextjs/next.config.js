const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'vignette.wikia.nocookie.net',
            port: '',
            pathname: '/**'
        },
        {
            protocol: 'https',
            hostname: 'i.pinimg.com',
            port: '',
            pathname: '/**'
        }]
    }
}

module.exports = nextConfig
