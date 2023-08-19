/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Local test URL (örneğin, /api/*)
        source: "/api/v1/auth/login", // Örnek bir yol (path) belirtildi, siz gerçek yolu belirtmelisiniz
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "http://localhost:3000",
          },
        ],
      },
      {
        // Canlı sunucunuzun URL'i (örneğin, /api/*)
        source: "/api/v1/auth/login", // Örnek bir yol (path) belirtildi, siz gerçek yolu belirtmelisiniz
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://panel.samsunev.com",
          },
        ],
      },
      // Diğer izin verilen kaynakları buraya ekleyebilirsiniz
    ];
  },
  reactStrictMode: true,
}

module.exports = nextConfig