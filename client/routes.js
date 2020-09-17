import React, {Component} from 'react'
// import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
// import {withRouter} from 'react router'
// import PropTypes from 'prop-types'
import {
  About,
  Projects,
  Skills,
  TechPublications,
  ExpAndEdu,
  PastLife,
  Contact,
  Login,
  Signup,
  UserHome,
} from './components'
// import {me} from './store'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/skills" component={Skills} />
        <Route path="/education-experience" component={ExpAndEdu} />
        <Route path="/publications" component={TechPublications} />
        <Route path="/past-life" component={PastLife} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/" component={About} />
      </Switch>
    )
  }
}

// /**
//  * COMPONENT
//  */
// class Routes extends Component {
//   componentDidMount() {
//     this.props.loadInitialData();
//   }

//   render() {
//     const { isLoggedIn } = this.props;

//     return (
//       <Switch>
//         {/* Routes placed here are available to all visitors */}
//         <Route path="/login" component={Login} />
//         <Route path="/signup" component={Signup} />
//         {isLoggedIn && (
//           <Switch>
//             {/* Routes placed here are only available after logging in */}
//             <Route path="/home" component={UserHome} />
//           </Switch>
//         )}
//         {/* Displays our Login component as a fallback */}
//         <Route component={Login} />
//       </Switch>
//     );
//   }
// }

// /**
//  * CONTAINER
//  */
// const mapState = (state) => {
//   return {
//     // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
//     // Otherwise, state.user will be an empty object, and state.user.id will be falsey
//     isLoggedIn: !!state.user.id,
//   };
// };

// const mapDispatch = (dispatch) => {
//   return {
//     loadInitialData() {
//       dispatch(me());
//     },
//   };
// };

// // The `withRouter` wrapper makes sure that updates are not blocked
// // when the url changes
// export default withRouter(connect(mapState, mapDispatch)(Routes));

// /**
//  * PROP TYPES
//  */
// Routes.propTypes = {
//   loadInitialData: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired,
// };
