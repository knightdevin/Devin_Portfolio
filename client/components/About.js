import React, {Component} from 'react'
import {Helmet} from 'react-helmet'

const About = () => {
  return (
    <div id="about container" className="content">
      <Helmet>
        <title>Devin Knight | About </title>
      </Helmet>
      <br />
      <h1> Hi There!</h1>
      <h3>INSERT PHOTO HERE!!</h3>
      <h4 id="about_me">
        My name is Devin Knight. I built a career as a media expert in a journey
        that began as a television reporter. That eventually led to media
        production work behind the camera and even jobs in crisis management and
        travel / tourism industries within the Public Relations world.
      </h4>
      <h4 id="about_me">
        I've always been interested in how to tell and share stories. As media
        continued to change, I got more involved with the technical side of
        production to create and share content (ex: using non-linear editing
        software, electronic news gathering software, etc.).
      </h4>
      <h4 id="about_me">
        I became curious about how programs work and started experimenting with
        Python and later JS. I really enjoyed puzzling out how all the code fits
        together. Eventually, I enrolled in bootcamp prep courses and earned
        admittance to Fullstack Academy's software engineering program. I now
        look forward to working with a team that enjoys collaborating about
        making better, user-friendly software .
      </h4>
    </div>
  )
}

export default About
