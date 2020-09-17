import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink, Link} from 'react-router-dom'

// import {logout} from '../store'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.onHover = this.onHover.bind(this)
    this.offHover = this.offHover.bind(this)
  }

  onHover(e) {
    this.setState({
      [e.target.id]: true,
    })
  }
  offHover(e) {
    this.setState({
      [e.target.id]: false,
    })
  }

  render() {
    const aboutHov = this.state.about_nav ? 'nav_item select_nav' : 'nav_item'
    const eduexHov = this.state.eduex_nav ? 'nav_item select_nav' : 'nav_item'
    const projectsHov = this.state.projects_nav
      ? 'nav_item select_nav'
      : 'nav_item'
    const skillsHov = this.state.skills_nav ? 'nav_item select_nav' : 'nav_item'
    const contactHov = this.state.contact_nav
      ? 'nav_item select_nav'
      : 'nav_item'
    return (
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
            <NavLink to="/about" className="navLink">
              About Me
              {/* The navbar will show these links before you log in */}
              {/* <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link> */}
            </NavLink>
          </div>
          <div>
            <Link to="/projects" className="navLink">
              Projects
            </Link>
          </div>
          <div>
            <Link to="/skills" className="navLink">
              Skills
            </Link>
          </div>

          <div>
            <Link to="/publications" className="navLink">
              Publications
            </Link>
          </div>
          <div>
            <Link to="/education-experience" className="navLink">
              Education & Experience
            </Link>
          </div>
          <div>
            <Link to="/past-life" className="navLink">
              Past Life
            </Link>
          </div>
          <div>
            <Link to="/contact" className="navLink">
              Contact
            </Link>
          </div>
          {/* // )} */}
        </nav>
        <hr />
      </div>
    )
  }
}

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
