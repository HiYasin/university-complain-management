import Footer from '@/components/home/Footer'
import Header from '@/components/home/Header'
import React from 'react'
import { Outlet } from 'react-router'

export default function HomeLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <Header />
            </header>
            <main className="flex-grow">
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
