import React from 'react'
import Footer from './pages/Footer'
import Home from './pages/home/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import Profile from './pages/Profile'
import Header2 from './pages/Header2'
import Header from './pages/Header'

function MainLayout() {
    const { pathname } = useLocation()
    console.log(pathname);

    return (
        <>
            {   
                pathname == '/' ?
                <Header />:
                <Header2 />
            }   
            <Routes>
                <Route index element={<Home />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
            <Footer />
        </>
    )
}

export default MainLayout