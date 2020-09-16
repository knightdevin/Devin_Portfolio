import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import {Link} from 'react-router-dom'

const PastLife = () => {
  return (
    <div id="pastCareer_container" className="content">
      <Helmet>
        <title>Devin Knight | Past Life </title>
      </Helmet>
      <br />
      <h2> My Pre-Coding Career </h2>
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
      <h4>
        I have had unique opportunities to work within many positions in the
        media spectrum. As a broadcast reporter, I leveraged different media and
        became a quick problem solver to meet hard broadcast deadlines so my
        stories were ready to be delivered live for every evening broacast. As a
        public relations professional, I worked among teams to develop
        communication plans and pitched stories to journalists to earn coverage
        that helped our clients meet their business objectives. As a producer, I
        had to write and develop compelling story angles that were interesting
        to key audiences.
      </h4>
      <h4>
        Many of the skills from my media background are transferrable to the
        tech-industry.
      </h4>
      <h3>Skills</h3>
      <div className="pastLife-skillsBox">
        <img src="/icons/clipart267305.png" className="communication" />
        <img src="/icons/clipart2394865.png" className="problemSolving" />
        <img src="/icons/clipart873321.png" className="criticalThinking" />
        <img src="/icons/clipart3304011.png" className="typewriter" />
        <img src="/icons/clipart2393774.png" className="teamWork" />
      </div>
      <h3>Sample of Published News Stories</h3>
      <div className="newsBox"></div>

      <h3>Producer and Reporter Reels</h3>
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
      <h3>Awards</h3>
    </div>
  )
}

export default PastLife
