import React from 'react'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'

// ====================== STYLED COMPONENTS ======================

const SkillsHeading = styled.h2`
  font-weight: bolder;
  font-size: xx-large;
  margin-block-end: auto;
  text-decoration: underline;
`

// ===============================================================

class Skills extends React.Component {
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

  // eslint-disable-next-line complexity
  render() {
    return (
      <div className="pageContent">
        <Helmet>
          <title>Devin Knight | Skills </title>
        </Helmet>
        <div className="skillsBox">
          <div className="subSkills_box">
            <SkillsHeading>Proficient</SkillsHeading>
            <div className="subSkills_iconsBox">
              <div className="single_skill">
                <img
                  id="js"
                  src="/logos/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"
                  className="skill_img"
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                />
                {this.state.js && <p className="skill_name">JavaScript</p>}
              </div>
              <div className="single_skill">
                <img
                  id="react"
                  src="/logos/react-f34770503b90f26ea389f557500ff825.png"
                  className="skill_img"
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                />
                {this.state.react ? (
                  <p className="skill_name">React</p>
                ) : (
                  <br />
                )}
              </div>
              <div className="single_skill">
                <img
                  id="seq"
                  src="/logos/sequelize-1175001.png"
                  className="skill_img"
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                />
                {this.state.seq ? (
                  <p className="skill_name">Sequelize</p>
                ) : (
                  <br />
                )}
              </div>
              <div className="single_skill">
                <img
                  id="postgres"
                  src="/logos/postgres-unnamed.png"
                  className="skill_img"
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                />
                {this.state.postgres ? (
                  <p className="skill_name">Postgres</p>
                ) : (
                  <br />
                )}
              </div>
              <div className="single_skill">
                <img
                  id="css"
                  src="/logos/css3-logo-png-transparent-1.png"
                  className="skill_img"
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                />
                {this.state.css ? <p className="skill_name">CSS</p> : <br />}
              </div>
              <div className="single_skill">
                <img
                  id="html"
                  src="/logos/html5-logo-image-logo-html-7.png"
                  className="skill_img"
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                />
                {this.state.html ? <p className="skill_name">HTML</p> : <br />}
              </div>
              <div className="single_skill">
                <img
                  id="phaser"
                  src="/logos/1_B8WRf-Yp1cSW1-VfptkmGQ.png"
                  className="skill_img"
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                />
                {this.state.phaser ? (
                  <p className="skill_name">Phaser 3</p>
                ) : (
                  <br />
                )}
              </div>
              <div className="single_skill">
                <img
                  id="git"
                  src="/logos/Git-Icon-Black.png"
                  className="skill_img"
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                />
                {this.state.git ? <p className="skill_name">Git</p> : <br />}
              </div>
              <div className="single_skill">
                <img
                  id="github"
                  src="/logos/github - 25231.png"
                  className="skill_img"
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                />
                {this.state.github ? (
                  <p className="skill_name">Github</p>
                ) : (
                  <br />
                )}
              </div>
              <div className="single_skill">
                <img
                  id="node"
                  src="/logos/node-1200px-Node.js_logo.svg.png"
                  className="skill_img"
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                />
                {this.state.node ? (
                  <p className="skill_name">Node.js</p>
                ) : (
                  <br />
                )}
              </div>
              <div className="single_skill">
                <img
                  id="express"
                  src="/logos/express-js-png-5-png-image-expressjs-png-800_800.png"
                  className="skill_img"
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                />
                {this.state.express ? (
                  <p className="skill_name">Express.js</p>
                ) : (
                  <br />
                )}
              </div>
            </div>
            <br />
          </div>
          <div className="subSkills_box">
            <SkillsHeading>Knowledgable</SkillsHeading>
            <div className="subSkills_iconsBox">
              <div className="single_skill">
                <img
                  id="cloudinary"
                  src="/logos/new_cloudinary_logo_square.png"
                  className="skill_img"
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                />
                {this.state.cloudinary ? (
                  <p className="skill_name">Cloudinary</p>
                ) : (
                  <br />
                )}
              </div>
              <div className="single_skill">
                <img
                  id="redux"
                  src="/logos/reduxLogo.png"
                  className="redux_skill"
                  // className="skill_img"
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                />
                {this.state.redux ? (
                  <p className="skill_name">Redux</p>
                ) : (
                  <br />
                )}
              </div>
              <div className="single_skill">
                <img
                  id="googleCloud"
                  src="/logos/google-cloud-vision-api.webp"
                  className="skill_img"
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                />
                {this.state.googleCloud ? (
                  <p className="skill_name">Google Cloud Vision API</p>
                ) : (
                  <br />
                )}
              </div>
              <div className="single_skill">
                <img
                  id="styledComponents"
                  src="/logos/1_7jRD5QhgARucFKvRHFxpOg-1.png"
                  className="skill_img"
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                />
                {this.state.styledComponents ? (
                  <p className="skill_name">Styled Components</p>
                ) : (
                  <br />
                )}
              </div>
              <div className="single_skill">
                <img
                  id="mapBox"
                  src="/logos/mapbox-logo-logodix-mapbox-png-510_364.png"
                  className="skill_img"
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                />
                {this.state.mapBox ? (
                  <p className="skill_name">Mapbox API</p>
                ) : (
                  <br />
                )}
              </div>
            </div>
          </div>
          <div className="subSkills_box">
            <SkillsHeading>Transferrable Skills</SkillsHeading>
            <div className="subSkills_iconsBox">
              <div className="single_skill">
                <img
                  id="communication"
                  src="/icons/clipart267305.png"
                  className="skill_img"
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
                  id="criticalThinking"
                  src="/icons/clipart873321.png"
                  className="skill_img"
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
                  id="collaboration"
                  src="/icons/clipart2393774.png"
                  className="skill_img"
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                />
                {this.state.collaboration ? (
                  <p className="skill_name">Collaboration</p>
                ) : (
                  <br />
                )}
              </div>
              <div className="single_skill">
                <img
                  id="problemSolving"
                  src="/icons/clipart2394865.png"
                  className="skill_img"
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                />
                {this.state.problemSolving ? (
                  <p className="skill_name">Problem Solving</p>
                ) : (
                  <br />
                )}
              </div>
              <div className="single_skill">
                <img
                  id="presentations"
                  src="/icons/clipart2411525.png"
                  className="skill_img"
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                />
                {this.state.presentations ? (
                  <p className="skill_name">Public Speaking</p>
                ) : (
                  <br />
                )}
              </div>
              <div className="single_skill">
                <img
                  id="writing"
                  src="/icons/clipart3304011.png"
                  className="skill_img"
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                />
                {this.state.writing ? (
                  <p className="skill_name">Writing</p>
                ) : (
                  <br />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills
