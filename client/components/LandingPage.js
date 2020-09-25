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

const BackgroundOverlayImg = styled.img`
  height: 1030px;
  width: 100%;
  opacity: 0.05;
  position: absolute;
`
const BackgroundImg = styled.img`
  height: 100%;
  width: 100%;
  display: flex;
  // flex-grow;
  position: relative;
  top: 0;
  left: 0;
  box-shadow: 0 0 8px 8px white inset;
`

// ===============================================================

const LandingPage = () => {
  return (
    <LandingContainer style={{animation: 'fadein 2s', marginTop: '0.5%'}}>
      <Helmet>
        <title>Devin Knight | Software Engineer </title>
      </Helmet>
      {/* <TextOnPhoto>A Developer with a Different Background</TextOnPhoto> */}
      <BackgroundImg src="/photos/extra photos/photos/501_3872.JPG" />
      <BackgroundOverlayImg src="/photos/extra photos/learn-code-e1455713167295.jpg" />
    </LandingContainer>
  )
}

export default LandingPage
