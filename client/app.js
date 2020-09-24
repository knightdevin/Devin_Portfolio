import React from 'react'

import {Navbar, Footer} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <div style={{marginRight: '-9px', marginLeft: '-9px'}}>
        <Navbar />
        <Routes />
        {/* <Footer /> */}
      </div>
      <br />
      <br />
      <Footer />
    </div>
  )
}

export default App
