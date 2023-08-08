import React from "react";
import Header from "@/components/inc/Header/Header";
import Footer from "@/components/inc/Footer/Footer";
import Breadcrumb from '@/components/Breadcrumb'
import { useRouter } from "next/router";

export default function Layout({ children }) {
    const router = useRouter()
    const pathname = router.pathname

    return (
        <>
            <Header />
            <main className="min-h-[calc(100vh-80px)]">
                {pathname != '/' && (
                    <Breadcrumb />
                )}
                {children}
            </main>
            <Footer />
        </>
    );
}