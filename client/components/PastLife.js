import React from 'react'
import {Helmet} from 'react-helmet'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {SkillsHeading} from './Skills'

// ====================== STYLED COMPONENTS ======================
const AwardsBox = styled.div`
  display: flex;
  width: 70%;
`

const PastLifeParagraph = styled.h4`
  font-size: 18px;
  margin-bottom: 0;
  width: 70%;
`

const PastLifeSkillsBox = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  width: 75%;
`

const SingleAward = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  padding: 15px;
  margin: 1%;
  box-shadow: rgba(2, 8, 20, 0.4) 0px 0.35em 0.175em,
    rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
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

        <SkillsHeading style={{marginBottom: '-1%'}}>Awards</SkillsHeading>
        <br />
        <AwardsBox>
          <SingleAward>
            <p
              style={{
                fontWeight: 'bold',
                marginBottom: '0',
              }}
            >
              2013 Golden Mike Award - Best Radio Govt. & Political Reporting
            </p>
            <p style={{fontStyle: 'italic'}}>
              Awarded by the Radio & Television News Association of Southern
              California for a feature story that aired on KCSN 88.5FM about a
              November Ballot Initiative.
            </p>
            <a
              className="articleLink"
              href="https://www.csun.edu/mike-curb-arts-media-communication/journalism/news/kcsn-reporters-alumni-win-golden-mike-awards"
              rel="noopener noreferrer"
              target="_blank"
            >
              Press coverage of award
            </a>
          </SingleAward>

          <SingleAward>
            <p
              style={{
                fontWeight: 'bold',
                marginBottom: '0',
              }}
            >
              2012 Golden Mike Award - Best Radio Newscast Writing
            </p>
            <p style={{fontStyle: 'italic'}}>
              Awarded by the Radio & Television News Association of Southern
              California for the "Evening Update" newscast writing that aired
              September 12, 2012 on KCSN 88.5FM.
            </p>
            <a
              className="articleLink"
              href="https://csunshinetoday.csun.edu/university-news/kcsn-news-wins-two-golden-mike-awards/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Press coverage of award
            </a>
          </SingleAward>
        </AwardsBox>
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
        <SkillsHeading>Producer & Reporter Reels</SkillsHeading>
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
        <h3>
          <Link to="/publications" className="articleLink">
            Click here for Sample of Published News Stories
          </Link>
        </h3>
      </div>
    )
  }
}

export default PastLife
