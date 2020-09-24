import React from 'react'
import styled from 'styled-components'

// ====================== STYLED COMPONENTS ======================

const FooterStyles = styled.p`
  text-align: center;
  font-family: 'Trebuchet MS', Helvetica, sans-serif;
  font-size: large;
  margin: 0px;
`

const FooterLogo = styled.img`
  height: 40px;
`

const FooterLogosContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 20%;
  align-items: center;
`

// ===============================================================

const Footer = () => {
  return (
    <div className="footer">
      <FooterLogosContainer>
        <a
          href="https://www.linkedin.com/in/devinknight/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FooterLogo src="logos/linkedin-logo-3.png" />
        </a>
        <a
          href="https://github.com/knightdevin"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FooterLogo src="/logos/github - 25231.png" />
        </a>
        <a href="mailto:knightdevin@hotmail.com">
          <FooterLogo src="/logos/clipart1150873.png" />
        </a>
      </FooterLogosContainer>
      <FooterStyles>Created by Devin Knight in 2020</FooterStyles>
    </div>
  )
}

export default Footer
