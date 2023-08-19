export async function fetchConsultantData() {
    try {
        const response = await fetch('http://panel.samsunev.com/api/v1/consultant/users');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Veri Çekme Hatası :', error);
        throw error;
    }
}