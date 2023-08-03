import React from "react";
import Header from "@/components/inc/Header/Header";
import Footer from "@/components/inc/Footer/Footer";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="min-h-[calc(100vh-156px)]">
                {children}
            </main>
            <Footer />
        </>
    );
}