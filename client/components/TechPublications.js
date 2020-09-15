import React, {Component} from 'react'
import {Helmet} from 'react-helmet'

const TechPublications = () => {
  return (
    <div id="contact_container" className="content">
      <Helmet>
        <title>Devin Knight | Publications </title>
      </Helmet>
      <br />
      <h1 className="contactMe">Tech Blogs</h1>

      <div className="articleBox">
        <h2>A Better Way To Fill Your Database Tables With Random Data</h2>
        <h4>
          Take the headache out of managing a seed file with a simple JavaScript
          library
        </h4>
        <a href="https://blog.usejournal.com/a-better-way-to-fill-your-database-tables-with-random-data-714da8afd061">
          <img
            src="/photos/ArticledatabasePhoto.png"
            className="hobbyShopperPhoto"
          />
        </a>
        <p>
          So you’re developing an idea for a new app or website. Maybe you and
          your colleagues just wrapped up a big planning session. Everyone knows
          what the app is, who will be using it and what it will be used for.
          High-fives all around, right?
        </p>
      </div>
    </div>
  )
}

export default TechPublications
