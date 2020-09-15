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
            <img src="/bramblePhoto.png" className="bramblePhoto" />
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
            <img src="/hobbyShopperPhoto.png" className="hobbyShopperPhoto" />
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
      </div>
    </div>
  )
}

export default Projects
