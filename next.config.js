/** @type {import('next').NextConfig} */
const nextConfig = {
    // webpack: (config) => {
    //     config.module.rules.push({
    //         test: /\.svg$/i,
    //         issuer: /\.[jt]sx?$/,
    //         use: ['@svgr/webpack'],
    //     });
    //     return config;
    // },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.userapi.com',
            },
            {
                protocol: 'https',
                hostname: '**.googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: '**.unsplash.com',
            },
        ],
    },
    experimental: {
        serverActions: true,
    },
};

module.exports = nextConfig;
