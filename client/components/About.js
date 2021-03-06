import React from 'react'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'

// ====================== STYLED COMPONENTS ======================
const AboutParagraph = styled.p`
  width: 50%;
  font-family: 'Trebuchet MS', Helvetica, sans-serif;
  font-size: 21px;
`
// ===============================================================

const About = () => {
  return (
    <div id="about_container" className="pageContent">
      <div>
        <Helmet>
          <title>Devin Knight | About </title>
        </Helmet>
      </div>
      <br />
      {/* <h2>Hi There!</h2> */}
      <div className="profilePhotosBox">
        <img
          className="profile_photo"
          src="/photos/extra photos/photos/Devin - About Me photo.png"
        />
      </div>
      <AboutParagraph>
        <p>
          My name is Devin Knight. I built a career as a media expert in a
          journey that began as a television reporter. That eventually led to
          media production work behind the camera and even jobs in crisis
          management and travel / tourism industries within the Public Relations
          world.
        </p>
        <p>
          As media continued to change, I got more involved with the technical
          side of production to create and share content (ex: using non-linear
          editing software, electronic news gathering software, etc.). I became
          curious about how programs work and started experimenting with Python
          and later JS. I really enjoyed puzzling out how all the code fits
          together.
        </p>
        <p>
          I enrolled in bootcamp prep courses and earned admittance to Fullstack
          Academy's software engineering program to become a full-stack
          developer. As I learned more, I really enjoyed back-end planning and
          using Node.js, Sequelize and PostgreSQL to build database structures
          and developed an appreciation for using JavaScript, CSS and React for
          front-end interaction. I now look forward to working with a team that
          enjoys collaborating about making better, user-friendly software.
        </p>
      </AboutParagraph>
    </div>
  )
}

export default About
