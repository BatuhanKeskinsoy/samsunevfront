/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/v1/(.*)", // Tüm /api/v1/* yollarını kapsayacak şekilde ayarlandı
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "http://localhost:3000",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://panel.samsunev.com",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "http://panel.samsunev.com",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS", // İzin verilen HTTP metodları
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-Requested-With, Content-Type, Accept, HTTP_VERIFY", // İzin verilen başlıklar
          },
        ],
      },
      // Diğer izin verilen kaynakları buraya ekleyebilirsiniz
    ];
  },
  reactStrictMode: true,
}

module.exports = nextConfig