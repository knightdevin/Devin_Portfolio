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
      <h4>Phone:</h4>
      <h4>Email:</h4>
      <h4>LinkedIn:</h4>
      <h4>GitHub:</h4>
    </div>
  )
}

export default Contact
