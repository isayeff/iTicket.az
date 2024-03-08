import React from 'react'
import Header from './pages/Header'
import Promotion from './pages/home/Promotion'
import ContextData from './Context/ContextData'
import Events from './pages/home/Events'
import Home from './pages/home/Home'

function App() {

  return (
    <>
      <ContextData>
        <Home />
      </ContextData>
    </>
  )
}

export default App