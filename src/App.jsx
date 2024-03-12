import React from 'react'
import ContextData from './Context/ContextData'
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