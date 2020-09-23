import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'

// ====================== STYLED COMPONENTS ======================

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const OneSchool = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  width: 70%;
  margin: 0.5%;
  padding-bottom: 10px;
  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem,
    rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;

  &:hover {
    background-color: #eef6fc;
  }
`

const Title = styled.h4`
  text-align: center;
  font-style: italic;
  margin-bottom: auto;
  font-size: 20px;
`

const CertificateButton = styled.button`
  background-color: #adadad;
  border-radius: 5px;
  transition: 0.5s all ease-out;
  font-family: 'Trebuchet MS', Helvetica, sans-serif;
  font-variant-caps: small-caps;
  height: 25px;
  width: 115px;
  font-size: 15px;

  &:hover {
    transform: translateY(-3px) scale(1.03);
    cursor: pointer;
    box-shadow: rgba(2, 8, 20, 0.4) 0px 0.35em 1.175em,
      rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
  }
`

const RelevantSkills = styled.ul`
  margin-top: 7px;
  margin-bottom: 7px;
  font-size: 18px;
  font-style: italic;
`

const ExtraActivities = styled.ul`
  margin-top: 7px;
  margin-bottom: 7px;
  font-size: 18px;
`

const AthleticLogo = styled.img`
  height: 85px;
  width: 100px;
  border-radius: 5px;
`
const CompanyLogos = styled.img`
  height: 65px;
  border-radius: 5px;
`

// ===============================================================

class ExpAndEdu extends React.Component {
  handleClick() {
    document.getElementById('button').addEventListener('click', function () {
      document.querySelector('.bg-modal').style.display = 'flex'
    })

    document.querySelector('.close').addEventListener('click', function () {
      document.querySelector('.bg-modal').style.display = 'none'
    })
  }

  render() {
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
            <Title>Software Engineering Student (2020)</Title>
            <ul className="responsibilities">
              <p className="bullet">
                17-week immersive software engineering program based in New York
                City & Licensed by New York State Education Department
              </p>
              <RelevantSkills>
                <div style={{textDecoration: 'underline'}}>
                  Relevant Skills:{' '}
                </div>
                Full-stack JavaScript development using Node.js, Express,
                Sequelize ORM for PostgreSQL databases, React & Redux; along
                with HTML & CSS, and CS fundamentals
              </RelevantSkills>
            </ul>

            <CertificateButton id="button" onClick={this.handleClick}>
              View Certificate
            </CertificateButton>
          </OneSchool>
          <OneSchool>
            <h2 className="nameOfPlace">New York University</h2>
            <img className="edu_img" src="/logos/nyu.png" />
            <Title>
              Master of Science - Public Relations & Corporate Communications
              (2017)
            </Title>
            <ul className="responsibilities">
              <p className="bullet">
                The M.S. in Public Relations and Corporate Communications
                program is a 42-credit program focused on written communication
                and presentation skills, ethics, law, social media strategies,
                research methodologies, and regulatory practices.
              </p>
              <RelevantSkills>
                <div style={{textDecoration: 'underline'}}>
                  Relevant Skills:{' '}
                </div>
                Critical Thinking, Problem Solving, Business Strategy, Research,
                Presentation, Collaboration & working with Stakeholders
              </RelevantSkills>
              <ExtraActivities>
                <div style={{textDecoration: 'underline'}}>Activities: </div>
                Represented the PRCC program as an NYU School of Professional
                Studies Student Rep. during informational sessions for
                prospective students.
              </ExtraActivities>
            </ul>
          </OneSchool>
          <OneSchool>
            <h2 className="nameOfPlace">
              California State University Northridge
            </h2>

            <img
              className="edu_img"
              src="/logos/Seal-CSUN-Horizontal-186.png"
            />
            <Title>Bachelor of Arts - Journalism (2012)</Title>
            <ul className="responsibilities">
              <p className="bullet">
                The B.A. in CSUN's Department of Journalism is a nationally
                accredited undergraduate program designed for students who seek
                careers in a wide variety of contemporary news media options and
                it's home to eight award-winning, student-run contemporary and
                digital news media operations.
              </p>
              <RelevantSkills>
                <div style={{textDecoration: 'underline'}}>
                  Relevant Skills:
                </div>
                Writing, Communication, Presentation, Meeting Deadlines, Public
                Speaking
              </RelevantSkills>
              <ExtraActivities>
                <div style={{textDecoration: 'underline'}}>Activities: </div>
                Media Mentor to young journalism students weekly at Reseda High
                School in Los Angeles to teach basic journalism principles.
                Developed class workshops and lectures evaluated students'
                writing to prepare for publication for their high school paper.
              </ExtraActivities>
            </ul>
          </OneSchool>
          <br />
          <h2> EXPERIENCE </h2>
          <OneSchool>
            <h2 className="nameOfPlace">
              The Athletic - New York City Metro Area
            </h2>
            <AthleticLogo src="/logos/ta.jpg" />
            <Title>Associate Producuer (2019)</Title>
            <ul className="responsibilities">
              <p className="bullet">
                Part of the start-up team that launched digital video for The
                Athletic, a subscription-based sports journalism website and app
                that provides national and local coverage across the United
                States, Canada and the United Kingdom.
              </p>
              <RelevantSkills>
                <div style={{textDecoration: 'underline'}}>
                  Relevant Skills:{' '}
                </div>
                G Suite, Communication, Editing (Adobe Premiere Pro software),
                Writing, Production Trackers, Excel, Social Media Analysis &
                Business Consulting
              </RelevantSkills>
            </ul>
          </OneSchool>
          <OneSchool>
            <h2 className="nameOfPlace">Jet.com - Hoboken, NJ</h2>
            <CompanyLogos src="/logos/jet.com-553867439_1280x720.jpg" />
            <Title>Analyst - Part-Time Contract (2016 - 2018)</Title>
            <ul className="responsibilities">
              <p className="bullet">
                Part of a remote search quality team that evaluated​ Jet.com
                internal searches, documented and fixed search optimization
                issues ​using SQL
              </p>
              <RelevantSkills>
                <div style={{textDecoration: 'underline'}}>
                  Relevant Skills:{' '}
                </div>
                Merchandising & Product Issue Analysis, Excel, Attention to
                Detail, Critical Thinking, SQL
              </RelevantSkills>
            </ul>
          </OneSchool>

          <OneSchool>
            <h2 className="nameOfPlace">
              Better Man Show - New York City Metro Area
            </h2>
            <CompanyLogos src="/logos/betterManlogo.png" />
            <Title>Producer / Post-Production Supervisor (2017 - 2018)</Title>
            <ul className="responsibilities">
              <p className="bullet">
                Part of a team of creatives that produced the Better Man Show,
                program for the modern man and the people that love them (aired
                on ABC, CBS, NBC and other local stations).
              </p>
              <RelevantSkills>
                <div style={{textDecoration: 'underline'}}>
                  Relevant Skills:{' '}
                </div>
                Team Management, Meeting Deadlines, Critical Thinking, Problem
                Solving, Editing (Adobe Premiere Pro software), Production
                Development, Leadership
              </RelevantSkills>
            </ul>
          </OneSchool>
        </EducationContainer>
      </div>
    )
  }
}

export default ExpAndEdu
