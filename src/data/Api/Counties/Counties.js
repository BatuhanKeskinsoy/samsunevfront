export async function fetchCountyData() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/county/news`, {
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

export async function fetchDistrictData() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/district/news`, {
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