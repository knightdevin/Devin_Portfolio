import React, {Component} from 'react'
import {Helmet} from 'react-helmet'

const Projects = () => {
  return (
    <div id="contact_container" className="content">
      <Helmet>
        <title>Devin Knight | Projects </title>
      </Helmet>
      <br />
      <div className="projectsContainer">
        <div className="projectBox">
          <h2>Bramble</h2>
          <h4>Fullstack Developer, 2020</h4>
          <a href="http://brambles.herokuapp.com/">
            <img src="/photos/bramblePhoto.png" className="bramblePhoto" />
          </a>
          <p>
            Bramble is a social media site where users meet new friends, explore
            new communities and discover interesting activities in their
            neighborhood. The site features an interactive map that allows users
            to upload & review locations. They can also subscribe to like-minded
            communities and interact with posts and comments. The site also
            leverages Google Cloud Vision for unique image recognition with tags
            associated with uploaded photos.
          </p>
          <h4>Bramble Data Ecosystem:</h4>
          <p>
            Sequelize, Node.js, Express, React, Redux, Heroku, Mapbox, Google
            Cloud Vision, PostgreSQL
          </p>
        </div>
        <div className="projectBox">
          <h2>Hobby Shopper</h2>
          <h4>Fullstack Developer, 2020</h4>
          <a href="http://hobby-shopper.herokuapp.com/">
            <img
              src="/photos/hobbyShopperPhoto.png"
              className="hobbyShopperPhoto"
            />
          </a>
          <p>
            An e-commerce platform, in which users shop for courses to learn a
            new hobby. Courses are added to a cart as either a guest or
            logged-in user. Admins have additional capabilities through a unique
            dashboard.
          </p>
          <h4>Hobby Shopper Data Ecosystem:</h4>
          <p>Sequelize, Express, React, Redux, Heroku, Node.js</p>
        </div>
        <div className="projectBox">
          <h2>Lucifer Game: IN PROGRESS</h2>
          <h4>Sole Frontend Developer, 2020</h4>
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
