import React from 'react'
import Header from '../Header'
import Promotion from './Promotion'
import Events from './Events'
import Footer from '../Footer'
import LoginPanel from '../../components/LoginPanel'

function Home() {
    return (
        <>
            <Header />
            <Promotion />
            <Events />
            <Footer />
        </>
    )
}

export default Home