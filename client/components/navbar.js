import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
// import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <h1>Devin Knight</h1>
    <nav id="navbar">
      {/* {isLoggedIn ? ( */}
      {/* <div> */}
      {/* The navbar will show these links after you log in */}
      {/* <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : ( */}
      <div>
        About Me
        {/* The navbar will show these links before you log in */}
        {/* <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link> */}
      </div>
      <div>Projects</div>
      <div>Skills</div>
      <div>Education and Experience</div>
      <div>Contact</div>
      {/* // )} */}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
// const mapState = (state) => {
//   return {
//     isLoggedIn: !!state.user.id,
//   }
// }

// const mapDispatch = (dispatch) => {
//   return {
//     handleClick() {
//       dispatch(logout())
//     },
//   }
// }

// export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  // handleClick: PropTypes.func.isRequired,
  // isLoggedIn: PropTypes.bool.isRequired,
}

export default Navbar
