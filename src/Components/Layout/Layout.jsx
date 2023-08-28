import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import ContactPage from '../ContactPage/ContactPage'

export default function Layout() {
    return (
        <>
            <Navbar />

            <Outlet />

            <ContactPage />

        </>

    )
}
