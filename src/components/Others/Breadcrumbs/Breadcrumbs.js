import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { AiOutlineHome } from 'react-icons/ai'
import Link from 'next/link'
import { fetchBlogDetailData } from '@/data/Api/Blogs/BlogDetail'

function Breadcrumbs() {
    const staticBreadcrumbs = {
        'emlak-haberleri': 'Emlak Haberleri',
        'emlak-ofisleri': 'Emlak Ofisleri',
        // Ek diğer statik breadcrumb başlıkları buraya eklenebilir
    }

    const router = useRouter()
    const [blogDetailData, setBlogDetailData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { slug } = router.query;

                // Eğer slug varsa ve blogDetailData zaten mevcut değilse
                if (slug && !blogDetailData) {
                    const data = await fetchBlogDetailData(slug);
                    setBlogDetailData(data);
                }
            } catch (error) {
                console.error('Veri Çekme Hatası :', error);
            }
        };

        fetchData();
    }, [router.query.slug, blogDetailData]);

    const pathSegments = router.pathname.split('/').filter(segment => segment !== '')

    const getDynamicBreadcrumbTitle = () => {
        const slug = router.query.slug;
    
        if (blogDetailData && blogDetailData.slug === slug) {
            return blogDetailData.name;
        }
        return null; // Return null if the condition isn't met
    }

    return (
        <div className="container mx-auto text-sm text-gray-600 lg:px-0 px-4 my-4">
            <ul className='flex items-center gap-x-2'>
                <li>
                    <Link href={'/'}>
                        <AiOutlineHome size={20} />
                    </Link>
                </li>
                {pathSegments.map((segment, index) => (
                    <li key={index} className='flex items-center gap-x-2'>
                        <span>/</span>
                        <Link
                            className='capitalize'
                            href={`/${pathSegments.slice(0, index + 1).join('/')}`}
                        >
                            {staticBreadcrumbs[segment] || getDynamicBreadcrumbTitle()}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Breadcrumbs
