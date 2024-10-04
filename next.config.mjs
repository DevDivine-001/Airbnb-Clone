// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     experimental: {
//         appDir: true,

//     },
//     images: {
//         domains: [
//             "avatars.githubusercontent.com"
//         ]
//     }
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: 'avatars.githubusercontent.com',
//                 pathname: '/**',
//             },
//         ],
//     },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
