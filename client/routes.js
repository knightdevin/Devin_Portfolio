import React, {Component} from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'

import {
  LandingPage,
  About,
  Projects,
  Skills,
  Publications,
  ExpAndEdu,
  PastLife,
  Contact,
} from './components'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/skills" component={Skills} />
            <Route path="/education-experience" component={ExpAndEdu} />
            <Route path="/publications" component={Publications} />
            <Route path="/past-life" component={PastLife} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}
