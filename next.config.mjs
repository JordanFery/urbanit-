/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'www.chokoprod.com',
                pathname: '/urba/**',
            },
        ],
    },
};

export default nextConfig;
