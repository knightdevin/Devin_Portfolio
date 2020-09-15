import React, {Component} from 'react'
import {Helmet} from 'react-helmet'

const ExpAndEdu = () => {
  return (
    <div id="contact_container" className="content">
      <Helmet>
        <title>Devin Knight | Education & Experience </title>
      </Helmet>
      <br />
      <h2> EDUCATION </h2>
      <div className="expAndEduBox">
        {/* <h2 className="nameOfPlace">
          Fullstack Academy - Software Engineering Immersive
        </h2> */}
        <img
          className="edu_img"
          src="/fullstack-academy-logo-color-on-white.png"
        />
        <h4 className="title">Software Engineering Student (2020)</h4>
        <ul className="responsibilities">
          <li className="bullet">
            17-week immersive software engineering program based in New York
            City
          </li>
          <li className="bullet">
            Centered on full-stack JavaScript development, including Node.js,
            Express, Sequelize ORM for PostgreSQL databases, React and Redux;
            along with HTML & CSS, and CS fundamentals
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ExpAndEdu
