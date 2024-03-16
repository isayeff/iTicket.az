import React from 'react'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile'

function MainLayout() {
    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
            <Footer />
        </>
    )
}

export default MainLayout