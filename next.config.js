/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '182.93.93.82',
                port: '8989',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'i.pinimg.com'
            },
            {
                protocol: 'http',
                hostname: 'exprostudio.com'
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com'
            },
            {
                protocol: 'https',
                hostname: 'exprostudio.com'
            },
        ],
        unoptimized: true
    }
}
