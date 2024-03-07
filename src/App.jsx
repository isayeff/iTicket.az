import React from 'react'
import Header from './pages/Header'
import Promotion from './pages/home/Promotion'
import ContextData from './Context/ContextData'
import Events from './pages/home/Events'

function App() {

  return (
    <>
      <ContextData>
        <Header />
        <Promotion />
        <Events />
      </ContextData>
    </>
  )
}

export default App