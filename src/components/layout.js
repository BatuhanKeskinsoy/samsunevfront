import React from "react";
import Header from "@/components/inc/Header/Header";
import Footer from "@/components/inc/Footer/Footer";
import HeaderKurumsal from "@/components/KurumsalUyelik/inc/Header/Header";
import FooterKurumsal from "@/components/KurumsalUyelik/inc/Footer/Footer";
import Breadcrumb from '@/components/Breadcrumb'
import { useRouter } from "next/router";
import AutoScrollTop from "./Others/AutoScrollTop";
import FixedScrollTop from "./Others/FixedScrollTop";

export default function Layout({ children }) {
    const router = useRouter()
    const pathname = router.pathname

    if (pathname !== '/kurumsal-uyelik') {
        return (
            <>
                <AutoScrollTop />
                <Header />
                <main className="min-h-screen">
                    {(
                        pathname !== '/' &&
                        pathname !== '/404' &&
                        pathname !== '/500'
                    ) && (
                            <Breadcrumb />
                        )}
                    {children}
                </main>
                <Footer />
                <FixedScrollTop />
            </>
        );
    } else {
        return (
            <>
                <AutoScrollTop />
                <HeaderKurumsal />
                <main className="min-h-screen">
                    {children}
                </main>
                <FooterKurumsal />
                <FixedScrollTop />
            </>
        );
    }

}

