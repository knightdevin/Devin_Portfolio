import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'
import {SkillsHeading} from './Skills'

// ====================== STYLED COMPONENTS ======================
const AthleticLogo = styled.img`
  height: 85px;
  width: 100px;
  border-radius: 5px;
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

const CompanyLogos = styled.img`
  height: 65px;
  border-radius: 5px;
`

const EdAndExpPageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const EdAndExpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ExtraActivities = styled.ul`
  margin-top: 7px;
  margin-bottom: 7px;
  font-size: 18px;
`

const RelevantSkills = styled.ul`
  margin-top: 7px;
  margin-bottom: 7px;
  font-size: 18px;
  font-style: italic;
`

const SingleWorkSchoolCred = styled.div`
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
// ===============================================================

class ExpAndEdu extends Component {
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
      <EdAndExpPageContent className="pageContent">
        <Helmet>
          <title>Devin Knight | Education & Experience </title>
        </Helmet>
        <br />
        <EdAndExpContainer>
          <SkillsHeading> EDUCATION </SkillsHeading>
          <SingleWorkSchoolCred>
            <h2 className="nameOfPlace">Fullstack Academy - New York City</h2>
            <img
              className="edu_img"
              src="/logos/fullstack-academy-logo-color-on-white.png"
            />
            <Title>Software Engineering Student (2020)</Title>
            <ul className="responsibilities">
              <p className="bullet">
                17-week immersive software engineering program based in New York
                City & Licensed by New York State Education Department.
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
          </SingleWorkSchoolCred>
          <SingleWorkSchoolCred>
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
          </SingleWorkSchoolCred>
          <SingleWorkSchoolCred>
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
          </SingleWorkSchoolCred>
          <br />
          <SkillsHeading> EXPERIENCE </SkillsHeading>
          <SingleWorkSchoolCred>
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
          </SingleWorkSchoolCred>
          <SingleWorkSchoolCred>
            <h2 className="nameOfPlace">Jet.com - Hoboken, NJ</h2>
            <CompanyLogos src="/logos/jet.com-553867439_1280x720.jpg" />
            <Title>Analyst - Part-Time Contract (2016 - 2018)</Title>
            <ul className="responsibilities">
              <p className="bullet">
                Part of a remote search quality team that evaluated​ Jet.com
                internal searches, documented and fixed search optimization
                issues ​using SQL.
              </p>
              <RelevantSkills>
                <div style={{textDecoration: 'underline'}}>
                  Relevant Skills:{' '}
                </div>
                Merchandising & Product Issue Analysis, Excel, Attention to
                Detail, Critical Thinking, SQL.
              </RelevantSkills>
            </ul>
          </SingleWorkSchoolCred>
          <SingleWorkSchoolCred>
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
          </SingleWorkSchoolCred>
          <SingleWorkSchoolCred>
            <h2 className="nameOfPlace">Weber Shandwick - New York City</h2>
            <CompanyLogos src="/logos/1200px-WS_logo_wesolve_rgb_pos_blu.svg.png" />
            <Title>Account Executive (2015 - 2016)</Title>
            <ul className="responsibilities">
              <p className="bullet">
                Part of a strategic communications team within the Corporate
                Issues group that counseled Fortune 500 clients in preparing for
                & responding to global political & corporate crises. Prepared
                client research dockets, developed multimedia deliverables &
                earned media coverage to enhance client reputations.
              </p>
              <RelevantSkills>
                <div style={{textDecoration: 'underline'}}>
                  Relevant Skills:{' '}
                </div>
                Critical Thinking, Problem Solving, Communication, Research,
                Writing, Teamwork, Meeting Deadlines, Cross-team relationship
                Building
              </RelevantSkills>
            </ul>
          </SingleWorkSchoolCred>
          <SingleWorkSchoolCred>
            <h2 className="nameOfPlace">Walb News Ten - Albany, GA</h2>
            <CompanyLogos src="/logos/walb-news-10-albany.png" />
            <Title>On Air Repoter / Multimedia Journalist (2013 - 2014)</Title>
            <ul className="responsibilities">
              <p className="bullet">
                Delivered live coverage of breaking news events on the leading
                local news station in Southwest Georgia. I covered politics,
                crime, fires & human interest stories as a general assignment
                repoter among a dedicated group of anchors, producers &
                journalism professionals.
              </p>
              <RelevantSkills>
                <div style={{textDecoration: 'underline'}}>
                  Relevant Skills:{' '}
                </div>
                Meeting Deadlines, Problem Solving, Writing, Digital
                Photography, Editing (Edius software), ENPS Software,
                Resourcefulness, Quick Learner
              </RelevantSkills>
            </ul>
          </SingleWorkSchoolCred>
        </EdAndExpContainer>
      </EdAndExpPageContent>
    )
  }
}

export default ExpAndEdu
