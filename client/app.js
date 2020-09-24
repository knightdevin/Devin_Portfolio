import React from 'react'

import {Navbar, Footer} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <div
        style={{
          marginRight: '-9px',
          marginLeft: '-9px',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '95vh',
        }}
      >
        <Navbar />
        <Routes />
      </div>
      <Footer />
    </div>
  )
}

export default App
