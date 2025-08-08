import React from 'react'
import { Outlet } from 'react-router'

export default function HomeLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                {/* Add the navber or header component here */}
            </header>
            <main className="flex-grow">
                <Outlet />
            </main>
            <footer>
                {/* add the footer here */}
            </footer>
        </div>
    )
}
