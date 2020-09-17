import React from 'react'
import {Helmet} from 'react-helmet'

class Skills extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.onHover = this.onHover.bind(this)
    this.offHover = this.offHover.bind(this)
  }

  onHover(e) {
    this.setState({
      [e.target.id]: true,
    })
  }

  offHover(e) {
    this.setState({
      [e.target.id]: false,
    })
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Devin Knight | Skills </title>
        </Helmet>
        <div className="skillsBox">
          <div className="subSkills_box">
            <h2>Proficient</h2>
            <div>
              <img
                src="/logos/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"
                className="skill_img"
              />
              <img
                src="/logos/react-f34770503b90f26ea389f557500ff825.png"
                className="skill_img"
              />
              <img src="/logos/sequelize-1175001.png" className="skill_img" />
              <img src="/logos/postgres-unnamed.png" className="skill_img" />
              <img
                src="/logos/css3-logo-png-transparent-1.png"
                className="skill_img"
              />
              <img
                src="/logos/html5-logo-image-logo-html-7.png"
                className="skill_img"
              />
              <img
                src="/logos/1_B8WRf-Yp1cSW1-VfptkmGQ.png"
                className="skill_img"
              />
              <img src="/logos/Git-Icon-Black.png" className="skill_img" />
              <img src="/logos/github - 25231.png" className="skill_img" />

              <img
                src="/logos/node-1200px-Node.js_logo.svg.png"
                className="skill_img"
              />
              <img
                src="/logos/express-js-png-5-png-image-expressjs-png-800_800.png"
                className="skill_img"
              />
            </div>
          </div>
          <div className="subSkills_box">
            <h2>Knowledgable</h2>
            <div>
              <img
                src="/logos/new_cloudinary_logo_square.png"
                className="skill_img"
              />
              <img
                src="/logos/redux-1_BpaqVMW2RjQAg9cFHcX1pw.png"
                className="redux_skill"
              />
              <img
                src="/logos/google-cloud-vision-api.webp"
                className="skill_img"
              />
              <img
                src="/logos/mapbox-logo-logodix-mapbox-png-510_364.png"
                className="skill_img"
              />
            </div>
          </div>
          <div className="subSkills_box">
            <h2>Transferrable Skills</h2>
            <div>
              <img src="/icons/clipart267305.png" className="skill_img" />
              <img src="/icons/clipart873321.png" className="skill_img" />
              <img src="/icons/clipart2393774.png" className="skill_img" />
              <img src="/icons/clipart2394865.png" className="skill_img" />
              <img src="/icons/clipart2411525.png" className="skill_img" />
              <img src="/icons/clipart3304011.png" className="skill_img" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills
