import React, {Component} from 'react'
import {Helmet} from 'react-helmet'

const Contact = () => {
  return (
    <div id="contact_container" className="content">
      <Helmet>
        <title>Devin Knight | Contact </title>
      </Helmet>
      <br />
      <h2> MY CONTACT INFO</h2>
      <div className="contactLinkBox">
        <h4>LinkedIn:</h4>
        <a
          className="contact_link"
          href="https://www.linkedin.com/in/devinknight/"
        >
          https://www.linkedin.com/in/devinknight/
        </a>
      </div>
      <div className="contactLinkBox">
        <h4>GitHub:</h4>
        <a className="contact_link" href="https://github.com/knightdevin">
          https://github.com/knightdevin
        </a>
      </div>
      <div className="contactLinkBox">
        <h4>Email:</h4>
        <a className="contact_link" href="knightdevin@hotmail.com">
          knightdevin@hotmail.com
        </a>
        |
        <a className="contact_link" href="dlk378@nyu.edu">
          dlk378@nyu.edu
        </a>
      </div>
    </div>
  )
}

export default Contact
