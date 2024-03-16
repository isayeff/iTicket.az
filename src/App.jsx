import React from 'react'
import ContextData from './Context/ContextData'
import Home from './pages/home/Home'
import MainLayout from './MainLayout'

function App() {

  return (
    <>
      <ContextData>
        <MainLayout />
      </ContextData>
    </>
  )
}

export default App