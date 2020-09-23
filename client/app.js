import React from 'react'

import {Navbar, Footer} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <div style={{marginRight: '-9px', marginLeft: '-9px'}}>
        <Navbar />
        <Routes />
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  )
}

export default App
