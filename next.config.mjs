
const nextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com', // For Google profile images
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com', // For Cloudinary images
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;


