import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

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
    )
  }
}
