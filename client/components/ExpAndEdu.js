import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'

// ====================== STYLED COMPONENTS ======================

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // width: 70%;
`

const OneSchool = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  width: 70%;

  &:hover {
    background-color: #a9d1ef;
  }
`

// ===============================================================

const ExpAndEdu = () => {
  return (
    <div id="contact_container" className="pageContent">
      <Helmet>
        <title>Devin Knight | Education & Experience </title>
      </Helmet>
      <br />
      <EducationContainer>
        <h2> EDUCATION </h2>
        <OneSchool>
          <h2 className="nameOfPlace">Fullstack Academy - New York City</h2>
          <img
            className="edu_img"
            src="/logos/fullstack-academy-logo-color-on-white.png"
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
        </OneSchool>
        <OneSchool>
          <h2 className="nameOfPlace">New York University</h2>
          <img className="edu_img" src="/logos/nyu.png" />
          <h4 className="title">
            Master of Science - Relations and Corporate Communications (2017)
          </h4>
          <ul className="responsibilities">
            <li className="bullet">
              The M.S. in Public Relations and Corporate Communications program
              is a 42-credit program focused on written communication and
              presentation skills, ethics, law, social media strategies,
              research methodologies, and regulatory practices.
            </li>
            <li className="bullet">
              Relevant Skills: Critical Thinking, Problem Solving, Business
              Strategy, Research, Presentation, Collaboration & working with Key
              Stakeholders
            </li>
            <li>
              Activities: Represented the PRCC program as an NYU School of
              Professional Studies Student Rep. during informational sessions
              for prospective students.
            </li>
          </ul>
        </OneSchool>
        <OneSchool>
          <h2 className="nameOfPlace">
            California State University Northridge
          </h2>

          <img className="edu_img" src="/logos/Seal-CSUN-Horizontal-186.png" />
          <h4 className="title">Bachelor of Arts - JournalismGrade (2012)</h4>
          <ul className="responsibilities">
            <li className="bullet">
              The B.A. in CSUN's Department of Journalism is a nationally
              accredited undergraduate program designed for students who seek
              careers in a wide variety of contemporary news media options and
              it's home to eight award-winning, student-run contemporary and
              digital news media operations.
            </li>
            <li className="bullet">
              Relevant Skills: Writing, Communication, Presentation, Meeting
              Deadlines, Public Speaking
            </li>
            <li>
              Activities: Media Mentor: Met with young journalism students
              weekly at Reseda High School in Reseda, CA, to teach basic
              journalism principles. Developed class workshops and lectures
              evaluated students' writing to prepare for publication for their
              high school paper.
            </li>
          </ul>
        </OneSchool>
      </EducationContainer>
    </div>
  )
}

export default ExpAndEdu
