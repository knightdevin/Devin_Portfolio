import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Router} from 'react-router-dom'
import history from './history'
import App from './app'

// establishes socket connection
import './socket'

const Main = (props) => {
  return (
    <Router history={history}>
      <App />
    </Router>
  )
}

const app = document.getElementById('app')
ReactDOM.render(<Main />, app)
