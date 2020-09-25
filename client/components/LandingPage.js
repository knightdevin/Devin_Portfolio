import React from 'react'
import styled from 'styled-components'
import {Helmet} from 'react-helmet'

// ====================== STYLED COMPONENTS ======================
const TextOnPhoto = styled.h2`
  font-family: 'Trebuchet MS', Helvetica, sans-serif;
  font-variant-caps: small-caps;
  font-size: 35px;
  left: 50%;
  position: absolute;
  text-shadow: 3px 3px rgb(0, 0, 0, 0.2);
  top: 70%;
  transform: translate(-50%, -50%);
`

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SubPhotosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transform: translate(-0%, -100%);
  width: 20%;
`

const DecorativeImages = styled.img`
  border-radius: 15px;
  height: 190px;
  padding: 10px;
  // transform: translate(-0%, -100%);
`

const BackgroundOverlayImg = styled.img`
  height: 890px;
  width: 100%;
  opacity: 0.05;
`
// ===============================================================

const LandingPage = () => {
  return (
    <LandingContainer>
      <Helmet>
        <title>Devin Knight | Software Engineer </title>
      </Helmet>
      <TextOnPhoto>A Developer with a Different Background</TextOnPhoto>
      <BackgroundOverlayImg src="/photos/extra photos/learn-code-e1455713167295.jpg" />
      <SubPhotosContainer>
        <DecorativeImages src="/photos/extra photos/IMG_1310.JPG" />
        <DecorativeImages src="/photos/extra photos/DevandJimmyReporter.jpg" />
        <DecorativeImages src="/photos/extra photos/DevBMSet.jpg" />
        <DecorativeImages src="/photos/extra photos/DevEditSess.jpg" />
        <DecorativeImages src="/photos/extra photos/Dev on BM set.jpg" />
      </SubPhotosContainer>
    </LandingContainer>
  )
}

export default LandingPage
