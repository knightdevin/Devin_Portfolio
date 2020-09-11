import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Router} from 'react-router-dom'
import history from './history'
// import store from './store'
import App from './app'

// establishes socket connection
import './socket'

// ReactDOM.render(
//     <Router history={history}>
//       <App />
//     </Router>
//   document.getElementById('app')
// )

const Main = (props) => {
  return (
    <Router history={history}>
      <App />
    </Router>
  )
}

const app = document.getElementById('app')
ReactDOM.render(<Main />, app)
