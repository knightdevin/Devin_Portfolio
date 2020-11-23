import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

// ====================== STYLED COMPONENTS ======================

const ProjectExtraLinks = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-evenly;
`

const SupplementalLinks = styled.a`
  display: flex;
  align-items: center;
  flex-direction: column;
  // cursor: pointer;
  transition: 0.5s all ease-out;

  &:hover {
    transform: translateY(-3px) scale(1.35);
  }
`
const ProjectEcoSystem = styled.h4`
  margin-bottom: 0;
  text-decoration: underline;
`

const TechStack = styled.p`
  font-style: italic;
  text-align: center;
`

// NOTE: more on hover function & styled components at: https://www.robinwieruch.de/react-styled-components

// ===============================================================

const Projects = () => {
  return (
    <div id="contact_container" className="pageContent">
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
            <h2 style={{fontSize: '25px'}}>Bramble</h2>
            <h4>Fullstack Developer, 2020</h4>
            <img src="/photos/bramblePhoto.png" className="bramblePhoto" />
            <p style={{fontSize: '18px'}}>
              Bramble is a social media site where users meet friends, explore
              communities & discover neighborhood activities. The site features
              an interactive map for users to upload & review locations. Users
              can also subscribe to communities & interact with posts &
              comments. The site also leverages Google Cloud Vision for unique
              image recognition.
            </p>
            <ProjectExtraLinks>
              <SupplementalLinks
                className="react-router__link"
                href="https://www.youtube.com/watch?v=yN0ZfelW5tI&list=PLx0iOsdUOUmnf7I22qeTz8ms5tPM14dgg&index=16&t=0s"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src="/logos/hd-youtube-logo-png-transparent-background-20.png"
                  className="youTubeLogo"
                />{' '}
                Demo
              </SupplementalLinks>
              <SupplementalLinks
                className="react-router__link"
                href="https://miro.com/app/board/o9J_ksmx0V0=/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src="/logos/download.png" className="miroBoardLogo" />
                Wireframes
              </SupplementalLinks>
              <SupplementalLinks
                className="react-router__link"
                href="https://github.com/Ultra-Punks/bramble"
                rel="noopener noreferrer"
                target="blank"
              >
                <img src="/logos/github - 25231.png" className="gitHubLogo" />
                Code
              </SupplementalLinks>
            </ProjectExtraLinks>
            <ProjectEcoSystem>Bramble Data Ecosystem:</ProjectEcoSystem>
            <TechStack>
              Sequelize, Node.js, Express, React, Redux, Heroku, CSS, HTML 5,
              Mapbox, Google Cloud Vision, PostgreSQL
            </TechStack>
          </div>
        </a>
        <a
          className="react-router__link"
          href="https://devin-knight-portfolio.herokuapp.com/about"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="projectBox">
            <h2 style={{fontSize: '25px'}}>Portfolio</h2>
            <h4>Developer, 2020</h4>
            <img src="/photos/portfolioPhoto.png" className="bramblePhoto" />
            <p style={{fontSize: '18px'}}>
              My portfolio site provides a glimpse into some of the projects
              I've worked on and presents context into my background as a
              developer. The site was built using React and Styled Components
              and features a navbar for users to explore different pages.
            </p>
            <ProjectExtraLinks>
              <SupplementalLinks
                className="react-router__link"
                href="https://github.com/knightdevin/Devin_Portfolio"
                rel="noopener noreferrer"
                target="blank"
              >
                <img src="/logos/github - 25231.png" className="gitHubLogo" />
                Code
              </SupplementalLinks>
            </ProjectExtraLinks>
            <ProjectEcoSystem>Portfolio Data Ecosystem:</ProjectEcoSystem>
            <TechStack>
              JavaScript, Node.js, React, Styled Components, Heroku, HTML 5, CSS
            </TechStack>
          </div>
        </a>
        <a
          className="react-router__link"
          href="http://hobby-shopper.herokuapp.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="projectBox">
            <h2 style={{fontSize: '25px'}}>Hobby Shopper</h2>
            <h4>Fullstack Developer, 2020</h4>

            <img
              src="/photos/hobbyShopperPhoto.png"
              className="hobbyShopperPhoto"
            />
            <p style={{fontSize: '18px'}}>
              An e-commerce platform, in which users shop for courses to learn a
              new hobby. Courses are added to a cart as either a guest or
              logged-in user. Admins have additional capabilities through a
              unique dashboard.
            </p>
            <SupplementalLinks
              className="react-router__link"
              href="https://github.com/FSA-Guava/Hobby-Shopper"
              rel="noopener noreferrer"
              target="blank"
            >
              <img src="/logos/github - 25231.png" className="gitHubLogo" />
              Code
            </SupplementalLinks>
            <ProjectEcoSystem>Hobby Shopper Data Ecosystem:</ProjectEcoSystem>
            <TechStack>
              Sequelize, Express, React, Redux, Heroku, Node.js, CSS, HTML
            </TechStack>
          </div>
        </a>

        <div className="projectBox">
          <h2 style={{fontSize: '25px'}}>Lucifer Game: In Progress</h2>
          <h4>Sole Developer, 2020</h4>
          <a>
            <img
              src="/photos/Lucifer Game Screenshot.jpg"
              className="luciferGamePhoto"
            />
          </a>
          <p style={{fontSize: '18px'}}>
            Fans of one of Netflix's most popular shows can buckle up for this
            multi-level game centered around Lucifer Morningstar and Detective
            Chloe Decker. The retro style arcade levels challenge players to
            survive L.A. traffic as they drive the main characters to crime
            scenes. The game is built using Object Oriented Programming through
            the Phaser 3 JavaScript framework.
          </p>
          <SupplementalLinks
            className="react-router__link"
            href="https://github.com/knightdevin/Lucifer_Game"
            rel="noopener noreferrer"
            target="blank"
          >
            <img src="/logos/github - 25231.png" className="gitHubLogo" />
            Code (Currently Private)
          </SupplementalLinks>
          <ProjectEcoSystem>
            Lucifer Video Game Data Ecosystem:
          </ProjectEcoSystem>
          <TechStack>
            JavaScript, HTML5, Phaser 3 Framework (Object Oriented Programming)
          </TechStack>
        </div>
      </div>
      <br />
    </div>
  )
}

export default Projects
