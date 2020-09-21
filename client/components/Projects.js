import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

// ====================== STYLED COMPONENTS ======================

const ProjectExtraLinks = styled.div`
  display: flex;
  align-items: center;
`

const SupplementalLinks = styled.a`
  display: flex;
  align-items: center;
  // cursor: pointer;
  transition: 0.5s all ease-out;

  &:hover {
    transform: translateY(-3px) scale(1.25);
  }
`
// NOTE: more on hover function & styled components at: https://www.robinwieruch.de/react-styled-components

// ===============================================================

const Projects = () => {
  return (
    <div id="contact_container" className="content">
      <Helmet>
        <title>Devin Knight | Projects </title>
      </Helmet>
      <br />
      <div className="projectsContainer">
        <a
          className="react-router__link"
          href="http://brambles.herokuapp.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="projectBox">
            <h2>Bramble</h2>
            <h4>Fullstack Developer, 2020</h4>
            {/* <a href="http://brambles.herokuapp.com/"> */}
            <img src="/photos/bramblePhoto.png" className="bramblePhoto" />
            {/* </a> */}
            <p>
              Bramble is a social media site where users meet new friends,
              explore new communities and discover activities in their
              neighborhood. The site features an interactive map that allows
              users to upload & review locations. They can also subscribe to
              like-minded communities and interact with posts and comments. The
              site also leverages Google Cloud Vision for unique image
              recognition with tags associated with uploaded photos.
            </p>
            <ProjectExtraLinks>
              <SupplementalLinks
                className="react-router__link"
                href="https://www.youtube.com/watch?v=yN0ZfelW5tI&list=PLx0iOsdUOUmnf7I22qeTz8ms5tPM14dgg&index=16&t=0s"
                rel="noopener noreferrer"
                target="_blank"
              >
                {/* <h4>Presentation</h4> */}
                <img
                  src="/logos/hd-youtube-logo-png-transparent-background-20.png"
                  className="youTubeLogo"
                />
              </SupplementalLinks>
              <SupplementalLinks
                className="react-router__link"
                href="https://miro.com/app/board/o9J_ksmx0V0=/"
                rel="noopener noreferrer"
                target="_blank"
              >
                {/* <h4>Wireframes</h4> */}
                <img src="/logos/download.png" className="miroBoardLogo" />
              </SupplementalLinks>
            </ProjectExtraLinks>
            <h4>Bramble Data Ecosystem:</h4>
            <p>
              Sequelize, Node.js, Express, React, Redux, Heroku, Mapbox, Google
              Cloud Vision, PostgreSQL
            </p>
          </div>
        </a>
        <a
          className="react-router__link"
          href="http://hobby-shopper.herokuapp.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="projectBox">
            <h2>Hobby Shopper</h2>
            <h4>Fullstack Developer, 2020</h4>

            <img
              src="/photos/hobbyShopperPhoto.png"
              className="hobbyShopperPhoto"
            />
            <p>
              An e-commerce platform, in which users shop for courses to learn a
              new hobby. Courses are added to a cart as either a guest or
              logged-in user. Admins have additional capabilities through a
              unique dashboard.
            </p>
            <h4>Hobby Shopper Data Ecosystem:</h4>
            <p>Sequelize, Express, React, Redux, Heroku, Node.js</p>
          </div>
        </a>

        <div className="projectBox">
          <h2>Lucifer Game: IN PROGRESS</h2>
          <h4>Sole Developer, 2020</h4>
          <a>
            <img
              src="/photos/Lucifer Game Screenshot.jpg"
              className="luciferGamePhoto"
            />
          </a>
          <p>
            Fans of one of Netflix's most popular shows can buckle up for this
            multi-level game centered around Lucifer Morningstar and Detective
            Chloe Decker. The retro style arcade levels challenge players to
            survive L.A. traffic as they drive the main characters to crime
            scenes. The game is built using Object Oriented Programming through
            the Phaser 3 JavaScript framework.
          </p>
          <h4>Lucifer Video Game Data Ecosystem:</h4>
          <p>
            JavaScript, HTML5, Phaser 3 Framework (Object Oriented Programming)
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projects
