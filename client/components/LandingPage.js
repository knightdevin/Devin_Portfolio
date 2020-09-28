import React from 'react'
import styled from 'styled-components'
import {Helmet} from 'react-helmet'
import {NavLink, Link} from 'react-router-dom'

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
  height: 911px;
  width: 77%;
  opacity: 0.05;
  position: absolute;
`
const BackgroundImg = styled.img`
  height: 911px;
  width: 77%;
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
      {/* <TextOnPhoto>A Developer with a Different Background</TextOnPhoto> */}
      <BackgroundImg src="/photos/extra photos/photos/501_3872.JPG" />
      <BackgroundOverlayImg src="/photos/extra photos/learn-code-e1455713167295.jpg" />
      <StyledButton to="/projects">
        {/* <ButtonImg src="/photos/extra photos/code_img.jpg" /> */}
        <ButtonImg src="/photos/extra photos/photos/Helper_Func_Code_Image.png" />
      </StyledButton>
    </LandingContainer>
  )
}

export default LandingPage
