import React, {Component} from 'react'
import styled from 'styled-components'
import {Helmet} from 'react-helmet'

const StyledArticles = styled.a`
  border: 1px solid gray;
  margin: 10px;
`

const TechPublications = () => {
  return (
    <div id="contact_container" className="content">
      <Helmet>
        <title>Devin Knight | Publications </title>
      </Helmet>
      <br />
      <h1 className="contactMe">Tech Blogs</h1>

      <StyledArticles
        className="react-router__link"
        href="https://blog.usejournal.com/a-better-way-to-fill-your-database-tables-with-random-data-714da8afd061"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="articleBox">
          {/* <h2>A Better Way To Fill Your Database Tables With Random Data</h2>
          <h4>
            Take the headache out of managing a seed file with a simple
            JavaScript library
          </h4>
          <img
            src="/photos/ArticledatabasePhoto.png"
            className="hobbyShopperPhoto"
          />
          <p>
            So you’re developing an idea for a new app or website. Maybe you and
            your colleagues just wrapped up a big planning session. Everyone
            knows what the app is, who will be using it and what it will be used
            for. High-fives all around, right?
          </p> */}
          <img
            src="/photos/DatabaseMediumArticleImage.png"
            className="techArticle"
          />
        </div>
      </StyledArticles>
      <h1 className="contactMe">Sample of Published News Stories</h1>
      <div className="reelsBox">
        <StyledArticles
          className="react-router__link"
          href="https://www.walb.com/story/22274652/deputy-resigns-after-high-speed-chase/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/photos/DeputyResignsArticleImage.png"
            className="articleImage"
          />
        </StyledArticles>
        <StyledArticles
          className="react-router__link"
          href="https://www.walb.com/story/24028737/authorities-searching-for-escapee/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="/photos/ConvictRunsImage.png" className="articleImage" />
        </StyledArticles>
        <StyledArticles
          className="react-router__link"
          href="https://www.today.com/pets/rare-twin-horses-born-easter-defy-odds-1C9195974"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/photos/EasterHorsesTodayArticleImage.png"
            className="articleImage"
          />
        </StyledArticles>
        <StyledArticles
          className="react-router__link"
          href="https://www.walb.com/story/21635010/new-exhibits-at-jimmy-carter-national-historic-site/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/photos/JimmyCarterArticleImage.png"
            className="articleImage"
          />
        </StyledArticles>
        <StyledArticles
          className="react-router__link"
          href="https://www.walb.com/story/24410297/phoebe-computer-stolen-patient-info-compromise/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/photos/PhoebeMissingInfoImage.png"
            className="articleImage"
          />
        </StyledArticles>
      </div>
      <div className="reelsBox">
        <StyledArticles
          className="react-router__link"
          href="https://www.walb.com/story/22971213/douglas-residents-demand-action-from-police-department/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/photos/ResidentsDemandActionArticleImage.png"
            className="articleImage"
          />
        </StyledArticles>
        <StyledArticles
          className="react-router__link"
          href="https://www.walb.com/story/22527089/three-die-in-fatal-ambulance-crash/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/photos/FatalAmbulanceArticleImage.png"
            className="articleImage"
          />
        </StyledArticles>
        <StyledArticles
          className="react-router__link"
          href="https://www.walb.com/story/24024421/driver-takes-off-with-man-in-truck-bed/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/photos/DriverTakesOffArticleImage.png"
            className="articleImage"
          />
        </StyledArticles>
        <StyledArticles
          className="react-router__link"
          href="https://www.walb.com/story/24410297/phoebe-computer-stolen-patient-info-compromise/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/photos/DawsonMayorShotArticleImage.png"
            className="articleImage"
          />
        </StyledArticles>
        <StyledArticles
          className="react-router__link"
          href="https://www.walb.com/story/21896096/update-condition-of-mother-of-rare-twin-foals-improves/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/photos/TwinHorseUpdateArticleImage.png"
            className="articleImage"
          />
        </StyledArticles>
      </div>
      <div className="reelsBox">
        <StyledArticles
          className="react-router__link"
          href="https://www.walb.com/story/23446845/dougherty-county-residents-ask-for-pipeline-to-be-re-routed/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/photos/PipelineReroutedArticleImage.png"
            className="articleImage"
          />
        </StyledArticles>
        <StyledArticles
          className="react-router__link"
          href="https://www.walb.com/story/22157369/governor-nathan-deal-signs-bill-protecting-senior-citizens/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/photos/GovSeniorBillArticleImage.png"
            className="articleImage"
          />
        </StyledArticles>
        <StyledArticles
          className="react-router__link"
          href="https://www.walb.com/story/23661587/south-georgia-farm-honored-for-deep-roots-in-states-history/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/photos/GeorgiaFarmArticleImage.png"
            className="articleImage"
          />
        </StyledArticles>
        <StyledArticles
          className="react-router__link"
          href="https://www.walb.com/story/23919728/new-waffle-house-and-hotel-proposed-in-downtown-albany/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/photos/AlbanyWaffleHouseArticleImage.png"
            className="articleImage"
          />
        </StyledArticles>
      </div>
    </div>
  )
}

export default TechPublications
