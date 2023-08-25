export async function fetchBlogData() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/blog/lists`, {
            headers: {
                'Content-Type': 'application/json',
                'HTTP_VERIFY': process.env.NEXT_PUBLIC_SITE_HTTP_VERIFY
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Veri Çekme Hatası :', error);
        throw error;
    }
}