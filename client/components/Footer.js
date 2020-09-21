import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.p`
  text-align: center;
  font-family: 'Trebuchet MS', Helvetica, sans-serif;
  font-size: large;
`

const Footer = () => {
  return (
    <div className="footer">
      <FooterStyles>Created by Devin Knight in 2020</FooterStyles>
    </div>
  )
}

export default Footer
