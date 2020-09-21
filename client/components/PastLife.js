import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {SkillsHeading} from './Skills'

// ====================== STYLED COMPONENTS ======================

const PastLifeParagraph = styled.h4`
  width: 70%;
`

const PastLifeSkillsBox = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  width: 75%;
`

const AwardsBox = styled.div`
  display: flex;
  width: 70%;
`
const SingleAward = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`

// ===============================================================

class PastLife extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.onHover = this.onHover.bind(this)
    this.offHover = this.offHover.bind(this)
  }

  onHover(event) {
    this.setState({
      [event.target.id]: true,
    })
  }

  offHover(event) {
    this.setState({
      [event.target.id]: false,
    })
  }

  render() {
    return (
      <div id="pastCareer_container" className="pageContent">
        <Helmet>
          <title>Devin Knight | Past Life </title>
        </Helmet>
        <br />
        <SkillsHeading> My Pre-Coding Career </SkillsHeading>
        <PastLifeParagraph>
          I have had unique opportunities to work within many positions in the
          media spectrum. As a broadcast reporter, I leveraged different media
          and became a quick problem solver to meet hard broadcast deadlines so
          my stories were ready to be delivered live for every evening broacast.
          As a public relations professional, I worked among teams to develop
          communication plans and pitched stories to journalists to earn
          coverage that helped our clients meet their business objectives. As a
          producer, I wrote and developed compelling story angles that were
          interesting to key audiences. Many of the skills from my media
          background are transferrable to the tech-industry.
        </PastLifeParagraph>
        {/* <h4>
        Technology is paramount to the media industry. In the Public Relations
        world, public officials and company leaders look to publicists and
        communications strategists to disseminate vital information through
        press releases, press confrences, social media and other means. In the
        world of Journalsim, reporters use mobile technology to contact sources
        and vet information, newsrooms leverage software like ENPS and iNews to
        assemble newscasts, and staff uses non-linear editing software to
        assemble visual stories. Journalists and Public Relations professionals
        work hand in hand through the good and bad stories about companies and
        elected officials.
      </h4> */}
        <SkillsHeading>Transferable Skills</SkillsHeading>
        <PastLifeSkillsBox>
          <div className="single_skill">
            <img
              id="communication"
              src="/icons/clipart267305.png"
              className="communication"
              onMouseOver={this.onHover}
              onMouseOut={this.offHover}
            />
            {this.state.communication ? (
              <p className="skill_name">Communication</p>
            ) : (
              <br />
            )}
          </div>

          <div className="single_skill">
            <img
              id="problemSolving"
              src="/icons/clipart2394865.png"
              className="problemSolving"
              onMouseOver={this.onHover}
              onMouseOut={this.offHover}
            />{' '}
            {this.state.problemSolving ? (
              <p className="skill_name">Problem Solving</p>
            ) : (
              <br />
            )}
          </div>
          <div className="single_skill">
            <img
              id="criticalThinking"
              src="/icons/clipart873321.png"
              className="criticalThinking"
              onMouseOver={this.onHover}
              onMouseOut={this.offHover}
            />
            {this.state.criticalThinking ? (
              <p className="skill_name">Critical Thinking</p>
            ) : (
              <br />
            )}
          </div>
          <div className="single_skill">
            <img
              id="writing"
              src="/icons/clipart3304011.png"
              className="typewriter"
              onMouseOver={this.onHover}
              onMouseOut={this.offHover}
            />
            {this.state.writing ? (
              <p className="skill_name">Writing</p>
            ) : (
              <br />
            )}
          </div>
          <div className="single_skill">
            <img
              id="publicSpeaking"
              src="/icons/clipart2411525.png"
              className="publicSpeaking"
              onMouseOver={this.onHover}
              onMouseOut={this.offHover}
            />
            {this.state.publicSpeaking ? (
              <p className="skill_name">Public Speaking</p>
            ) : (
              <br />
            )}
          </div>
          <div className="single_skill">
            <img
              id="collaboration"
              src="/icons/clipart2393774.png"
              className="teamWork"
              onMouseOver={this.onHover}
              onMouseOut={this.offHover}
            />
            {this.state.collaboration ? (
              <p className="skill_name">Collaboration</p>
            ) : (
              <br />
            )}
          </div>
        </PastLifeSkillsBox>
        <br />
        <SkillsHeading>Producer and Reporter Reels</SkillsHeading>
        <div className="reelsBox">
          <a
            className="react-router__link"
            href="https://drive.google.com/file/d/1nIT-LB4SCEAIr7G4-eUi6ViP_FHYa8KP/view"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="/photos/ProducerReelPhoto.png" className="reelIcon" />
          </a>
          <a
            className="react-router__link"
            href="https://vimeo.com/113738830"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="/photos/ReporterReelPhoto.png" className="reelIcon" />
          </a>
          <a
            className="react-router__link"
            href="https://vimeo.com/119456470"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="/photos/ReporterReelPhoto2.png" className="reelIcon" />
          </a>
        </div>
        <SkillsHeading>Awards</SkillsHeading>
        <br />
        <AwardsBox>
          <SingleAward>
            2013 Golden Mike Award - Best Radio Govt. & Political Reporting
            <ul>
              Awarded by the Radio & Television News Association of Southern
              California for a feature story that aired on KCSN 88.5FM about a
              November Ballot Initiative.
            </ul>
            <ul>
              <a
                className="react-router__link"
                href="https://www.csun.edu/mike-curb-arts-media-communication/journalism/news/kcsn-reporters-alumni-win-golden-mike-awards"
                rel="noopener noreferrer"
                target="_blank"
              >
                Press coverage of award
              </a>
            </ul>
          </SingleAward>

          <SingleAward>
            2012 Golden Mike Award - Best Radio Newscast Writing
            <ul>
              Awarded by the Radio & Television News Association of Southern
              California for the "Evening Update" newscast writing that aired
              September 12, 2012 on KCSN 88.5FM.
            </ul>
            <ul>
              <a
                className="react-router__link"
                href="https://csunshinetoday.csun.edu/university-news/kcsn-news-wins-two-golden-mike-awards/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Press coverage of award
              </a>
            </ul>
          </SingleAward>
        </AwardsBox>
        <h3>
          <Link to="/publications">
            Click here for Sample of Published News Stories
          </Link>
        </h3>
      </div>
    )
  }
}

export default PastLife
