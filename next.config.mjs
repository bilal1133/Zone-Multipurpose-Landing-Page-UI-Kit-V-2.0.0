// ----------------------------------------------------------------------

const nextConfig = {
  trailingSlash: true,
  env: {
    DEV_API: 'http://localhost:8888',
    PRODUCTION_API: 'https://zone-assets-api.vercel.app',
    GOOGLE_API: '',
  },
  images: {
    domains: ['flagcdn.com'],
  },
};

export default nextConfig;
