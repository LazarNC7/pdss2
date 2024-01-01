/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        output: 'export',
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*.googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'gloverse.s3.amazonaws.com',
            },
            
        ],
        domains: ["gloverseapp.s3.amazonaws.com"]
    }
}

module.exports = nextConfig
