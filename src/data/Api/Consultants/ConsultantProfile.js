export async function fetchConsultantProfileData(slug) {
    try {
        const response = await fetch(`http://panel.samsunev.com/api/v1/consultant/users/${slug}/profile`, {
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