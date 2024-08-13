/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: '/:path*', // Apply to all routes
            headers: [
              {
                key: 'X-Frame-Options',
                value: 'ALLOWALL', 
              },
              {
                key: 'Content-Security-Policy',
                value: "frame-ancestors *",
              },
              {
                key: 'Permissions-Policy',
                value: "", // Allow all features by not setting any restrictions
              },
              {
                key: 'Access-Control-Allow-Origin',
                value: 'https://nextjs-with-supabase-five.vercel.app', 
              },
              {
                key: 'Access-Control-Allow-Credentials',
                value: 'true', 
              },
              {
                key: 'Access-Control-Allow-Headers',
                value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
              },
            ],
          },
        ];
      },
}


module.exports = nextConfig;
