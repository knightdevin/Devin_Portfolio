import React from 'react'
import styled from 'styled-components'
import {Helmet} from 'react-helmet'
import {Link} from 'react-router-dom'
import {landingimg, landingOverlay, codeSnippetImg} from '../../secrets'

// ====================== STYLED COMPONENTS ======================
const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BackgroundOverlayImg = styled.img`
  filter: blur(4px);
  height: 911px;
  width: 75%;
  opacity: 0.06;
  position: absolute;
`
const BackgroundImg = styled.img`
  height: 911px;
  width: 74%;
  display: flex;
  // flex-grow;
  position: relative;
  top: 0;
  left: 0;
  box-shadow: 0 0 8px 8px white inset;
`

const StyledButton = styled(Link)`
  // background-color: red;
  width: 5%;
  height: 13%;
  position: absolute;
  margin-right: 24px;
  margin: 30%;
  margin: 539px 0 0 -285px;
  transform: rotate(65deg) skew(-9deg, 0deg);
  opacity: 0.4;
  transition: 0.5s all ease-out;

  :hover {
    transform: rotate(65deg) skew(-9deg, 0deg) translateY(-3px) scale(1.01);
    cursor: pointer;
  }
`

const ButtonImg = styled.img`
  // transform: rotate(-76deg) skew(6deg, -16deg);
  opacity: 0.95;

  height: 125%;
  transform: rotate(-77deg) skewX(14deg) skewY(-27deg);
  margin-top: -30px;
  /* margin-top: -234px; */
  42px: ;
  width: 145%;
`
// ===============================================================

const LandingPage = () => {
  return (
    <LandingContainer style={{animation: 'fadein 2s', marginTop: '0.5%'}}>
      <Helmet>
        <title>Devin Knight | Software Engineer </title>
      </Helmet>
      <BackgroundImg src={landingimg} />
      <BackgroundOverlayImg src={landingOverlay} />
      <StyledButton to="/projects">
        <ButtonImg src={codeSnippetImg} />
      </StyledButton>
    </LandingContainer>
  )
}

export default LandingPage
