import {NavLink, Link} from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

// ====================== STYLED COMPONENTS ======================
const NameText = styled.h1`
  font-family: 'Trebuchet MS', Helvetica, sans-serif;
  font-size: xxx-large;
  margin-top: -8px;
  padding-top: 32px;
  text-align: center;
`

const SiteHeading = styled.div`
  background-color: #5298dd;
`
// ===============================================================

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
      <SiteHeading>
        <NameText>
          <NavLink to="/" className="navLink">
            Devin Knight
          </NavLink>
        </NameText>
        <nav id="navbar">
          <div>
            <NavLink to="/about" className="navLink">
              About Me
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
        </nav>
      </SiteHeading>
    )
  }
}

export default Navbar
