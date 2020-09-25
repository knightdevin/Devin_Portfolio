import React from 'react'
import {Helmet} from 'react-helmet'

const Contact = () => {
  return (
    <div id="contact_container" className="pageContent">
      <Helmet>
        <title>Devin Knight | Contact </title>
      </Helmet>
      <br />
      <img className="profile_photo" src="/photos/IMG_3633.jpg" />
      <h1 className="contactMe">My Contact Info</h1>
      <div className="contactLinkBox">
        <img className="contactLogo" src="logos/linkedin-logo-3.png" />
        <a
          className="contact_link"
          href="https://www.linkedin.com/in/devinknight/"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://www.linkedin.com/in/devinknight/
        </a>
      </div>
      <div className="contactLinkBox">
        <img className="contactLogo" src="/logos/github - 25231.png" />
        <a
          className="contact_link"
          href="https://github.com/knightdevin"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://github.com/knightdevin
        </a>
      </div>
      <div className="contactLinkBox">
        <img className="contactLogo" src="/logos/clipart316850.png" />
        <a className="contact_link" href="mailto:knightdevin@hotmail.com">
          knightdevin@hotmail.com
        </a>
      </div>
    </div>
  )
}

export default Contact
